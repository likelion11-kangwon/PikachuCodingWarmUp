import {useState, useEffect} from 'react';
import BGame from './components/balance_game.js';
import Project from './components/project.js';
import Channel from './components/channel.js';
import dummy from './db/JDYdata.json';
import './styles/jdy.css';

//정다연 개인 페이지

function JeongDayeon() {

  return (
    <div className='JeongDayeon'>
        <Profile />
        <AboutMe />
        <BalanceGame />
        <Projects />
        <TechStacks />
        <Channels />
    </div>
  );
}

function Profile(){
  return (
    <div className="content" id="profile">
      <header>
        <h1 className="jdy_h1">
            <span className='line'>안녕하세요</span>
            <span className='line'>이것저것 도전 중!</span>
            <span className='line'><span className="colored_text">정다연</span>입니다.</span>
        </h1>
        <div className="article">
            <p className="small_font">
              2004.01.16
              <br/>컴퓨터공학과 22학번
              <br/>Infj &#40;i 빼고 다 소문자입니다&#41;
            </p>
            <p>
                대학교 입학하면서 프로그래밍 프로젝트에 관심을 갖게 되어 이것저것 공부하고 있습니다. 아직까진 코딩이 재밌고 짜릿합니다.
            </p>
            <p>
                <p className="small_font">
                협업경험이라곤 작년 학교에서 진행한 아이컨택 부트캠프, 친구와 소소한 유니티 만지기, 지금하고 있는 프로젝트 밖엔 없지만..
                </p>
                팀프로젝트하면서 짜릿함을 느낍니다! 
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
      <h2 className="jdy_h2">More about me</h2>
      <p>관심분야: 웹, 인공지능, 데이터</p>
      <p className='small_font'>
        😽 📖 🎤 🏀 💻
        <br/>고양이에 돌아있고, 헛되더라도 코드 짜는 것에 빠져있으며, 영화*책*음악(노래) 장르 안 가리고 다 좋아합니다. 
        특히 마지막은 추천도 받습니다! 관련 얘기하면서 친해지고 싶으면 언제든 연락주세요!
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
      <h2 className="jdy_h2">밸런스 게임</h2>
      <ul>
        {/* data.json에서 게임 내용 불러오기 */}
        {dummy.b_games_data.map((game_att) => (
            <li key={game_att.id}>
              <BGame up_cnt={upCnt} up_same_cnt={upSameCnt} game_att={game_att}/>
            </li>
        ))}
      </ul>
      {cnt===b_game_cnt ? <p className='result colored_text'>저와 답변이 {same_cnt/cnt*100}% 일치합니다!</p> : null}
    </div>
  );
}
function Projects(){
  return(
    <div className="content" id="projects">
      <h2 className="jdy_h2">My Projects</h2>
      <ul>
        {/* data.json에서 프로젝트 내용 불러오기 */}
        {dummy.projs_data.map((proj_att) => (
            <li key={proj_att.id}>
              <Project proj_att={proj_att}/>
            </li>
        ))}
      </ul>
    </div>
  );
}
function TechStacks(){
  var alt="기술스택아이콘"

  const move={
    transition: 'all linear 100s',
    transform: 'translate(-6540px)'
  }

  //스크롤 위치 가져와서 tech가 보이는지 확인
  //상대적 위치가 2.3보다 작을 때.
  const [onSight, setonsight] = useState(false);
  function onScroll() {
    setonsight(document.body.scrollHeight/window.scrollY < 2.3);
  }
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []); 

  //stack 사진리스트 여러개로
  var repeat=[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

  return(
    <div className='content' id="tech_stacks">
      <h2 className="jdy_h2">Tech_stacks</h2>
      <div id="tech_container">
        <ul style={onSight ? move : null}>
          {
            repeat.map(function(i){
              return(
                <div className='tech_stack_dummy' key={i}>
                  <li><img src="images/java.svg"  alt={alt}></img></li>
                  <li><img src="images/python.svg"  alt={alt}></img></li>
                  <li><img src="images/html5.svg"  alt={alt}></img></li>
                  <li><img src="images/css3.svg"  alt={alt}></img></li>
                  <li><img src="images/js.svg"  alt={alt}></img></li>
                  <li><img src="images/nodejs.svg"  alt={alt}></img></li>
                  <li><img src="images/pugjs.svg"  alt={alt}></img></li>
                  <li><img src="images/mongodb.svg"  alt={alt}></img></li>
                </div>
              )
            })
          }
        </ul>
      </div>
      <p>
        ...가 모두 제 기술스택이면 좋았겠지만 안타깝게도 아직 공부 중 입니다.
      </p>
      <p>
        HTML/CSS/JS을 기본은 다룰 줄 알고 node.js, mongooDB로 서버를 구성할 수 있습니다. 
        또한 python으로 데이터, 인공지능을 다뤄본 경험이 있습니다.
        하지만 마음의 고향은 자바라서 언젠간 spring도 써보고 싶습니다.
      </p>
    </div>
  );
}
function Channels(){
  return(
    <div className="content" id="channels">
      <h2 className="jdy_h2">Channels</h2>
      <p>인터넷에서 저를 만나보세요!</p>
      <Channel name="Github" link="https://github.com/dandamdandam"/>
      <Channel name="Solved.ac" link="https://solved.ac/profile/glue0440"/>
      <Channel name="Instagram" link="https://www.instagram.com/damdan1111111/"/>
    </div>
  );
}

export default JeongDayeon;