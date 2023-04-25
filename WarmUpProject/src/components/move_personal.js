import { Link } from "react-router-dom";

/**
 * 개인 소개 페이지로 넘어가는 카드 컴포넌트
 * 
 * @param {*} param0 사진경로, 페이지경로, 이름, 학번
 * @returns
 */
export default function MovePer({img_path, page_path, name, num}){

    return(
        <Link className="move_par link" to={page_path}>
            <img src={img_path}></img>
            <div className="move_par name">{name}</div>
            <div className="move_par num">{num}</div>
        </Link>
    )
}