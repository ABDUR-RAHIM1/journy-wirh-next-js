import { getUsers } from "../page";

async function  page({ params }) {
  const { userId } = params;
  const data = await getUsers()
 
   const usersDetails = data.find( d => d.id === Number(userId));
  

  return (
    <div className="w-10/12 m-auto border  p-2 my-4">
       <h2 className="text-2xl text-center my-3">Users Details : {userId}</h2>
          <p className="text-green-500">Name : {usersDetails.name}</p>
          <p>Email : {usersDetails.email}</p>
          <p>comment : {usersDetails.body}</p>
    </div>
  )
}

export default page