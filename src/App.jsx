
import Counter from './components/Counter' 
import Login from './components/login/Login' 
import ForgetPassword from './components/login/ForgetPassword'
import SignUp from './components/login/SignUp'
import Logged from './components/login/Logged'
import { BrowserRouter,Routes, Route } from 'react-router-dom'

import './App.css'

function App() {
  

  return (
<BrowserRouter>
<Routes>

  <Route path="/counter" element={<Counter/>} />
  <Route path="/login" element={<Login/>} />
  <Route path='/forget-password' element={<ForgetPassword/>}/>
  <Route path='/signup' element={<SignUp/>} />
  <Route path='/loged' element={<Logged/>}/>
  <Route path=''/>
  <Route path=''/>
  <Route path=''/>
  <Route path=''/>
 
</Routes>


</BrowserRouter>




 
  )
}

export default App
