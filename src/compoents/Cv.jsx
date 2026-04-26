import Container from "./Container"
import { TbXboxX } from "react-icons/tb";
const Cv = ()=>{

return(
 <div  id="showCv" >
    <div className="main">
            <i className="closes" onClick={() =>{
                 const showCv = document.getElementById('showCv')
                showCv.classList.remove('color')
                
            }}><TbXboxX /></i>
        <a href="">تحميل السيرة الذاتية عربي</a>
        <a href="">Dowload cv En</a>
    </div>
</div>

)
}
export default Cv