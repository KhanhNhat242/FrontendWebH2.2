import './Paper.scss'
import { Container, Row} from 'react-bootstrap'
import AchieveNav from '../achieveNav/AchieveNav'
import 'bootstrap/dist/css/bootstrap.min.css'

function Paper({ typePaper, topPaper, commonPaper }) {
    return ( 
        <Container>
            <Row className='paper-wrapper'>
                <div className='col-lg-2'>
                    {<AchieveNav typePaper={typePaper} />}
                </div>
                <div className='col-lg-10'>
                    {typePaper === 1 ? 
                        topPaper.map((tp) => (
                            <Row className='paper-row'>
                                <div className='col-lg-10 paper-col-left'>
                                    <h3 className='paper-title'>{tp.title}</h3>
                                    <h5 className='paper-author'>{tp.author}</h5>
                                    <p className='paper-abstract'>{tp.abstract}</p>
                                    <h3 className='paper-contest'>{tp.institute}</h3>
                                </div>
                                <div className='col-lg-2 paper-col-right'>
                                    <h2 className='paper-year'>{tp.year}</h2>
                                </div>
                            </Row>
                        ))
                    :
                    commonPaper.map((cp) => (
                        <Row className='paper-row'>
                        <div className='col-lg-10 paper-col-left'>
                            <h3 className='paper-title'>{cp.title}</h3>
                            <h5 className='paper-author'>{cp.author}</h5>
                            <p className='paper-abstract'>{cp.abstract}</p>
                            <h3 className='paper-contest'>{cp.institute}</h3>
                        </div>
                        <div className='col-lg-2 paper-col-right'>
                            <h2 className='paper-year'>{cp.year}</h2>
                        </div>
                    </Row>
                    ))
                }
                    
                </div>
            </Row>
        </Container>
     );
}

export default Paper;