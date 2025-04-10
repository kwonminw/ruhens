import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import './Carousel124.css';

const data = [
    {
        id: 1,
        src: '/img/product1.jpg',
        model: 'WHP-3300',
        name: '더 프레임 직수형 냉온수기',
        descript: '슬림 프레임, 2 IN 1 코크, 셀프관리',
        price: '27,900원~'
    },
    {
        id: 2,
        src: '/img/product2.jpg',
        model: 'WHP-2500',
        name: '직수형 얼음정수기',
        descript: '깨끗한 안심 얼음, 스마트 기능',
        price: '41,900원~'
    },
    {
        id: 3,
        src: '/img/product3.jpg',
        model: 'WHP-4200/4200S',
        name: '냉온 정수기',
        descript: '스마트 절전, 2중 안전 코크, 연속출수',
        price: '17,900원~'
    },
    {
        id: 4,
        src: '/img/product4.jpg',
        model: 'WHP-3900',
        name: '대용량 냉온 정수기',
        descript: '21리터 대용량, 스마트 절전, 친환경',
        price: '29,900원~'
    },
    {
        id: 5,
        src: '/img/product5.png',
        model: 'WHP-3200',
        name: '무전원 정수기',
        descript: '전기세 0원, 셀프관리, 에어리스 직수',
        price: '16,900원~'
    },
    {
        id: 6,
        src: '/img/product6.jpg',
        model: 'WHP-3020',
        name: '직수형 냉온정수기',
        descript: '5 Clean Care, 스마트 기능, 셀프관리',
        price: '27,900원~'
    },
];

const BtnNext = (props) => {
    const { onClick, currentSlide, } = props;
    const disabled = currentSlide == data.length - 1;

    return (
        <p className="BtnNext">
            <button onClick={onClick} disabled={disabled}>
                <img src="/img/icon-swiper-next-gray.png" alt="다음으로" />
            </button>
        </p>
    )
}

const BtnPrev = (props) => {
    const { onClick, currentSlide } = props;
    const disabled = currentSlide == 0;
    // currentSlide는 화면에 노출 중인 슬라이드의 인덱스값을 가리킴
    // currentSlide의 값이 0과 같으면 disabled변수에 true값이 저장, 
    // currentSlide의 값이 0이 아니면 disabled변수에 false값이 저장

    return (
        <p className="BtnPrev">
            <button onClick={onClick} disabled={disabled}>
                <img src="/img/icon-swiper-prev-gray.png" alt="이전으로" />
            </button>
        </p>
    )
}

const Carousel124 = () => {
    const settings = {
        infinite: false,
        dots: true,
        // appendDots는 페이져 영역 전체의 html 구성을 처리하는 옵션
        appendDots: dots => (
            <div>
                <ul>{dots}</ul>
            </div>
        ),
        // dotsClass는 페이져 영역의 클래스이름을 지정하는 옵션
        dotsClass: 'pager',
        // customPaging은 페이저 li 안쪽의 html 구성을 처리하는 옵션
        customPaging: i => (
            <button>{i + 1}</button>
        ),
        nextArrow: <BtnNext />,
        prevArrow: <BtnPrev />,
        speed: 800,
        slidesToShow: 4,
        // slick은 pc기준으로 기본셋팅값이 처리 됨
        responsive: [
            {
                breakpoint: 1279,
                // 화면너비값이 최대 1279px일때부터 -> 테블릿화면
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    }

    return (
        <div className="Carousel124">
            <Slider {...settings}>
                {data.map(dt =>
                    <div key={dt.id} className="Carousel124-item">
                        <Link to=''>
                            <p className="photo"><img src={dt.src} alt={dt.name} /></p>
                            <p className="model">{dt.model}</p>
                            <p className="name">{dt.name}</p>
                            <p className="descript">{dt.descript}</p>
                            <p className="price">{dt.price}</p>
                        </Link>
                    </div>
                )}
            </Slider>
        </div>
    )
}

export default Carousel124;