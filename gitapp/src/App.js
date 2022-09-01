import './App.css';
import MyFunct from './searchUserWithoutButton/MyFunct'
import MyFunction from './SearchUserwithButton/MyMainFun'
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Homes from './Homes';

function App() {
  return (
   <>
<BrowserRouter>
<Routes>
<Route  exact path='/'  element={<Homes />} />
<Route  exact path='/WithoutButton' element={<MyFunct />} />
<Route  exact path='/WithButton' element={<MyFunction />} />





</Routes>


</BrowserRouter>



   </>
  );
}

export default App;
