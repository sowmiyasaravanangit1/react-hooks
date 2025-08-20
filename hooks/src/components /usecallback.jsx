import React, {useCallback, useState} from 'react';


 export const ChildComponent = React.memo(({Increment}) =>{
         console.log("child component printed ");
      return ( 
         <button onClick = { Increment } > Increment </button>
      );
   })

   const ParentComponent = () =>{
       const [count, setcount ] = useState(0);

       const HandleIncrement = useCallback(() => {
           setcount(prevcount => 
            prevcount + 1
           )
       })
     return (
        <div>
          <p> count : {count } </p>
          <ChildComponent  Increment={HandleIncrement} />
        </div>
      );
   }


   export default ParentComponent ;


     
