import { Link, NavLink } from 'react-router-dom'
import SARIBAL_LOGO from '../../assets/images/SARIBAL_LOGO.png'
import SARIBAL from '../../assets/images/SARIBAL.png'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => {
  return (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={SARIBAL_LOGO} alt="logo" />
            <img className='sub-logo' src={SARIBAL} alt="SARIBAL" />
        </Link>
        <nav>
            <NavLink
                exact='true'
                activeclassname='active'
                to='/'
            >
                <FontAwesomeIcon icon={faHome} color='#4d4d4e' />
            </NavLink>
            <NavLink
                exact='true'
                activeclassname='active'
                className='about-link'
                to='/about'
            >
                <FontAwesomeIcon icon={faUser} color='#4d4d4e' />
            </NavLink>
            <NavLink
                exact='true'
                activeclassname='active'
                className='contact-link'
                to='/contact'
            >
                <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e' />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/omerfaruksaribal/'>
                    <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e' />
                </a>
            </li>
            <li>
                <a target='_blank' rel='noreferrer' href="https://www.github.com/omerfaruksaribal">
                    <FontAwesomeIcon icon={faGithub} color='#4d4d4e' />
                </a>
            </li>
        </ul>
    </div>
  )
}

export default Sidebar