import './Event.scss'
import { Container, Row, Col } from 'react-bootstrap'
import React from 'react'
import {useState, useEffect} from 'react'
import background from '../../assets/event-2.jpg'
import axios from 'axios'

function EventDetail ({ typePage }) {

    const [event, setEvent] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    
    let url = window.location.href
    let id = url.split('/')[url.split('/').length - 1]

    useEffect(()=>{
        const getData = async () => {
            try {
                const res = await axios.get(`https://aiclubiuh-core.tranminh20.repl.co/api/event/${id}`)
                console.log(res.data)
                setEvent(res.data)
                setLoading(false)
            }
            catch(err) {
                console.log(err)
                setError(err)
                setLoading(false)
            }
        }
        getData()
    },[])

    typePage = 4
    console.log(event)
    let richText = event.content

    return ( 
        <>
            <div className='wrapper'>
                <img src={"https://aiclubiuh-core.tranminh20.repl.co" + event.image_avatar} alt='background' className='achievement-background' />
            </div>
            <Container className='achieve-wrapper'>
                <div className='custom-container'>
                    <div className = "wrap-content-event">
                    <div className='wrap-text'>
                        <h2 className='title'>{event.name_event}</h2>
                        {/* <p className='description'></p> */}
                    </div>
                        <div dangerouslySetInnerHTML={{ __html: richText }} />
                    </div>
                    { event.form_register && <div className='wrap-btn-apply'> 
                        <button className='btn btn-primary btn-back'>Tham gia</button> 
                    </div>}
                </div>
            </Container>
        </>
     );      
}

export default EventDetail