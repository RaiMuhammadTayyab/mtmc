import React from 'react'
import  './style.css'
import{MMC} from'./Types'
interface props{
  Parti:MMC
}
const Report:React.FC<props>=({Parti}) =>{
  return (
    <table>
           <caption >
4
                <h6>RESTRICTED</h6>,<br/>
            <h3>Mid-Tier Management Course</h3><br/>
            <h4>Individual Course Report</h4></caption>
            <tr>
               <th>A.Particualrs of Participants</th>
                <tr><th>Name</th>
                <td> {Parti.particular.Name}</td> </tr>
                <tr><th> Employee NO</th>
                <td> {Parti.particular.EmployeeNO}</td></tr>
                <tr><th> Organization</th>
                <td>{Parti.particular.Organization}</td></tr>
               <tr> <th>Batch</th>
               <td>{Parti.particular.Batch}</td></tr>
            </tr>
            <tr>
            <th>B. Personality Attributes</th>
                <tr><th> Discipline</th>
                <td>{Parti.personality.Discipline}</td></tr>
                <tr><th> Listening Skills</th>
                <td>{Parti.personality.ListeningSkills}</td> </tr>
                <tr><th> Attitude</th>
                <td>{Parti.personality.Attitude}</td> </tr>
                <tr><th> Class Participation</th>
                <td>{Parti.personality.ClassParticipation}</td></tr>
                </tr>
                <tr>
            <th>C.Leadership Profile<br/>
        (Based on Hersey & BlanchardModel)</th>
                <tr><th> Major Leadership style</th>
                <td>{Parti.leadership.MLeadershipStyle}</td></tr>
                <tr><th> Back up Leadership style</th>
                <td>{Parti.leadership.BLeadershipStyle}</td> </tr>
                <tr><th> Leadership Effectiveness</th>
                <td>{Parti.leadership.LeadershipEffectiveness}</td> </tr>
                </tr>
                
                <tr>
                <th  colSpan={2}>C Presentation Skills</th>
                <td> {Parti.penPicture.PresentationSkills}</td>
                </tr>
                <tr>
                <th  colSpan={2}> Individual standing during course</th>
                <td>{Parti.penPicture.indStanding}</td></tr>
               <tr><th colSpan={2}> suitability for Higher appointment in due course of time </th>
                <td>{Parti.penPicture.SuitHapp}</td></tr>
               <tr> <th colSpan={2}> Pen Picture</th> 
                 <td> {Parti.penPicture.PenPicture}</td>
</tr>
        </table>
  )
}

export default Report