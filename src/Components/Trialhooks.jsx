import { useState } from "react"

function Trialhooks(){
const [Count, setCount] = useState(10)


console.log(Count);
console.log(setCount);


const count= () =>{
setCount(Count+2);
}



return(

<div>
    <h1>Count: {Count}</h1>
    <button onClick={count}>Click Here</button>
</div>


);
}
export default Trialhooks; 