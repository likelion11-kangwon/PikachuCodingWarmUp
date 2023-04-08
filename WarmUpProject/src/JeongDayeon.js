import {useState} from 'react';
import BGame from './components/balance_game.js';
import dummy from './db/JDYdata.json';
//정다연 개인 페이지

function JeongDayeon() {
  return (
    <div className='JeongDayeon'>
        <Profile />
        <AboutMe />
        <BalanceGame />
    </div>
  );
}

function Profile(){
  return (
    <div className="content" id="profile">
      <header>
        {/* 캐로셀 테스트용
        <img src="images/headimgtest.png"> */}
        <h1>
            안녕하세요
            <br/>이것저것 도전 중!
            <br/><span className='colored-text'>정다연</span>입니다.
        </h1>
        <div className="article">
            <p className='small_font'>
              2004.01.16
              <br/>컴퓨터공학과 22학번
              <br/>Infj &#40;i 빼고 다 소문자입니다&#41;
            </p>
            <p>
                대학교 입학하면서 프로그래밍 프로젝트에 관심을 갖게 되어 이것저것 공부하고 있습니다. 아직까진 코딩이 재밌고 짜릿합니다.
            </p>
            <p>
                <span className="small_font">
                협업경험이라곤 작년 학교에서 진행한 아이컨택 부트캠프, 친구와 소소한 유니티 만지기, 지금하고 있는 프로젝트 밖엔 없지만..
                </span>
                <br/>팀프로젝트하면서 짜릿함을 느낍니다! 
                고로 누구보다도 진심으로 참여해 팀원들과 멋진 결과물을 만들어나갈 자신 있습니다.
            </p>
        </div>
      </header>
    </div>
  );
}
function AboutMe(){
  return(
    <div className="content" id="about_me">
      <h2>More about me</h2>
      <p>관심분야: 웹, 인공지능, 데이터</p>
      <p>
        😽 📖 🎤 🏀 💻
        <span className='small_font'>
        <br/>고양이에 돌아있고, 헛되더라도 코드 짜는 것에 빠져있으며, 영화*책*음악(노래) 장르 안 가리고 다 좋아합니다. 
        특히 마지막은 추천도 받습니다! 관련 얘기하면서 친해지고 싶으면 언제든 연락주세요!
        </span>
      </p>
      <p>현재 풀스택이라는 단어에 꽂혀서, 웹 a-z를 목표로 공부하고 있습니다.</p>
    </div>  
  );
}
function BalanceGame(){
  const [cnt, setCnt]=useState(0);            //사용자가 몇 개나 골랐는가
  const [same_cnt, setSameCnt]=useState(0);   //사용자와 내 답이 일치하는 갯수
  var b_game_cnt=dummy.b_games_data.length;

  function upCnt(){
    setCnt(cnt+1);
  }
  function upSameCnt(){
    setSameCnt(same_cnt+1);
  }
  console.log(cnt, same_cnt);
  return(
    <div className="content" id="balance_game">
      <h2>밸런스 게임</h2>
      <ul>
        {/* data.json에서 게임 내용 불러오기 */}
        {dummy.b_games_data.map((game_att) => (
            <li key={game_att.id}>
              <BGame up_cnt={upCnt} up_same_cnt={upSameCnt} game_att={game_att}/>
            </li>
        ))}
      </ul>
      {cnt===b_game_cnt ? <p>저와 답변이 {same_cnt/cnt*100}% 일치합니다!</p> : null}
    </div>
  );
}

export default JeongDayeon;