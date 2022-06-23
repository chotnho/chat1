import './App.css';
import {Routes, Route, BrowserRouter} from 'react-router-dom'

import Login from './components/Login/Login';
import Chats from './components/Chat/Chats';
import {AuthProvider} from "./context/AuthContext"



function App (){
  return( 
  <BrowserRouter>
   <AuthProvider> 
        <Routes>
           <Route path="/chats" element={<Chats/>}/>
           <Route exact path="/" element={<Login/>}/>
        </Routes>
        
       </AuthProvider>
   
  </BrowserRouter>
  )
}
export default App;
