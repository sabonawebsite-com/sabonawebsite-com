
import bru from '../../assets/bru.jpg'
import React, { useRef, useState } from 'react'
import './QuizApp.css'
import {data} from '../../assets/data'

const QuizApp = () => {
  let[index,setIndex]=useState(0)
  let[qestion,setQestion]=useState(data[index]);
  let[lock,setLock]=useState(false)
  let[score,setScore]=useState(0)
  let[result,setResult]=useState(0)
  let option1=useRef(null)
  let option2=useRef(null)
  let option3=useRef(null)
  let option4=useRef(null)
  let option_array=[option1,option2,option3,option4]
  const check=(e,ans)=>{
    if (lock===false) {
if(qestion.ans===ans){
  e.target.classList.add("correct")
  setLock(true)
  setScore(prev=>prev+1)
}
else{
  e.target.classList.add("wrong")
  setLock(true)
  option_array[qestion.ans-1].current.classList.add("correct")
}
  }
   }
   const next = ()=>{
if (lock===true) {
  if (index===data.length-1) {
    setResult(true)
    return 0;
  }
  setIndex(++index)
  setQestion(data[index])
  setLock(false)
  option_array.map((option)=>{
    option.current.classList.remove("wrong")
    option.current.classList.remove("correct")
    return null
  })
}
   }
   //
   const reset=()=>{
    setIndex(0)
    setQestion(data[0])
    setLock(false)
    setResult(0)
    setScore(0)

   }
  return (
    <div className='quiz-app'>
      <img src={bru} alt="" />
      <h1>BORANA UNIVERSITY EXIT EXAM MODEL FOR CS STUDENT</h1>
      <hr />
      {result?<></>:<><h2>{index+1}.{qestion.question}</h2>
      <ul>
        <li ref={option1} onClick={(e)=>{check(e,1)}}>{qestion.option1}</li>
        <li ref={option2} onClick={(e)=>{check(e,2)}}>{qestion.option2}</li>
        <li ref={option3} onClick={(e)=>{check(e,3)}}>{qestion.option3}</li>
        <li ref={option4} onClick={(e)=>{check(e,4)}}>{qestion.option4}</li>
      </ul>
      <button onClick={next}>next</button>
      <div className="index">{index+1} of {data.length}</div></>}
      
{result?<><h2>your score {score} out of {data.length}</h2>
      <button onClick={reset}>try Again</button></>:<></>}
      
    </div> 
  )
}

export default QuizApp
