import axios from 'axios';
import { Navbar } from './components/Navbar';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/home/home';
import Authentication from './routes/authentication/authentication';

function App() {
  return (
    <Routes>
      <Route path='/' element={ <Navbar /> } >
        <Route index element={ <Home /> } />
        <Route path='/auth' element={<Authentication/>} />
      </Route>
    </Routes>
  );
}

export default App;
