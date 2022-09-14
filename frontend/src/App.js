import axios from 'axios';
import { Navbar, Sidebar } from './components';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/home/home';
import Authentication from './routes/authentication/authentication';
import Subjects from './routes/subjects/subjects';
import Categories from './routes/categories/categories';


function App() {
  return (
    <div>
      <Sidebar /> 
      <div id='page-wrap'>
        <Routes>
          <Route path='/' element={ <Navbar /> } >
            <Route index element={ <Home /> } />
            <Route path='home' element={ <Home />} />
            <Route path='/auth' element={<Authentication/>} />
            <Route path='subjects' element={<Subjects />} />
            <Route path='subjects/categories' element={<Categories />} />
          </Route>
        </Routes>
      </div>
    </div>

  );
}

export default App;
