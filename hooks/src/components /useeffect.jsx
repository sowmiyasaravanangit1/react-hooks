import { useEffect, useState } from "react";

const FcUseEffect = () => {
    const [name,setname] = useState('');

    useEffect(()=>{
          console.log(" myfirst useefect function");
          setname( name + 1)
          console.log(name);
          return ()=>{
            console.log("aborted");
          }
    } , [])

 return (
    <div> 
    <p> first rendering </p>{
        console.log(" first rendering happens")
    }
    </div>
 );
}

export default FcUseEffect;