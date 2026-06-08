import styles from './HowItWorksSection.module.css'

const STEPS = [
  {
    step: '01',
    title: '키워드 입력 & 크롤링',
    desc: '수익화하고 싶은 주제를 입력하면 관련 키워드를 자동으로 크롤링하고 검색량, 경쟁도, 수익성을 분석합니다.',
  },
  {
    step: '02',
    title: 'AI로 블로그 글 초안 생성',
    desc: '선택한 키워드를 기반으로 SEO에 최적화된 블로그 글 초안을 자동으로 생성합니다. 수정은 간단한 에디터로 완료.',
  },
  {
    step: '03',
    title: '최적 시간대에 예약 발행',
    desc: '방문자가 가장 많은 시간대를 추천받고 예약 발행으로 꾸준한 포스팅을 유지합니다.',
  },
  {
    step: '04',
    title: '수익 확인 & 전략 개선',
    desc: '대시보드에서 수익 현황을 실시간 확인하고, 더 좋은 성과를 내는 키워드와 콘텐츠 전략을 반복합니다.',
  },
]

export default function HowItWorksSection() {
  return (
    <section className={`section ${styles.how}`}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.tag}>이용 방법</span>
          <h2 className={styles.title}>4단계로 완성되는<br />블로그 수익 파이프라인</h2>
        </div>

        <div className={styles.steps}>
          {STEPS.map((step, i) => (
            <div key={step.step} className={styles.stepItem}>
              <div className={styles.stepNum}>{step.step}</div>
              {i < STEPS.length - 1 && <div className={styles.connector} aria-hidden />}
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
