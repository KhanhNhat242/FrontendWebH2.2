import './Member.scss'
import { Container, Row, Col } from 'react-bootstrap'
import MrTinh from '../../assets/MrTinh.png'
import 'bootstrap/dist/css/bootstrap.min.css'
// import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css'; 
// import responsive from '../globalStyle/ResponsiveCarousel'
import {Carousel as Carousel1} from 'react-bootstrap';
import {motion} from 'framer-motion'

function Member({ members }) {
    // console.log(members);

    return ( 
        <>
            <Container className='member-wrapper'>
                <Row className='member-row'>
                    <div className='col-lg-4 member-col1 avt-mentor-wrapper'>
                        <motion.div className='avt-wrapper'
                            initial={{ x: -100, y : -100, opacity: 0}}
                            animate= {{ x: 0, y : 0, opacity: 1}} 
                            transition={{duration: 2, delay: 0.3, type: "tween", stiffness: 120}}
                            >
                            <a href='/member' className='avt-link'>
                                <img src={MrTinh} alt='avt' className='avt-mentor' />
                            </a>
                        </motion.div>
                        <motion.div className='detail-wrapper'
                            initial={{ x: -100, y : 0, opacity: 0}}
                            whileInView= {{ x: 0, y : 0, opacity: 1}} 
                            transition={{duration: 1, delay: 0.4, type: "spring", stiffness: 120}}
                        >
                            <h4 className='name'>Nguyễn Hữu Tình</h4>
                            <h5 className='position'>Giảng viên</h5>
                        </motion.div>
                    </div>
                    <div className='col-lg-8 member-col1'>
                        <motion.h3 className='role'
                            initial={{ x: -500, y : 500, opacity: 0}}
                            animate= {{ x: 0, y : 0, opacity: 1}} 
                            transition={{duration: 1, delay: 0.3, type: "spring", stiffness: 120}}
                        >Mentor</motion.h3>
                        <motion.p className='detail'
                            initial={{  opacity: 0}}
                            whileInView= {{ x: 0, y : 0, opacity: 1}} 
                            transition={{duration: 1, delay: 0.3, type: "spring", stiffness: 120}}
                        >Giảng viên trường đại học Công Nghiệp TP.HCM.Trên 10 năm kinh nghiệm dẫn dắt đội tuyển olympic.</motion.p>
                    </div>
                </Row>
            </Container>
            <Container className='member-detail-wrapper'>
                <Row className='member-detail-row'>
                    <div className='wrap-core-member'>
                        <Carousel1>
                            {members.map((m, index) => {
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
                    </div>
                </Row>
                <Row className='alumni-row'>
                    <h3 className='alumni-title'>Alumni</h3>
                    {members.map((m, index) => {
                        if(m.role === 'Alumni')
                            return (
                                <Col className='avt-wrapper col-6 col-md-4' key={index}>
                                    <motion.div className='img-wrapper'
                                        initial={{x: 0, y : 50, opacity: 0 }}
                                        whileInView={{x: 0, y : 0, opacity: 1 }}
                                        transition={{duration: 1, delay: 0.3, type: "tween", stiffness: 120}}

                                    >
                                        <img src={`${m.image}`} alt='avt' className='avt-member' />
                                    </motion.div>
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