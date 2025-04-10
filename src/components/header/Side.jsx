import { Link } from 'react-router-dom';
import './Side.css';

const Side = ({ isSide, setIsSide }) => {
    const handleSideClose = () => {
        setIsSide(false);
    };

    return (
        <div className={`Side ${isSide ? 'view' : ''}`}>
            <div className='side-inner'>
                <p className='side-logo'><img src='/img/logo.png' alt='루헨스' /></p>
                <div className="side-utills">
                    <ul>
                        <li><Link>Brand</Link></li>
                        <li><Link>서비스</Link></li>
                        <li><Link>고객센터</Link></li>
                        <li><Link>B2B문의</Link></li>
                    </ul>
                </div>
                <nav className="side-gnb">
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
                <p className='btn-close-side'>
                    <button onClick={handleSideClose}>
                        <span className='hide'>사이드 닫기</span>
                        <span className='bar1'></span>
                        <span className='bar2'></span>
                    </button>
                </p>
            </div>
        </div>
    )
}

export default Side;