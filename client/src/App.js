import './App.css'
import Home from './components/Home'
import Start from './components/Start'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <>
      <div className='container'>
      <BrowserRouter>
      <Routes> 
        <Route path='/' element={<Start />} />
        <Route path='/home' element={<Home/>} />  
      </Routes>
    </BrowserRouter>
      </div>
    </>

  )
}

export default App
