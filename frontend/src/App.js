import axios from 'axios';
import { Navbar, Sidebar } from './components';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/home/home';
import Authentication from './routes/authentication/authentication';
import Subjects from './routes/subjects/subjects';
import Categories from './routes/categories/categories';
import Profile from './routes/profile/profile';
import WritersInfos from './routes/writers_infos/writers_infos';
import TasksCreator from './routes/tasks/tasks_creator';
import Tasks from './routes/tasks/tasks';


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
            <Route path='/:user_id/profile' element={<Profile/>} />
            <Route path='subjects' element={<Subjects />} />
            <Route path={`subjects/:subject_id/categories`} element={<Categories />} />
            <Route path='/categories' element={ <Categories/> } />
            <Route path='users/:user_id/writers_infos' element={<WritersInfos/>} />
            <Route path='tasks/new' element={<TasksCreator/>} />
            <Route path='tasks' element={<Tasks/>} />
          </Route>
        </Routes>
      </div>
    </div>

  );
}

export default App;
