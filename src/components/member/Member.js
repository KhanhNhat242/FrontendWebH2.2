import './Member.scss'
import { Container, Row } from 'react-bootstrap'
import MrTinh from '../../assets/MrTinh.png'
import 'bootstrap/dist/css/bootstrap.min.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css'; 
import responsive from '../globalStyle/ResponsiveCarousel'

// {
//     "mssv":0,
//     "full_name":"Nguyễn Hữu Tình",
//     "describe":"Giảng viên trường đại học Công Nghiệp TP.HCM.Trên 10 năm kinh nghiệm dẫn dắt đội tuyển olympic. ",
//     "role":"mentor",
//     "class_school":"Giảng viên",
//     "email":"None",
//     "image":"https://drive.google.com/drive/folders/1mEgPa__OYCxq6BtZYuWXWf5Hs77F_8PZ11NFPIO-PgidZLGxjJKjD_mO0pNcpKZU_JT9PgPE",
//     "id_user":24
// }

function Member() {
    return ( 
        <>
            <Container className='member-wrapper'>
                <Row className='member-row1'>
                    <h2 className='role'>Mentor</h2>
                </Row>
                <Row className='member-row2'>
                    <div className='col-lg-4 member-col1'>
                        <div className='avt-wrapper'>
                            <a href='/member' className='avt-link'>
                                <img src={MrTinh} alt='avt' className='avt-mentor' />
                            </a>
                        </div>
                        {/* <img src={MrTinh} alt='mentor' className='avt-mentor' /> */}
                        <div className='detail-wrapper'>
                            <h4 className='name'>Nguyễn Hữu Tình</h4>
                            <h5 className='position'>Giảng viên</h5>
                        </div>
                    </div>
                    <div className='col-lg-8 member-col1'>
                        <p className='detail'>Giảng viên trường đại học Công Nghiệp TP.HCM.Trên 10 năm kinh nghiệm dẫn dắt đội tuyển olympic.</p>
                    </div>
                </Row>
            </Container>
            <Container className='member-detail-wrapper'>
                <Row className='member-detail-row'>
                    <h2 className='role'>Core Member</h2>
                </Row>
                <Row className='member-detail-row'>
                    <div className='col-lg-3 member-detail-col'>
                        <img src='https://github.com/aiwiki/image_member/blob/main/21114651.png?raw=true' alt='avt-detail' className='avt-detail' />
                    </div>
                    <div className='col-lg-9 member-detail-col'>
                        <p className='detail-member'>Sinh viên năm 3 ngành Khoa học dữ liệu của Trường Đh Công Nghiệp TP.HCM (IUH). Hiện tại mình 
                        đang tập trung nghiên cứu về lĩnh vực AI và làm những dự án nghiên cứu, xây dựng sản phẩm phục vụ lợi ích cộng đồng.<br/>
                        Thành tựu:<br/>- Đạt giải nhất tại cuộc thi khởi nghiệp đổi mới sáng tạo InnoGreenLife 2023.<br/>- Đạt giải ba ICPC Quốc 
                        gia 2022 (Việt Nam) (Cuộc thi lập trình danh giá nhất dành cho sinh viên các trường đại học, cao đẳng trên toàn cầu)<br/>
                        - Giải khuyến khích Eureka cấp trường 2022<br/>- Thành viên đội tuyển tin học IUH 2021, 2022<br/>- Data Engineer, 
                        Intern tại Real-Time Analytics (RTA)</p>
                    </div>
                </Row>
                    <Carousel responsive={responsive} className='carousel-wrapper'>
                        <div className='avt-wrapper'>
                            <img src='https://github.com/aiwiki/image_member/blob/main/21114651.png?raw=true' alt='avt' className='avt-member' />
                        </div>    
                        <div className='avt-wrapper'>
                            <img src='https://github.com/aiwiki/image_member/blob/main/21114651.png?raw=true' alt='avt' className='avt-member' />
                        </div> 
                        <div className='avt-wrapper'>
                            <img src='https://github.com/aiwiki/image_member/blob/main/21114651.png?raw=true' alt='avt' className='avt-member' />
                        </div> 
                        <div className='avt-wrapper'>
                            <img src='https://github.com/aiwiki/image_member/blob/main/21114651.png?raw=true' alt='avt' className='avt-member' />
                        </div> 
                        <div className='avt-wrapper'>
                            <img src='https://github.com/aiwiki/image_member/blob/main/21114651.png?raw=true' alt='avt' className='avt-member' />
                        </div> 
                        <div className='avt-wrapper'>
                            <img src='https://github.com/aiwiki/image_member/blob/main/21114651.png?raw=true' alt='avt' className='avt-member' />
                        </div> 
                        <div className='avt-wrapper'>
                            <img src='https://github.com/aiwiki/image_member/blob/main/21114651.png?raw=true' alt='avt' className='avt-member' />
                        </div> 
                        <div className='avt-wrapper'>
                            <img src='https://github.com/aiwiki/image_member/blob/main/21114651.png?raw=true' alt='avt' className='avt-member' />
                        </div> 
                        <div className='avt-wrapper'>
                            <img src='https://github.com/aiwiki/image_member/blob/main/21114651.png?raw=true' alt='avt' className='avt-member' />
                        </div> 
                    </Carousel>    
            </Container>
        </>
     );
}

export default Member;