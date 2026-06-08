import styles from './StatsSection.module.css'

const STATS = [
  { value: '12,000+', label: '누적 사용자' },
  { value: '320만+', label: '분석된 키워드 수' },
  { value: '94%', label: '사용자 만족도' },
  { value: '월 평균 89만원', label: '사용자 평균 수익' },
]

export default function StatsSection() {
  return (
    <section className={styles.stats}>
      <div className="container">
        <div className={styles.grid}>
          {STATS.map(stat => (
            <div key={stat.label} className={styles.item}>
              <p className={styles.value}>{stat.value}</p>
              <p className={styles.label}>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
