import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Pages/Shared/Header/Header';
import Home from './Pages/Home/Home/Home';
import ServiceDetail from './Pages/ServiceDetail/ServiceDetail';
import About from './Pages/About/About';
import Login from './Pages/LogIn/Login/Login';
import Register from './Pages/LogIn/Register/Register';
import NotFound from './Pages/Shared/NotFound/NotFound';
import Footer from './Pages/Shared/Footer/Footer';
import CheckOut from './CheckOut/CheckOut/CheckOut.js';
import RequireAuth from './Pages/LogIn/RequireAuth/RequireAuth';


function App() {
  return (
    <div>
     <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path='/service/:serviceId' element={<ServiceDetail></ServiceDetail>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/checkout" element={
          <RequireAuth>
            <CheckOut></CheckOut>
          </RequireAuth>
        }></Route>

        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
