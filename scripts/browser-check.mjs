import { createRequire } from 'node:module'
import { mkdir } from 'node:fs/promises'

const require = createRequire(import.meta.url)
const { chromium } = require('E:\\vinAI\\30daychallenge\\day12_human_ai_canvas_agent_product\\frontend\\node_modules\\playwright-core')
const sizes = [320, 375, 414, 768, 1440]
const output = []

await mkdir('artifacts', { recursive: true })

const browser = await chromium.launch({
  headless: true,
  executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
})

for (const width of sizes) {
  const context = await browser.newContext({ viewport: { width, height: width < 600 ? 812 : 900 } })
  const page = await context.newPage()
  const errors = []
  page.on('console', (message) => {
    if (message.type() === 'error') errors.push(message.text())
  })
  page.on('pageerror', (error) => errors.push(error.message))
  await page.goto('http://127.0.0.1:5173/', { waitUntil: 'networkidle' })
  await page.screenshot({ path: `artifacts/viewport-${width}.png`, fullPage: width === 375 || width === 1440 })
  const metrics = await page.evaluate(() => ({
    innerWidth: window.innerWidth,
    scrollWidth: document.documentElement.scrollWidth,
    headingCount: document.querySelectorAll('h1,h2,h3').length,
    visibleTextLength: document.body.innerText.length,
    font: getComputedStyle(document.body).fontFamily,
  }))
  output.push({ width, ...metrics, consoleErrors: errors })
  await context.close()
}

const interaction = await browser.newPage({ viewport: { width: 1280, height: 800 } })
await interaction.goto('http://127.0.0.1:5173/', { waitUntil: 'networkidle' })
await interaction.click('a[href="#bai-hoc"]')
await interaction.waitForTimeout(300)
const hash = await interaction.evaluate(() => location.hash)
await interaction.goto('http://127.0.0.1:5173/', { waitUntil: 'networkidle' })
await interaction.keyboard.press('Tab')
await interaction.keyboard.press('Tab')
await interaction.keyboard.press('Tab')
const focusVisible = await interaction.evaluate(() => {
  const element = document.activeElement
  return element ? getComputedStyle(element).outlineStyle !== 'none' : false
})
const heroFold = await interaction.evaluate(() => {
  const hero = document.querySelector('.hero')
  const rect = hero?.getBoundingClientRect()
  const linksSingleLine = [...document.querySelectorAll('a')].every((link) => link.getClientRects().length === 1)
  return { heroBottom: rect?.bottom ?? null, viewportHeight: innerHeight, essentialFits: (rect?.bottom ?? Infinity) <= innerHeight + 1, linksSingleLine }
})
await interaction.emulateMedia({ reducedMotion: 'reduce' })
const reducedMotion = await interaction.evaluate(() => ({
  scrollBehavior: getComputedStyle(document.documentElement).scrollBehavior,
  journeyTransition: getComputedStyle(document.querySelector('.journey-line')).transitionDuration,
}))
output.push({ interaction: 'Điều hướng mục bài học', hash, focusVisible, heroFold, reducedMotion })

await browser.close()
console.log(JSON.stringify(output, null, 2))
