import {useEffect, useRef} from 'react';

const FcUseRef = () =>{

    const inputref = useRef();
    useEffect(()=>{
        inputref.current.focus();
    })

return(
    <div>
     <label> name </label> <br/>
     <input type = "text"  placeholder=' enter name' /> <br/>
     <input type = "text" placeholder=' enter name' /> <br/>
     <input type = "text" placeholder=' enter name' /> <br/>
     <input type = "text"  ref={inputref} placeholder=' enter name' /> <br/>
     <input type = "text" placeholder=' enter name' /> <br/>
    </div>
);

}
export default FcUseRef;