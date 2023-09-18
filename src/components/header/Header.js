import './Header.scss'
import {Navbar, Nav} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import logo from '../../assets/logoH22.png'
import {motion} from 'framer-motion'
import { NavLink } from 'react-router-dom'
import { useState, useRef } from 'react'

function Header() {

    const btnToggle = useRef(null);


    const clickToggle = () => {
        btnToggle.current.click();
    }
    
    return (
        <>
            {/* <Container className='header-wrapper'> */}
                <Navbar expand="lg" className="nav header-nav">
                    <Navbar.Brand href="/" className='header-left'>
                        <motion.img src={logo} alt='logo' className='logo'
                            whileHover={{scale: 1.1}}
                            whileTap={{scale: 0.9}}
                            initial={{ x : -10 ,y: -20,opacity: 0}}
                            animate={{ x : 0,y: 0,opacity: 1}}
                            transition={{delay: 0.2, duration: 0.5, type: 'spring', stiffness: 120}}
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll"  ref={btnToggle}/>
                    <Navbar.Collapse id="navbarScroll" className='header-right'>
                        <Nav className="me-auto nav-item-wrapper">
                            <NavLink to="/" className='nav-item'  onClick= {clickToggle}>Trang chủ</NavLink>
                            <NavLink to="/event" className='nav-item'  onClick= {clickToggle}>Sự kiện</NavLink>
                            <NavLink to="/achievement" className='nav-item'  onClick= {clickToggle}>Thành tích</NavLink>
                            <a href="https://aiwiki.github.io" className='nav-item'  onClick= {clickToggle} target='_blank' rel='error noreferrer'>Wiki</a>
                            <NavLink to="/member" className='nav-item'  onClick= {clickToggle}>Thành viên</NavLink>
                        </Nav>
                        {/* <Nav className="me-auto nav-item-wrapper">
                            
                        </Nav>
                        <Nav className="me-auto nav-item-wrapper">
                            
                        </Nav>
                        <Nav className="me-auto nav-item-wrapper">
                            
                        </Nav>
                        <Nav className="me-auto nav-item-wrapper">
                            
                        </Nav> */}
                        {/* <Nav className="me-auto nav-item-wrapper login-wrapper">
                            <Nav.Link href="/log-in" className='btn-login'>Đăng nhập</Nav.Link>
                        </Nav> */}
                    </Navbar.Collapse>
                </Navbar>
            {/* </Container> */}
        </>
    )
}

export default Header;