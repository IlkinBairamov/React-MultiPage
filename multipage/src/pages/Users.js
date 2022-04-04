import axios from 'axios';
import React from 'react'
import UserCard from '../components/UserCard'
import Header from '../components/Header';

function Users() {
  const [state,setState]=React.useState();

  const getUsers=React.useCallback(()=>{
   axios.get("https://jsonplaceholder.typicode.com/users")
   .then(({data})=>setState(data))
  },[])

  React.useEffect(()=>{
   getUsers();
  },[])

  return (
   <>
   <Header />

     <div>
      {state?.map((user)=>
       <UserCard name={user.name} username={user.username} key={user.id} />
      )}
    </div>
   </>
 

  )
}

export default Users