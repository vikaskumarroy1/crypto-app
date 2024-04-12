
import './App.css';
import {Routes,Route} from "react-router-dom"
import Exchange from './components/Exchange';
import Coins from './components/Coins';
import CoinsDetails from './components/CoinsDetails';


function App() {
  return (
   <Routes>
    <Route path='/' Component={Exchange}/>
    <Route path='coins' Component={Coins}></Route>
    <Route path='coins/:id' Component={CoinsDetails}></Route>
   </Routes>
  );
}

export default App;
