import { MdDarkMode } from "react-icons/md";
import { AiFillSun } from "react-icons/ai";
function changeClolor(){
  const son = document.getElementById('son') 
    son.classList.toggle('dark')
}
const  LightonDark = ()=>{
    
return(
    <div id="change">
    <button onClick={changeClolor}>
        <MdDarkMode/>
    </button>
    </div>
)
}
export default LightonDark