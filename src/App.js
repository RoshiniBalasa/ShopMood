import {Routes,Route} from 'react-router-dom'
import HomePage from './pages/HomePage';
import MoodBoard from './pages/MoodBoard';
import Profile from './pages/Profile';
import CreatedBoard from './pages/CreatedBoard';
import Pagenotfound from './pages/Pagenotfound';
import Register from './pages/Auth/Register'
import Login from './pages/Auth/Login'
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './pages/user/Dashboard';
import PrivateRoute from './components/Layout/Routes/Private';
function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path="/Dashboard" element={<PrivateRoute />}>
          <Route path="" element={<Dashboard />} />
        </Route>
      <Route path='/MoodBoard' element={<MoodBoard/>}/>
      <Route path='/Profile' element={<Profile/>}/>
      <Route path='/CreatedBoard' element={<CreatedBoard/>}/>
      <Route path='/*' element={<Pagenotfound/>}/>
      <Route path='/Register' element={<Register/>}/>
      <Route path='/Login' element={<Login/>}/>
    </Routes>
   
     

  );
}

export default App;
