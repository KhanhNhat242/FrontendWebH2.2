import title from '../../assets/h2title.png'
import backgroundimg from '../../assets/background.png'
import './Home.scss'
import { Container, Row, Col } from 'react-bootstrap'
import home21 from '../../assets/home21.png'
import home31 from '../../assets/image_home_31.png'
import home32 from '../../assets/image_home_32.png'
// import home41 from '../../assets/image_home_41.png'
import sprit1 from '../../assets/spirit1.png'
import sprit2 from '../../assets/spirit2.png'
import sprit3 from '../../assets/spirit3.png'
import backgroundEvent from '../../assets/backgroundEvent.png'
import {Carousel} from 'react-bootstrap'

function Home({ events }) {

    console.log(events);

    return ( 
        <>
            <div className="home-wrapper">
                <img src={backgroundimg} alt="background-img" className='background-img' />
                <img src={title} alt="AI-CLUB" className="h2-title"/>
                <p className='ai-club-txt'>Câu lạc bộ Trí tuệ Nhân tạo là nơi dành cho sinh viên Công nghệ thông tin IUH học tập và 
                    nghiên cứu về trí tuệ nhân tạo</p>
            </div>
            <div className='event-wrapper'>
                <img src={backgroundEvent} alt='background-event' className='background-event' />
                <h3 className='event-title'>Sự Kiện Sắp Tới</h3>
                <Carousel>
                    {events.map((ev) => (
                        <Carousel.Item interval={10000000}>
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
                        <h1 className='mission-title'>AI CLUB và sứ mệnh</h1>
                        <div className='mission-detail'>
                            <p className='detail-txt'>Chúng tôi là câu lạc bộ Trí tuệ Nhân Tạo của Khoa Công nghệ thông tin IUH.</p>
                            <p className='detail-txt'>Chúng tôi tạo ra môi trường học tập và nghiên cứu để sinh viên Công nghệ 
                                thông tin IUH thực hiện các dự án nghiên cứu với sự giúp đỡ của các anh 
                                chị hướng dẫn. Các bạn sinh viên khi đến với AI CLUB đều được trang bị 
                                các kiến thức nền tảng về khoa học dữ liệu, trí tuệ nhân tạo, học máy 
                                thông qua các khóa học do câu lạc bộ tổ chức.</p>
                            <p className='detail-txt'>Tạo ra các bài báo nghiên cứu khoa học chất lượng.</p>
                            <p className='detail-txt'>Thúc đẩy tinh thần sinh viên Công nghệ thông tin 
                            tham gia nghiên cứu khoa học ở các cấp</p>
                        </div>
                    </div>
                    <div className='col-lg-6 mission-col2'>'
                        <img src={home21} alt='home21' className='home21-img'/>
                    </div>
                </Row>
                <Row className='math-row'>
                    <Col className='math-col1'>
                        <div className='img-wrapper'>
                            <img src={home31} alt='home31' className='home31-img'/>
                        </div>
                        <div className='img-wrapper'>
                            <img src={home32} alt='home32' className='home32-img'/>
                        </div>
                    </Col>
                    <Col className='math-col2'>
                        <h1 className='math-title'>Về Toán Học</h1>
                        <div className='math-detail'>
                            <p className='detail-txt'>Toán học là một phần không thể thiếu trong trí tuệ nhân tạo. Chính vì vậy, 
                                chúng tôi có các thành viên ở trong đội tuyển olympic toán sinh viên của trường.</p>
                            <p className='detail-txt'>Trong các năm tham gia olympic toán sinh viên toàn quốc, các thành viên của AI CLUB 
                                đã đạt được các thành tích đáng nể như 2 giải nhì, và 15 giải ba.</p>
                            <p className='detail-txt'>Để thúc đẩy niềm đam mê toán học, hàng năm chúng tôi đều tạo điều kiện cho các thành
                                viên tham dự kỳ thi olympic Toán.</p>
                        </div>
                    </Col>
                </Row>
                <Row className='spirit-row'>
                    <Col className='spirit-col'>
                        <div className='spirit-img-wrapper'>
                            <img src={sprit1} alt='spirit-img' className='spirit-img' />
                        </div>
                        <p className='spirit-txt'>Một tập thể đoàn kết hỗ trợ lẫn nhau</p>
                    </Col>
                    <Col className='spirit-col'>
                        <div className='spirit-img-wrapper'>
                            <img src={sprit2} alt='spirit-img' className='spirit-img' />
                        </div>
                        <p className='spirit-txt'>Tôn trọng và thấu hiểu nhau</p>
                    </Col>
                    <Col className='spirit-col'>
                        <div className='spirit-img-wrapper'>
                            <img src={sprit3} alt='spirit-img' className='spirit-img' />
                        </div>
                        <p className='spirit-txt'> Kết nối sinh viên tài năng để  tạo nên giá trị thực</p>
                    </Col>
                </Row>
                {/* <Row>
                    <img src={home41} alt='home41' style={{padding: 0}} />
                </Row> */}
            </Container>
        </>
     );
}

export default Home;