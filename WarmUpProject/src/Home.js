import MovePer from "./components/move_personal";
//홈 페이지

function Home(){
    
    return (
        <div className="Home">
            <h1>
                <span id='homeH1_1'>Pikachu</span>
                <span id='homeH1_2'>Coding</span>
            </h1>
            <h2>팀원 소개 둘러보기</h2>
            {/* movePer 컴포넌트로 개인 탭으로 이동하는 카드 추가하기 */}
            <MovePer img_path="" page_path="/HanKyungjun" name="한경준" num="컴공 23"/>
            <MovePer img_path="" page_path="/KimSeongbin" name="김성빈" num="AI 20"/>
            <MovePer img_path="" page_path="/SeoSangtae" name="서상태" num="산공 19"/>
            <MovePer img_path="" page_path="/JeongDayeon" name="정다연" num="컴공 22"/>
            <h2>팀 소개</h2>
        </div>
    );
}

export default Home;