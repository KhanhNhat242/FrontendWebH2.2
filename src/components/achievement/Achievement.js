import './Achievement.scss'
import background from '../../assets/image_achive_11.png'
import title from '../../assets/logoAchievement.png'
import { Container, Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import achieve21 from '../../assets/achieve21.png'
import achieve22 from '../../assets/achieve22.png'
import achieve23 from '../../assets/achieve23.png'
import achieve24 from '../../assets/achieve24.png'
import achieve25 from '../../assets/achieve25.png'
import achieve26 from '../../assets/achieve26.png'
import AchieveNav from './achieveNav/AchieveNav'
import {motion} from 'framer-motion'
import { useEffect, useState } from 'react'


function Achievement({ paper }){
    const [eureka, setEureka] = useState(0)
    const [fdse, setFdse] = useState(0)
    const [ysc, setYsc] = useState(0)
    const [other, setOther] = useState(0)

    const typePaper = 0

    useEffect(() => {
        paper.forEach((p) => {
            if(p.institute.trim() === 'Euréka')
                setEureka(prev1 => prev1 + 1)
            else if(p.institute.trim() === 'FDSE')
                setFdse(prev2 => prev2 + 1)
            else if(p.institute.trim() === 'YSC')
                setYsc(prev3 => prev3 + 1)
            else 
                setOther(prev4 => prev4 + 1)
        });
    }, [paper])

    // console.log(eureka);

    return ( 
        <>
            <div className='wrapper'>
                <img src={background} alt='background' className='achievement-background' />
                <motion.img src={title} alt='title' className='achievement-title' 
                    initial={{x : "-50%", scale: 1.2,y: -100, opacity: 0}}
                    whileInView={{x : "-50%", scale: 1,y: -10, opacity: 1}}
                    transition={{delay: 0.3, duration: 1, type: 'Tween', stiffness: 140}}
                />
            </div>
            <Container className='achieve-wrapper'>
                <Row className='achieve-row'>
                    <div className='col-lg-2 achieve-col-left'>
                        {<AchieveNav typePaper={typePaper} />}
                    </div>
                    <div className='col-lg-10 achieve-col-right'>
                        <p className='achieve-txt'>Trải qua 3 năm thành lập và phát triển chúng mình đã nỗi lực cố gắng tạo giá thật nhiều giá trị 
                            cho cộng đồng với hàng chục bài báo nghiên cứu khoa học được chấp nhận tại các hội nghị lớn, nhỏ hằng năm. Các 
                            hội nghị uy tín mà chúng tôi đã tham gia như YSC, FDSE, Euréka, ....</p>
                        <h3 className='paper-title'>Số lượng bài báo tương ứng với các cuộc thi</h3>
                        <Row className='paper-row'>
                            <div className='col-sm-2 paper-col'>
                                <p className='paper-txt1'>Euréka</p>
                                <motion.p className='paper-txt2'
                                    initial={{ x:-50, scale : 0.1,opacity: 0}}
                                    whileInView={{ x : 0,  scale : 1,opacity: 1}}
                                    transition={{delay: 0.3, duration: 0.5, type: 'tween'}}
                                >{eureka}</motion.p>
                            </div>
                            <div className='col-sm-2 paper-col'>
                                <p className='paper-txt1'>FDSE</p>
                                <motion.p className='paper-txt2'
                                    initial={{ x:-50, scale : 0.1,opacity: 0}}
                                    whileInView={{ x : 0,  scale : 1,opacity: 1}}
                                    transition={{delay: 0.3, duration: 0.5, type: 'tween'}}
                                >{fdse}</motion.p>
                            </div>
                            <div className='col-sm-2 paper-col'>
                                <p className='paper-txt1'>YSC</p>
                                <motion.p className='paper-txt2'
                                    initial={{ x:-50, scale : 0.1,opacity: 0}}
                                    whileInView={{ x : 0,  scale : 1,opacity: 1}}
                                    transition={{delay: 0.3, duration: 0.5, type: 'tween'}}
                                > {ysc}</motion.p>
                            </div>
                            <div className='col-sm-2 paper-col'>
                                <p className='paper-txt1'>Khác</p>
                                <motion.p className='paper-txt2'
                                    initial={{ x:-50, scale : 0.1,opacity: 0}}
                                    whileInView={{ x : 0,  scale : 1,opacity: 1}}
                                    transition={{delay: 0.3, duration: 0.5, type: 'tween'}}
                                > {other}</motion.p>
                            </div>
                            <div className='col-sm-4 paper-col-sum'x>
                                <p className='paper-txt1'>Tổng</p>
                                <motion.p className='paper-txt2'
                                    initial={{ x:-50, scale : 0.1,opacity: 0}}
                                    whileInView={{ x : 0,  scale : 1,opacity: 1}}
                                    transition={{delay: 0.3, duration: 0.5, type: 'tween'}}
                                >1000</motion.p>
                            </div>
                        </Row>
                        <Row className='achieve-row1'>
                            <Col className='achieve-col1 col-6 col-md-6 col-xl-4'>
                                <motion.img src={achieve21} alt='achieve21' className='achieve-img'
                                    initial={{x: -80,y : -80,  opacity: 0}}
                                    whileInView={{x: 0, y : 0,  opacity: 1}}
                                    transition={{delay: 0.25, duration: 0.85, type: 'tween'}}
                                />
                            </Col>
                            <Col className='achieve-col1 col-6 col-md-6 col-xl-4'>
                                <motion.img src={achieve22} alt='achieve22' className='achieve-img'
                                    initial={{x: -80,y : -80,  opacity: 0}}
                                    whileInView={{x: 0, y : 0,  opacity: 1}}
                                    transition={{delay: 0.25, duration: 0.85, type: 'tween'}}
                                />
                            </Col>
                            <Col className='achieve-col1 col-6 col-md-6 col-xl-4'>
                                <motion.img src={achieve23} alt='achieve23' className='achieve-img'
                                    initial={{x: -80,y : -80,  opacity: 0}}
                                    whileInView={{x: 0, y : 0,  opacity: 1}}
                                    transition={{delay: 0.25, duration: 0.85, type: 'tween'}}
                                />
                            </Col>
                            <Col className='achieve-col1 col-6 col-md-6 col-xl-4'>
                                <motion.img src={achieve24} alt='achieve24' className='achieve-img'
                                    initial={{x: -80,y : -80,  opacity: 0}}
                                    whileInView={{x: 0, y : 0,  opacity: 1}}
                                    transition={{delay: 0.25, duration: 0.85, type: 'tween'}}
                                />
                            </Col>
                            <Col className='achieve-col1 col-6 col-md-6 col-xl-4'>
                                <motion.img src={achieve25} alt='achieve25' className='achieve-img'
                                    initial={{x: -80,y : -80,  opacity: 0}}
                                    whileInView={{x: 0, y : 0,  opacity: 1}}
                                    transition={{delay: 0.25, duration: 0.85, type: 'tween'}}
                                />
                            </Col>
                            <Col className='achieve-col1 col-6 col-md-6 col-xl-4'>
                                <motion.img src={achieve26} alt='achieve26' className='achieve-img'
                                    initial={{x: -80,y : -80,  opacity: 0}}
                                    whileInView={{x: 0, y : 0,  opacity: 1}}
                                    transition={{delay: 0.25, duration: 0.85, type: 'tween'}}
                                />
                            </Col>
                        </Row>
                    </div>
                </Row>
            </Container>
        </>
     );
}

export default Achievement;