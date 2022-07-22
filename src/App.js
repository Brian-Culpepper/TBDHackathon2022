// import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './components/Home';
// import Home2 from './components/Home2';
// import LyricPageMain from './components/LyricPageMain';
// import LyricPageMain2 from './components/LyricPageMain2';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}>
        <Route index element={<Home/>}/>
        {/* <Route path="lyricpagemain" element={<LyricPageMain />}/> */}
      {/* <Route path="home2" element={<Home2 />}/>
      <Route path="lyricpagemain2" element={<LyricPageMain2 />}/> */}
      </Route>
    </Routes>
  );
}

export default App;
