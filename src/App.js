import logo from './logo.svg';
import './App.css';
import Login_page from './Pages/Login_page';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navbar from './Components/Menu/Navbar';
import Facebook_home from './Components/Home/Facebook_home';
import Videos from './Components/Home/Videos';
import Groups from './Components/Home/Groups';
import Market from './Components/Home/Market';
import Games from './Components/Home/Games';
import RightSidebar from './Components/Menu/RightSidebar';
import Leftside_data from './Components/Menu/Leftside_data';

function App() {
  const location = useLocation()

  return (

    <div className='fixed w-screen'>
      <Toaster />
      {
        location.pathname !== "/login" && <Navbar />
      }
      <div className='flex  h-screen'>
        {
          location.pathname !== "/login" && <Leftside_data />
        }


        {/* <Sidebar /> */}
        <div className='flex-1  bg-[#F0F2F5]'>
          {
            <Routes>
              <Route path='/login' element={<Login_page />} />


              {/* navigation route */}
              <Route path='/home' element={<Facebook_home />} />
              <Route path='/video' element={<Videos />} />
              <Route path='/group' element={<Groups />} />
              <Route path='/market' element={<Market />} />
              <Route path='/games' element={<Games />} />



              {/* left sidebar router */}
              <Route path='/' element={<Games />} />
              <Route path='/' element={<Games />} />
              <Route path='/' element={<Games />} />
              <Route path='/' element={<Games />} />


            </Routes>
          }
        </div>
        {
          location.pathname !== "/login" && <RightSidebar />
        }
      </div>
    </div>


  );
}

export default App;
