import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Lecturer from './Lecturer';
import Admin from './Admin';
import Login from './Login';
import Register from './Register';
import Student from './Student';
import Home from './Home'
import Profile from './components/Profile';
import Classmates from './components/Classmates';
import Documents from './components/Documents';
import About from './components/About';
import './index.css'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element = {<Home />}></Route>
          <Route path='/register' element = {<Register />}></Route>
          <Route path='/lecturer' element = {<Lecturer />}></Route>
          <Route path='/admin' element = {<Admin />}></Route>
          <Route path='/student' element = {<Student />}></Route>
          <Route path='/home' element = {<Home />}></Route>
          <Route path='/login' element = {<Login />}></Route>
          <Route path='/profile' element={<Profile />}></Route>
          <Route path='/classmates' element={<Classmates />}></Route>
          <Route path='/documents' element={<Documents />}></Route>
          <Route path='/about' element={<About />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
