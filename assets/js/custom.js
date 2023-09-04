$(function(){ //로드후에 실행

// history.scrollRestoration = "manual" // 새로고침시 스크롤 위치 , [manual = 복원안함, auto  = 복원]

/* (변수,매개변수에 대한 설명 주석으로 달 수 있다 / 다른 작업자 위함)
let이 같은게 두개가 있으면 안된다. */ 

/**
 * @header
 */
let lastScroll = 0;
$(window).scroll(function(){
    curr = $(this).scrollTop();
    (curr > 0) ? $('.header').addClass('fixed') : $('.header').removeClass('fixed');

    if (curr > lastScroll) { //내릴때 
        $('.header').addClass('hide');
    } else {
        $('.header').removeClass('hide');
    }
    lastScroll = curr; //조건비교 후 따라옴
})


/**
 * @gnb
 */
$('.gnb').hover(function(){
    $('.header').addClass('white')
},function(){
    $('.header').removeClass('white')
})

$('.gnb .gnb-item').hover(function(){
    $(this).find('.sub-list').stop().slideDown();
},function(){
    $(this).find('.sub-list').stop().slideUp();
})



/**
 * @lang_selct 클릭이벤트
 */
$('.header .lang').click(function(e){
    e.preventDefault();

    $('.lang-select').stop().slideToggle(400)//0.4s
})


/**
 * @menu @side_nav 클릭이벤트
 */
$('.menu').click(function(){
    $('.side-nav').addClass('on');
    $('html, body').addClass('hidden');
});


$('.side-nav .btn-close').click(function(){
    $('.side-nav').removeClass('on');
    $('html, body').removeClass('hidden');
});



    /* 
    * @숫자증가
    */
    //초기값

    // function counterFn(frame,num) {
    //     id0 = setInterval(count, 10);
    //     var result = 0;
    //     function count() {
    //         result++;
    //         if (result > num) {
    //         clearInterval(id0); //끝내는거
    //         } else {
    //         $(frame).text(result);
    //         }
    //     }

    // }

    // // 호출 
    // counterFn('#cnt1',50);
    // counterFn('#cnt2',1250);
    // counterFn('#cnt3',900);

/**
 * @main_shcolarship 카운터 스크롤 반응
 */
let scrollFlag = false;
$(window).scroll(function(){
    curr = $(this).scrollTop();
    target = $('.main-shcolarship').offset().top; //스크롤 반응 시작지점 값 구하기.
    
    if(curr >= target && scrollFlag == false){
        new numberCounter('cnt1' , 50)
        new numberCounter('cnt2' , 6479)
        new numberCounter('cnt3' , 16)
        scrollFlag = true;
    }


    if(curr >= target-$(window).height()/5){
        $('.main-shcolarship .bg-area').addClass('on');
    }else{
        $('.main-shcolarship .bg-area').removeClass('on');
    }
})


let scrollEffect = false;
$(window).scroll(function(){
    curr = $(this).scrollTop();
    target = $('.main-care').offset().top; //스크롤 반응 시작지점 값 구하기.
    
    if(curr >= target && scrollEffect == false){
        new numberCounter('cnt4' , 11173)
        new numberCounter('cnt5' , 14974)
        new numberCounter('cnt6' , 363897)
        scrollEffect = true;
    }

})


/**
 *  @side_nav 
 *  @util_bt 클릭이벤트
 */

$('.side-nav .util-bt .lang').click(function(e){
    e.preventDefault();

    $('.util-bt .tm-lang_div').stop().slideToggle(400)//0.4s
})



/**
 * @globalSlide swiper slide
 */
var swiper = new Swiper("#globalSlide", {
    slidesPerView: 3,
    spaceBetween: 80,
});



ScrollTrigger.create({
    trigger:".main-apply",
    start:"0% 0%", //트리거기준 윈도우기준 둘이 만나면 실행
    end:"100% 100%", //둘이 만나면 끝
    // markers: true,
    pin: '.main-apply .group-title',
})

$('.apply-item').each(function(a,b){

    wVal=$(this).find('.img-wrap').data('w');
    wResult = (wVal)?wVal:500;
    hVal=$(this).find('.img-wrap').data('h');
    hResult = (hVal)?hVal:500;

    gsap.to($(this).find('.img-wrap'),{
        scrollTrigger:{
            trigger:b,
            start:"0% 120%", //트리거기준 윈도우기준 둘이 만나면 실행
            end:"100% 0%", //둘 이 만나면 끝
            // markers: true,
            scrub:1,
        },
        width:wResult,
        height:hResult,  
    })
    
})
    
  
    // gsap.from('.header',{
    //     scrollTrigger:{
    //         trigger:'.header',
    //         start:"-100% 0%", //트리거기준 윈도우기준 둘이 만나면 실행
    //         end:"-100% 0%", //둘 이 만나면 끝
    //         // markers: true,  
    //     },
    //     opacity:0,
    //     yPercent:-100,
    //     duration: 0.1   
    // })


/**
 * 
 * @gsap_from 
 * @스크롤순차적로딩
 */
gsap.from('.main-visual .txt-wrap > *',{
    scrollTrigger:{
        trigger:'.main-visual',
        start:"-100% 0%", //트리거기준 윈도우기준 둘이 만나면 실행
        end:"-100% 0%", //둘 이 만나면 끝
        // markers: true,  
    },
    opacity:0,
    stagger:0.1,
    yPercent: 100,
    duration: 0.8
})

gsap.from('.main-shcolarship .group-title > *',{
    scrollTrigger:{
        trigger:'.main-shcolarship',
        start:"0% 70%", //트리거기준 윈도우기준 둘이 만나면 실행
        end:"100% 100%", //둘 이 만나면 끝
        // markers: true,
        // scrub:1
    },
    opacity:0,
    stagger:0.1,
    yPercent:100,
    duration: 0.5,
})


gsap.from('.main-today .group-title > *',{
    scrollTrigger:{
        trigger:'.main-today',
        start:"0% 70%", //트리거기준 윈도우기준 둘이 만나면 실행
        end:"100% 100%", //둘 이 만나면 끝
        // markers: true,
        // scrub:1
    },
    opacity:0,
    stagger:0.1,
    yPercent:100,
    duration: 0.8

})

gsap.from('.main-global .group-title > *',{
    scrollTrigger:{
        trigger:'.main-global',
        start:"0% 70%", //트리거기준 윈도우기준 둘이 만나면 실행
        end:"100% 100%", //둘 이 만나면 끝
        // markers: true,
        // scrub:1
    },
    opacity:0,
    stagger:0.1,
    yPercent:100,
    duration: 0.8
})

gsap.from('.main-global .swiper-wrapper > *',{
    scrollTrigger:{
        trigger:'.main-global .swiper',
        start:"0% 70%", //트리거기준 윈도우기준 둘이 만나면 실행
        end:"100% 100%", //둘 이 만나면 끝
        // markers: true,
        // scrub:1
    },
    opacity:0,
    stagger:0.1,
    yPercent:100,
    duration: 0.8
})


/**
 * @stagger 가 없는 영역 마다마다 주고 싶을 경우
 * 반복문(each) 사용
 * @data_fade 
 */
$('[data-fade]').each(function(a,b){
    gsap.from(b,{
        scrollTrigger:{
            trigger:b,
            start:"0% 70%", //트리거기준 윈도우기준 둘이 만나면 실행
            end:"100% 100%", //둘 이 만나면 끝
            // markers: true,
            // scrub:1
        },
        opacity:0,
        y:100,
        duration: 0.8
    
    })
})




/**
 * @패밀리사이트_모달창
 */
$('.family').click(function(e){
    e.preventDefault();
    $('.modal').fadeIn(500);
})

$('.modal .btn-close').click(function(){
    $('.modal').fadeOut(500);
})

    






});   