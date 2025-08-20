import { useState } from "react";

const Form = () =>{
    const [name, setname] = useState('');

    const HandleForm = (e) => {
        e.preventDefault();
        console.log(" form submitted ");
        setname("");
    }
    return (
    <div> 
    <form onSubmit={ HandleForm}> 
     <label > Enter your Name </label> <br/> <br/>
     <input type = "text" value = { name}  placeholder=" Enter your name here "
      onChange={ (e)=> setname(e.target.value)}

     /> <br/> <br/> 

     <button type = " submit "  > SUBMIT </button>
     <p> Name :  {name} </p>

    </form>
    </div>);



}

export default Form;