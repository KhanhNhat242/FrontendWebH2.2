import './Achievement.scss'
import background from '../../assets/image_achive_11.png'
import title from '../../assets/h1 #headline.png'
import { Container, Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import achieve21 from '../../assets/achieve21.png'
import achieve22 from '../../assets/achieve22.png'
import achieve23 from '../../assets/achieve23.png'
import achieve24 from '../../assets/achieve24.png'
import achieve25 from '../../assets/achieve25.png'
import achieve26 from '../../assets/achieve26.png'
import AchieveNav from './achieveNav/AchieveNav'

function Achievement() {
    const typePaper = 0

    return ( 
        <>
            <div className='wrapper'>
                <img src={background} alt='background' className='achievement-background' />
                <img src={title} alt='title' className='achievement-title' />
            </div>
            <Container className='achieve-wrapper'>
                <Row className='achieve-row'>
                    <div className='col-lg-2 achieve-col-left'>
                        {<AchieveNav typePaper={typePaper} />}
                    </div>
                    <div className='col-lg-10 achieve-col-right'>
                        <p className='achieve-txt'>Trải qua 3 năm thành lập và phát triển chúng mình đã nỗi lực cố gắng tạo giá thật nhiều giá trị 
                            cho cộng đồng với hàng chục bài báo được chấp nhận tại các hội nghị lớn, nhỏ hằng năm. Các 
                            hội nghị uy tín mà chúng tôi đã tham gia như YSC, FDSE, Euréka, ....</p>
                        <h3 className='paper-title'>Số lượng bài báo tương ứng với các cuộc thi</h3>
                        <Row className='paper-row'>
                            <Col className='paper-col'>
                                <p className='paper-txt1'>Euréka</p>
                                <p className='paper-txt2'>200</p>
                            </Col>
                            <Col className='paper-col'>
                                <p className='paper-txt1'>FDSE</p>
                                <p className='paper-txt2'>300</p>
                            </Col>
                            <Col className='paper-col'>
                                <p className='paper-txt1'>YSC</p>
                                <p className='paper-txt2'> 500</p>
                            </Col>
                            <Col className='paper-col'>
                                <p className='paper-txt1'>Tổng</p>
                                <p className='paper-txt2'>1000</p>
                            </Col>
                        </Row>
                        <Row className='achieve-row1'>
                            <Col className='achieve-col1'>
                                <img src={achieve21} alt='achieve21' className='achieve-img'/>
                                <img src={achieve22} alt='achieve22' className='achieve-img'/>
                            </Col>
                            <Col className='achieve-col1'>
                                <img src={achieve23} alt='achieve23' className='achieve-img'/>
                                <img src={achieve24} alt='achieve24' className='achieve-img'/>
                            </Col>
                            <Col className='achieve-col1'>
                                <img src={achieve25} alt='achieve25' className='achieve-img'/>
                                <img src={achieve26} alt='achieve26' className='achieve-img achieve-img2'/>
                            </Col>
                            <Col className='achieve-col2'>
                                <img src={achieve26} alt='achieve26' className='achieve-img3'/>
                            </Col>
                        </Row>
                    </div>
                </Row>
            </Container>
        </>
     );
}

export default Achievement;