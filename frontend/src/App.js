import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (

  <>
<Router>
  <Routes>
    <Route path='/dashboard' element={<Dashboard/>} />
    <Route path='/' element={<Login/>} />
    <Route path='/register' element={<Register/>} />
  </Routes>
</Router>
<ToastContainer />
  </>
  );
}

export default App;
