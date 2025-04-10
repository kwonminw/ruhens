import { Link } from "react-router-dom";
import { Side } from "../../components";
import './Header.css';
import { useState } from "react";

function Header() {
    const [isSide, setIsSide] = useState(false);

    const handleSideOpen = () => {
        setIsSide(true);
    }

    return (
        <header id="header">
            <div className="inner">
                <h1 className="logo"><Link to='/'><img src="/img/logo.png" alt="루헨스" /></Link></h1>
                <p className="btn-open-side">
                    <button onClick={handleSideOpen}>
                        <span>모바일 사이드 열기</span>
                        <span></span>
                        <span></span>
                    </button>
                </p>
                <Side isSide={isSide} setIsSide={setIsSide} />
                <nav className="gnb">
                    <ul>
                        <li><Link to=''>루헨스 <img src="/img/icon-gnb-live.png" alt="Live" /></Link></li>
                        <li><Link to=''>이벤트/혜택</Link></li>
                        <li><Link to=''>정수기</Link></li>
                        <li><Link to=''>공기청정기</Link></li>
                        <li><Link to=''>비데</Link></li>
                        <li><Link to=''>키친&amp;바스</Link></li>
                        <li><Link to=''>소모품</Link></li>
                    </ul>
                </nav>
                <div className="utills">
                    <ul>
                        <li><Link>Brand</Link></li>
                        <li><Link>서비스</Link></li>
                        <li><Link>고객센터</Link></li>
                        <li><Link>B2B문의</Link></li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header;
