
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';
import DashBoard from './components/DashBoard/DashBoard';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Review from './components/Review/Review';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/review' element={<Review></Review>}></Route>
        <Route path='/dashboard' element={<DashBoard></DashBoard>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
      </Routes>
    </div>
  );
}

export default App;
