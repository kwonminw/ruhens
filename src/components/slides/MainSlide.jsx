import { Link } from "react-router-dom";
import Slider from "react-slick";
import { formattedBr } from "../../utills";
import "slick-carousel/slick/slick.css";
import './MainSlide.css';

const data = [
    {
        id: 0,
        moImg: '/img/mo-main1-1.jpg',
        pcImg: '/img/main1-1.jpg',
        text1: '루헨스 리뉴얼',
        text2: '더 심플하고\n단정해진',
        text3: '루헨스 무전원 정수기 슬림+\nWHP-3200'
    },
    {
        id: 1,
        moImg: '/img/mo-main1-2.jpg',
        pcImg: '/img/main1-2.jpg',
        text1: '루헨스 신제품',
        text2: '투명한 창에 담아\n더 깨끗하게!',
        text3: '루헨스 더 프레임 정수기\nWHP-3300'
    },
    {
        id: 2,
        moImg: '/img/mo-main1-3.jpg',
        pcImg: '/img/main1-3.jpg',
        text1: '루헨스 신제품',
        text2: '한번 더 깨끗하게\n한번 더 신선하게',
        text3: '루헨스 얼음정수기\nWHP-2500'
    },
    {
        id: 3,
        moImg: '/img/mo-main1-4.jpg',
        pcImg: '/img/main1-4.jpg',
        text1: '루헨스 신제품',
        text2: '기본이 되는 공기 청정,\n단 하나에 집중합니다.',
        text3: '루헨스 공기청정기 에어\nWHA-350'
    },
    {
        id: 4,
        moImg: '/img/mo-main1-5.jpg',
        pcImg: '/img/main1-5.jpg',
        text1: '루헨스 신제품',
        text2: '편리함은 물론,\n친환경까지!',
        text3: '루헨스 대용량 업소용 정수기\nWHP-3900'
    },
    {
        id: 5,
        moImg: '/img/mo-main1-6.jpg',
        pcImg: '/img/main1-6.jpg',
        text1: '루헨스 신제품',
        text2: '새로운\n물살의 기준',
        text3: '루헨스 퍼펙트 웨이브 비데\nWHB-5300'
    },
    {
        id: 6,
        moImg: '/img/mo-main1-7.jpg',
        pcImg: '/img/main1-7.jpg',
        text1: '루헨스 신제품',
        text2: '편리함은 물론,\n위생까지!',
        text3: '루헨스 냉온 정수기\nWHP-4200/4200S'
    },
];

const MainSlide = () => {
    const settings = {
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 6000, // 6초마다 플레이
        speed: 1500
    }

    return (
        <div className="MainSlide">
            <Slider {...settings}>
                {data.map(dt =>
                    <div key={dt.id} className="mainSlide-item">
                        <Link to=''>
                            <img className="pc" src={dt.pcImg} alt={dt.text3} />
                            <img className="mo" src={dt.moImg} alt={dt.text3} />
                            <div className="text">
                                <p className="tx1">{dt.text1}</p>
                                <p className="tx2">{formattedBr(dt.text2)}</p>
                                <p className="tx3">{formattedBr(dt.text3)}</p>
                            </div>
                        </Link>
                    </div>
                )}
            </Slider>
        </div>
    )
}

export default MainSlide;