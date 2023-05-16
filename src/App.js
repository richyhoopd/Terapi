import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SplashScreen from './Pages/SplashScreen';
import Choose from './Pages/Choose';
import Home from './Pages/Home';
import Register from './Pages/Register';
import Login from './Pages/Login';
import Chat from './Pages/Chat';
import Agenda from './Pages/Agenda';
import TherapistProfile from './Pages/TherapistProfile';
import ChatOpen from './Pages/ChatOpen';
import AgendaDetails from './Pages/AgendaDetails';

function App() {
  return (
   <BrowserRouter>
    <Routes>
      < Route path='/splashscreen' element={<SplashScreen/>} />
      < Route path='/choose' element={<Choose/>} />
      < Route path='/home' element={<Home/>} />
      < Route path='/register' element={<Register/>} />
      < Route path='/login' element={<Login/>} />
      < Route path='/chat' element={<Chat/>} />
      < Route path='/agenda' element={<Agenda/>} />
      < Route path='/terapeuta/perfil' element={<TherapistProfile/>} />
      < Route path='/chat/perfil' element={<ChatOpen/>} />
      < Route path='/agenda/detalles' element={<AgendaDetails/>} />


    </Routes>
   </BrowserRouter>
  );
}

export default App;
