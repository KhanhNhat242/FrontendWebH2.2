import './Event.scss'
import { Container, Row, Col } from 'react-bootstrap'
import React from 'react'
import background from '../../assets/event-2.jpg'

function EventDetail ({ typePage }) {

    typePage = 4

    const richText = `
    This is a <strong>rich text</strong> paragraph with <em>different</em> styles.
    You can also add <a href="https://www.example.com">links</a> within the text.
  `;

    return ( 
        <>
            <div className='wrapper'>
                <img src={background} alt='background' className='achievement-background' />
            </div>
            <Container className='achieve-wrapper'>
                <div className='custom-container'>
                    <div className = "wrap-content-event">
                    <div className='wrap-text'>
                        <h2 className='title'>Tham gia các khóa training H2.2</h2>
                        <p className='description'>Lập trình Python, crawl data, toán cho IT, xác suất thống kê, Data visualization, Machine learning, Deep Learning,..(hoàn toàn miễn phí do các anh chị mentor tổ chức).
                        - Học và tuyển chọn tham gia cuộc thi Toán học Sinh viên toàn quốc.</p>
                    </div>
                        <div dangerouslySetInnerHTML={{ __html: richText }} />
                    </div>
                    <div className='wrap-btn-apply'> 
                        <button className='btn btn-primary btn-back'>Tham gia</button> 
                    </div>
                </div>
            </Container>
        </>
     );      
}

export default EventDetail