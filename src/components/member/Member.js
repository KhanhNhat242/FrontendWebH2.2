import './Member.scss'
import { Container, Row, Col } from 'react-bootstrap'
import MrTinh from '../../assets/MrTinh.png'
import 'bootstrap/dist/css/bootstrap.min.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css'; 
import responsive from '../globalStyle/ResponsiveCarousel'
import {Carousel as Carousel1} from 'react-bootstrap';

function Member({ members }) {
    // console.log(members);

    return ( 
        <>
            <Container className='member-wrapper'>
                <Row className='member-row'>
                    <div className='col-lg-4 member-col1 avt-mentor-wrapper'>
                        <div className='avt-wrapper'>
                            <a href='/member' className='avt-link'>
                                <img src={MrTinh} alt='avt' className='avt-mentor' />
                            </a>
                        </div>
                        <div className='detail-wrapper'>
                            <h4 className='name'>Nguyễn Hữu Tình</h4>
                            <h5 className='position'>Giảng viên</h5>
                        </div>
                    </div>
                    <div className='col-lg-8 member-col1'>
                        <h3 className='role'>Mentor</h3>
                        <p className='detail'>Giảng viên trường đại học Công Nghiệp TP.HCM.Trên 10 năm kinh nghiệm dẫn dắt đội tuyển olympic.</p>
                    </div>
                </Row>
            </Container>
            <Container className='member-detail-wrapper'>
                <Row className='member-detail-row'>
                    <Carousel1>
                        {members.map((m) => {
                            if(m.role === 'Core Member' || m.role === 'Member')
                                return (
                                    <Carousel1.Item interval={5000} key={m.id_user}>
                                    <div className='carousel-item-wrapper'>
                                        <div className='col-lg-3 member-detail-col'>
                                            <div className='avt-member-wrapper'>
                                                <img src={`${m.image}`} alt='avt-detail' className='avt-detail' />
                                            </div>
                                            <h3 className='member-name'>{m.full_name}</h3>
                                        </div>
                                        <div className='col-lg-9 member-detail-col'>
                                            <h3 className='role'>{m.role}</h3>
                                            <p className='detail-member'>{m.describe}</p>
                                        </div>
                                    </div>
                                </Carousel1.Item>
                                )
                        }
                        )}
                    </Carousel1>
                </Row>
                <Row className='alumni-row'>
                    <h3 className='alumni-title'>Alumni</h3>
                    {members.map((m) => {
                        if(m.role === 'Alumni')
                            return (
                                <Col className='avt-wrapper'>
                                    <div className='img-wrapper'>
                                        <img src={`${m.image}`} alt='avt' className='avt-member' />
                                    </div>
                                    <h3 className='member-name'>{m.full_name}</h3>
                                </Col>  
                                )
                    })}
                    
                </Row>
                {/* <Carousel responsive={responsive} className='carousel-wrapper'> */}
                    {/* {members.map((m) => {
                        if(m.role === 'alumni')
                            return (
                                <div className='avt-wrapper'>
                                    <div className='img-wrapper'>
                                        <img src={`${m.image}`} alt='avt' className='avt-member' />
                                    </div>
                                    <h3 className='member-name'>{m.full_name}</h3>
                                </div>    
                                )
                    })} */}
                {/* </Carousel>     */}
            </Container>
        </>
     );
}

export default Member;