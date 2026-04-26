import {useState} from 'react'
import './App.css'
import './index.css'
import './Responsive.css'
import { FaBeer } from 'react-icons/fa';
import Box from './compoents/Box'
import Header from './compoents/Header';
import Logo from './assets/w.png'
import Container from './compoents/Container'
import Cart from './compoents/Cart';
import ScrollToTop from './compoents/ScrollToTop';
// import form icons logo
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { FaJsSquare } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import CullMe from './CullMe';
import LightonDark from './compoents/LightonDark';

const App = ()=>{


return(

<div className='App'>
<Box >  
<Header />
 <Container /> 
</Box>
{/* Homg */}
<Box>
  <div className='section'>
      <main style={{
        textAlign:'center'
      }}>
        <a href="" id='About' style={{fontSize:'3.5em',color:'#1abc9c',
        
         textDecoration:'none',
         borderBottom:'var(--orange) solid 5px',
         paddingBottom:'1rem'
        }}>تعريف عني :</a>
        <p  className='tagOne' style={{marginTop:'3.5rem' }}>اسمي وحيد احمد متخرج من الكلية التقنية 
        بتخصص تفنية البرمجة وتطوير الويب
        </p>
        
       <p style={{fontSize:'3.5em',color:'#1abc9c',
         textDecoration:'none',marginTop:'2rem',
  
         }} >الهدف :</p>
        <p className='tagTow' style={{marginTop:'2rem' , }}>
     "هدفي من العمل في شركة صغيرة هو أن أتعلم بشكل مباشر، وأطور مهاراتي
      بسرعة، وأكون جزءًا فعّالًا من 
     الفريق بحيث أساهم في نمو
      الشركة وأكبر معها."
        </p>
    </main>
    <main  style={{background:' rgb(241, 239, 235)'}}>
     <img src={Logo} alt="logo" /> 
    </main>
  </div>
</Box>

{/* continarer */}
<Box  >  
<div className="boxx">
   <center id='Skills'>مهاراتي</center>
   <div className="grid-3">
     <Cart logo={<FaHtml5 /> } name='HTML'/>
     <Cart logo={<FaCss3Alt /> } name='CSS'/>
     <Cart logo={<FaJsSquare /> } name='JavaScript'/>
     <Cart logo={<FaReact /> } name='React'/>
     <Cart logo={<FaDatabase /> } name='SQL'/>
     <Cart logo={<FaGithub /> } name='GitHub'/>
        
   </div>
</div>

</Box>
{/*  skllis*/}
<Box>
<CullMe />
</Box>
<ScrollToTop />
<LightonDark />
</div>
)

}

export default App
