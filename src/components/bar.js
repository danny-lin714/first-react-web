import { click } from '@testing-library/user-event/dist/click';
import React,{useState} from 'react';
import { Link } from 'react-router-dom';

function Bar() {
  const [click,setClick] = useState(false);
  const handleClick =()=>setClick(!click);
  const closeMobileMenu =()=>setClick(false);
  return (
    <>
    <nav className='bar'>
        <div className='bar-container'>
            <Link to="/" className="bar-logo">
                Whouse <i className='fab fa-typo3'/>
            </Link>
            <div className='menu-icon' onClick={handleClick}>
              <i className={click ? 'fas fa-times' :'fas fa-bars'}/>
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
                <Link to="/services" className='"nav-links' onClick={closeMobileMenu}>
                  Services
                </Link>
              </li>
              <li className='nav-item'>
                <Link to="/arts" className='"nav-links' onClick={closeMobileMenu}>
                  Arts
                </Link>
              </li>
              <li className='nav-item'>
                <Link to="/home" className='"nav-links' onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link to="/sign-up" className='"nav-links' onClick={closeMobileMenu}>
                  Sign-up
                </Link>
              </li>
            </ul>
        </div>
    </nav>
    </>
  );
}

export default Bar;
