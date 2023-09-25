
import './App.css';


import  {Subnavbar}  from './Components/Subnavbar';
import { Navbar } from './Components/Navbar';
import { NavCategory } from './Components/garbeg/NavCategory';
import { Herosection } from './Components/Herosection';
import { ProductSec } from './Components/ProductSec';
import { FooterSection } from './Components/FooterSection';
import { Subfoot } from './Components/Subfoot';
import { Mainsection } from './Components/garbeg/Mainsection';

function App() {
  return (
   <div>
    <Subnavbar></Subnavbar>
    <Navbar></Navbar>
    {/* <NavCategory></NavCategory> */}
    <Herosection></Herosection>
    <ProductSec></ProductSec>
    <FooterSection></FooterSection>
   <Subfoot></Subfoot>
   {/* <Mainsection></Mainsection> */}

    
 
   </div>
  );
}

export default App;
