import { Link } from "react-router-dom";
import './MainTop.css';

const MainTop = () => {
    return (
        <div className="MainTop">
            <div className="inner">
                <div className="content">
                    <Link to="/">
                        <img src="/img/mo-main-top.png" alt="루헨스 제휴카드 혜택 안내" className="mo" />
                        <img src="/img/main-top.png" alt="루헨스 제휴카드 혜택 안내" className="pc" />
                    </Link>
                </div>
                <div className="close">
                    <button>
                        <img src="/img/icon-page-top-close.png" alt="닫기" />
                        <span>오늘하루<br />열지 않기</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default MainTop;