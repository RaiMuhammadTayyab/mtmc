import React,{useState,createContext} from 'react';
import Personality from './Personality';
import Leadership from './Leadership';
import Penpic from './Penpic';
import Particular from './Particular';
import {MMC} from './Types'
import {createNote } from "../api";
export const initialState={
  particular:{ Name:"",
 EmployeeNO:"",
 Appointment:"",
 Organization:"",
 Batch:''
},
 personality:{Discipline:'',
 Attitude:'',
 ListeningSkills:'',
 ClassParticipation:''},

 leadership:{MLeadershipStyle:'',
 BLeadershipStyle:'',
 LeadershipEffectiveness:''},

 penPicture:{PresentationSkills:'',
 indStanding:'',
 SuitHapp:'',
 PenPicture:''
}
}
export const Contex =createContext<any>(initialState)
console.log(Contex)
function Home() {
const [State,setState]=useState<MMC>(initialState)
const[Parti,setParti]=useState<MMC>(initialState)
const[result,setresult]=useState<any>("blue")
  console.log(result)
   const handleSave=()=>{
    createNote(Parti).then(res => {
      console.log('first document added to the database');
    });
    ;
    setParti(initialState)
   }
   
   const handleSubmit=(e:React.FormEvent)=>{
    e.preventDefault()
    setParti(State)
    setState(initialState)
} 

  return( 
     <div>
      
      <Contex.Provider value={{result,setresult}}>
      <Particular State={State} setState={setState}  handleSubmit={handleSubmit}/>
      <Personality State={State} setState={setState} handleSubmit={handleSubmit}/>
      <Leadership State={State} setState={setState} handleSubmit={handleSubmit}/>
      <Penpic State={State} setState={setState} handleSubmit={handleSubmit}/>
    
      <div className='Button'>
     <button className="button-19"  onClick={handleSubmit}>Submit pls</button>
     <button className="button-19"  onClick={handleSave}>Save</button>

    </div>
    </Contex.Provider>
    </div>
    
  );


  

}

export default Home;
