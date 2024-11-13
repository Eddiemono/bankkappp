import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './components/navbar/Navbar';
import Home from './pages/Home'
import Footer from './components/footer/Footer';
import LoginSignup from './pages/Loginsignup';
import Dashboard from './pages/Dashboard';
import Transfer from './components/dashboard/Transfer';
import Investment from './pages/Investment';
import BankAccount from './pages/BankAccount';
import Remittance from './pages/Remittance';
import Treasury from './pages/Treasury';
import CommercialAccount from './pages/CommercialAccount';
import PlatinumCard from './pages/PlatinumCard';
import EnterpriseAccount from './pages/EnterpriseAccount';
import About from './pages/About';
import Contact from './pages/Contact';
import { useAuthContext } from './hooks/useAuthContext';




function App() {

  const {users} = useAuthContext()

  return (
    <div className="app">
  <BrowserRouter>
  <Navbar/>
  
  {/* <Personalbanking /> */}
  {/* <Naavbar /> */}
  

  <div className='pages'>
  <Routes>

    <Route path='/' element={<Home/>}/>

    <Route path='/loginsignup' element={<LoginSignup/>}/>

    <Route path='/dashboard' element={users?<Dashboard/>:<></>}/>

    <Route path='/transfer' element={<Transfer/>}/>

    <Route path='/investment' element={<Investment />}/>

    <Route path='/account-types' element={<BankAccount />}/>

    <Route path='/remittance' element={<Remittance />}/>

    <Route path='/treasury' element={<Treasury />}/>

    <Route path='/commercial' element={<CommercialAccount />}/>

    <Route path='/card' element={<PlatinumCard />}/>

    <Route path='/enterprise' element={<EnterpriseAccount />}/>

    <Route path='/about' element={<About />}/>

    <Route path='/contact' element={<Contact />}/>

  </Routes>
  </div>
  <Footer/>
  </BrowserRouter>
    </div>
  );
}

export default App;
