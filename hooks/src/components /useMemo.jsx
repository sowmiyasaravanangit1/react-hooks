import {useMemo , useState} from "react";

export const ExpensiveCalculator = (n) =>{
    console.log(" printing number ");
    return n;
}

const FcUseMemo = () => {
const [number,setnumber] = useState(0);

    const calculation = useMemo(()=>
  ExpensiveCalculator(number),[number]);
  console.log("number printing",number);
    return(
    <div> 
    <p> count : {number} </p>
    <p> calculation : {calculation} </p>
    <button onClick ={()=>setnumber((prev) => prev+1)}> increment </button > 
    </div>);

}
    

export default FcUseMemo;


