import Img from '../assets/ww.png';
import { TbFileCv } from "react-icons/tb";
import Cv from './Cv';


const Container = ()=>{

    function h23(){
const open = document.getElementById('showCv');

open.onclick = function(){
    open.classList.add('color')
}}
return(

    <>
    
    <div className="Continer">
    <menu className="menu" >
        <h1> أنا' وحيد احمد   </h1>
        <h2>انا مطور مواقع الويب </h2>
        <p>مطور ويب و المعروف في Front-End مهتم في بناء مواقع وكتابة الاكواد البرمجية  اهدف بأن اكون في 
            المستقبل Full Stack
            
        </p>
      <button type='button' onClick={()=> {
        const showCv = document.getElementById('showCv')
        showCv.classList.add('color')

      }}>  تحميل cv <TbFileCv 
      
      /></button>
     <Cv/>
    </menu>
 
 
        <aside className='aside'>
            <img src={Img} alt="" />
        </aside>
       
    </div>
     
    </>
)


}
export default Container