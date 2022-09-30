import {client,q} from"../config/db"
//import MTM from"../Components/Types"
export const createNote =Data=>
 client.query(
    q.Create(
      q.Collection('MTMC'),
      {
        data: {
    Data
    
        },
      },
    )
  )
    
    .then(ret => ret)
    .catch(error => console.error('Error: ', error.message));
     


export function deleteNote(Note_id){
  return client
    .query(q.Delete(q.Ref(q.Collection('MTMC'), Note_id)))
    .then(ret => ret)
    .catch(error => console.error('Error: ', error.message));
}

export const retrieveNote=async(name)=>{
 try{
  return await client.query(
  q.Get(q.Match(q.Index('Term'),name))
)}
catch(error){
  alert("Name not found")
}
} 
//Paginate(Documents(Index('some_index')))
/*export const retrieve=async()=>{
  try{ 
  return await client.query(
   q.Map(q.Paginate(q.Documents(q.Collection('MTMC')))),
   Lambda('f',
   Let({
       fweet: Get(Var('f'))
     },
     Var('fweet')
   )
 )
)
   
  }
  catch(error){
    console.log(error)

  }
 
}
*/

