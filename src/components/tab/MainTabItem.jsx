import { useState } from 'react';
import './MainTabItem.css';

const tabOptions = [
    { label: '정수기', img: '/img/icon-product-check-visual-1.png' },
    { label: '공기청정기', img: '/img/icon-product-check-visual-2.png' },
    { label: '비데', img: '/img/icon-product-check-visual-3.png' },
    { label: '키친&바스', img: '/img/icon-product-check-visual-4.png' },
];

const filterOptions = {
    0: [ // 정수기
        {
            name: 'type0101',
            stateKey: 0,
            options: ['얼음정수기', '냉온정수기', '냉정수기', '무전원정수기']
        },
        {
            name: 'type0102',
            stateKey: 1,
            options: ['가정용', '대용량']
        },
        {
            name: 'type0103',
            stateKey: 2,
            options: ['방문관리', '자가관리']
        }
    ],
    1: [ // 공기청정기
        {
            name: 'type0201',
            stateKey: 3,
            options: ['10평미만', '1020평', '2030평']
        },
        {
            name: 'type0202',
            stateKey: 4,
            options: ['방문관리', '자가관리']
        }
    ],
    2: [ // 비데
        {
            name: 'type0301',
            stateKey: 5,
            options: ['일반형', '리모컨형']
        },
        {
            name: 'type0302',
            stateKey: 6,
            options: ['방문관리', '자가관리']
        }
    ],
    3: [ // 키친&바스
        {
            name: 'type0401',
            stateKey: 7,
            options: ['주방 용품', '욕실 용품', '기타']
        },
        {
            name: 'type0402',
            stateKey: 8,
            options: ['본품', '리필', '세트']
        }
    ]
};

const MainTabItem = () => {
    const [active, setActive] = useState(0);
    const [selected, setSelected] = useState(['정수기', '', '', '', '']);

    const handleTabClick = (idx, label) => {
        setActive(idx);
        const filterLength = filterOptions[idx].length;
        const newSelected = [label, ...Array(filterLength).fill('')];
        setSelected(newSelected);
    };

    const handleChange = (index, value) => {
        setSelected(prev => {
            const updated = [...prev];
            updated[index + 1] = (prev[index + 1] === value) ? '' : value; // 토글!
            return updated;
        });
    };

    return (
        <div className="MainTabItem">
            <h2>내게 꼭 맞는 제품은?</h2>
            <div className="tab-btn">
                {tabOptions.map((tab, idx) => (
                    <p key={idx} className={active === idx ? 'active' : ''}>
                        <label onClick={() => handleTabClick(idx, tab.label)}>
                            <input type="radio" name="main-type" className="hide" value={tab.label} />
                            <img src={tab.img} alt={tab.label} />
                            <span>{tab.label}</span>
                        </label>
                    </p>
                ))}
            </div>

            <div className="tab-content">
                {(active >= 0) && (
                    <div className={`tab-cont${active}`}>
                        <div className="box">
                            {filterOptions[active].map((group, i) => (
                                <div key={group.name} className='row'>
                                    {group.options.map((opt, idx) => (
                                        <p
                                            key={opt}
                                            className={selected[i + 1] === opt ? 'active' : ''}
                                        >
                                            <label>
                                                <input
                                                    type="radio"
                                                    name={group.name}
                                                    className="hide"
                                                    value={opt}
                                                    checked={selected[group.stateKey] === opt}
                                                    onChange={() => handleChange(i, opt)}
                                                />
                                                {opt}
                                            </label>
                                        </p>
                                    ))}
                                </div>
                            ))}
                        </div>
                        <div className="btnSearch">
                            <span className="left"></span>
                            <button>
                                <img src="/img/icon-search-white.png" alt="검색하기" />
                                <span>검색하기</span>
                            </button>
                            <span className="right"></span>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MainTabItem;