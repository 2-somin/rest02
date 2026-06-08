import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="service" element={<div className="container section"><h1>서비스 소개 (준비 중)</h1></div>} />
          <Route path="keyword" element={<div className="container section"><h1>키워드 분석 (준비 중)</h1></div>} />
          <Route path="blog" element={<div className="container section"><h1>블로그 작성 (준비 중)</h1></div>} />
          <Route path="pricing" element={<div className="container section"><h1>요금제 (준비 중)</h1></div>} />
          <Route path="cases" element={<div className="container section"><h1>고객 사례 (준비 중)</h1></div>} />
          <Route path="*" element={<div className="container section"><h1>페이지를 찾을 수 없습니다</h1></div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
