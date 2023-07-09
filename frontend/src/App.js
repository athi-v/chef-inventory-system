import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import Beverages from './components/Beverages';
import Ingredients from './components/Ingredients';
import Kota from './components/Kota';
import Side from './components/Side';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (

  <>
<Router>
  <Routes>
  <Route path='/' element={<Home />} />
    <Route path='/dashboard' element={<Dashboard/>} />
    <Route path='/login' element={<Login/>} />
    <Route path='/register' element={<Register/>} />
    <Route path='/kota' element={<Kota />} />
        <Route path='/side' element={<Side />} />

        <Route path='/beverages' element={<Beverages />} />
        <Route path='/ingredients' element={< Ingredients />} />


       

  </Routes>
</Router>
<ToastContainer />
  </>
  );
}

export default App;
