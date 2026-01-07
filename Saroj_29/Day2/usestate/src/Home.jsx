import React from 'react'
import { useState } from 'react'

function Home() {

// const[obj,setobj]=useState({});
// function adddata(){
//     setobj({name:"Aditya",age:22,city:"pune"});
// }
const[count,setcount]=useState(0);



    let a=0;
    function updateA(){
        a=a+1;
        console.log(a);
    }
  return (
    <div>Home
        {/* <button onClick={updateA}>click me</button> */}

        {/* value of obj
        <br />
        name {obj.name}
        <br />
        age {obj.age}
        <br />
        city {obj.city}
        <br />
        <button onClick={adddata}>click here to add object</button> */}
        <br />
        count value is : {count}
        <br />
        <button onClick={()=>setcount(count+1)}>increment</button>
        <br />
        <button onClick={()=>setcount(count-1)}>decrement</button>
    </div>
  )
}

export default Home