<template>
    <div class="create-minutes-form">

	<div class="content">

		<div class="in_content">
			<div class="left_div">
				<h2 style="margin-left:15px; font-size:23px; font-weight:bold; margin-top:30px;">회의록</h2>
				<ul class="">
					<li>
						<strong style="margin-top:20px;font-size:18px;">&nbsp;&nbsp;&nbsp;회의명 :</strong>
						<span style="margin-top:20px; font-size:16px;">&nbsp;&nbsp;3차 정기회의</span>
					</li>
					<li>
						<strong style="font-size:18px;">&nbsp;&nbsp; 회의 안건 :</strong>
						<span>
							<input type="text" title="" name="" id="" placeholder="회의 안건을 입력하세요." style="margin-top:-5px;"value="" />
						</span>
					</li>
					<li>
						<strong style="font-size:18px;">&nbsp;&nbsp;&nbsp;회의 일시 :</strong>
						<span>&nbsp;&nbsp;&nbsp;2019년 12월 16일 (월)<br/>&nbsp;&nbsp;13:00 ~ 14:00</span>
					</li>
					<li>
                        <br><br>
						<textarea placeholder="    회의록 내용을 입력하세요."></textarea>
					</li>
				</ul>
				<button type="button" class="btn_wan" style="height:43px; font-weight:700;">완료</button>
			</div>
			<div class="right_div">
				<div class="top_box">
					<h2 class="AIkeyword_h2" style="font-size:22px; margin-top:-15px;"><strong style="font-weight:bold;">AI</strong>가 찾은 키워드</h2>
					<ul class="">
						<li>
							<a href="#">▷ 인공지능</a>
						</li>
						<li class="on">
							<a href="#">▽ 산학협동</a>
							<ul class="">
								<li>화면 ui 설계</li>
								<li>최종 보고서 발표 준비</li>
							</ul>
						</li>
						<li>
							<a href="#">▷ 스터디</a>
						</li>
					</ul>
				</div>
				<div class="bot_box">
					<p>
						<p style="font-weight:700; font-size:19px;"><strong>'산학협동'</strong>에 대한 회의 요약입니다.</p><br/><br/>
						채팅창 화면이 메인. 파일공유 ui, 파일리스트 ui, 회의록 생성 ui<br/><br/>
						채팅창 기능 확정. 채팅창 내에서 파일의 공유가 일어나. 파일을 모아두는 창. 채팅방 단위로. 쌓이는 파일.<br/>
						인공지능이 주제에 따른. 키워드를 분류하는. <br/><br/>
						최종보고서 작성은. 12월 15일까지. 발표 피피티는. 12월 20일까지
					</p>
				</div>
			</div>
		    </div>
		</div>
	</div>
</template>
<script>
export default {
    name: 'CreateMinutesForm'
}
</script>
<style scoped>
@charset "utf-8";

/* default */
body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,form,fieldset,p,button,iframe,th,td{margin:0;padding:0; box-sizing:border-box;}
article,aside,details,figcaption,figure,footer,header,hgroup,nav,section,summary{display:block;margin:0;padding:0; box-sizing:border-box;}
h1,h2,h3,h4,h5,h6,dt{font-weight:normal;}
img,fieldset,iframe,button{border:0 none;}
li{list-style:none;}
i, em, u, cite {font-style:normal;}
strong{font-weight:normal;}
img{}
a{color:#757575;text-decoration:none;outline-offset:-1px;}
.chrome a,
.safari a{outline-offset:-3px;}
input {-webkit-appearance:none; -moz-appearance:none; appearance:none;}

html, body{height:100%; font-size:0; line-height:0;}
body{overflow-x:auto;word-break:keep-all;word-wrap:break-word;}
body.non-scroll {overflow-y:hidden;}

/* Form */
legend{position: absolute; top: 0; left: 0; width: 0; height: 0; overflow: hidden; visibility: hidden; font-size: 0; line-height: 0;}
select, input, textarea {outline:0;}
select, input, label{vertical-align:middle}
button{border:0 none;cursor:pointer;background:none;font-family: 'Noto Sans KR';}

select::-ms-expand { display: none; }
select::-moz-focus-inner { border: 0; padding: 0; }
select:-moz-focusring { color: transparent; text-shadow: 0 0 0 #000; }
select{font-family: 'Noto Sans KR';}
input{font-family: 'Noto Sans KR';}
table {border-collapse: collapse; table-layout:fixed; width:100%;}
textarea {font-family: 'Noto Sans KR';}
*:focus {
    outline: 0;
}



body {font-family: 'Noto Sans KR'; font-weight: 400; font-size:15px; line-height:20px;}
a {font-family: 'Noto Sans KR'; font-weight: 400; font-size:15px; line-height:20px;}
button {font-family: 'Noto Sans KR'; font-weight: 400; font-size:15px; line-height:20px;}
/* slick */
.slick-slider {position:relative;}
.slick-list {overflow:hidden; position:relative; z-index:5;}
.slick-track {position:relative; top:0; left:0; margin-right:auto; margin-left:auto;}
.slick-track:before, .slick-track:after {display:table;}
.slick-track:after {clear:both;}
.slick-loading .slick-track {visibility:hidden;}
.slick-slide {display:none; float:left;}
.slick-slide.slick-loading img {display:none;}
.slick-initialized .slick-slide {display:block;}
.slick-loading .slick-slide {visibility:hidden;}
.slick-vertical .slick-slide {display:block;}


body {background:#f2f0f1; }
#wrap {min-width:1630px;}
#wrap:after{content:''; display:block; clear:both;}
.lnb {float:left; width:325px; background:#27ae61;}
.lnb .top_user {padding:40px 10px 0 10px;}
.lnb .top_user:after{content:''; display:block; clear:both;}
.lnb .top_user .img {float:left;}
.lnb .top_user .text {float:left; width:215px; box-sizing:border-box; padding-left:10px; padding-top:10px;}
/* .lnb .top_user .text button {font-size:22px; line-height:1.4; color:#fff; background:url('../../images/btn_arrow.gif') right center no-repeat; background-size:; display:block; width:100%; text-align:left;} */
.lnb .top_user .text a {display:inline-block; font-size:18px; line-height:1.4; color:#fff; margin-top:12px;}
.lnb .lnb_list {margin:60px 35px 0; padding-bottom:20px; border-bottom:2px solid #6a8d79;}
.lnb .lnb_list > ul > li {margin-top:20px;}
.lnb .lnb_list > ul > li:first-child {margin-top:0;}
.lnb .lnb_list > ul > li > a {font-size:20px; line-height:1.5; color:#fff;}
.lnb .lnb_list > ul > li ul {padding-top:15px; padding-left:35px;}
.lnb .lnb_list > ul > li li:first-child {margin-top:0;}
.lnb .lnb_list > ul > li li {margin-top:24px;}
.lnb .lnb_list > ul > li li a {font-size:16px; line-height:1.4; color:#fff;}

.lnb .team_user {margin:30px 35px 0;}
.lnb .team_user strong {font-size:20px; line-height:1.5; color:#fff;}
.lnb .team_user ul {margin-top:30px;}
.lnb .team_user ul li {padding-left:35px; position:relative;}
.lnb .team_user ul li:first-chlid:before {background:#63bef5;}
.lnb .team_user ul li:before {content:''; position:absolute; left:10px; top:50%; margin-top:-7px; width:14px; height:14px; background:#c1bbc5; border-radius:14px;}
/* .lnb .team_user ul li.king:before {background:#63bef5;}
.lnb .team_user ul li.king:after {content:''; position:absolute; right:0; top:50%; margin-top:-13px; width:37px; height:26px; background:url('../../images/icon_king.gif') no-repeat;} */
.lnb .team_user ul li {margin-top:20px;}
.lnb .team_user ul li a {font-size:16px; line-height:1.4; color:#fff;}


.lnb .chat_list {margin:100px 35px 0; position:relative; padding-bottom:110px;}
.lnb .chat_list .btn_plus {position:absolute; right:0; top:0;}
.lnb .chat_list strong {font-size:20px; line-height:1.5; color:#fff;}
.lnb .chat_list ul {padding:0 30px;}
.lnb .chat_list ul li {margin-top:18px;}
.lnb .chat_list ul li a {font-size:16px; line-height:1.4; color:#fff;}
.lnb .chat_list ul li.on a {text-decoration:underline;}


.content { padding:10px; width:1100px; box-sizing: content-box;}
.content .userId {text-align:right;}
.content .userId .img {display:inline-block; vertical-align:middle;}
.content .userId .text {display:inline-block; vertical-align:middle; font-size:16px; line-height:1.4; color:#1f1d1e;}
.content .in_content {margin-top:20px; }
.content .in_content:after{content:''; display:block; clear:both;}
.content .in_content .left_div {width:520px; height:600px; margin-left:250px;overflow-y:auto; background:#fff; border:1px solid #e6e4e5; border-radius:10px; position:relative; box-sizing:border-box; padding:-100px; float:left; box-shadow: 0 10px 20px 0 rgba(52, 52, 52, 0.12);}
.content .in_content .left_div .btn_wan {position:absolute; right:35px; top:35px; padding:0 40px; font-size:16px; line-height:60px; background:#66be8c; color:#fff; border-radius:4px;}
.content .in_content .left_div h2 {font-size:26px; line-height:1.4; color:#404040;}
.content .in_content .left_div ul {padding-top:10px;}
.content .in_content .left_div ul li {margin-top:20px; }
.content .in_content .left_div ul li:after{content:''; display:block; clear:both;}
.content .in_content .left_div ul li strong {display:inline-block; font-size:16px; line-height:1.4; color:#404040; vertical-align:top;}
.content .in_content .left_div ul li span {display:inline-block; font-size:16px; line-height:1.4; color:#404040; vertical-align:top;}
.content .in_content .left_div ul li span input {border:0; height:36px; padding:0 10px; font-size:16px; line-height:36px; color:#404040;}
.content .in_content .left_div ul li textarea {font-size:16px; line-height:1.6; color:#404040; width:100%; height:300px; border:0;}
.content .in_content .right_div {width:540px; padding-left: 50px;margin-left:70%;}
.content .in_content .right_div .top_box {padding:30px 20px; box-sizing:border-box; height:250px; background:#fff; border:1px solid #e6e4e5; border-radius:10px; position:relative; overflow-y:auto; box-shadow: 0 10px 20px 0 rgba(52, 52, 52, 0.12);}
.content .in_content .right_div .top_box h2 {font-size:26px; line-height:1.4; color:#404040;}
.content .in_content .right_div .top_box h2 strong {color:#49d8bc;}
.content .in_content .right_div .top_box ul {padding-top:20px;}
.content .in_content .right_div .top_box ul li {margin-top:12px;}
.content .in_content .right_div .top_box ul li a {display:inline-block; padding:0 18px; background:#72c486; height:40px; line-height:40px; font-size:18px; color:#fff; border-radius:20px;}
.content .in_content .right_div .top_box ul li ul {padding:0; padding-left:55px; display:none;}
.content .in_content .right_div .top_box ul li.on a {background:#2c715e; text-decoration:underline;}
.content .in_content .right_div .top_box ul li.on ul {display:block;}
.content .in_content .right_div .top_box ul li ul li {font-size:18px; color:#000; line-height:1.4; position:relative; padding-left:15px;}
.content .in_content .right_div .top_box ul li ul li:after {content:''; width:3px; height:3px; position:absolute; left:0; top:50%; margin-top:-1px; background:#000;}


.content .in_content .right_div .bot_box {padding:20px; box-sizing:border-box; height:320px; background:#fff; border:1px solid #e6e4e5; border-radius:10px; position:relative; overflow-y:auto; margin-top:30px; box-shadow: 0 10px 20px 0 rgba(52, 52, 52, 0.12);}
.content .in_content .right_div .bot_box p {font-size:17px; line-height:1.6; color:#242424; font-weight: 600;}
.content .in_content .right_div .bot_box p strong {color:#49d8bc; font-weight: 800;}

.AIkeyword_h2{
    font-weight: 700;
}
</style>