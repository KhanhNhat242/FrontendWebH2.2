import './Paper.scss'
import { Container, Row} from 'react-bootstrap'
import AchieveNav from '../achieveNav/AchieveNav'
import 'bootstrap/dist/css/bootstrap.min.css'

function Paper({ typePaper }) {
    return ( 
        <Container>
            <Row className='paper-wrapper'>
                <div className='col-lg-2'>
                    {<AchieveNav typePaper={typePaper} />}
                </div>
                <div className='col-lg-10'>
                    <Row className='paper-row'>
                        <div className='col-lg-10 paper-col-left'>
                            <h3 className='paper-title'>SỬ DỤNG THUẬT TOÁN PHÂN CỤM ĐỂ ĐỀ XUẤT VỊ TRÍ TRẠM XE ĐƯA ĐÓN NHÂN VIÊN</h3>
                            <h5 className='paper-author'>ĐÀO XUÂN HOÀNG TUẤN, NGUYỄN VĂN NAM 1, NGUYỄN ĐÌNH NGUYÊN BẮC 1, NGUYỄN NĂNG ANH 1, ĐỒNG MẠNH DŨNG 1, LÊ PHÚC LỮ</h5>
                            <p className='paper-abstract'>Tóm tắt: Việc tổ chức đưa đón nhân viên đi làm mỗi buổi sáng là một hoạt động thiết yếu của nhiều công ty lớn. Với lượng xe có hạn và 
                                thông tin khảo sát về chỗ ở của các nhân viên, người quản lý sẽ cân nhắc việc bố trí các trạm xe buýt sao cho hợp lý, giảm thiểu tổng 
                                quãng đường di chuyển của nhân viên. Nhằm giải quyết bài toán đó, trong nghiên cứu này, nhóm chúng tôi tìm hiểu sử dụng thuật toán
                                 phân cụm K-means để chia nhỏ thành các khu vực mà nhân viên ở gần nhau, dựa trên dữ liệu đầu vào là danh sách địa chỉ nhân viên, sau 
                                 đó chúng tôi mã hóa địa chỉ bằng ArcGIS API và tính toán ma trận khoảng cách theo đường chim bay dựa trên kinh độ - vĩ độ quy đổi 
                                 sang tọa độ cực. Trên cơ sở có các cụm, nhóm cũng tìm hiểu triển khai thuật toán Convex Hull tìm bao lồi cho các khu vực và trực 
                                 quan hóa lên bản đồ thành các miền riêng biệt cho dễ quan sát</p>
                            <h3 className='paper-contest'>YSC</h3>
                        </div>
                        <div className='col-lg-2 paper-col-right'>
                            <h2 className='paper-year'>2021</h2>
                        </div>
                    </Row>
                    <Row className='paper-row'>
                        <div className='col-lg-10 paper-col-left'>
                            <h3 className='paper-title'>A novel approach for Vietnamese SpeechRecognition using Conformer</h3>
                            <h5 className='paper-author'>Nguyen Van Anh Tuan, Nguyen Thi Thanh Hoa, Nguyen Thanh Dat, PhamMinh Tuan, Dao Duy Truong, and Dang Thi Phuc</h5>
                            <p className='paper-abstract'>Abstract Research on speech recognition has existed for a long time,but there is very little research on 
                                applying deep learning to Vietnameselanguage speech recognition. In this paper, we solve the Vietnamesespeech recognition problem by 
                                deep learning speech recognition frame-works including CTC and Joint CTC/Attention combined with encoderarchitectures Conformer. Experimental 
                                results achieved moderate accu-racy using over 115 hours of training data of VLSP and Vivos. Comparedwith the other models, the training results 
                                show that the Conformermodel trained on CTC achieved good results with a WER value of 20%.Training on big data gives remarkable results and is 
                                the basis for us tocontinue improving the model and increasing accuracy in the future.</p>
                            <h3 className='paper-contest'>FDSE</h3>
                        </div>
                        <div className='col-lg-2 paper-col-right'>
                            <h2 className='paper-year'>2021</h2>
                        </div>
                    </Row>
                </div>
            </Row>
        </Container>
     );
}

export default Paper;