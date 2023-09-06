import title from '../../assets/h2title.png'
import backgroundimg from '../../assets/background.png'
import './Home.scss'
import { Container, Row, Col } from 'react-bootstrap'
import home21 from '../../assets/home21.png'
import home31 from '../../assets/image_home_31.png'
import home32 from '../../assets/image_home_32.png'
import home41 from '../../assets/image_home_41.png'
import sprit1 from '../../assets/spirit1.png'
import sprit2 from '../../assets/spirit2.png'
import sprit3 from '../../assets/spirit3.png'
import backgroundEvent from '../../assets/backgroundEvent3.png'
// import home41 from '../../assets/image_home_41.png'
import {Carousel} from 'react-bootstrap'
import {motion} from 'framer-motion'


function Home({ events }) {

    return ( 
        <>
            <div className="home-wrapper">
                <motion.img src={title} alt="AI-CLUB" className="h2-title"
                    initial={{x : "-50%", scale: 1.5,y: -100, opacity: 0}}
                    whileInView={{x : "-50%", scale: 1,y: 0, opacity: 1}}
                    transition={{delay: 0.3, duration: 1, type: 'Tween', stiffness: 140}}
                />
                <motion.img src={backgroundimg} alt="background-img" className='background-img' 
                    initial={{y: 100, opacity: 0}}
                    animate={{y: 0, opacity: 1}}
                    transition={{delay: 0.6, duration: 1, type: 'Tween', stiffness: 150}}
                />
                <motion.p className='ai-club-txt'
                    initial={{y: 300, scale: 0.1,opacity: 0}}
                    animate={{y:10, x: "-50%", scale: 1,opacity: 1}}
                    transition={{delay: 0.6, duration: 5, type: 'spring', stiffness: 120}}
                >
                    Câu lạc bộ Trí tuệ Nhân tạo là nơi dành cho sinh viên Công nghệ thông tin IUH học tập và nghiên cứu về trí tuệ nhân tạo
                </motion.p>
            </div>
            <div className='event-wrapper'>
                <img src={backgroundEvent} alt='background-event' className='background-event' />
                <h3 className='event-title'>Sự Kiện Sắp Tới</h3>
                <Carousel>
                    {events.map((ev) => (
                        <Carousel.Item interval={5000} key={ev.id_event}>
                            <div className='event-name-wrapper'>
                                <h3 className='event-name'>{ev.name_event}</h3>
                            </div>
                            <img src={`${ev.image_avatar}`} alt='event-img' className='event-img' />
                        </Carousel.Item>
                    ))}
                </Carousel>
            </div>
            <Container className='mission-wrapper'>
                <Row className='mission-row'>
                    <div className='col-lg-6 mission-col1'>
                        <motion.h1 className='mission-title'
                            initial={{x: -50,y : -50,  opacity: 0}}
                            whileInView={{x: 0, y : 0,  opacity: 1}}
                            transition={{delay: 0.2, duration: 0.5, type: 'spring', stiffness: 150}}
                        >AI CLUB và sứ mệnh</motion.h1>
                        <div className='mission-detail'>
                            <motion.p className='detail-txt'
                                initial={{y: -30,x : -60,  opacity: 0}}
                                whileInView={{x: 0, y : 0,  opacity: 1}}
                                transition={{delay: 0.3, duration: 0.5, type: 'spring', stiffness: 120}}
                            >Chúng tôi là câu lạc bộ Trí tuệ Nhân Tạo của Khoa Công nghệ thông tin IUH.</motion.p>
                            <motion.p className='detail-txt'
                                initial={{y: -30,x : -60,  opacity: 0}}
                                whileInView={{x: 0, y : 0,  opacity: 1}}
                                transition={{delay: 0.4, duration: 0.5, type: 'spring', stiffness: 120}}
                            >Chúng tôi tạo ra môi trường học tập và nghiên cứu để sinh viên Công nghệ 
                                thông tin IUH thực hiện các dự án nghiên cứu với sự giúp đỡ của các anh 
                                chị hướng dẫn. Các bạn sinh viên khi đến với AI CLUB đều được trang bị 
                                các kiến thức nền tảng về khoa học dữ liệu, trí tuệ nhân tạo, học máy 
                                thông qua các khóa học do câu lạc bộ tổ chức.</motion.p>
                            <motion.p className='detail-txt'
                                initial={{y: -30,x : -60,  opacity: 0}}
                                whileInView={{x: 0, y : 0,  opacity: 1}}
                                transition={{delay: 0.5, duration: 0.5, type: 'spring', stiffness: 120}}
                            >Tạo ra các bài báo nghiên cứu khoa học chất lượng.</motion.p>
                            <motion.p className='detail-txt'
                                initial={{y: -30,x : -60,  opacity: 0}}
                                whileInView={{x: 0, y : 0,  opacity: 1}}
                                transition={{delay: 0.6, duration: 0.5, type: 'spring', stiffness: 120}}
                            >Thúc đẩy tinh thần sinh viên Công nghệ thông tin 
                            tham gia nghiên cứu khoa học ở các cấp</motion.p>
                        </div>
                    </div>
                    <div className='col-lg-6 mission-col2'>'
                        <motion.img src={home21} alt='home21' className='home21-img'
                            initial={{x: -100,y : -100,  opacity: 0}}
                            whileInView={{x: 0, y : 0,  opacity: 1}}
                            transition={{delay: 0.3, duration: 0.85, type: 'tween', stiffness: 150}}
                        />
                    </div>
                </Row>
                <Row className='math-row'>
                    <Col className='math-col1'>
                        <div className='img-wrapper'>
                            <motion.img src={home31} alt='home31' className='home31-img'
                                initial={{x: -100,y : -100,  opacity: 0}}
                                whileInView={{x: 0, y : 0,  opacity: 1}}
                                transition={{delay: 0.25, duration: 0.85, type: 'tween'}}
                            />
                        </div>
                        <div className='img-wrapper'>
                            <motion.img src={home32} alt='home32' className='home32-img'
                                initial={{x: -100,y : -100,  opacity: 0}}
                                whileInView={{x: 0, y : 0,  opacity: 1}}
                                transition={{delay: 0.35, duration: 0.85, type: 'tween'}}
                            />
                        </div>
                    </Col>
                    <Col className='math-col2'>
                        <motion.h1 className='math-title'
                            initial={{x: -50,y : -50,  opacity: 0}}
                            whileInView={{x: 0, y : 0,  opacity: 1}}
                            transition={{delay: 0.2, duration: 0.5, type: 'spring', stiffness: 150}}
                        >Về Toán Học</motion.h1>
                        <div className='math-detail'>
                            <motion.p className='detail-txt'
                                initial={{y: -30,x : -60,  opacity: 0}}
                                whileInView={{x: 0, y : 0,  opacity: 1}}
                                transition={{delay: 0.3, duration: 0.5, type: 'spring', stiffness: 120}}
                            >Toán học là một phần không thể thiếu trong trí tuệ nhân tạo. Chính vì vậy, 
                                chúng tôi có các thành viên ở trong đội tuyển olympic toán sinh viên của trường.</motion.p>
                            <motion.p className='detail-txt'
                                initial={{y: -30,x : -60,  opacity: 0}}
                                whileInView={{x: 0, y : 0,  opacity: 1}}
                                transition={{delay: 0.4, duration: 0.5, type: 'spring', stiffness: 120}}
                            >Trong các năm tham gia olympic toán sinh viên toàn quốc, các thành viên của AI CLUB 
                                đã đạt được các thành tích đáng nể như 2 giải nhì, và 15 giải ba.</motion.p>
                            <motion.p className='detail-txt'
                                initial={{y: -30,x : -60,  opacity: 0}}
                                whileInView={{x: 0, y : 0,  opacity: 1}}
                                transition={{delay: 0.5, duration: 0.5, type: 'spring', stiffness: 120}}
                            >Để thúc đẩy niềm đam mê toán học, hàng năm chúng tôi đều tạo điều kiện cho các thành
                                viên tham dự kỳ thi olympic Toán.</motion.p>
                        </div>
                    </Col>
                </Row>
                <Row className='spirit-row'>
                    <Col className='spirit-col'>
                        <div className='spirit-img-wrapper'>
                            <motion.img src={sprit1} alt='spirit-img' className='spirit-img' 
                                initial={{ scale : 0.1,opacity: 0}}
                                whileInView={{  scale : 1,opacity: 1}}
                                transition={{delay: 0.3, duration: 0.5, type: 'tween'}}
                            />
                        </div>
                        <motion.p className='spirit-txt'
                             initial={{x: -50,y : -50,  opacity: 0}}
                             whileInView={{x: 0, y : 0,  opacity: 1}}
                             transition={{delay: 0.2, duration: 0.5, type: 'spring', stiffness: 150}}
                        >Một tập thể đoàn kết hỗ trợ lẫn nhau</motion.p>
                    </Col>
                    <Col className='spirit-col'>
                        <div className='spirit-img-wrapper'>
                            <motion.img src={sprit2} alt='spirit-img' className='spirit-img' 
                                initial={{ scale : 0.1,opacity: 0}}
                                whileInView={{  scale : 1,opacity: 1}}
                                transition={{delay: 0.3, duration: 0.5, type: 'tween'}}
                            />
                        </div>
                        <motion.p className='spirit-txt'
                             initial={{x: -50,y : -50,  opacity: 0}}
                             whileInView={{x: 0, y : 0,  opacity: 1}}
                             transition={{delay: 0.2, duration: 0.5, type: 'spring', stiffness: 150}}
                        >Tôn trọng và thấu hiểu nhau</motion.p>
                    </Col>
                    <Col className='spirit-col'>
                        <div className='spirit-img-wrapper'>
                            <motion.img src={sprit3} alt='spirit-img' className='spirit-img' 
                                initial={{ scale : 0.1,opacity: 0}}
                                whileInView={{  scale : 1,opacity: 1}}
                                transition={{delay: 0.3, duration: 0.5, type: 'tween'}}
                            />
                        </div>
                        <motion.p className='spirit-txt'
                             initial={{x: -50,y : -50,  opacity: 0}}
                             whileInView={{x: 0, y : 0,  opacity: 1}}
                             transition={{delay: 0.2, duration: 0.5, type: 'spring', stiffness: 150}}
                        > Kết nối sinh viên để tạo nên giá trị thực</motion.p>
                    </Col>
                </Row>
                <Row>
                    <img src={home41} alt='home41' style={{padding: 0}} />
                </Row>
            </Container>
        </>
     );
}

export default Home;