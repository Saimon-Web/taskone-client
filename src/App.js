import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Navbar from './Components/Navbar';
import Footer from './Pages/Footer/Footer';
import Singleservice from './Pages/Services/Singleservice';
import RequireAuth from './Components/RequireAuth';
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
     <Routes>
     <Route path='/' element={<Home></Home>}></Route>
     <Route path='/login' element={<Login></Login>}></Route>
     <Route path='/register' element={<Register></Register>}></Route>
     <Route path='/service/:id' element={
      <RequireAuth>
        <Singleservice></Singleservice>
      </RequireAuth>
     }></Route>
     </Routes>
     <Footer></Footer>
    </div>
  );
}

export default App;
