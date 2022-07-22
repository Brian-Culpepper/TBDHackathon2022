// import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './components/Home';
import LyricPageMain from './components/LyricPageMain';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}>
      </Route>
      <Route path="/LyricPageMain" element={<LyricPageMain/>}>
      </Route>
    </Routes>
  );
}

export default App;