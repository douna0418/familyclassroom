// App.js

//router
import Nav from './components/navComponent';

//pages
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';

import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <>
        <Nav />
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="*" element={<NotFound />} /> {/* 默认路由 */}
        </Routes>
    </>
  );
}

export default App;



