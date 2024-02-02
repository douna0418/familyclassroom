// App.js

//router
import Nav from './components/navComponent';

//pages
import Home from './pages/Home';
import About from './pages/About';
// import NotFound from './pages/NotFound';

import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <>
        <Nav />
        <Routes >
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
        </Routes>
    </>
  );
}

export default App;



