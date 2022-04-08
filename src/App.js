import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import app from './firebase.inti';
import { getAuth } from "firebase/auth";
import Products from './components/Products/Products'


const auth = getAuth(app);

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
       <Route path='/products' element={<Products></Products>}></Route>
      </Routes>
     
    </div>
  );
}

export default App;
