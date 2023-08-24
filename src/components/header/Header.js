import './Header.scss'
import {Navbar, Container, Nav} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import logo from '../../assets/logoH22.png'

function Header() {
    return (
        <>
            <Navbar expand="lg" className="nav header-wrapper">
                <Container className='header-row'>
                    <Navbar.Brand href="/" className='header-left'>
                        <img src={logo} alt='logo' className='logo'/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" color='#fff'/>
                    <Navbar.Collapse id="navbarScroll" className='header-right'>
                        <Nav className="me-auto">
                            <Nav.Link href="/" className='nav-item'>Trang chủ</Nav.Link>
                        </Nav>
                        <Nav className="me-auto">
                            <Nav.Link href="/member" className='nav-item'>Thành viên</Nav.Link>
                        </Nav>
                        <Nav className="me-auto">
                            <Nav.Link href="/achievement" className='nav-item'>Thành tích</Nav.Link>
                        </Nav>
                        <Nav className="me-auto">
                            <Nav.Link href="/wiki" className='nav-item'>Wiki</Nav.Link>
                        </Nav>
                        <Nav className="me-auto">
                            <Nav.Link href="/event" className='nav-item'>Sự kiện</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header;