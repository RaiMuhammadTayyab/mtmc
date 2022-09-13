export interface Part{
    Name:string
    EmployeeNO:number |string
    Appointment:string
    Organization:string
    Batch:string
}
export interface Pers{
    Discipline:string
    Attitude:string
    ListeningSkills:string
    ClassParticipation:string
}
export interface Lead{
    MLeadershipStyle:string
    BLeadershipStyle:string
    LeadershipEffectiveness:string
}
export interface PenPic{
    PresentationSkills:string
    indStanding:string
    SuitHapp:string
    PenPicture:string
}
  export interface MMC{
    particular:Part
    personality:Pers
    leadership:Lead
    penPicture:PenPic
}