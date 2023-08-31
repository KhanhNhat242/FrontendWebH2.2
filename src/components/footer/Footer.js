import 'bootstrap/dist/css/bootstrap.min.css'
// import { Row, Col } from 'react-bootstrap'
import logo from '../../assets/logoH22.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faGithub, faYoutube, faDiscord } from '@fortawesome/free-brands-svg-icons'
import './Footer.scss'

function Footer() {
    return ( 
        <div className='footer-wrapper'>
            {/* <div className='footer-row1 row'>
            </div> */}
            <div className='footer-row2 row'>
                {/* <div className='footer-tks col-lg-3'>
                    <h2 className='tks-txt'>Cảm ơn vì đã ghé thăm</h2>
                    <img src={logo} alt='logo' className='footer-logo' />
                </div> */}
                <div className='footer-contact col-lg-6'>
                    <h2 className='contact-title'>Liên hệ</h2>
                    <div className='location'>
                        <FontAwesomeIcon icon={faLocationDot}/>
                        <p className='location-txt'>12 Nguyễn Văn Bảo, Phường 4, Quận Gò Vấp, thành phố Hồ Chí Minh, Việt Nam - Phòng H2.2</p>
                    </div>
                    <div className='mail'>
                        <FontAwesomeIcon icon={faEnvelope}/>
                        <p className='mail-txt'>aiclub.iuh@gmail.com</p>
                    </div>
                </div>
                <div className='footer-follow col-lg-6'>
                    <h3 className='follow-title'>Theo dõi chúng tôi</h3>
                    <div className='follow-wrapper'>
                        <a href='https://www.facebook.com/aiclub.iuh'className='follow-item'>
                            <FontAwesomeIcon icon={faFacebook}/>
                        </a>
                        <a href='https://www.youtube.com/channel/UCXwozkprKeqF9qstragkIIw' className='follow-item'>
                            <FontAwesomeIcon icon={faYoutube}/>
                        </a>
                        <a href='https://discord.gg/fJJbM8RJ' className='follow-item'>
                            <FontAwesomeIcon icon={faDiscord}/>
                        </a>
                        <a href='https://github.com/AI-CLUB-IUH' className='follow-item'>
                            <FontAwesomeIcon icon={faGithub}/>
                        </a>
                    </div>
                </div>
            </div>
            <hr className='line-horizon' />
            <h6 className='copyright-txt'>© Copyright 2023 – AI CLUB</h6>
        </div>
     );
}

export default Footer; 