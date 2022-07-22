// import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './components/Home';
import LyricPageMain from './components/LyricPageMain';
import LyricPageMain2 from './components/LyricPageMain2';
import Home2 from './components/Home2';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}>
      </Route>
      <Route path="/LyricPageMain" element={<LyricPageMain/>}>
      </Route>
      <Route path="/LivinOnAPrayer" element={<Home2/>}></Route>
      <Route path="/LyricPageMain2" element={<LyricPageMain2/>}>
      </Route>
    </Routes>
  );
}

export default App;