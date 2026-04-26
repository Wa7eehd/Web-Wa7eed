import { useState } from "react"
import { FaChevronLeft, FaWhatsapp } from "react-icons/fa"; // cons what 
import { FaLinkedinIn } from "react-icons/fa6"; // icon Link din
import { MdOutlineMailOutline } from "react-icons/md"; // icon email

const CullMe = ()=>{

const [message , setMessage]  = useState([
    {
        id:1 ,
        icons: <FaWhatsapp/>,
        title: 'whatsapp',
        url:'https://web.whatsapp.com/'
    },
    {
        id:2,
         icons: <FaLinkedinIn/>,
        title:'linkedin',
        url:"https://www.linkedin.com/in/%D9%88%D8%AD%D9%8A%D8%AF-%D8%AC%D9%88%D8%B4-3b6a61348/"
    },
    {
        id:3,
         icons: <MdOutlineMailOutline/>,
        title:'Email',
        url:"mailto:wa7eehdjosh@gmail.com"
    }
])
return(

    <fotter className="CullMe">
        <menu className="cull">
            <ul>
               {message.map((p)=> {
                return(
                    <li><div className="div"><h2>{p.icons}</h2> <h3>{p.title}</h3></div> <a href={p.url} target="_blank"><FaChevronLeft /></a></li>
                )
               })}
            </ul>
        </menu>
        <menu className="me">
        <h3 id="server">تواصل معي</h3>
        <h2>متاح للتعاون و العمل الحر</h2>
        <hr />
            <p>يسعدني دائماً استقبال رسائلك واستفساراتك</p>
           
        </menu>
   
    </fotter>
)

}
export default CullMe 