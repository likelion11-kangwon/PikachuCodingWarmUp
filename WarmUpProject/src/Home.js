import './styles/Home.css';

import MovePer from "./components/move_personal";
//홈 페이지

function Home() {

    return (
        <div class="iphone-13-13-pro-2-i7J">
            <img class="item--mjn" src="images/Home_imgs/Li.png" />
            <div class="auto-group-tesd-NDn">
                <p class="pikachu-7j6">Pikachu</p>
                <p class="coding-7Mi">Coding</p>
                <p class="pikachu-jdz">Pikachu</p>
                <p class="coding-27J">Coding</p>
            </div>
            <p class="item--UV6">팀원 소개 둘러보기</p>
            <div class="auto-group-yvrm-5jn">
                <div class="auto-group-wecb-yaG">
                    <div class="auto-group-tvvp-Rx4">
                        <div class="ellipse-12-wfW">
                        </div>
                        <img class="image-4-2S4" src="images/Home_imgs/image-4.png" />
                    </div>
                    <MovePer img_path="" page_path="/HanKyungjun" name="한경준" num="컴공 23" />
                </div>
                <div class="auto-group-emw1-Zyi">
                    <div class="auto-group-zsuf-fG4">
                        <div class="ellipse-13-b9i">
                        </div>
                        <img class="image-2-5qa" src="images/Home_imgs/image-2.png" />
                    </div>
                    <MovePer img_path="" page_path="/KimSeongbin" name="김성빈" num="AI 20" />
                </div>
            </div>
            <div class="auto-group-ju3z-V28">
                <div class="auto-group-ogix-Cx8">
                    <div class="auto-group-hbvb-gcQ">
                        <div class="ellipse-14-C4x">
                        </div>
                        <img class="image-3-iJC" src="images/Home_imgs/image-3.png" />
                    </div>
                    <MovePer img_path="" page_path="/JeongDayeon" name="정다연" num="컴공 22" />
                </div>
                <div class="auto-group-k5es-bmJ">
                    <div class="auto-group-xnzf-X9A">
                        <div class="ellipse-15-GsS">
                        </div>
                        <img class="image-1-DGt" src="images/Home_imgs/image-1.png" />
                    </div>
                    <MovePer img_path="" page_path="/SeoSangtae" name="서상태" num="산공 19" />
                </div>
            </div>
            <p class="item--ZEG">팀 소개</p>
            <p class="item--Uc8">
                코딩의 짜릿함을 느껴봤어...?
                <br />
                느껴보고 싶으면 우리랑 코딩하자
                <br />
                우리는 피카츄 코딩!!!
                <br />

                <br />

            </p>
            <img class="image-5-UVe" src="images/Home_imgs/image-5.png" />
        </div>

    );
}

export default Home;