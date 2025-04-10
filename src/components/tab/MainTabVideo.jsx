import { useState } from 'react';
import { formattedBr } from '../../utills';
import './MainTabVideo.css';

const MainTabVideo = () => {
    // 현재 활성화 된 탭의 인덱스를 관리하는 상태변수 
    const [activeTab, setActiveTab] = useState(0);

    // 탭의 내용을 배열로 설정. 배열의 각 요소를 객체로 생성
    const tabs = [
        {
            id: 1,
            txt1: '더 심플하고\n단정해진',
            txt2: '루헨스 무전원 정수기 슬림+',
            video: <iframe width="560" height="315" src="https://www.youtube.com/embed/FdKuJ0k3K-E?si=j3SP3MYtMFRsR4Xj" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        },
        {
            id: 2,
            txt1: '투명한 창에 담아\n더 깨끗하게!',
            txt2: '루헨스 더 프레임 정수기',
            video: <iframe width="560" height="315" src="https://www.youtube.com/embed/Sr_DiuNIghI?si=3XcGQ9oD09h2Tvip" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        },
        {
            id: 3,
            txt1: '세상 어디에도 없는\n차원이 다른 깨끗함!',
            txt2: '루헨스 얼음정수기 아이스케어',
            video: <iframe width="560" height="315" src="https://www.youtube.com/embed/eQXibPTJemM?si=J2n0RYPClFq_h_zF" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        },
        {
            id: 4,
            txt1: '가장 기본에 충실한\n공기청정기',
            txt2: '루헨스 에어',
            video: <iframe width="560" height="315" src="https://www.youtube.com/embed/cgLlBlX7r9U?si=QEkcWSHKNv8UmeyV" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        }
    ];

    return (
        <div className='MainTabVideo'>
            <div className='tab-txtbtn'>
                <h2>루헨스 영상</h2>
                <p className='tab-txt1'>{formattedBr(tabs[activeTab].txt1)}</p>
                <p className='tab-txt2'>{tabs[activeTab].txt2}</p>
                <div className='tab-btn'>
                    {tabs.map((tab, idx) =>
                        <p key={tab.id} className={activeTab == idx ? 'active' : ''}>
                            <button onClick={() => { setActiveTab(tab.id - 1) }}>
                                {tab.id}
                            </button>
                        </p>
                    )}
                </div>
            </div>
            <div className='tab-video'>
                {tabs[activeTab].video}
            </div>
        </div>
    )
}

export default MainTabVideo;