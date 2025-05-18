import React from 'react'
import logo from '../assets/Group12.png'
import { Link } from 'react-router-dom'

const NavBar = () => {
   
    return (
        <div className='mdiv1'>
            <div className='ndiv1'><img className='navimg' src={logo} alt="" width={105} height={29} /></div>
            
            <div>
  <ul className="ol-container">
    <li><Link className='link1' to='/home'>Home</Link></li>
    <li><Link className='link1' to='/curriculum'>Curriculum</Link></li>
    <li><Link className='link1' style={{color:'#E7332B'}} to='/previous-techies'>Previous Techies</Link></li>
    <li><Link className='link1' to='/team'>Team</Link></li>
    <li><Link className='link1' to='/contact'>Contact</Link></li>
  </ul>
</div>
            <div className='ndiv2'><button className='btn1'>Join StartNG</button></div>
          
        
        </div>
    )
}

export default NavBar
