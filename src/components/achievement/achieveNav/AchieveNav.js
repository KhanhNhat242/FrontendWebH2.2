import './AchieveNav.scss'

function AchieveNav({ typePaper }) {

    // console.log(typePaper);

    return ( 
        <div className='btn-wrapper'>
            <a href='/achievement' className='achieve-link'>
                <button className={`achieve-btn ${typePaper === 0 ? 'isActive' : ''}`}>Tổng quan</button>
            </a>
            <a href='/achievement/top-paper' className='achieve-link'>
                <button className={`achieve-btn ${typePaper === 1 ? 'isActive' : ''}`}>Bài báo nổi bật</button>
            </a>
            <a href='/achievement/all-paper' className='achieve-link'>
                <button className={`achieve-btn ${typePaper === 2 ? 'isActive' : ''}`}>Tất cả bài báo</button>
            </a>
        </div>
     );
}

export default AchieveNav;