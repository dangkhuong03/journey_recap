import { useEffect } from 'react'

const days = Array.from({ length: 27 }, (_, index) => index + 1)

const categories = [
  'Sản phẩm',
  'Kinh doanh',
  'Trải nghiệm AI',
  'Hệ thống AI',
  'Hạ tầng',
  'Đánh giá',
  'Hợp tác người–AI',
]

const processSteps = [
  ['01', 'Nhận bài toán rộng'],
  ['02', 'Tự xác định giá trị'],
  ['03', 'Thu hẹp phạm vi'],
  ['04', 'Nghiên cứu và trải nghiệm'],
  ['05', 'Dùng AI để hỗ trợ'],
  ['06', 'Tự kiểm tra lập luận'],
  ['07', 'Nhận bài kiểm tra và phản hồi'],
  ['08', 'Suy nghĩ lại'],
]

const aiFlow = [
  'Ý định của tôi',
  'Cách tiếp cận của tôi',
  'AI hỗ trợ',
  'Nghiên cứu và phản biện',
  'Tôi kiểm tra',
  'Tôi điều chỉnh',
  'Tôi quyết định',
]

const evolution = [
  ['Công nghệ trước', 'Vấn đề và giá trị trước'],
  ['Làm ra đầu ra', 'Hiểu kết quả cần đạt'],
  ['Giả định', 'Bằng chứng'],
  ['AI trả lời', 'Tôi định hướng và đánh giá AI'],
  ['Hoàn thành', 'Hiểu, kiểm chứng và phản tư'],
  ['Tối ưu ngay', 'Căn chỉnh đúng rồi mới tối ưu'],
]

function Arrow() {
  return <span className="arrow" aria-hidden="true">→</span>
}

function JourneyMap() {
  return (
    <div className="journey-map" aria-label="Trục thời gian liên tục từ Ngày 01 đến Ngày 27">
      <div className="journey-line" aria-hidden="true"><span /></div>
      <ol className="day-list">
        {days.map((day) => (
          <li key={day} className={day === 1 || day === 27 ? 'day-end' : ''}>
            <span className="day-dot" aria-hidden="true" />
            <span>{String(day).padStart(2, '0')}</span>
          </li>
        ))}
      </ol>
      <div className="journey-ends" aria-hidden="true">
        <strong>Ngày 01</strong>
        <span>4 tuần thực tập</span>
        <strong>Ngày 27</strong>
      </div>
    </div>
  )
}

function App() {
  useEffect(() => {
    const root = document.documentElement
    const updateProgress = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      root.style.setProperty('--page-progress', max > 0 ? String(window.scrollY / max) : '0')
    }
    const journey = document.querySelector('.journey-map')
    let observer: IntersectionObserver | null = null
    observer = journey
      ? new IntersectionObserver(([entry]) => {
          if (entry.isIntersecting) {
            journey.classList.add('is-visible')
            observer?.disconnect()
          }
        }, { threshold: 0.3 })
      : null

    if (journey && observer) observer.observe(journey)
    updateProgress()
    window.addEventListener('scroll', updateProgress, { passive: true })
    window.addEventListener('resize', updateProgress)
    return () => {
      window.removeEventListener('scroll', updateProgress)
      window.removeEventListener('resize', updateProgress)
      observer?.disconnect()
    }
  }, [])

  return (
    <>
      <div className="page-progress" aria-hidden="true"><span /></div>
      <header className="masthead">
        <p className="mast-meta">Ngày 27 · Tổng kết bốn tuần thực tập</p>
        <a className="mast-title" href="#mo-dau" aria-label="Về đầu trang"><span className="mast-title-long">Hành trình thay đổi cách tôi xây</span><span className="mast-title-short">Hành trình 4 tuần</span></a>
        <nav aria-label="Điều hướng chính">
          <a href="#hanh-trinh">Hành trình</a>
          <a href="#bai-hoc">Bài học</a>
          <a href="#thay-doi">Thay đổi</a>
          <a href="https://github.com/dangkhuong03/journey_recap/blob/main/docs/02_JOURNEY_SOURCE.md" target="_blank" rel="noreferrer">Storytelling</a>

        </nav>
      </header>

      <main>
        <section className="hero rails-band" id="mo-dau">
          <div className="rails" aria-hidden="true" />
          <div className="hero-copy">
            <p className="hero-index">01 → 27</p>
            <h1>4 tuần.<br />Nhiều bài toán.<br /><span>Một cách xây mới.</span></h1>
            <p className="hero-lede">
              Tôi bước vào kỳ thực tập với tư duy kỹ thuật đã được mở rộng bởi góc nhìn sản phẩm — rồi liên tục cập nhật cách đặt câu hỏi, tìm bằng chứng, làm việc với AI và căn chỉnh kết quả cần đạt.
            </p>
          </div>
          <div className="hero-map" aria-hidden="true">
            <svg viewBox="0 0 520 520">
              <path className="orbit orbit-a" d="M74 263C74 158 157 74 260 74s186 84 186 189-83 183-186 183S74 368 74 263Z" />
              <path className="orbit orbit-b" d="M126 263c0-74 60-134 134-134s134 60 134 134-60 129-134 129-134-55-134-129Z" />
              <path className="orbit-accent" d="M74 263C74 158 157 74 260 74c62 0 117 31 151 78" />
              <circle cx="74" cy="263" r="10" />
              <circle cx="411" cy="152" r="10" />
              <circle cx="260" cy="392" r="10" />
              <circle className="center" cx="260" cy="263" r="62" />
              <text x="260" y="250" textAnchor="middle">4 TUẦN</text>
              <text x="260" y="280" textAnchor="middle">01 → 27</text>
              <text className="note" x="30" y="292">BẮT ĐẦU</text>
              <text className="note" x="394" y="134">CẬP NHẬT</text>
              <text className="note" x="220" y="430">TIẾP TỤC</text>
            </svg>
          </div>
        </section>

        <section className="four-answers" aria-label="Bốn câu hỏi của bài tổng kết">
          <div><strong>Điều gì đã xảy ra?</strong><p>Nhiều thử thách đan xen, nghiên cứu, trải nghiệm, bài kiểm tra, phản hồi và trao đổi với người hướng dẫn.</p></div>
          <div><strong>Tôi đã học gì?</strong><p>Giá trị, bằng chứng, phán đoán con người và sự căn chỉnh phải đi trước tối ưu.</p></div>
          <div><strong>Tôi đã đạt gì?</strong><p>Một cách tiếp cận có chủ đích hơn — từ định hình bài toán đến quyết định và phản tư.</p></div>
          <div><strong>Tôi đã thay đổi ra sao?</strong><p>Tư duy kỹ thuật không mất đi; nó được bổ sung bởi sản phẩm, bằng chứng và phán đoán con người.</p></div>
        </section>

        <section className="prologue rails-band" aria-labelledby="prologue-title">
          <div className="rails" aria-hidden="true" />
          <div className="section-copy">
            <p className="section-number">Mở đầu ngắn</p>
            <h2 id="prologue-title">Tôi không bỏ tư duy kỹ sư.<br />Tôi bổ sung những câu hỏi còn thiếu.</h2>
            <p>Từ nền tảng kỹ sư phần mềm, tôi đến AI20K vì muốn học AI sâu hơn và ban đầu chọn hướng Ứng dụng. Các buổi học và hội thảo khiến tôi nhận ra: khả năng xây chưa trả lời được việc thứ đó có cần thiết, dành cho ai và dựa trên bằng chứng nào.</p>
          </div>
          <ol className="prologue-flow" aria-label="Sự thay đổi trước khi bước vào kỳ thực tập">
            <li><span>01</span><strong>Kỹ sư phần mềm</strong><small>Tò mò về công nghệ và cách hệ thống hoạt động</small></li>
            <li><span>02</span><strong>AI20K · hướng Ứng dụng</strong><small>Kỳ vọng ban đầu: học AI sâu hơn theo nền tảng kỹ thuật</small></li>
            <li><span>03</span><strong>Kinh doanh và Sản phẩm AI</strong><small>Thêm góc nhìn về giá trị, người dùng, kiểm chứng và đánh giá</small></li>
            <li><span>04</span><strong>Bước vào kỳ thực tập</strong><small>Kỹ thuật + Sản phẩm là điểm xuất phát, không phải kết luận</small></li>
          </ol>
        </section>

        <section className="journey rails-band" id="hanh-trinh" aria-labelledby="journey-title">
          <div className="rails" aria-hidden="true" />
          <div className="journey-head">
            <p className="section-number">Trục thời gian chính</p>
            <h2 id="journey-title">Ngày 01 → Ngày 27</h2>
            <p>Kiến thức không đến theo bốn tuần tách biệt. Mỗi ngày đặt tôi trước một dạng bài toán khác nhau; các mẫu chỉ dần hiện rõ khi tôi nhìn lại toàn bộ hành trình.</p>
          </div>
          <JourneyMap />
          <div className="category-layer">
            <p>Các lớp bài toán xuất hiện đan xen — không phải một chủ đề cố định cho mỗi tuần.</p>
            <ul>
              {categories.map((category, index) => <li key={category} style={{ '--offset': index } as React.CSSProperties}>{category}</li>)}
            </ul>
          </div>
        </section>

        <section className="experience rails-band" aria-labelledby="happened-title">
          <div className="rails" aria-hidden="true" />
          <div className="section-copy narrow">
            <p className="section-number">Điều đã xảy ra</p>
            <h2 id="happened-title">Kỳ thực tập trở thành một phòng thực hành.</h2>
            <p>Mỗi thử thách là một điểm để thử áp dụng tư duy sản phẩm, AI, trải nghiệm người dùng, đánh giá và tư duy hệ thống. Chu trình dưới đây lặp lại qua nhiều loại bài toán — không phải một danh sách dự án.</p>
          </div>
          <ol className="process-grid">
            {processSteps.map(([number, label], index) => (
              <li key={number}>
                <span>{number}</span><strong>{label}</strong>{index < processSteps.length - 1 && <Arrow />}
              </li>
            ))}
          </ol>
          <p className="process-return"><span aria-hidden="true">↺</span> Phản tư sau mỗi bài để điều chỉnh lần thử tiếp theo</p>
        </section>

        <section className="learning rails-band" id="bai-hoc" aria-labelledby="learned-title">
          <div className="rails" aria-hidden="true" />
          <div className="learning-head">
            <p className="section-number">Điều tôi đã học</p>
            <h2 id="learned-title">Bốn mẫu xuyên suốt.</h2>
            <p>Không thuộc riêng tuần nào; chúng được rút ra từ những thử thách, bài kiểm tra, phản hồi và lần tự xem lại cách mình làm.</p>
          </div>
          <div className="principles">
            <article><span>01</span><h3>Giá trị trước công nghệ</h3><p>Xây được khác với biết có nên xây không, cho ai và vì sao điều đó quan trọng.</p></article>
            <article><span>02</span><h3>Bằng chứng trước giả định</h3><p>Nghiên cứu, trải nghiệm sản phẩm, dữ liệu, bài kiểm tra và phản hồi giúp một quyết định có cơ sở hơn.</p></article>
            <article><span>03</span><h3>Con người giữ quyền phán đoán</h3><p>Tôi đặt hướng tiếp cận; AI mở rộng, phản biện và kiểm tra; quyết định cuối cùng vẫn là của tôi.</p></article>
            <article><span>04</span><h3>Căn chỉnh trước tối ưu</h3><p>Thực thi tốt không bù được cho việc hiểu sai vấn đề hoặc kết quả thực sự cần đạt.</p></article>
          </div>
        </section>

        <section className="ai-role rails-band" aria-labelledby="ai-title">
          <div className="rails" aria-hidden="true" />
          <div className="ai-title-wrap">
            <h2 id="ai-title">Tôi định hướng AI.<br />AI hỗ trợ tôi.</h2>
            <p>Đây không phải câu chuyện tránh dùng AI. Đây là cách dùng AI có chủ đích trong khi vẫn làm chủ lập luận, phạm vi và quyết định.</p>
          </div>
          <ol className="ai-flow">
            {aiFlow.map((step, index) => (
              <li key={step} className={index === 2 || index === 3 ? 'ai-support-step' : 'human-step'}>
                <span>{String(index + 1).padStart(2, '0')}</span><strong>{step}</strong>{index < aiFlow.length - 1 && <Arrow />}
              </li>
            ))}
          </ol>
          <div className="role-key" aria-label="Chú thích vai trò">
            <span className="human-key">Con người: ý định · phạm vi · phán đoán · quyết định</span>
            <span className="ai-key">AI: nghiên cứu · mở rộng góc nhìn · phản biện · kiểm tra</span>
          </div>
        </section>

        <section className="knowledge-band" aria-labelledby="knowledge-title">
          <div>
            <h2 id="knowledge-title">Những lớp kiến thức tôi đã chạm tới</h2>
            <p>Đây là độ rộng trải nghiệm — không phải tuyên bố đã làm chủ.</p>
          </div>
          <ul>
            <li>Bộ nhớ và kiến trúc ngữ cảnh</li><li>Truy xuất tăng cường (RAG)</li><li>Công cụ và quy trình</li><li>Con người trong vòng lặp</li><li>Đánh giá AI</li><li>Giao diện lấy con người làm trung tâm</li><li>Môi trường cô lập và an toàn nền tảng</li><li>Mô hình kinh doanh, chiến lược và kích hoạt</li><li>Giao tiếp với khách hàng</li>
          </ul>
        </section>

        <section className="achievements rails-band" aria-labelledby="achieved-title">
          <div className="rails" aria-hidden="true" />
          <div className="achievement-title">
            <p className="section-number">Điều tôi đã đạt được</p>
            <h2 id="achieved-title">Không chỉ là những thứ đã hoàn thành.</h2>
            <p>Thành quả rõ nhất nằm ở độ rộng đã tiếp xúc, cách thực hành có chủ đích hơn và những thay đổi có thể nhìn thấy trong hành vi.</p>
          </div>
          <div className="achievement-rows">
            <article><span>A</span><div><h3>Độ rộng trải nghiệm</h3><p>Được tiếp xúc với nhiều không gian vấn đề: sản phẩm, kinh doanh, trải nghiệm người dùng, hệ thống AI, hạ tầng, đánh giá và hợp tác người–AI.</p></div></article>
            <article><span>B</span><div><h3>Cách thực hành</h3><p>Biết chủ động định hình bài toán, thu hẹp phạm vi, nghiên cứu, trải nghiệm khi có thể, dùng AI để hỗ trợ, rồi tự kiểm tra và quyết định.</p></div></article>
            <article><span>C</span><div><h3>Thay đổi hành vi</h3><p>Hỏi về giá trị và kết quả cần đạt; tìm bằng chứng; tự định hướng AI; phân biệt hoàn thành với hiểu sâu; căn chỉnh sớm hơn.</p></div></article>
          </div>
          <p className="honesty-note">Điều đã hoàn thành ≠ điều đã làm chủ. Nhiều chủ đề tôi mới chạm vào bề mặt và vẫn cần học sâu hơn.</p>
        </section>

        <section className="turning-point" aria-labelledby="turning-title">
          <div className="turn-grid" aria-hidden="true" />
          <div className="turn-copy">
            <p>Điểm ngoặt gần cuối hành trình</p>
            <h2 id="turning-title">Thực thi tốt × hiểu sai kết quả cần đạt = lệch hướng</h2>
          </div>
          <div className="turn-detail">
            <p>Một cuộc trao đổi riêng với người hướng dẫn cho tôi thấy kết quả tôi nghĩ mình cần tạo ra và kết quả thực tế được kỳ vọng có những điểm khác nhau.</p>
            <p>Không phải mọi nghiên cứu hay thực thi trước đó đều vô nghĩa. Nhưng chúng không thể bù cho việc ngay từ đầu chưa căn chỉnh đúng vấn đề và kết quả cần đạt.</p>
          </div>
          <strong className="turn-principle">Căn chỉnh đúng trước khi tối ưu.</strong>
        </section>

        <section className="evolution rails-band" id="thay-doi" aria-labelledby="evolution-title">
          <div className="rails" aria-hidden="true" />
          <div className="evolution-head">
            <p className="section-number">Tôi đã thay đổi như thế nào?</p>
            <h2 id="evolution-title">Tư duy kỹ thuật được mở rộng — không bị thay thế.</h2>
          </div>
          <div className="before-now" role="table" aria-label="So sánh trước đây và hiện tại">
            <div className="comparison-head" role="row"><span role="columnheader">Trước đây</span><span aria-hidden="true">→</span><span role="columnheader">Hiện tại</span></div>
            {evolution.map(([before, now]) => (
              <div className="comparison-row" role="row" key={before}>
                <span role="cell">{before}</span><Arrow /><strong role="cell">{now}</strong>
              </div>
            ))}
          </div>
          <p className="equation">Kỹ thuật + Sản phẩm + Bằng chứng + Phán đoán con người</p>
        </section>

        <section className="next rails-band" aria-labelledby="next-title">
          <div className="rails" aria-hidden="true" />
          <div className="loop-visual" aria-label="Vòng lặp học tập liên tục">
            <svg viewBox="0 0 500 500" role="img" aria-label="Trải nghiệm, học hỏi, suy nghĩ lại, chọn lọc, áp dụng, nhận phản hồi, cập nhật tư duy và lặp lại">
              <circle className="loop-track" cx="250" cy="250" r="172" />
              <path className="loop-accent" d="M250 78a172 172 0 0 1 172 172" />
              {['Trải nghiệm','Học hỏi','Suy nghĩ lại','Chọn lọc','Áp dụng','Phản hồi','Cập nhật','Lặp lại'].map((label, i) => {
                const angle = (i * 45 - 90) * Math.PI / 180
                const x = 250 + Math.cos(angle) * 172
                const y = 250 + Math.sin(angle) * 172
                return <g key={label}><circle cx={x} cy={y} r="8" /><text x={x} y={y + (y < 250 ? -18 : 28)} textAnchor="middle">{label}</text></g>
              })}
              <text className="loop-center" x="250" y="242" textAnchor="middle">HỌC CÓ</text>
              <text className="loop-center" x="250" y="270" textAnchor="middle">CHỌN LỌC</text>
            </svg>
          </div>
          <div className="next-copy">
            <p className="section-number">Hướng tiếp theo</p>
            <h2 id="next-title">Đánh giá con người × Phát triển</h2>
            <p>Tôi muốn phát triển theo hướng vừa có khả năng xây dựng và hiểu hệ thống AI từ bên trong, vừa có khả năng đánh giá chất lượng, hành vi và giá trị mà hệ thống đó tạo ra cho con người.</p>
            <p className="future-note">Đây là hướng tôi muốn tiếp tục học — không phải một danh xưng chuyên gia đã đạt được.</p>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>Căn chỉnh đúng vấn đề.<br />Rồi mới tối ưu giải pháp.</p>
        <div><span>Ngày 27 · Tổng kết hành trình</span><a href="#mo-dau">Về đầu trang ↑</a></div>
      </footer>
    </>
  )
}

export default App
