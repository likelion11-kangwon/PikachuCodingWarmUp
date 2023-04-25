import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from "react";
import HanKyungjun from './HanKyungjun';
import KimSeongbin from './KimSeongbin';
import SeoSangtae from './SeoSangtae';
import JeongDayeon from './JeongDayeon';
import Home from './Home';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <ScrollToTop/>
        <Routes>
          <Route path={"/"} element={<Home />}></Route>
          <Route path={"/HanKyungjun"} element={<HanKyungjun/>}></Route>
          <Route path={"/KimSeongbin"} element={<KimSeongbin/>}></Route>
          <Route path={"/SeoSangtae"} element={<SeoSangtae/>}></Route>
          <Route path={"/JeongDayeon"} element={<JeongDayeon />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

/**
 * 다른 페이지로 이동했을 때 상단으로 스크롤
 * @returns 
 */
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default App;
