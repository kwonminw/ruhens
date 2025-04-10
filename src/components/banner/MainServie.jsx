import { Link } from 'react-router-dom';
import './MainServie.css';

const MainServie = () => {
    return (
        <div className="MainServie">
            <div className="service">
                <div className="content">
                    <h2 className="title">RUHENS SERVICE</h2>
                    <p className="txt1">올바른 제품 선택을 위한 최고의 약속</p>
                    <p className="txt2">
                        독보적인 루헨스만의 기술로 생산된 제품을 통해
                        건강하고 의심없는 물을 약속합니다.
                    </p>
                    <p className="btn">
                        <Link>서비스 자세히보기</Link>
                    </p>
                </div>
                <p className="bg"><img src='/img/main-service-visual.jpg' /></p>
            </div>
            <div className="insta">
                <p className="insta-id"><Link>@ruhens_official</Link></p>
                <p className="insta-name">instargram</p>
            </div>
        </div>
    )
}

export default MainServie;