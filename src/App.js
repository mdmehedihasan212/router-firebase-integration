import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Products from './Components/Products/Products';
import Orders from './Components/Orders/Orders';
import Register from './Components/Register/Register';
import LogIn from './Components/LogIn/LogIn';

function App() {
  return (
    <div className='container'>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/products' element={<Products></Products>}></Route>
        <Route path='/orders' element={<Orders></Orders>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/log-in' element={<LogIn></LogIn>}></Route>
      </Routes>
    </div>
  );
}

export default App;
