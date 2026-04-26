import Logo from '../assets/logoW.png'
import Ul from './Ul'
import { MdOutlineMenu } from "react-icons/md";
const Header = () =>{
return(
   <header>
    <img src={Logo}  alt="logo" />
  <Ul />
<div className="menu1">
  <button onClick={()=>{
   const NavBar = document.querySelector('.NavBar')
 NavBar.classList.toggle('active')
  }}> 
    <MdOutlineMenu/>
  </button>
</div>
   </header>
)
}
export default Header