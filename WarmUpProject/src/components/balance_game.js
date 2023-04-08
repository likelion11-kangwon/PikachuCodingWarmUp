import {useState} from 'react';

/**
 * 밸런스 게임 컴포넌트
 * 
 * @param {*} param0 up전체고른개수, up일치하는개수, json게임속성(질문, 선택지1, 선택지2, 답, 사족)
 * @returns 
 */
export default function BGame({up_cnt, up_same_cnt, game_att}){

    //사족 표시? 상태변수
    const [show_nuec, setShowNuec] = useState(false);
    const [disabled, setHide] = useState(false);

    /**
     * 사용자가 버튼을 누르면 집계하는 함수
     * @param selected 선택된 옵션 이름
     */
    function agg(selected){
        up_cnt();
        setShowNuec(!show_nuec);
        //선택하면 두 버튼 모두 disabled 처리
        //TODO 버튼 색 입히기 맞은거 메인, 틀린거 빨강?
        setHide(true);

        //답이 일치하면 same_cnt 올리기
        if(selected===game_att.answer){
            up_same_cnt();
        }
    }

    return(
        <div className="b_game">
            <p className="b_question">{game_att.q}</p>
            <button className="opt_1" onClick={() => agg(1)} disabled={disabled}>{game_att.opt_1}</button>
            <button className="opt_2" onClick={() => agg(2)} disabled={disabled}>{game_att.opt_2}</button>
            {show_nuec ? <p className="b_nuec_add" >{game_att.nuec_add}</p> : null}
        </div>
    );
}