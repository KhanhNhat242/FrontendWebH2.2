import './Event.scss'
import { Container, Row, Col } from 'react-bootstrap'
// import { Link } from 'react-router-dom'
import React from 'react'
import { motion } from 'framer-motion'

function Event ({ events }) {

    const handleNavigate = (id_event) => {
        window.location.href = `/event/${id_event}`
    }

    return ( 
        <>
            <Container className='achieve-wrapper custom-event-wrapper'>
                <Row className='achieve-row'>
                    <div className='col-lg-2 achieve-col-left'>
                        <motion.h2 
                            initial={{fontSize : "15px", x: -100, y : -200, opacity: 0}}
                            animate= {{fontSize : "35px", x: 0, y : 0, opacity: 1}} 
                            transition={{duration: 0.5, delay: 0.2, type: "spring", stiffness: 120}}
                            className='title'
                        >Sự Kiện</motion.h2>
                    </div>
                    <div className='col-lg-9 achieve-col-right'>
                        <Row className='paper-row'>
                            {events.map((event, index) => {
                                return (
                                    <Col className='custom-event col-12' key={index} onClick={() => handleNavigate(event.id_event)}>
                                        <motion.p 
                                            className='paper-txt1'
                                            initial={{x: -100 * ((-1)**index), y : 0, opacity: 0}}
                                            animate= {{x: 0, y : 0, opacity: 1}} 
                                            transition={{duration: 0.5, delay: 0.3 * index, type: "spring", stiffness: 130}}
                                        >{event.time}</motion.p>
                                        <motion.div 
                                            className='paper-txt2' 
                                            initial={{x: -100 * ((-1)**index), y : 0, opacity: 0}}
                                            animate= {{x: 0, y : 0, opacity: 1}} 
                                            transition={{duration: 0.5, delay: 0.3 * index, type: "spring", stiffness: 130}}
                                        >
                                            <h3>{event.name_event}</h3>
                                            <p>Kieu no nhu the nay ne anh</p>
                                        </motion.div>
                                    </Col>
                                )
                            })}
                        </Row>
                    </div>
                </Row>
            </Container>
        </>
     );      
}

export default Event