import { Link } from 'react-router-dom'
import styles from './CtaSection.module.css'

export default function CtaSection() {
  return (
    <section className={styles.cta}>
      <div className={`container ${styles.inner}`}>
        <h2 className={styles.title}>
          지금 바로 블로그 수익화를<br />시작해보세요
        </h2>
        <p className={styles.desc}>
          14일 무료 체험으로 직접 경험해보세요. 신용카드 없이 바로 시작할 수 있어요.
        </p>
        <div className={styles.actions}>
          <Link to="/signup" className="btn btn-primary">
            무료로 시작하기 →
          </Link>
          <Link to="/contact" className="btn btn-outline" style={{ borderColor: 'rgba(255,255,255,0.5)', color: '#fff' }}>
            문의하기
          </Link>
        </div>
      </div>
    </section>
  )
}
