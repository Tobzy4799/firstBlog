import React from 'react'
import frame from '../assets/Frame7.png'
import quote from '../assets/quote.png'

const Div2 = () => {
    return (
        <div className='mdiv2'>
            <img className='div2-img' src={frame} width={580} height={500} alt="" />
            <div className='div2-dv2'>
            <div className='defdiv'>
            <div className='div2-dv3'>
                    <div className='div2-dv4'>
                    <h4 className='div2-h1'>Worth While Experience</h4><br />
                    <p className='div2-p1'>if i have not attended this program i would be worse on my
                        self today i work with one of the
                        top companies in nigeria this is only
                        possible because i took the step
                        and start.ng raised me up</p>
                    </div>
                    <div className='div2-dv6'><img src={quote} height={70} width={60}  alt="" /></div>
                </div>
            </div>
    
                <div className='div2-dv5'>
                <h4 className='div2-h1'>Alexandra Cage</h4><br />
                <p className='div2-p1'>UI/UX Designer @paypal</p>
                </div>
                
            </div>
        </div>
    )
}

export default Div2
