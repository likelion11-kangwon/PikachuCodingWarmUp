import {useState} from 'react';

/**
 * 개인 프로젝트 카드 컴포넌트
 * 
 * @param {*} proj_att json프로젝트속성(이름, 정보, 추가설명, 이미지경로, 프로젝트경로)
 * @returns 
 */
export default function Project({proj_att}){
    //show_detail로 상태를 나누어 true면 디테일, false면 사진
    //버튼으로 전환
    const [show_detail, setShowDetail]=useState(false);

    return (
        <div className="proj_panel">
            <div className="header">
                <h3 className="proj_name">
                    {proj_att.name}
                </h3>
                <button className={show_detail ? 'turned':''} onClick={() => {setShowDetail(!show_detail)}}></button>
            </div>
            <div className="proj_info">
                {proj_att.info}
            </div>
            { show_detail ? <Detail detail={proj_att.detail} proj_path={proj_att.proj_path}/> : <Image img_path={proj_att.img_path}/> }
        </div>
    );
}

function Image({img_path}){
    return(
        <div className="proj_content">
            <img src={img_path} width={500} alt="프로젝트 사진"></img>
        </div>
    );
}

function Detail({detail, proj_path}){
    return(
        <div className="proj_content">
            <p>{detail}</p>
            <a href={proj_path} target='_blank'>Chack my project here</a>
        </div>
    );
}