import './Event.scss'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import React from 'react'


function Event () {
    return ( 
        <>
            <Container className='achieve-wrapper custom-event-wrapper'>
                <Row className='achieve-row'>
                    <div className='col-lg-2 achieve-col-left'>
                        <h2 className='title'>Sự Kiện</h2>
                    </div>
                    <div className='col-lg-9 achieve-col-right'>
                        <Row className='paper-row'>
                            <Col className='custom-event col-12'>
                                <p className='paper-txt1'>18/03/2023</p>
                                <Link className='paper-txt2' to='/event/1'>
                                    <h3>Tham gia các khóa training</h3>
                                    <p>Lập trình Python, crawl data, toán cho IT, xác suất thống kê, Data visualization, Machine learning, Deep Learning,..(hoàn toàn miễn phí do các anh chị mentor tổ chức).
- Học và tuyển chọn tham gia cuộc thi Toán học Sinh viên toàn quốc.</p>
                                </Link>
                            </Col>
                            <Col className='custom-event col-12'>
                                <p className='paper-txt1'>18/03/2023</p>
                                <Link className='paper-txt2' to='/event/2'>
                                    <h3>Nghiên cứu và tham gia các hội nghị khoa học cấp trường, quốc gia, quốc tế</h3>
                                    <p></p>
                                </Link>
                            </Col>
                            <Col className='custom-event col-12'>
                                <p className='paper-txt1'>18/03/2023</p>
                                <Link className='paper-txt2' to='/event/3'>
                                    <h3>Tổ chức các buổi Workshop, Seminar và các hội nghị, gần đây nhất là có Workshop Công nghệ mới</h3>
                                    <p>Metaverse in real life tổ chức ở hội trường V8.05 với sự tham gia của hơn 150 giảng viên và sinh viên.</p>
                                </Link>
                            </Col>
                        </Row>
                    </div>
                </Row>
            </Container>
        </>
     );      
}

export default Event