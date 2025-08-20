import {useState} from 'react';

const FcUseState = ()=>{
    const [count,setcount] = useState(0);
    const [text,settext] = useState(""); 
    const Increment = () => {
        setcount(prevcount  => 
            prevcount + 1
        );
        settext(" Got Incremented ");

    }

    const Decrement = () => {
        setcount(prevcount=>
            prevcount - 1 
        )
        settext(" Got Decremented");
    }

    return (
        <div>
            <button onClick = { Increment } > + </button>
            <span> {count} </span>
            <button onClick = { Decrement } > - </button>
            <p> {text} : {count} </p>
            
        </div>
    );
}

export default FcUseState;