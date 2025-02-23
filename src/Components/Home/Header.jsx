import React, { useState } from 'react'
import '../../Css/Home/Header.css'
import Logo from '../../assets/Your paragraph text.png'
import { Link } from 'react-router-dom'
import { IoMenu } from "react-icons/io5";
 

const Header = () => {
  const [mobileItem, setMobileItem] = useState(false)
  const Clicked = () => {
    setMobileItem(!mobileItem)

  }

  return (
    <>
      <div className='nav'>
        <div className='navbar'>
          <div className="nav-left-logo">
            <Link to='/'>
              <img src={Logo} alt="" />
            </Link>
          </div>
          <div className={mobileItem ? 'mobile-item mobile-items ' : ' nav-center-item'}>
            <ul className=' dropdown mobile-items' >
              <li className="dropbtn"><Link to='/'>PersonalPay</Link></li>
              <li><Link to="/businesspay">BusinessPay</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/careers">Careers</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="nav-right-item">
            <div className='first-item'>
              {/* <div className="dropdown-en">
                <p className="dropbtn-en">Cn</p>
                <div className="dropdown-content">
                  <li className='region'><a href="#">SEA</a>
                    <ul className='second-dropdown-a'>
                      <li><a href="#">Indonesia
                      </a></li>
                      <li><a href="#">Thailand</a></li>
                      <li><a href="#">Vietnam</a></li>
                      <li><a href="#">Malaysia</a></li>
                      <li><a href="#">Philippines</a></li>
                      <li><a href="#">Singapore</a></li>
                      <li><a href="#">Myanmar</a></li>
                      <li><a href="#">Cambodia
                      </a></li>
                      <li><a href="#">Laos</a></li>
                      <li><a href="#">Brunei</a></li>
                      <li><a href="#">Timor-Leste</a></li>
                      <li><a href="#">East Timor</a></li>
                      <li><a href="#">Hong Kong</a></li>
                      <li><a href="#">Taiwan</a></li>
                      <li><a href="#">Papua New Guinea</a></li>
                    </ul>
                  </li>
                  <li className='region' ><a href="">AZN</a>
                    <ul className='second-dropdown-b'>
                      <li> <a href="#">Australia</a></li>
                      <li> <a href="#">New Zealand</a></li>
                      <li> <a href="#">Fiji</a></li>
                      <li> <a href="#">Papua New Guinea</a></li>
                      <li> <a href="#">Samoa</a></li>
                      <li> <a href="#">Tonga</a></li>
                      <li> <a href="#">Vanuatu</a></li>
                      <li> <a href="#">Solomon Islands</a></li>
                      <li> <a href="#">Cook Islands</a></li>
                      <li> <a href="#">Niue</a></li>
                      <li> <a href="#">Tuvalu</a></li>
                      <li> <a href="#">Kiribati</a></li>
                    </ul></li>
                </div>
              </div> */}
              <div className="dropdown-en">
                 <img id='img' src="https://cdn.prod.website-files.com/65ef241dc05b3b7d9f05e09a/65f1f94d604131c3d1309b25_united%20kingdom.svg"   alt="" />
                <p className="dropbtn-en">En</p>
                <div className="dropdown-content">
                  <a className='drop-down-item' href="#">
                  <img id='imgg' src="https://cdn.prod.website-files.com/65ef241dc05b3b7d9f05e09a/65f1f94d604131c3d1309b25_united%20kingdom.svg"   alt="" />
                  English</a>
                  <a href="#">
                  <img id='imgg' src="https://cdn.prod.website-files.com/65ef241dc05b3b7d9f05e09a/65f1f94fb122ef35120af021_spain.svg" alt="" />Spanish</a>
                  <a href="#">
                  <img id='imgg' src="https://cdn.prod.website-files.com/65ef241dc05b3b7d9f05e09a/65f1f96c5b459c1e504cced8_brazil.svg" alt="" />
                  Portuguese</a>
                  <a className='drop-down-item-sec' href="#">
                  <img id='imgg' src="https://cdn.prod.website-files.com/65ef241dc05b3b7d9f05e09a/65f1f95442b67649a75e0849_denmark.svg" alt="" />
                  Danish</a>
                </div>
              </div>
              {/* <a href="#">En</a>
              <a href="#">Es</a> */}
              {/* <form>
                 <select>
                  <option value="Select your language">En</option>
                  <option value="saab">A</option>
                  <option value="opel">B</option>
                  <option value="audi">C</option>
                </select>
                
                  <select  >
                    <option value="Select your location">Es</option>
                    <option value="saab">A</option>
                    <option value="opel">B</option>
                    <option value="audi">C</option>
                  </select>
             
                  </form> */}
            </div>
            <div className='btn'>
              <button>DOWNLOAD APP</button>
            </div>
            {/* <i onClick={Clicked} id='hammenu' className="ri-menu-line"></i> */}
            <IoMenu onClick={Clicked} className='menu' />
            {/* drop down */}

          </div>
        </div>
      </div>

    </>
  )
}

export default Header
