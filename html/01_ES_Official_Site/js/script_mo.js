
$(document).ready(function() {

	//one page scroll
	$('#main_cont').fullpage({
        css3:true,
		autoScrolling:true,
		scrollHorizontally: true,
	});
	
    // 메인 슬라이드
    var owl = $('#owl_01');
    owl.owlCarousel({
        items:1,                 // 한번에 보여줄 아이템 수
        loop:true,               // 반복여부
        margin:0,               // 오른쪽 간격
        autoplay:false,           // 자동재생 여부
        autoplayTimeout:1800,    // 재생간격
        autoplayHoverPause:false  //마우스오버시 멈출지 여부
    });
    // 목업 슬라이드
    var owl = $('#owl_02');
    owl.owlCarousel({
        items:1,                 // 한번에 보여줄 아이템 수
        loop:false,               // 반복여부
        margin: 12,               // 오른쪽 간격
        autoplay:false,           // 자동재생 여부
        autoplayTimeout:1800,    // 재생간격
        autoplayHoverPause:false,  //마우스오버시 멈출지 여부
        center:false,
        pull: 0
    });
    
    // exp 슬라이드
    var owl = $('#owl_03');
    owl.owlCarousel({
        items:1,                 // 한번에 보여줄 아이템 수
        loop:false,               // 반복여부
        margin: 15,               // 오른쪽 간격
        autoplay:false,           // 자동재생 여부
        autoplayTimeout:1800,    // 재생간격
        autoplayHoverPause:false,  //마우스오버시 멈출지 여부
        pull: 0
    });
    // tra 슬라이드
    var owl = $('#owl_04');
    owl.owlCarousel({
        items:1,                 // 한번에 보여줄 아이템 수
        loop:false,               // 반복여부
        margin: 15,               // 오른쪽 간격
        autoplay:false,           // 자동재생 여부
        autoplayTimeout:1800,    // 재생간격
        autoplayHoverPause:false,  //마우스오버시 멈출지 여부
        pull: 0,
    });
    // es 슬라이드
    var owl = $('#owl_05');
    owl.owlCarousel({
        center: true,
        items:1,                 // 한번에 보여줄 아이템 수
        loop: true,               // 반복여부
        margin: 15,               // 오른쪽 간격
        autoplay:false,           // 자동재생 여부
        autoplayTimeout:1800,    // 재생간격
        autoplayHoverPause:false,  //마우스오버시 멈출지 여부
        pull: 0
    });
    // vts 슬라이드
    var owl = $('#owl_06');
    owl.owlCarousel({
        center: false,
        items:1,                 // 한번에 보여줄 아이템 수
        loop: false,               // 반복여부
        margin: 15,               // 오른쪽 간격
        autoplay:false,           // 자동재생 여부
        autoplayTimeout:1800,    // 재생간격
        autoplayHoverPause:false,  //마우스오버시 멈출지 여부
        pull: 0
    });




    // lang li class on
    $('.lang-area-mo').hide();

    $('.lang-btn').click(function() {
        $(this).toggleClass('on');
        if($(this).hasClass('on')) {
            $('.lang-area-mo').show();
      } else {
          $('.lang-area-mo').hide();
      }
    });


    $('.lang-area-mo .lang').click(function() {
        $(this).parents().children('.lang').removeClass('on');
        $(this).addClass('on');
    });


    $('.lang-area-list .lang').click(function() {
        $(this).parents().children('.lang').removeClass('on');
        $(this).addClass('on');
    });

    //전체메뉴 :: 햄버거버튼 클릭 시 노출
    
    $('.nav-mo').hide();
    $('.hbg-btn').click(function() {
        $('.nav-mo').show();
    });
    $('.close-btn').click(function() {
        $('.nav-mo').hide();
    });




    // // 가이드 소개하기 PAGINATE
    // var carousel = document.querySelector('.carousel');
    // var container = carousel.querySelector('.carousel-container');
    // var prevBtn = carousel.querySelector('.carousel-prev');
    // var nextBtn = carousel.querySelector('.carousel-next');
    // var pagination = carousel.querySelector('.carousel-pagination');
    // var bullets = [].slice.call(carousel.querySelectorAll('.carousel-bullet'));
    // var totalItems = container.querySelectorAll('.carousel-item').length;
    // var percent = (100 / totalItems);
    // var currentIndex = 0;
    
    // function next() {
    //     slideTo(currentIndex + 1);
    // };
    
    // function prev() {
    //     slideTo(currentIndex - 1);
    // };
    
    // function slideTo(index) {
    //     index = index < 0 ? totalItems - 1 : index >= totalItems ? 0 : index;
    //     container.style.WebkitTransform = container.style.transform = 'translate(-' + (index * percent) + '%, 0)';
    //     bullets[currentIndex].classList.remove('active-bullet');
    //     bullets[index].classList.add('active-bullet');
    //     currentIndex = index;
    // };
    
    // bullets[currentIndex].classList.add('active-bullet');
    // prevBtn.addEventListener('click', prev, false);
    // nextBtn.addEventListener('click', next, false);
    
    // pagination.addEventListener('click', function(e) {
    //     var index = bullets.indexOf(e.target);
    //     if (index !== -1 && index !== currentIndex) {
    //         slideTo(index);
    //     }
    // }, false);
    


    
});
