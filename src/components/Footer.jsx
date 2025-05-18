import React from 'react'
import logo from '../assets/Group12.png'
import { Link } from 'react-router-dom'
import facebook from '../assets/facebook.png'
import twitter from '../assets/twitter.png'

const Footer = () => {
    return (
        <div>
            <div className='footer-dv1'>
                <div><img src={logo} alt="" width={105} height={29} /></div>
                <div>

                    <p className='footer-p1'>Quick links</p>
                    <div className='footer-lks'>
                        <Link style={{ color: ' #514949', textDecoration: 'none' }} to={'/home'}>Home</Link>
                        <Link style={{ color: ' #514949', textDecoration: 'none' }} to={'/curriculum'}>Curriculum</Link>
                        <Link style={{ color: ' #514949', textDecoration: 'none' }} to={'/previous-techies'}>Previous Techies</Link>
                        <Link style={{ color: ' #514949', textDecoration: 'none' }} to={'/faq'}>FAQ</Link>
                        <Link style={{ color: ' #514949', textDecoration: 'none' }} to={'/req-cert'}>Request Certificates</Link>
                        <Link style={{ color: ' #514949', textDecoration: 'none' }} to={'/terms-and-conditions'}>Terms and Conditions</Link>
                    </div>
                </div>
                <div>
                    <p className='footer-p1'>Contact Us</p>
                    <Link style={{ color: ' #514949', textDecoration: 'none' }}>Hello@start.ng</Link>

                </div>
                <div>
                    <p className='footer-p1'>Office Address</p>
                    <div className='footer-lks'>
                        <Link style={{ color: ' #514949', textDecoration: 'none' }}>92 Wolverine Avenue,</Link>
                        <Link style={{ color: ' #514949', textDecoration: 'none' }}>Ikeja,</Link>
                        <Link style={{ color: ' #514949', textDecoration: 'none' }}>Lagos State, Nigeria.</Link>
                    </div>
                </div>
                <div>
                    <p className='footer-p1'>Follow Us</p>
                    <div className='footer-dvl'>
                        <img src={facebook} alt="" />
                        <img src={twitter} alt="" />
                    </div>
                </div><br />
            </div><br />
            <p className='footer-p2'>© 2020 StartNG</p>
        </div>
    )
}

export default Footer
