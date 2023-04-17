import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HanKyungjun from './HanKyungjun';
import KimSeongbin from './KimSeongbin';
import SeoSangtae from './SeoSangtae';
import JeongDayeon from './JeongDayeon';
import Home from './Home';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
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

export default App;
