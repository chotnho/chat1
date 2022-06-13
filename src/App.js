import './App.css';
import {Routes, Route, BrowserRouter} from 'react-router-dom'

import Login from './components/Login';
import ChatRoom from './components/ChatRoom';
import AuthProvider from './Context/AuthProvider';

function App (){
  return( 
  <BrowserRouter>
  <AuthProvider>
  <Routes>
    <Route exact path="/login" element={<Login/>}/>
    <Route path="/chatroom" element={<ChatRoom/>}/>
  </Routes>
  </AuthProvider>
  </BrowserRouter>
  )
}
export default App;
