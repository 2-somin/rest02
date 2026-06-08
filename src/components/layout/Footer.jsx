import { Link } from 'react-router-dom'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.brand}>
          <p className={styles.logoText}>블로그마케터.</p>
          <p className={styles.tagline}>누구나 블로그로 수익을 낼 수 있도록,<br />함께 성장합니다.</p>
        </div>

        <div className={styles.links}>
          <div className={styles.linkGroup}>
            <p className={styles.linkTitle}>서비스</p>
            <Link to="/keyword">키워드 분석</Link>
            <Link to="/blog">블로그 작성</Link>
            <Link to="/pricing">요금제</Link>
          </div>
          <div className={styles.linkGroup}>
            <p className={styles.linkTitle}>회사</p>
            <Link to="/about">회사 소개</Link>
            <Link to="/cases">고객 사례</Link>
            <Link to="/blog/notice">공지사항</Link>
          </div>
          <div className={styles.linkGroup}>
            <p className={styles.linkTitle}>지원</p>
            <Link to="/faq">자주 묻는 질문</Link>
            <Link to="/contact">문의하기</Link>
          </div>
        </div>
      </div>

      <div className={`container ${styles.bottom}`}>
        <p className={styles.copy}>© 2026 블로그마케터. All rights reserved.</p>
        <div className={styles.legal}>
          <Link to="/privacy">개인정보처리방침</Link>
          <Link to="/terms">이용약관</Link>
        </div>
      </div>
    </footer>
  )
}
