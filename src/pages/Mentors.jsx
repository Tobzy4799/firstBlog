import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Mentors = () => {
 
  const [allUsers, setallusers]= useState([])
  const [name, setname] = useState('')
  const [email, setemail] = useState('')
  const [username, setusername] = useState('')
  const [currentIndex, setcurrentindex] = useState(0)

useEffect(()=>{
  const makeRequest = async()=>{
    let response = await axios.get('https://jsonplaceholder.typicode.com/users')
    console.log(response.data);
    setallusers(response.data)
    
  }
  makeRequest()
}, [])
const deleteUser = (index) => {
  let newUser = [...allUsers]
  newUser.splice(index, 1)
  setallusers(newUser)
}
const editProduct = (index, user) => {
        let newUser  = [...allUsers]
        newUser.splice(index,1, user)
        setallusers(newUser)
      }


  return (
    <div><br /><br /><br />
      <div>
      <div className='mendiv2'>
        {allUsers.map((user, index)=>(
          <div key={index} className='mendiv1'>
           <div className='mendiv6'>
           <div className='mendiv4'>
            <h3>{user.name}</h3>
            <p style={{fontSize:'20px'}}>{'Email:'+user.email}</p>
            <p style={{fontSize:'20px'}}>{'Username:'+user.username}</p>
           </div>
           </div><br />
            <div className='mendiv3'>
              <button className="btn btn-danger" onClick={() => deleteUser(index)}>delete</button>
              <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={()=>setcurrentindex(index)}>edit</button>
            </div><br />
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">Edit User</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                    <input type="text" placeholder='name' value={name} onChange={(e) => setname(e.target.value)} />
                    <input type="text" placeholder='email' value={email} onChange={(e) => setemail(e.target.value)} />
                    <input type="text" placeholder='username' value={username} onChange={(e) => setusername(e.target.value)} />
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={()=>editProduct(currentIndex, {name, email, username})}>Save changes</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          
        ))}
      </div>
      </div>
    </div>
  )
}

export default Mentors
