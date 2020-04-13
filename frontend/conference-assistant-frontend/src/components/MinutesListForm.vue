<template>
    <div class="minutes-list-form">
        <h3>&nbsp;&nbsp;&nbsp;&nbsp;회의록 목록</h3>
            <select name="minutes-sort">
            <option value="">이름순</option>
            <option value="등록일자">등록일자</option>
            <option value="위치">위치</option>
        </select>
        <!-- sample data -->
        <div class="minutes-list">
            <div class="minutes-item"><p class="chatname-p">1차 정기회의 #1</p>
                <p class="content-p">화면 UI에 따른 스토리보드 </p>
                <p class="sub-content-p">승인 완료 2019.09.17</p>
            </div>
             <div class="minutes-item"><p class="chatname-p">2차 정기회의 #1</p>
                <p class="content-p">전공종합설계(2) 발표 준비 </p>
                <p class="sub-content-p">승인 완료 2020.03.20</p>
            </div>
        </div>
        <!--  -->
        <div class="clicked-minutes">
            <button class="delete-btn" type="text">삭제</button>
            <div class="clicked-contents-div">
                <h2>회의명 : 1차 정기회의 #1</h2>
                <h2 class="agenda-h2">회의 안건 :</h2><span>  화면 UI에 따른 스토리보드</span>
                <h2>회의 일시 : 2019년 09월 17일 <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;13:00-14:00</h2>
                <hr>
                <textarea>1. 화면 UI 설계 방향

            1.1 채팅방 기능
                     - 파일 공유는 채팅창 내에서만 일어남
                     - AI) 채팅 내용과 주제에 맞는 키워드 분류

            1.2 공유된 파일 처리 방향
                     - 채팅방 단위로 목록 생성

            1.3 회의록 생성
                     - 회의록 목록, 승인 대기, 승인 완료로 구분

 2. 일정
                     2.1 최종 보고서 작성 : ~12월 15일
                     2.2 최종 발표 피피티 : ~12월 20일
                </textarea>
            </div>
        </div>

    </div>
</template>
<script>
export default {
    name : 'MinutesListForm'
}
</script>
<style scoped>
.minutes-list-form{
   z-index:0;
   position: fixed;
   margin-top:1.8%;
   width: 1100px;
   height: 610px;
   margin-left: 19%;
   box-shadow: 4px 4px 2px rgb(233, 233, 233);
   background-color: #fff;
   border: 1px solid #eeeeee;
   border-radius: 1.2rem;
}
h3{
    margin-top:40px;
    font-size:24px;
}
select{
    margin-left: 20px;
    margin-top:15px;
    width: 150px;
    padding: .8em .5em;
    border: 1px solid rgb(223, 223, 223);
    font-family: inherit;
    background: url('../img/select_drop.png') no-repeat 93% 30%;
    border-radius: 0px;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
}
.minutes-item{
    margin-top:20px;
    margin-left:20px;
    width:42%;
    height:25%x;
    background-color: #f0f0f0;
    box-shadow: 4px 7px 2px rgb(223, 223, 223);
    border-radius:0.2rem;
}
.content-p{
    margin-left: 20px;
    font-size:18px;
    font-weight: 700;
}
.sub-content-p{
    margin-left: 60%;

}
.chatname-p{
    padding-top:10px;
    margin-left: 20px;
    margin-bottom:8px;
    color:rgb(139, 139, 139);
    font-weight: 700;
    font-size: 17px;
}
.clicked-minutes{
   position: fixed;
   left: 75%;
   top: 45%;
   width: 460px;
   height: 510px;
   margin: -165px 0 0 -228px;
   padding: 45px 60px 60px;
   background-color: #fff;
   border: 1px solid  #e2e2e2;
   border-radius: 1.2rem;
}
.delete-btn {
    position:absolute;
    margin-top:-23%;
    left:76%;
    border: none;
    font-size: 100%;
    padding: 15px;
    width:100px;
    cursor: pointer;
    border-radius: 0.3rem;
    font-weight: 700;
    color: white;
    background: #32a852;
}
.agenda-h2{
    display:inline;
}
.clicked-contents-div{
    margin-top:-45px;
    margin-left:-50px;
    font-size:12px;
}
hr{
    border :1px solid #c5c5c5;
    margin-left: -10px;
    width:458px;
}
textarea{
    height:350px;
    width:110%;
    font-size:15px;
    font-weight:500;
    color:rgb(104, 104, 104);
}
</style>