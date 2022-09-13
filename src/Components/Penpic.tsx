import React from 'react'
import{MMC} from "./Types"
import './style.css'
interface props {
  handleSubmit: (e: React.FormEvent) => void
  setState:React.Dispatch<React.SetStateAction<MMC>>
  State:MMC
}



const Penpic:React.FC<props>=({ State,setState, handleSubmit})=>{
 
  const updateField=(e:React.FormEvent)=>{
    const target = e.target as HTMLInputElement
   setState({
       ...State,
       penPicture:{...State.penPicture,     
        [target.name]:target.value}
      })
    }
     
      
  return ( 
    <div className='form-box'>
      <h5> Step: 4 of 4</h5>
    <form onSubmit={(e)=>handleSubmit(e)}>
      
        <select
          value={State.penPicture.PresentationSkills}
          onChange={updateField}
          name= 'PresentationSkills'    
          required
          placeholder='PresentationSkills'
        >
 <option  value="" disabled>Presentation Skills</option>
      <option value="Excellent">Excellent</option>
          <option value="very Good">Very Good</option>
          <option value="Good">Good</option>
          <option value="Fair">Fair</option>
          <option value="Poor">Poor</option>


          </select>
      
        <select
          value={State.penPicture.indStanding}
          onChange={updateField}
          name="indStanding"
          required
        > 
        <option  value="" disabled>Individual standing during course </option>
          <option value="Excellent">Excellent</option>
        <option value="very Good">Very Good</option>
        <option value="Good">Good</option>
        <option value="Fair">Fair</option>
        <option value="Poor">Poor</option>
          </select>
        <select
          value={State.penPicture.SuitHapp}
          onChange={updateField}
          required
          name="SuitHapp"
        > 
        <option  value="" disabled>Suitability for higher Appointment</option>
        <option value="Highly Suitable">Highly suitable</option>
        <option value="suitable">Suitable</option>
        <option value="not suitable">Not suitable</option>
        </select>
        <textarea
        className='textbox'
          value={State.penPicture.PenPicture}
          onChange={updateField}
          required
          name="PenPicture"
          placeholder='Pen Picture'
        >Pen Picture:</textarea>
    </form>
    </div>
  )
}
export default Penpic