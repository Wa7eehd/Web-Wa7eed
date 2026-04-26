function ShowMenu({props}){
    
return(
    <div className="NavBar">
        <ul>
  
  {
        props.map((keys , id) =>{
            return(
                <li key={id}>
                    <a href={keys.ID} >{keys.title}</a>
                </li>
            )
        })
    }

       
</ul>
    </div>
)
}
export default ShowMenu