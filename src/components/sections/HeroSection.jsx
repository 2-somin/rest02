import { Link } from 'react-router-dom'
import styles from './HeroSection.module.css'

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.content}>
          <span className={styles.badge}>블로그 수익화의 새로운 기준</span>
          <h1 className={styles.title}>
            블로그 하나로<br />
            <em>월 수익 100만원</em>을<br />
            만들어 드립니다
          </h1>
          <p className={styles.desc}>
            키워드 분석부터 글 작성까지, AI가 도와드립니다.<br />
            마케팅 경험이 없어도 괜찮아요. 지금 시작하세요.
          </p>
          <div className={styles.actions}>
            <Link to="/signup" className="btn btn-primary">
              무료로 시작하기 →
            </Link>
            <Link to="/service" className="btn btn-secondary">
              서비스 알아보기
            </Link>
          </div>
          <p className={styles.note}>신용카드 없이 14일 무료 체험 · 언제든지 취소 가능</p>
        </div>

        <div className={styles.visual}>
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <span className={styles.dot} style={{ background: '#f02300' }} />
              <span className={styles.dot} style={{ background: '#fbbf24' }} />
              <span className={styles.dot} style={{ background: '#22c55e' }} />
              <span className={styles.cardTitle}>키워드 분석 결과</span>
            </div>
            <div className={styles.cardBody}>
              {KEYWORD_PREVIEWS.map(kw => (
                <div key={kw.word} className={styles.kwRow}>
                  <span className={styles.kwWord}>{kw.word}</span>
                  <div className={styles.kwBar}>
                    <div
                      className={styles.kwFill}
                      style={{ width: `${kw.score}%` }}
                    />
                  </div>
                  <span className={styles.kwScore}>{kw.score}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className={styles.bgDecor} aria-hidden />
    </section>
  )
}

const KEYWORD_PREVIEWS = [
  { word: '블로그 수익화', score: 92 },
  { word: '애드센스 승인', score: 87 },
  { word: '네이버 블로그 마케팅', score: 81 },
  { word: '1인 창업 방법', score: 75 },
  { word: '부업 추천 2024', score: 68 },
]
