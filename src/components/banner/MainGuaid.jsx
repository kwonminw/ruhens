import { Link } from 'react-router-dom';
import './MainGuaid.css';

const MainGuaid = () => {
    return (
        <div className="MainGuaid">
            <div className="guaid gu1">
                <div className="content">
                    <h3 className="title">제품 고르기가 힘드신가요?</h3>
                    <p className="ment">고객님 가까이에 있는 친절한 <br /> 루디가 도와드리겠습니다.</p>
                    <p className="btn"><Link to=''>루디 매칭 신청하기</Link></p>
                </div>
                <p className="bg"><img src='/img/main-rudi-visual_new.png' /></p>
            </div>
            <div className="guaid gu2">
                <div className="content">
                    <h3 className="title">렌탈요금 알뜰하게 할인받는 방법은?</h3>
                    <p className="ment">루헨스 제휴카드로 프리미엄 <br /> 렌탈 서비스를 시작하세요!</p>
                    <p className="btn"><Link to=''>할인혜택 보기</Link></p>
                </div>
                <p className="bg"><img src='/img/main-benefit-visual.png' /></p>
            </div>
            <div className="adver">
                <Link to=''><img src="/img/main-naver.jpg" alt="루헨스X네이버, 렌탈과 구매를 빠르고 간편하게" /></Link>
            </div>
        </div>
    )
}

export default MainGuaid;