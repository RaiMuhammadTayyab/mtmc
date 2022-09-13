import React,{useState} from 'react';
import Personality from './Components/Personality';
import Leadership from './Components/Leadership';
import Penpic from './Components/Penpic';
import Particular from './Components/Particular';
import './App.css';
import {MMC} from './Components/Types'
import Report from './Components/Report'

function App() {
  const initialState={
   particular:{ Name:"",
  EmployeeNO:20,
  Appointment:"",
  Organization:"",
  Batch:''},
  
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
console.log(initialState)
const [State,setState]=useState<MMC>(initialState)
const[Parti,setParti]=useState<MMC>(initialState)
 /* const[Par,setPar]=useState<Part>({
    Name:"",
    EmployeeNO:20,
    Appointment:"",
    Organization:"",
    Batch:""
   })
  
   const [Perso,setPerso]=useState<Pers>()
  const[Per,setPer]=useState<Pers>({
    Discipline:'',
    Attitude:'',
    ListeningSkills:'',
    ClassParticipation:''
   })
   const[Lead,setLead]=useState<Lead>({
    MLeadrshipStyle:'',
    BLeadrshipStyle:'',
    LeadershipEffectiveness:''

   })
   const[Pen,setPen]=useState<PenPic>({
    PresentationSkill:'',
    indStanding:'',
    SuitHapp:'',
    PenPicture:''

   })*/
   const handleSubmit=(e:React.FormEvent)=>{
    e.preventDefault()
    setParti(State)
    setState(initialState)
  
  
  }
   console.log(Parti)
  


  return(  <div>
      <Particular State={State} setState={setState}  handleSubmit={handleSubmit}/>
      <Personality State={State} setState={setState} handleSubmit={handleSubmit}/>
      <Leadership State={State} setState={setState} handleSubmit={handleSubmit}/>
      <Penpic State={State} setState={setState} handleSubmit={handleSubmit}/>
      <Report Parti={Parti}/>
      <button className="button-19"  onClick={handleSubmit}>Submit pls</button>
    </div>
  );


  

}

export default App;
