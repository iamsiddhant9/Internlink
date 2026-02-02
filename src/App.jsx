import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";

function App(){
  return(
    
    <Routes>
      <Route path="/login" element={<Login/>}></Route>
      <Route  path="/register" element={<Register/>}></Route>
    </Routes>
    
  );
}
export default App;
