import './Header.scss'
import {Navbar, Nav} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import logo from '../../assets/logoH22.png'

function Header() {
    return (
        <>
            {/* <Container className='header-wrapper'> */}
                <Navbar expand="lg" className="nav header-nav">
                    <Navbar.Brand href="/" className='header-left'>
                        <img src={logo} alt='logo' className='logo'/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll" className='header-right'>
                        <Nav className="me-auto nav-item-wrapper">
                            <Nav.Link href="/" className='nav-item'>Trang chủ</Nav.Link>
                        </Nav>
                        <Nav className="me-auto nav-item-wrapper">
                            <Nav.Link href="/member" className='nav-item'>Thành viên</Nav.Link>
                        </Nav>
                        <Nav className="me-auto nav-item-wrapper">
                            <Nav.Link href="/achievement" className='nav-item'>Thành tích</Nav.Link>
                        </Nav>
                        <Nav className="me-auto nav-item-wrapper">
                            <Nav.Link href="/wiki" className='nav-item'>Wiki</Nav.Link>
                        </Nav>
                        <Nav className="me-auto nav-item-wrapper">
                            <Nav.Link href="/event" className='nav-item'>Sự kiện</Nav.Link>
                        </Nav>
                        <Nav className="me-auto nav-item-wrapper login-wrapper">
                            <Nav.Link href="/log-in" className='btn-login'>Đăng nhập</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            {/* </Container> */}
        </>
    )
}

export default Header;