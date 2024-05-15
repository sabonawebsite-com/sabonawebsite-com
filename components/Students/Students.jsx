
import React, { useState } from 'react'
import './Students.css'
const Students = () => {
    const [name,setName]=useState([])
    const[id,setId]=useState("")
    const[dep,setDep]=useState("")
    const[semster,setSemster]=useState("")
    function addStudent(){
        const newStudent={
              newName:name,
              newId:id,
              NewDep:dep,
              newSemester:semster
              }
              setName(n=>[...n,newStudent]);
            
              setId("")
              setDep("")
              setSemster("")
    }
    function yourId(event){
setId(event.target.value)
    }
    function yourDep(event){
       setDep(event.target.value) 
    }
    function yourSemester(event){
       setSemster(event.target.value) 
    }
    function removeStudent(index){
        setName(n=>n.filter((_,i)=>i!==index))
    }
  return (
    <div>
      <h1>BORANA UNIVERSITY DIGITAL REGISTRATION</h1>
      <h3>Date:{`${new Date().getDay()}/${new Date().getMonth()}/${new Date().getFullYear()}`}</h3>
      <ol>
        {name.map((stud,index)=>
        <li key={index} onClick={()=>removeStudent(index)}>
          
          Name  {` | ${stud.newId} |  `} 
         
          ID  {` | ${stud.NewDep} |   `} 

          Dep't {` | ${stud.newSemester} | `}
           </li>)}
      </ol>
      <input type="text"value={id}onChange={yourId} placeholder='enter your Name' /><br />
      <input type="text"value={dep}onChange={yourDep} placeholder='enter your ID' /><br />
      <input type="text"value={semster}onChange={yourSemester} placeholder='enter your departement' /><br />
      <button onClick={addStudent}>Register</button><br />
    </div>
  )
}
export default Students