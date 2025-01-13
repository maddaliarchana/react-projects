import { useState } from 'react'
import { Routes, Route} from "react-router-dom";
import Navbar from './Components/Navbar'
import LandingPage from './Components/LandingPage';
import Calculator from './Components/Calculator';
import Weather from './Components/Weather';
import Todo from './Components/Todo';
import Shoping from './Components/Shoping';
import Quiz from './Components/Quiz';
// dynamic routing links
import MobilesPage from './shoping/MobilesPage';
import WatchesPage from './shoping/WatchesPage';
import Adminpanel from './Components/Adminpanel';
import Contact from './Components/Contact';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/calculator' element={<Calculator/>}/>
        <Route path='/weather' element={<Weather/>}/>
        <Route path='/todo' element={<Todo/>}/>
        <Route path='/shoping' element={<Shoping/>}/>
        <Route path='/quiz' element={<Quiz/>}/>
        <Route path='/admin' element={<Adminpanel/>}/>
        <Route path='/contact' element={<Contact/>}/>


      {/* dynamic routing */}
        <Route path='/shopping/mobiles' element={<MobilesPage/>}/>
        <Route path='/shopping/watches' element={<WatchesPage/>}/>
        

    </Routes>
    
    </>
  )
}

export default App
