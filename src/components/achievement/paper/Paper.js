import './Paper.scss'
import { Container, Row, Col} from 'react-bootstrap'
import AchieveNav from '../achieveNav/AchieveNav'
import 'bootstrap/dist/css/bootstrap.min.css'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect } from 'react'

function Paper({ typePaper, paper }) {
    
    const handleTopPaper = () => {
        paper.sort((a, b) => {
            return b.year - a.year
        })

        return paper.map((p) => {
            if(typePaper === 1 && p.interest === 'True')
                return (
                    <Row className='paper-row' key={p.title}>
                        <div className='col-lg-10 paper-col-left'>
                            {p.link_paper !== 'nan' ? 
                                (<a href={p.link_paper} style={{textDecoration: 'none'}}>
                                    <h3 className='paper-title'>{p.title}</h3>
                                </a>) : 
                                (<h3 className='paper-title'>{p.title}</h3>)}
                            <h5 className='paper-author'>{p.author}</h5>
                            <p className='paper-abstract'>{p.abstract}</p>
                            <Row>
                                <Col>
                                    <h3 className='paper-contest'>{p.institute}</h3>
                                </Col>
                                <Col>
                                    <a href={p.link_github} style={{display: `${p.link_github !== 'nan' ? 'block' : 'none'}`}}>
                                        <button className='btnCode'>
                                            <FontAwesomeIcon icon={faGithub}/>
                                            <span className='btnCode-txt'>Code</span>
                                        </button>
                                    </a>
                                </Col>
                            </Row>
                        </div>
                        <div className='col-lg-2 paper-col-right'>
                            <h2 className='paper-year'>{p.year}</h2>
                        </div>
                    </Row>
                )
            return null
        })
    }

    const handleAllPaper = () => {
        paper.sort((a, b) => {
            return b.year - a.year
        })

        return paper.map((p) => {
            if(typePaper === 2)
                return (
                    <Row className='paper-row' key={p.title}>
                        <div className='col-lg-10 paper-col-left'>
                            {p.link_paper !== 'nan' ? 
                                    (<a href={p.link_paper} style={{textDecoration: 'none'}}>
                                        <h3 className='paper-title'>{p.title}</h3>
                                    </a>) : 
                                    (<h3 className='paper-title'>{p.title}</h3>)}
                            <h5 className='paper-author'>{p.author}</h5>
                            <p className='paper-abstract'>{p.abstract}</p>
                            <Row>
                                <Col>
                                    <h3 className='paper-contest'>{p.institute}</h3>
                                </Col>
                                <Col>
                                    <a href={p.link_github} style={{display: `${p.link_github !== 'nan' ? 'block' : 'none'}`}}>
                                        <button className='btnCode'>
                                            <FontAwesomeIcon icon={faGithub}/>
                                            <span className='btnCode-txt'>Code</span>
                                        </button>
                                    </a>
                                </Col>
                            </Row>
                        </div>
                        <div className='col-lg-2 paper-col-right'>
                            <h2 className='paper-year'>{p.year}</h2>
                        </div>
                    </Row>
                )
            return null
        })
    }

    return ( 
        <Container>
            <Row className='paper-wrapper'>
                <div className='col-lg-2'>
                    {<AchieveNav typePaper={typePaper} />}
                </div>
                <div className='col-lg-10'>
                    {typePaper === 1 ? handleTopPaper() : handleAllPaper()}  
                </div>
            </Row>
        </Container>
     );
}

export default Paper;