import React from 'react'
import{MMC} from "./Types"
import './style.css'
interface props{
  handleSubmit: (e: React.FormEvent) => void
  setState:React.Dispatch<React.SetStateAction<MMC>>
  State:MMC
  //Par:Part
  //setPar:React.Dispatch<React.SetStateAction<Part>>
  
}

const Particular:React.FC<props>=({ State,setState, handleSubmit})=>{
 
  const updateField=(e:React.FormEvent)=>{
    const target = e.target as HTMLInputElement
    /*setPar({
      ...Par,
      [target.name]:target.value})
      ;*/
     setState({
       ...State,
       particular:{...State.particular,     
        [target.name]:target.value}
      })
    }
     /* const particular = {...Current.particular};

      particular.Name={[target.name]:target.value} ;

      return {...Current, particular};*/
      
      
  return ( 
    <div className='form-box'>
      <h5> Step: 1 of 4</h5>
    <form onSubmit={(e)=>handleSubmit(e)}>
      <label>
        Particualrs of Participants 
        </label>
        <input
          value={State.particular.Name}
          onChange={updateField}
          name= 'Name'    
          type="text"
          required
          placeholder='Name'
        />
      
        <input
          value={State.particular.EmployeeNO}
          onChange={updateField}
          name="EmployeeNO"
          type="Number"
          required
          placeholder='Employee-no'
        />
        <input
          value={State.particular.Appointment}
          onChange={updateField}
          name="Appointment"
          type="text"
          required
          placeholder='Appointment'
        />
        <input
          value={State.particular.Organization}
          onChange={updateField}
          name="Organization"
          type="text"
          required
          placeholder='Organization'/>
      
        <input
          value={State.particular.Batch}
          onChange={updateField}
          name="Batch"
          type="text"
          required
          placeholder='Batch'
        />
  
    </form>
    </div>
  );
}
export default Particular