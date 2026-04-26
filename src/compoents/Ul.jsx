import ShowMenu from "./ShowMenu"
function Ul(){
const  loopA = [
    {
    id:1,
    title:'الرئيسية',
    ID:'#Home'
    },
      {
    id:2,
    title:'عني',
    ID:'#About'
    },
      {
    id:3,
    title:'مهاراتي',
    ID:'#Skills'
    },
      {
    id:4,
    title:'تواصل معي',
    ID:'#server'
    },
]

return(
<>
<ul>
    {
        loopA.map((keys , id) =>{
            return(
                <li key={id}>
                    <a href={keys.ID} >{keys.title}</a>
                </li>
            )
        })
    }
</ul>
<ShowMenu props={loopA} />
</>

)



}
export default Ul