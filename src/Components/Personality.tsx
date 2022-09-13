import React from 'react'
import{MMC} from "./Types"
import './style.css'
interface props{
  
  handleSubmit: (e: React.FormEvent) => void,
  setState:React.Dispatch<React.SetStateAction<MMC>>
  State:MMC  
}

const Personality:React.FC<props>=({ State, setState,handleSubmit})=>{
 
  const updateField=(e:React.FormEvent)=>{
    const target = e.target as HTMLInputElement
  
      setState({
        ...State,
        personality:{...State.personality,
        [target.name]:target.value}
      })
        }
  



  return ( 
    <div className='form-box'>
      <h5> Step: 2 of 4</h5>
    <form onSubmit={(e)=>handleSubmit(e)}>
      <label>
        Personality Attributes
        </label>
        <select
          value={State.personality.Discipline}
          onChange={updateField}
          name="Discipline"
          required
          id="businesstype">
        <option  value="" disabled>Discipline</option>
          <option value="Excellent">Excellent</option>
          <option value="very Good">Very Good</option>
          <option value="Good">Good</option>
          <option value="Fair">Fair</option>
          <option value="Poor">Poor</option>
          
        </select>
        <select
          value={State.personality.Attitude}
          onChange={updateField}
          name="Attitude"
          required>
        <option  value="" disabled>Attitude</option>
        <option value="Excellent">Excellent</option>
          <option value="very Good">Very Good</option>
          <option value="Good">Good</option>
          <option value="Fair">Fair</option>
          <option value="Poor">Poor</option>
      </select>
        <select
          value={State.personality.ListeningSkills}
          onChange={updateField}
          name="ListeningSkills"
          required
          >
          <option  value="" disabled>Listening Skills</option>
        <option value="Excellent">Excellent</option>
          <option value="very Good">Very Good</option>
          <option value="Good">Good</option>
          <option value="Fair">Fair</option>
          <option value="Poor">Poor</option>
      </select>
        
        <select
          value={State.personality.ClassParticipation}
          onChange={updateField}
          name="ClassParticipation"
          required>
          <option  value="" disabled>Class Participation</option>
          <option value="Excellent">Excellent</option>
          <option value="very Good">Very Good</option>
          <option value="Good">Good</option>
          <option value="Fair">Fair</option>
          <option value="Poor">Poor</option>
      </select>
      

    </form>
    </div>
  );
}
  

export default Personality