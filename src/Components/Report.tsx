import React,{useContext, useState} from 'react'
import  './style.css'
import{ MMC} from'./Types'
import { initialState } from './Home';
import {retrieveNote,deleteNote} from "../api";
import{Contex} from"./Home"

const Report:React.FC=() =>{
  const [Perso,setPerso]=useState<string|number>('')
    const[Par,setPar]=useState<MMC>(initialState)
  const[led,setled]=useState<any>()
const{result,setresult}=useContext<any>(Contex)
//const[edit, setedit]=useState<boolean>(false)
//const[name,setname]=useState<string>('')
//console.log(name)
    const handleDeleteItem=()=>{
      deleteNote( led.ref.id).then(res =>{
    console.log("document is deleted" )
    })
    setPar(initialState)
     }
  const handlesearch=(e:React.FormEvent)=>{
    const target = e.target as HTMLInputElement
  e.preventDefault()
  setPerso(target.value)
 }

  const Handleret=(e:React.FormEvent)=>{
    e.preventDefault()
    try {
    retrieveNote(Perso).then(res=>{
      console.log("Document retrieve:")
      setled(res)   
    });
    setPar(led.data.Data)
    setPerso('')
  
}
catch(error){
  console.log(error)
}
  }
  
    
  
  

  
  return (
    <>
    <table>
           <caption>
                <h6>RESTRICTED</h6><br/>
            <h3>Mid-Tier Management Course</h3><br/>
            <h4>Individual Course Report</h4>
            </caption>
            <tr>
               <th>A.Particualrs of Participants</th>
                <tr><th>Name</th>
                <td> {Par.particular.Name}</td></tr>
                <tr><th> Employee NO</th>
                <td> {Par.particular.EmployeeNO}</td></tr>
                <tr><th> Organization</th>
                <td>{Par.particular.Organization}</td></tr>
               <tr> <th>Batch</th>
               <td>{Par.particular.Batch}</td></tr>
            </tr>
            <tr>
            <th>B. Personality Attributes</th>
                <tr><th> Discipline</th>
                <td>{Par.personality.Discipline}</td></tr>
                <tr><th> Listening Skills</th>
                <td>{Par.personality.ListeningSkills}</td></tr>
                <tr><th> Attitude</th>
                <td>{Par.personality.Attitude}</td></tr>
                <tr><th> Class Participation</th>
                <td>{Par.personality.ClassParticipation}</td></tr>
                </tr>
                <tr>
            <th>C.Leadership Profile<br/>
        (Based on Hersey & BlanchardModel)</th>
                <tr><th> Major Leadership style</th>
                <td>{Par.leadership.MLeadershipStyle}</td></tr>
                <tr><th> Back up Leadership style</th>
                <td>{Par.leadership.BLeadershipStyle}</td></tr>
                <tr><th> Leadership Effectiveness</th>
                <td>{Par.leadership.LeadershipEffectiveness}</td></tr>
                </tr>
                
                <tr>
                <th  colSpan={2}>C Presentation Skills</th>
                <td> {Par.penPicture.PresentationSkills}</td>
                </tr>
                <tr>
                <th  colSpan={2}> Individual standing during course</th>
                <td>{Par.penPicture.indStanding}</td></tr>
               <tr><th colSpan={2}> suitability for Higher appointment in due course of time </th>
                <td>{Par.penPicture.SuitHapp}</td></tr>
               <tr> <th colSpan={2}> Pen Picture</th> 
                 <td> {Par.penPicture.PenPicture}</td>
</tr>

<h2>Search Name</h2><input
className='Input_text'
      value={Perso}
      onChange={handlesearch}
      name="Name"
      type="text"
      required
      placeholder='Enter Name pls'
    />
 <button className="button-19"  onClick={Handleret}>Retrieve</button>
 <button className="button-19"  onClick={handleDeleteItem}> Delete</button>
        </table>
      
        
    </>  
  )
  
}

export default Report