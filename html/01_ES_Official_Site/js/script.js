$(document).ready(function() {
	//one page scroll
	$('#main_cont').fullpage({
    css3:true,
		autoScrolling:true,
		scrollHorizontally: true,
    afterLoad: function(){
      var originalID, cloneID;
      window.addEventListener('DOMContentLoaded', function(){
      let roller = document.querySelector('.roller');
      roller.id = 'roller1';
      let clone = roller.cloneNode(true);
      clone.id = 'roller2';
      document.querySelector('.rolling_wrap').appendChild(clone); 
      document.querySelector('#roller1').style.left = '0px';
      // document.querySelector('#roller2').style.left = document.querySelector('.roller ul').offsetWidth+'1000'+'px';
      document.querySelector('#roller2').style.left = 2346 + 'px';
      roller.classList.add('original');
      clone.classList.add('clone');
      // let rollerWidth = document.querySelector('.roller ul').offsetWidth;//회전 배너 너비값
      let rollerWidth = 2346
      let betweenDistance = 1;//이동 크기 - 정수여야 함
      originalID = window.setInterval(betweenRollCallback, parseInt(1000/100), betweenDistance, document.querySelector('#roller1'));
      cloneID = window.setInterval(betweenRollCallback, parseInt(1000/100), betweenDistance, document.querySelector('#roller2'));
    
      //인터벌 애니메이션 함수(공용)
      function betweenRollCallback(d, roller){
        let left = parseInt(roller.style.left);
        roller.style.left = (left - d)+'px';//이동
        //조건부 위치 리셋
        if(rollerWidth + (left - d) <= 0){
            roller.style.left = rollerWidth+'px';
          }
        }		
      });
    }
  });
  
  function startProgressBar() {
    // apply keyframe animation
    $(".slide-progress").css({
      width: "1140px",
      transition: "width 5000ms",
      borderRadius: "20px",
      marginTop: "40px"
    });
  }
  
  function resetProgressBar() {
    $(".slide-progress").css({
      width: 0,
      transition: "width 0s"
    });
  }
  
  function startProgressBar02() {
    // apply keyframe animation
    $(".slide-progress02").css({
      width: "1140px",
      transition: "width 5000ms",
      borderRadius: "20px",
      marginTop: "40px"
    });
  }
  
  function resetProgressBar02() {
    $(".slide-progress02").css({
      width: 0,
      transition: "width 0s"
    });
  }
	
  // 메인 슬라이드
  var owl = $('#owl_01');
  owl.owlCarousel({
    items:1,
    loop:true,
    autoplay:true,
    autoplaySpeed:1500,
    autoplayTimeout:3600,
    autoplayHoverPause:true
  });
  // exp 슬라이드
  var owl = $('#owl_03');
  owl.owlCarousel({
    items:1,
    loop:false,
    rewind: true,
    margin: 50,
    autoplay:true,
    autoplaySpeed:1200,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    autoWidth: true,
    pull: 0,
    // progressbar
    onInitialized: startProgressBar,
    onTranslate: resetProgressBar,
    onTranslated: startProgressBar
  });
  // tra 슬라이드
  var owl = $('#owl_04');
  owl.owlCarousel({
    items:1,
    loop:false,
    rewind: true,
    margin: 50,
    autoplay:true,
    autoplaySpeed:1200,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    autoWidth: true,
    pull: 0,
    // progressbar
    onInitialized: startProgressBar02,
    onTranslate: resetProgressBar02,
    onTranslated: startProgressBar02
  });
  // es 슬라이드
  var owl = $('#owl_05');
  owl.owlCarousel({
    center: true,
    items:1,
    loop: true,
    margin: 50,
    autoplay:false,
    autoWidth: true,
    autoplayTimeout:1800,
    autoplayHoverPause:true,
    pull: 0
  });

  // lang li class on
  $('.lang-area').hide();
  $('.selected-lang').click(function() {
    $(this).toggleClass('on');
    if($(this).hasClass('on')) {
        $('.top-right .lang-area').show();
    } else {
      $('.top-right .lang-area').hide();
    }
  });
  $('.lang-area .lang').click(function() {
    $(this).parent().children().removeClass('on');
    $(this).addClass('on');
  });

	var elements = $('ul.tithome li').length;
	for(var i=0; i < 3; i++){
	  $(".tithome").clone().appendTo( ".marquee" );
	};	
	var liEle = [];
	var liEle = $(".tithome li");
  
  // JSON 가이드 객체 생성
  let json = JSON.parse('{"data":'+
  '[{"g_img":"guide_01", "g_name": "김범석", "g_lang": "KR,CN", "g_keyword": "#유머러스 #친절 #한류소개 #한국맛집소개 #드라이빙 #VIP전문"},'+
  '{"g_img":"guide_02", "g_name": "김선빈", "g_lang": "KR,CN,EN", "g_keyword": "#유머러스 #친절 #한류소개 #한국맛집소개 #드라이빙 #VIP전문"},'+
  '{"g_img":"guide_03", "g_name": "손종백", "g_lang": "KR,CN,EN", "g_keyword": "#자연관광# 자유관광 #오행관광 #심리치료 #사주분석 #힐링전문"},'+
  '{"g_img":"guide_04", "g_name": "임종일", "g_lang": "KR,CN,EN", "g_keyword": "#센스 #순발력 #K-Pop #드라이빙 #영어중국어동시 #한류드라마"},'+
  '{"g_img":"guide_05", "g_name": "오선영", "g_lang": "KR,EN,ES", "g_keyword": "#한류메이크업 #한류소개 #한옥사는가이드 #한국맛집소개 #여자드라이빙가이드 #VIP전문"},'+
  '{"g_img":"guide_06", "g_name": "박진영", "g_lang": "KR,EN", "g_keyword": "#한류소개 #친절과 매너 #영어 MC #한국맛집소개 #영어통역사 #VIP전문"},'+
  '{"g_img":"guide_07", "g_name": "이남규", "g_lang": "KR,CN", "g_keyword": "#전문가이드 #배려와 친절 #다양한 서비스 #한국맛집소개 #가족단위 #연애상담"},'+
  '{"g_img":"guide_08", "g_name": "이솔아", "g_lang": "KR,EN", "g_keyword": "#미소 #친근한 #화기애애 #영어 #트랜디 #K-POP"},'+
  '{"g_img":"guide_09", "g_name": "나카지마 아유미", "g_lang": "KR,JP", "g_keyword": "#온천 #빵매니아 #친절함 #상냥함 #수다떨기 #커피매니아"},'+
  '{"g_img":"guide_10", "g_name": "우메자키 에이코", "g_lang": "KR,JP", "g_keyword": "#고양이 #화장품 #한국화장품 #미용 #에스테틱 #피부미용"},'+
  '{"g_img":"guide_11", "g_name": "야마자키 타에코", "g_lang": "KR,JP", "g_keyword": "#한국요리매니아 #술좋아함 #즐거움 #BTS #한일부부 #다중언어"}'+
  ']'+'}');
  let addHtml = "";
  //HTML 코드 생성
  json.data.forEach((item)=>{
      addHtml += 
      "<li class='guide'>"+
        "<div class='guide-img'><img src='./img/"+ item.g_img +".png' alt='"+ item.g_img +"'></div>"+
        "<p class='name' data-detect='"+ item.g_img +"'><b>" + item.g_name + "</b> 가이드</p>"+
        "<p class='lang en'>Lang <b>" + item.g_lang + "</b></p>"+
        "<p class='info-txt' data-detect='"+ item.g_img +"_keyword'>" + item.g_keyword + "</p>"+
      "</li>";
  });
  $('.carousel-container').html(addHtml);
});

$(window).load(function(){
  //다국어 추가
  let multiLanguage = {
      "ko" : {
        dany_main_01 : "Enjoy Street만의<br/>특별한 여행을 경험해보세요", 
        dany_main_02 : "세상에 단 하나뿐인<br/>나만의 여행을 만들어 드립니다.", 
        dany_main_03 : "우리는 여행의 새로운 기준과<br/>트렌드를 만들고 이끌어 갑니다.", 
        dany_banner_01_1 : "<b>새로운 여행 트랜드</b>를 제시합니다<br/><b>특별한 여행 경험</b>을 즐겨보세요", 
        dany_banner_01_2 : "EnjoyStreet 경험하기", 
        dany_exp_01_1 : "모바일에서 경험하는 현장감 넘치는 특별한 여행", 
        dany_exp_01_2 : "나의 소리로 경험하는 다양한 여행서비스", 
        dany_exp_01_3 : "뛰어난 실시간 음성인식 기술과 분석으로, 개인화된 상품추천부터 여행기록까지 새로운 여행경험을 선사합니다.", 
        dany_exp_02_1 : "인터랙티브한 쇼핑 경험", 
        dany_exp_02_2 : "유쾌한 경험 서비스", 
        dany_exp_02_3 : "AR과 쇼핑을 결합한 새롭고 즐거운 체험을 선사합니다.", 
        dany_tra_01_1 : "맞춤여행을 경험해보세요", 
        dany_tra_01_2 : "여러분들을 위한, 여러분들에 의한,<br/>여러분들만의 여행만을 만들어 드립니다.", 
        dany_tra_02_1 : "다양한 테마를 경험해보세요", 
        dany_tra_02_2 : "헤리티지부터 트렌디까지<br/>다채로운 여행테마를 제공합니다.", 
        dany_tra_03_1 : "합리적이고 정직한 요금", 
        dany_tra_03_2 : "거품을 빼고 여행 본질에 집중했습니다.<br/>선택한 여행지 거리 기준으로 제공합니다.", 
        dany_vts_01 : "여행전문 가이드가 여러분을 기다립니다.<br/>다양한 분야와 테마를 겸비한 전문 가이드를 만나보세요.",
        dany_banner_02_1 : "<b>다양한 분야</b>와 <b>테마</b>를 겸비한 <b>전문가이드</b>를 <b>우리는 기다립니다</b>", 
        dany_banner_02_2 : "가이드 여러분을 환영합니다", 
        dany_banner_02_3 : "가이드 지원하기", 
        dany_slide_01 : "모바일로 만나는 Enjoy Street <b>라이브투어</b>와 <b>맞춤투어 서비스</b>", 
        dany_slide_02_1 : "여행전문가이드와<br/>함께하는 비대면<br/><b>실시간 라이브투어</b>", 
        dany_slide_02_2 : "여행객과 여행전문가이드,<br/>소상공인을 연결하는<br/><b>공유와 상생의 플랫폼</b>", 
        dany_slide_02_3 : "라이브투어 중<br/>경험하는<br/><b>E-COMMERCE 기능</b>", 
        dany_slide_02_4 : "온·오프라인을<br/>연결하는<br/><b>맞춤투어</b>", 
        dany_slide_03 : "Enjoy Street 경험하기", 
        dany_ft_01_1 : "이용약관", 
        dany_ft_01_2 : "개인정보처리방침", 
        dany_ft_01_3 : "위치정보이용약관", 
        dany_ft_02_1 : "주식회사 브이알에듀", 
        dany_ft_02_2 : "대표 김재헌", 
        dany_ft_02_3 : "사업등록번호", 
        dany_ft_02_4 : "사업자정보확인", 
        dany_ft_02_5 : "개인정보보호 책임자 김재헌", 
        dany_ft_02_6 : "통신판매업신고번호 제2021-서울마포-2876",
        dany_ft_02_7 : "관광사업자 등록번호 제2021-07호", 
        dany_ft_02_8 : "04071 서울특별시 마포구 독막로 10 8층",
        dany_ft_03 : "브이알에듀는 통신판매중개자이며 통신판매의 당사자가 아닙니다. 따라서 상품·거래정보 및 거래에 관한 의무와 책임은 판매자에게 있습니다.", 
        dany_ft_04_1 : "판매점 입점안내", 
        dany_ft_04_2 : "가이드 가입안내",
        // guide text
        guide_01:"<b>김범석</b> 가이드",
        guide_01_keyword:"#유머러스 #친절 #한류소개 #한국맛집소개 #드라이빙 #VIP전문",
        guide_02:"<b>김선빈</b> 가이드",
        guide_02_keyword:"#유머러스 #친절 #한류소개 #한국맛집소개 #드라이빙 #VIP전문",
        guide_03:"<b>손종백</b> 가이드",
        guide_03_keyword:"#자연관광# 자유관광 #오행관광 #심리치료 #사주분석 #힐링전문",
        guide_04:"<b>임종일</b> 가이드",
        guide_04_keyword:"#센스 #순발력 #K-Pop #드라이빙 #영어중국어동시 #한류드라마",
        guide_05:"<b>오선영</b> 가이드",
        guide_05_keyword:"#한류메이크업 #한류소개 #한옥사는가이드 #한국맛집소개 #여자드라이빙가이드 #VIP전문",
        guide_06:"<b>박진영</b> 가이드",
        guide_06_keyword:"#한류소개 #친절과 매너 #영어 MC #한국맛집소개 #영어통역사 #VIP전문",
        guide_07:"<b>이남규</b> 가이드",
        guide_07_keyword:"#전문가이드 #배려와 친절 #다양한 서비스 #한국맛집소개 #가족단위 #연애상담",
        guide_08:"<b>이솔아</b> 가이드",
        guide_08_keyword:"#미소 #친근한 #화기애애 #영어 #트랜디 #K-POP",
        guide_09:"<b>나카지마 아유미</b> 가이드",
        guide_09_keyword:"#온천 #빵매니아 #친절함 #상냥함 #수다떨기 #커피매니아",
        guide_10:"<b>우메자키 에이코</b> 가이드",
        guide_10_keyword:"#고양이 #화장품 #한국화장품 #미용 #에스테틱 #피부미용",
        guide_11:"<b>야마자키 타에코</b> 가이드",
        guide_11_keyword:"#한국요리매니아 #술좋아함 #즐거움 #BTS #한일부부 #다중언어"
      },
      
      "us" : {
        dany_main_01 : "WELCOME TO<br/>“ENJOY STREET”!",
        dany_main_02 : "You can ENJOY<br/>your own trip.",
        dany_main_03 : "We are the trendy leaders<br/>of travel.", 
        dany_banner_01_1 : "View live tour videos", 
        dany_banner_01_2 : "View Sample Video", 
        dany_exp_01_1 : "Realistic Journey on MOBILE", 
        dany_exp_01_2 : "Various trip service from your own sound.", 
        dany_exp_01_3 : "Real-time voice recognition tech and analysis,<br/> it recommends personalized goods or records.", 
        dany_exp_02_1 : "Interactive shopping", 
        dany_exp_02_2 : "Enjoyable experience", 
        dany_exp_02_3 : "The newly experience with combining AR and shopping.", 
        dany_tra_01_1 : "Experience a perfect trip.", 
        dany_tra_01_2 : "FOR you,BY you,<br/>ONLY yours.", 
        dany_tra_02_1 : "Experience the various themes.", 
        dany_tra_02_2 : "FROM Heritages to trendy attractions.<br/>We offer varied travels.", 
        dany_tra_03_1 : "A reasonable & honest fee", 
        dany_tra_03_2 : "We’ve focused on the essence.<br/>Measure based on the selected destination.", 
        dany_vts_01 : "Guides are waiting for you.<br/>Experts in various fields and themes.",
        dany_banner_02_1 : "Experts in <b>various fields</b> and <b>themes.</b>",
        dany_banner_02_2 : "Welcome to the guides.",
        dany_banner_02_3 : "Guide Apply", 
        dany_slide_01 : "Enjoy Street’s <b>LIVE TOUR</b> and <b>CUSTOM TOUR</b> service with Mobile Web", 
        dany_slide_02_1 : "<b>Real-time<br/>untact LIVE TOUR</b><br/>with guides.", 
        dany_slide_02_2 : "<b>A win-win platform</b><br/> connecting travelers,<br/>guides and small business owners.", 
        dany_slide_02_3 : "<b>E-COMMERCE service</b><br/>in<br/>LIVE TOUR.", 
        dany_slide_02_4 : "Online and offline<br/>It's a <b>customized<br/>tour.</b>", 
        dany_slide_03 : "Go to Enjoy Street", 
        dany_ft_01_1 : "Terms of Use", 
        dany_ft_01_2 : "Privacy Policy", 
        dany_ft_01_3 : "Location information of Use", 
        dany_ft_02_1 : "VREdu Co.,Ltd.", 
        dany_ft_02_2 : "CEO Jaehun KIM",
        dany_ft_02_3 : "Business registration number",
        dany_ft_02_4 : "Business Info", 
        dany_ft_02_5 : "Director of Privacy Jaehun KIM", 
        dany_ft_02_6 : "Mobile Sales Business Report No.2021-Seoul Mapo-2876", 
        dany_ft_02_7 : "Tourist Registration No. 2021-07", 
        dany_ft_02_8 : "8F 10, Dongmak-ro, Mapo-gu, Seoul Republic of Korea 04071", 
        dany_ft_03 : "If you buy something from a vredu-powered store and wish to exercise these rights over information about your purchase, you need to directly contact the merchant you interacted with. We are only a mail-order selling processor on their behalf, and cannot guarantee any related issues on the products, transaction info, and transaction.", 
        dany_ft_04_1 : "Store Subscription Info", 
        dany_ft_04_2 : "Guide Subscription Info",
        // guide text
        guide_01:"Guide <b>KIM BUM SUG</b>",
        guide_01_keyword:"#Yumorous #Kind #Korean Wave Introduction #Korean Restaurant Introduction #Driving #VIP Specialized",
        guide_02:"Guide <b>KIM SUN BIN</b>",
        guide_02_keyword:"#Yumorous #Kind #Korean Wave Introduction #Korean Restaurant Introduction #Driving #VIP Specialized",
        guide_03:"Guide <b>SON JONG BACK</b>",
        guide_03_keyword:"#Natural tourism #free tourism #misleading tourism #psychological therapy #fortune analysis #healing specialty",
        guide_04:"Guide <b>LIN JONG IL</b>",
        guide_04_keyword:"#sense #quickness #K-pop #Drive #English Chinese Simultaneous #Korean Wave Drama",
        guide_05:"Guide <b>OH SUN YOUNG</b>",
        guide_05_keyword:"#Korean Wave Makeup #Korean Wave Introduction #Hanoksa Guide #Korean Restaurant Introduction #Women's Driving Guide #VIP Specialized",
        guide_06:"Guide <b>PARK JIN YOUNG</b>",
        guide_06_keyword:"#Korean Wave Introduction #Kindness and Manners #English MC #Korean Restaurant Introduction #English Interpreter #VIP Specialized",
        guide_07:"Guide <b>LEE NAM GYU</b>",
        guide_07_keyword:"#Professional Guide #Care and Kind #Diverse Services #Introduction to Korean Restaurants #Family Unit #Dating Counseling",
        guide_08:"Guide <b>SIA</b>",
        guide_08_keyword:"#Smile #Friendly #Lively #K-POP #English #Trendy",
        guide_09:"Guide <b>NAKAJIMA AYUMI</b>",
        guide_09_keyword:"#Hot spring #Breadmania #kindness #sweetness #chatter #coffeemania",
        guide_10:"Guide <b>UMEZAKI EIKO</b>",
        guide_10_keyword:"#Cat #Cosmetic #Korean cosmetics #beauty #aesthetic #skin beauty",
        guide_11:"Guide <b>YAMASAKI TAEKO</b>",
        guide_11_keyword:"#Korean Cuisine Mania #Like Drinking #Joy #BTS #Hanil Couple #Multilingual"
      },
      
      "cn" : {
        dany_main_01 : "体验一下<br/>Enjoy Street 的特别的旅行吧", 
        dany_main_02 : "给你做世上独<br/>一无二的属于我的旅行。", 
        dany_main_03 : "我们制定并引领旅<br/>行的新标准和潮流。", 
        dany_banner_01_1 : "与专家一起出发的<br/>VTS旅行都市首尔篇", 
        dany_banner_01_2 : "去看样品视频", 
        dany_exp_01_1 : "手机体验充满现场感的特别旅行", 
        dany_exp_01_2 : "用我的声音体验的多样的旅行服务", 
        dany_exp_01_3 : "出色的实时语音识别技术和分析, 从个人化的商品推荐到旅行记录的全新 赠送旅行经验.", 
        dany_exp_02_1 : "互动购物经验", 
        dany_exp_02_2 : "愉快的体验服务", 
        dany_exp_02_3 : "结合AR和购物，带来全新、愉快的体验", 
        dany_tra_01_1 : "体验一下正适合自己的 量身定做型旅行吧.", 
        dany_tra_01_2 : "为了大家，<br/>我们只制造大家地旅行。", 
        dany_tra_02_1 : "体验各种主题吧。", 
        dany_tra_02_2 : "从传统开始 还有时尚<br/>丰富多彩的旅行主题 提供。",
        dany_tra_03_1 : "合理而正直的收费", 
        dany_tra_03_2 : "去除泡沫，集中于旅行的本质。<br/>以选中的旅行地距离为准提供。", 
        dany_vts_01 : "导游等候各位。<br/>请看兼具多个领域和主题的专家导游。", 
        dany_banner_02_1 : "我们等待着兼具多个领域和主题的专家导游", 
        dany_banner_02_2 : "欢迎各位导游", 
        dany_banner_02_3 : "支援导游", 
        dany_slide_01 : "移動電話 连接的 Enjoy Street <b>现场之旅</b> 和 <b>匹配之旅</b> 服务", 
        dany_slide_02_1 : "旅行专家和<br/>一起的非面对面<br/>实时现场旅行", 
        dany_slide_02_2 : "旅客与旅行专家指南,<br/>连接小商贩的<br/>共享与相辅相成的平台", 
        dany_slide_02_3 : "现场旅行中<br/经验的<br/>E-COMMERCE功能", 
        dany_slide_02_4 : "线上和线下<br/>连接的定制旅游", 
        dany_slide_03 : "享受 Enjoy Street", 
        dany_ft_01_1 : "利用規約", 
        dany_ft_01_2 : "個人情報処理方針", 
        dany_ft_01_3 : "位置情報利用約款", 
        dany_ft_02_1 : "株式会社 VR edu", 
        dany_ft_02_2 : "代表 Jaehun KIM",
        dany_ft_02_3 : "营业执照号", 
        dany_ft_02_4 : "事業者情報確認", 
        dany_ft_02_5 : "个人信息保护负责人 Jaehun KIM", 
        dany_ft_02_6 : "通信销售业申报号码 第2021-首尔麻浦-2876号", 
        dany_ft_02_7 : "观光事业者登记号 第2021-07号", 
        dany_ft_02_8 : "04071 首尔特别市麻浦区合井洞373-4 8楼", 
        dany_ft_03 : "VREDU是通信销售中介人，不是通信销售的当事人。 因此，商品、交易信息及交易相关的义务和责任在于卖家。", 
        dany_ft_04_1 : "销售店入驻指南", 
        dany_ft_04_2 : "导游注册通知", 
        // guide text
        guide_01:"<b>金范石</b> 导游",
        guide_01_keyword:"#幽默感 #热情#韩流介绍 #韩国美食店介绍 #驾车 #VIP专门店",
        guide_02:"<b>金善斌</b> 导游",
        guide_02_keyword:"#幽默感 #热情 #韩流介绍 #韩国美食店介绍 #驾车 #VIP专门店",
        guide_03:"<b>孙淙伯</b> 导游",
        guide_03_keyword:"#自然旅游 #自由旅游 #五行旅游 #心理治疗 #事主分析 #治愈专业",
        guide_04:"<b>林鍾一</b> 导游",
        guide_04_keyword:"#风度 #爆发力 #K-pop #驾车 #英语、汉语同时 #韩流电视剧",
        guide_05:"<b>吴善英</b> 导游",
        guide_05_keyword:"#韩流妆 #韩流介绍 #韩屋生活指南 #韩国美食店介绍 #女子驾车导游 #VIP专门店",
        guide_06:"<b>朴镇英</b> 导游",
        guide_06_keyword:"韩流介绍 #热情风度 #英语 MC #韩国美食店介绍 #英语翻译员 #VIP专门店",
        guide_07:"<b>JAKE</b> 导游",
        guide_07_keyword:"#专家导报 #关怀与热情 #多种服务 #韩国美食店介绍 #家庭单位 #恋爱咨询",
        guide_08:"<b>SIA</b> 导游",
        guide_08_keyword:"#微笑 #亲切的 #其乐融融 #英语 #流行 #K-pop",
        guide_09:"<b>中岛爱弓</b> 导游",
        guide_09_keyword:"#温泉 #面包发烧友 #热情 #和蔼 #唠叨 #咖啡发烧友",
        guide_10:"<b>梅崎荣子</b> 导游",
        guide_10_keyword:"#猫咪 #化妆品 #韩国化妆品 #美容 #美容 #皮肤美容",
        guide_11:"<b>山崎 多英子</b> 导游",
        guide_11_keyword:"#韩国料理发烧友 #喜欢喝酒 #快乐 #BTS #韩日夫妇 #多重语言"
      },

      "jp" : {
        dany_main_01 : "Enjoy Street だけの<br/>特別なツアーを経験して下さい", 
        dany_main_02 : "世界に一つだけの<br/>あなただけの旅行を提供します", 
        dany_main_03 : "私たちは新しい旅行と<br/>トレンドを常に作りあげていきます", 
        dany_banner_01_1 : "専門ガイドと一緒に旅立つ<br/>VTS 旅行(ソウル編)", 
        dany_banner_01_2 : "サンプル映像を見る", 
        dany_exp_01_1 : "私たちは新しい旅行とトレンドを常に作りあげていきます", 
        dany_exp_01_2 : "自分の声で経験する様々な旅行サービス", 
        dany_exp_01_3 : "優れたリアルタイム音声認識技術と分析で、プライベートな推薦グッズから旅行記録まで新しい旅行の経験をプレゼントします", 
        dany_exp_02_1 : "インタラクティブなショッピングの経験", 
        dany_exp_02_2 : "愉快な経験サービス", 
        dany_exp_02_3 : "ARで楽しむ新しい<br/>ショッピング体験を提供します", 
        dany_tra_01_1 : "自分にピッタリのオーダーメイド旅行を経験して下さい", 
        dany_tra_01_2 : "お客様のための、お客様による、<br/>お客様だけの旅行を提供します", 
        dany_tra_02_1 : "様々なテーマを経験して見て下さい", 
        dany_tra_02_2 : "ヘリテージからトレンディまで、<br/>様々な旅行テーマをご提供します", 
        dany_tra_03_1 : "合理的で正直な料金", 
        dany_tra_03_2 : "バブルを抜いた旅行の本質に集中しました<br/>選択した旅行距離を基準に提供します.", 
        dany_vts_01 : "ガイドがお客様をお待ちしております<br/>多様な分野とテーマを網羅した専門ガイドを用意しています", 
        dany_banner_02_1 : "<b>多様な分野</b>と<b>テーマ</b>を網羅した<b>専門ガイド</b>がお待ちしております", 
        dany_banner_02_2 : "ガイドを希望するお客様を歓迎します", 
        dany_banner_02_3 : "ガイド申し込み", 
        dany_slide_01 : "アプリで会うEnjoy Street<b>ライブツアー</b>と<b>オーダーメイドツアー</b>サービス", 
        dany_slide_02_1 : "旅行専門ガイドと<br/>一緒に遠隔での<br/>リアルタイムライブツアー", 
        dany_slide_02_2 : "旅行客と旅行専門ガイド、<br/>企業と結び共有と共生の<br/>サービスプラットフォーム", 
        dany_slide_02_3 : "ライブツアーで<br/>経験する<br/>E-COMMERCE機能", 
        dany_slide_02_4 : "オン·オフラインをつなぐ<br/>オーダーメイドツアー", 
        dany_slide_03 : "Enjoy Streetを経験する", 
        dany_ft_01_1 : "利用規約", 
        dany_ft_01_2 : "個人情報処理方針", 
        dany_ft_01_3 : "位置情報利用約款", 
        dany_ft_02_1 : "株式会社ブイアールエデュ", 
        dany_ft_02_2 : "代表 Jaehun KIM", 
        dany_ft_02_3 : "事業登録番号", 
        dany_ft_02_4 : "事業者情報確認", 
        dany_ft_02_5 : "個人情報保護責任者 Jaehun KIM", 
        dany_ft_02_6 : "通信販売業申告番号 第2021-ソウル麻浦-2876", 
        dany_ft_02_7 : "観光事業者登録番号 第2021-07号", 
        dany_ft_02_8 : "04071 ソウルトゥクピョルシ マポグ トクマクロ 10 8階", 
        dany_ft_03 : "ブイアールエデュとは通信販売の仲介者であり、通信販売の当事者ではありません。 したがって、商品·取引情報および取引に関する義務と責任は販売者にあります。", 
        dany_ft_04_1 : "販売店登録のご案内", 
        dany_ft_04_2 : "ガイド登録のご案内",
        // guide text
        guide_01:"<b>キム·ボムソク</b> ガイド",
        guide_01_keyword:"#ユーモラス #親切 #韓流紹介 #韓国グルメの紹介 #ドライビング #VIP専門",
        guide_02:"<b>キム·ソンビン</b> ガイド",
        guide_02_keyword:"#ユーモラス #親切 #韓流紹介 #韓国グルメの紹介 #ドライビング #VIP専門",
        guide_03:"<b>ソン·ジョンベク</b> ガイド",
        guide_03_keyword:"#自然観光 #自由観光 #五行観光 #心理治療 #四柱分析 #ヒーリング専門",
        guide_04:"<b>イム·ジョンイル</b> ガイド",
        guide_04_keyword:"#センス #瞬発力 #K-pop #ドライビング #英語中国語同時 #韓流ドラマ",
        guide_05:"<b>オ·ソンヨン</b> ガイド",
        guide_05_keyword:"#韓流メイクアップ #韓流紹介 #韓屋を住むガイド #韓国グルメ紹介 #女性ドライビングガード #VIP専門",
        guide_06:"<b>パク・チニョン</b> ガイド",
        guide_06_keyword:"#韓流の紹介 #親切とマナー #英語MC #:韓国のグルメの紹介 #英語の通訳 #VIP専門",
        guide_07:"<b>イ・ナムギュ</b> ガイド",
        guide_07_keyword:"#専門ガイド #配慮と親切 #様々なサービス #:韓国のグルメの紹介 #家族単位 #恋愛相談",
        guide_08:"<b>イ・ソルア</b> ガイド",
        guide_08_keyword:"#笑顔 #親しみ #和気藹藹 #英語 #トレンディ #K-pop",
        guide_09:"<b>中島愛弓</b> ガイド",
        guide_09_keyword:"#温泉 #パンマニア #親切 #優しい #おしゃべり #コーヒーマニア",
        guide_10:"<b>梅崎栄子</b> ガイド",
        guide_10_keyword:"#猫 #化粧品 #韓国コスメ #美容 #エステ #皮膚美容",
        guide_11:"<b>山崎 多英子</b> ガイド",
        guide_11_keyword:"#韓国料理マニア #お酒好き #楽しい #BTS #バイリンガルママ #日韓夫婦"
      }
    };
window.addEventListener('DOMContentLoaded', function(){
      let koBtn = document.querySelector("#koBtn");
      let enBtn = document.querySelector("#usBtn"); 
      let jaBtn = document.querySelector("#jpBtn"); 
      let zhBtn = document.querySelector("#cnBtn");
      
      let setLanguage = (lang) => {
        let changeNodeList = Array.prototype.slice.call(document.querySelectorAll('[data-detect]')); 
        // 각 dataset중 detect인 요소들을 찾아 변경하는 곳. 
        changeNodeList.map( v => { 
          v.innerHTML = multiLanguage[lang][v.dataset.detect];
        })
      };
      koBtn.addEventListener("click" , () => {
        setLanguage(koBtn.dataset.lang);
        $('html').attr("lang","ko")
      });  
      enBtn.addEventListener("click" , () => {
        setLanguage(enBtn.dataset.lang);
        $('html').attr("lang","us")
      });
      jaBtn.addEventListener("click" , () => {
        setLanguage(jaBtn.dataset.lang);
        $('html').attr("lang","jp")
      });
      zhBtn.addEventListener("click" , () => {
        setLanguage(zhBtn.dataset.lang);
        $('html').attr("lang","zh")
      });
    })
  var targets = $(".carousel-container").find(".guide");
  for(var i=0; i<targets.length; i+=6){
    var list = $("<ul class='guide-list'></ul>").append(targets.slice(i, i+6))
    var area = $("<div class='guide-list-area inner'></div>").append(list);
    var areaWarp = $("<div class='carousel-item'></div>").append(area);
    areaWarp.appendTo(".carousel-container");
  }
  // 가이드 소개하기 PAGINATE
  var carousel = document.querySelector('.carousel');
  var container = carousel.querySelector('.carousel-container');
  var prevBtn = carousel.querySelector('.carousel-prev');
  var nextBtn = carousel.querySelector('.carousel-next');
  var pagination = carousel.querySelector('.carousel-pagination');
  var bullets = [].slice.call(carousel.querySelectorAll('.carousel-bullet'));
  var totalItems = container.querySelectorAll('.carousel-item').length;
  var percent = (100 / totalItems);
  var currentIndex = 0;
 
  function next() {
      slideTo(currentIndex + 1);
  };
  
  function prev() {
      slideTo(currentIndex - 1);
  };
  
  function slideTo(index) {
      index = index < 0 ? totalItems - 1 : index >= totalItems ? 0 : index;
      container.style.WebkitTransform = container.style.transform = 'translate(-' + (index * percent) + '%, 0)';
      bullets[currentIndex].classList.remove('active-bullet');
      bullets[index].classList.add('active-bullet');
      currentIndex = index;
  };
  
  bullets[currentIndex].classList.add('active-bullet');
  prevBtn.addEventListener('click', prev, false);
  nextBtn.addEventListener('click', next, false);
  
  pagination.addEventListener('click', function(e) {
      var index = bullets.indexOf(e.target);
      if (index !== -1 && index !== currentIndex) {
          slideTo(index);
      }
  }, false);
})

// 사업자등록번호 조회
function onopen(){
  var url =
  "http://www.ftc.go.kr/bizCommPop.do?wrkr_no="+frm1.wrkr_no.value;
  window.open(url, "bizCommPop", "width=750, height=700;");
}