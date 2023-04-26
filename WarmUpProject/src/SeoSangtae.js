// import "https://fonts.googleapis.com/css?family=Source+Sans+Pro%3A400%2C500%2C700";
// import "https://fonts.googleapis.com/css?family=Inter%3A400%2C700";
// import "https://fonts.googleapis.com/css?family=DM+Sans%3A400%2C500%2C700";
import './styles/sangtae.css';

function SeoSangtae() {
  //홈과 상태님 페이지 상단의 css 선택자가 다른 페이지에 영향을 주어
  //각 페이지에서 따로 스타일을 주도록 설정하였습니다.
  const css_conflict=`
  html {
      font-size:62.5%;
  }
  * {
      margin: 0;
      padding: 0;
  }
  ul, li {
      list-style: none;
  }
  input {
      border: none;
  }
  body {
  width: 39rem;
  }
  `

  return (
    <div className='SeoSangtae'>
      <style>{css_conflict}</style>
      <SstBody />
    </div>
  )
}

function SstBody() {
  return (
    <div className="sst_body">
      <div className="sangtae-H9r">
        <div className="auto-group-rheq-hDa">
          <div className="item--uU4">강원대 멋쟁이사자처럼</div>
          <div className="item--hep">
            <span className="item--hep-sub-0">안녕하세요 </span>
            <span className="item--hep-sub-1">:&#41;</span>
          </div>
          <div className="item--cYp">
            <span className="item--cYp-sub-0">코딩을 공부하는 </span>
            <span className="item--cYp-sub-1">서상태</span>
            <span className="item--cYp-sub-2"> 입니다.</span>
          </div>
          <div className="heading-kBA">
            <div className="self-introduction-GfJ">Self-Introduction</div>
            <div className="item-19--bSg">
              저는 산업공학과 19학번입니다.
              <br />
              데이터, 인공지능 분야에 관심을 갖고 있습니다.
              <br />
              그래서 열심히 컴퓨터 언어를 공부하고 있습니다.
            </div>
          </div>
          <div className="auto-group-krng-M4U">
            <div className="div-dXn">
              <img className="image-21-AXi" src="images/sst_imgs/image-21.png" />
            </div>
            <div className="hobby-fjN">Hobby</div>
            <div className="item--arL">
              산책하면서 사진 찍기
              <br />
              친구들이랑 이야기하기
            </div>
          </div>
          <div className="auto-group-amqr-bmS">
            <div className="div-JQx">
              <img className="image-22-2br" src="images/sst_imgs/image-22.png" />
            </div>
            <div className="character-Z5z">Character</div>
            <div className="item--Uye">
              정이 많습니다
              <br />
              약속을 잘 지킵니다
              <br />
              피해 주는 것을 싫어합니다
            </div>
          </div>
          <div className="auto-group-qys8-hrQ">
            <div className="div-C2U">
              <img className="image-23-vDN" src="images/sst_imgs/image-23.png" />
            </div>
            <div className="idea-efA">Idea</div>
            <div className="item--ANc">
              선호하는 메뉴를 먼저 학습을 시키고, 날씨 등 외부 환경을 고려해 점심 메뉴를 추천하는 서비스
              <br />

              <br />
              인터넷 지도에서 음식 종류와 가격 범위를 선택하면 선택한 음식점 정보만 제공하는 서비스
            </div>
          </div>
          <div className="pet-Emn">Pet</div>
          <div className="item--xBz">
            <span className="item--xBz-sub-0">
              이름 : 찡찡
              <br />
              햄스터 종류 : 드워프햄스터 (블루 사파이어)
              <br />

            </span>
          </div>
          <div className="auto-group-s1np-EhE">
            <img className="image-25-LEU" src="images/sst_imgs/image-25.png" />
            <img className="image-24-3ua" src="images/sst_imgs/image-24.png" />
          </div>
          <div className="tech-stacks-BVz">Tech Stacks</div>
          <div className="auto-group-s3qj-gxY">
            <div className="auto-group-nspl-Cvt">
              <img className="image-27-AMv" src="images/sst_imgs/image-27.png" />
            </div>
            <div className="auto-group-xrqr-hMr">
              <img className="image-28-3wW" src="images/sst_imgs/image-28.png" />
            </div>
            <div className="auto-group-maye-bCL">
              <img className="image-29-8TA" src="images/sst_imgs/image-29.png" />
            </div>
            <img className="image-30-gDn" src="images/sst_imgs/image-30.png" />
          </div>
          <div className="team-member-card-RhA">
            <div className="kakaotalk20230403212212724-1-L3S">
            </div>
            <div className="sangtae-seo-pjJ">Sangtae SEO</div>
          </div>
          <div className="balance-game-8jz">Balance Game</div>
          <p className="vs--3rx"> 평생 치통 VS 평생 두통</p>
          <div className="auto-group-dvkv-NPS">
            <div className="auto-group-plrl-uPN">치통</div>
            <div className="auto-group-auey-BLt">두통</div>
          </div>
          <p className="vs--V6g"> 전등 키고 자는 룸메 VS 새벽마다 타자 두드리는 룸메</p>
          <div className="auto-group-dewi-PC4">
            <div className="auto-group-tjrn-hiY">전등</div>
            <div className="auto-group-zfn8-nzt">타자</div>
          </div>
          <p className="vs--gaU"> 폰만 보는 연인 VS 돈은 절대 안내는 연인</p>
          <div className="auto-group-8cxa-n7i">
            <div className="auto-group-wvfn-79z">폰</div>
            <div className="auto-group-jetx-nG8">돈</div>
          </div>
          <p className="vs--5m2"> 사랑 VS 우정 </p>
          <div className="auto-group-5btt-BZA">
            <div className="auto-group-zhs8-7Sp">사랑</div>
            <div className="auto-group-texa-zFi">우정</div>
          </div>
        </div>
        <div className="auto-group-dkdi-5nx">
          <div className="sangtae-seo-bmJ">Sangtae seo</div>
          <div className="menu-i5E">Menu</div>
          <div className="line-2-qfe">
          </div>
          <div className="auto-group-ihda-y1A">
            <div className="self-introdution-JZE">self introdution</div>
            <div className="balance-game-2k8">balance game</div>
          </div>
          <div className="pet-xtg">pet</div>
          <div className="tech-stacks-Uc8">tech stacks</div>
          <div className="link-cTS">link</div>
          <div className="line-1-jY4">
          </div>
          <div className="auto-group-ybje-4aL">
            <div className="auto-group-jk9r-P6p">
              <a href="https://www.notion.so/invite/445e0b77ee1c3a343b4d7ec7414bca2eda77a92c"><img className="image-12-uL4"
                src="images/sst_imgs/image-12.png" /></a>
            </div>
            <div className="auto-group-tgkz-2fa">
              <a href="https://discord.gg/9kNasTt9"><img className="image-10-NjS" src="images/sst_imgs/image-10.png" /></a>
            </div>
            <a href="https://instagram.com/sangtae._.seo"><img className="image-26-Wak" src="images/sst_imgs/image-26.png" /></a>
            <a href="https://github.com/SeoSangtae001027"><img className="image-15-G48" src="images/sst_imgs/image-15.png" /></a>
          </div>
        </div>
        <div className="auto-group-jt6x-n2U">
          <div className="div-7aY">
          </div>
          <div className="item-010-6319-2108-TuJ">010-6319-2108</div>
        </div>
      </div>
    </div>
  )
}

export default SeoSangtae;