import { BrowserRouter, Routes, Route } from 'react-router-dom';
import JeongDayeon from './JeongDayeon';
import Home from './Home';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Home />}></Route>
          <Route path={"/JeongDayeon"} element={<JeongDayeon />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
