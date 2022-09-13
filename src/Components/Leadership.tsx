import React from 'react'
import{MMC} from "./Types"
import './style.css'
interface props {
  handleSubmit: (e: React.FormEvent) => void
  setState:React.Dispatch<React.SetStateAction<MMC>>
  State:MMC
}



const Leadership:React.FC<props>=({ State,setState, handleSubmit})=>{
 
  const updateField=(e:React.FormEvent)=>{
    const target = e.target as HTMLInputElement
   setState({
       ...State,
       leadership:{...State.leadership,     
        [target.name]:target.value}
      })
    }
     
      
  return ( 
    <div className='form-box'>
      <h5> Step: 3 of 4</h5>
    <form onSubmit={(e)=>handleSubmit(e)}>
      <label>
        Leadership profile<br/>
        <h6>(Based on Hersey & BlanchardModel)</h6>
        </label>
        <input
          value={State.leadership.MLeadershipStyle}
          onChange={updateField}
          name= 'MLeadershipStyle'    
          type="text"
          required
          placeholder='Major Leadership style'
        />
      
        <input
          value={State.leadership.BLeadershipStyle}
          onChange={updateField}
          name="BLeadershipStyle"
          type="text"
          required
          placeholder="Backup Leadership Style"
        />
        <input
          value={State.leadership.LeadershipEffectiveness}
          onChange={updateField}
          name="LeadershipEffectiveness"
          type="text"
          required
          placeholder='Leadership Effectivness'
        />
        
    </form>
    </div>
  )
}
export default Leadership