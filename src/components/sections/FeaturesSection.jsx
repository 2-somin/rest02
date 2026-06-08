import styles from './FeaturesSection.module.css'

const FEATURES = [
  {
    icon: '🔍',
    title: '키워드 자동 수집',
    desc: '네이버, 구글 검색량 데이터를 크롤링하여 수익성 높은 키워드를 자동으로 발굴합니다.',
  },
  {
    icon: '📝',
    title: 'AI 블로그 초안 생성',
    desc: '수집된 키워드를 바탕으로 SEO에 최적화된 블로그 글 초안을 즉시 생성합니다.',
  },
  {
    icon: '📊',
    title: '경쟁도 & 수익성 분석',
    desc: '키워드별 경쟁 강도와 예상 클릭 수익을 한눈에 파악하여 전략을 세울 수 있습니다.',
  },
  {
    icon: '🚀',
    title: '발행 스케줄 관리',
    desc: '최적의 포스팅 시간대를 추천하고, 일정 관리로 꾸준한 업로드를 유지할 수 있습니다.',
  },
  {
    icon: '💰',
    title: '수익 현황 대시보드',
    desc: '애드센스, 쿠팡파트너스 등 수익 채널별 실시간 수익을 한 곳에서 확인합니다.',
  },
  {
    icon: '🤝',
    title: '1:1 전문가 컨설팅',
    desc: '블로그 마케팅 전문가와 1:1로 전략을 논의하고 맞춤형 피드백을 받아보세요.',
  },
]

export default function FeaturesSection() {
  return (
    <section className={`section ${styles.features}`}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.tag}>핵심 기능</span>
          <h2 className={styles.title}>블로그 수익화에 필요한<br />모든 것이 여기에</h2>
          <p className={styles.desc}>
            복잡한 마케팅 지식 없이도 체계적으로 블로그를 운영할 수 있습니다.
          </p>
        </div>

        <div className={styles.grid}>
          {FEATURES.map(feat => (
            <div key={feat.title} className={styles.card}>
              <span className={styles.icon}>{feat.icon}</span>
              <h3 className={styles.cardTitle}>{feat.title}</h3>
              <p className={styles.cardDesc}>{feat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
