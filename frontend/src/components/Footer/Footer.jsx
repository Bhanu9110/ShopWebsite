import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt=""/>
                <p>Mahalakshmi Steel Traders is a trusted name in the steel industry, providing high-quality steel products for construction, manufacturing, and industrial needs. With a strong focus on reliability, competitive pricing, and timely delivery, we have built long-lasting relationships with our customers. Our commitment to excellence ensures that every product we supply meets the highest standards of strength and durability.</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>

            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>

            </div>

            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+91 9110787659</li>
                    <li>prakashreddy@gmail.com</li>
                </ul>

            </div>
        </div>
        <hr/>
        <p className="footer-copyright">Copyright 2025 © MahalakshmiSteelTraders.com - All Right Reserved.</p>
      
    </div>
  )
}

export default Footer
