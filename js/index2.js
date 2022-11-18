$(document).ready(function(){

    // 글숨기기 보이기
    //초기설정
    //$("#tab2").hide();
    // $(".list > li:not(#tab1)").hide();
    $(".list > li:not("+ $(".tab li a.sel").attr("href") +")").hide();


    // $(".tab li a.sel").attr("href") => tab1
    
    // 이벤트
    $(".tab li a").click(function(){
        //메뉴 => 1.모든 메뉴에서 클래스 제거 2. 클릭된 대상에만 클래스추가
        $(".tab li a").removeClass("sel"); //1
        $(this).addClass("sel"); //2


        //내용 => 1. 모든내용을 숨김 2.클릭된 대상의 내용만 보여줌
        $(".list > li").hide(); //1
        $( $(this).attr("href") ).show(); //2
        return false;


    });


    /* 이미지버튼 */
    $(".btn1").click(function(){
        $(".image-slide1").append( $(".image-slide1 img:first") );
    });

    $(".btn2").click(function(){
        $(".image-slide1").prepend( $(".image-slide1 img:last") );
    });

    document.querySelector('.on2').addEventListener('click',function(){
        document.querySelector('.container').style.transform = 'translate(-450px)';
    })
    document.querySelector('.on3').addEventListener('click',function(){
        document.querySelector('.container').style.transform = 'translate(-900px)';
    })
    document.querySelector('.on').addEventListener('click',function(){
        document.querySelector('.container').style.transform = 'translate(0)';
    })



});

/* 이미지 슬라이드1 */
function show_img1(){
    $(".image-slide1").delay(1500).animate({"margin-left":"-1400px"},"slow"); //2
    $(".image-slide1").delay(1500).animate({"margin-left":"-2800px"},"slow"); //3
    $(".image-slide1").delay(1500).animate({"margin-left":"-4200px"},"slow"); //4
    $(".image-slide1").delay(1500).animate({"margin-left":"-5600px"},"slow"); //5 
    $(".image-slide1").delay(1500).animate({"margin-left":"-7000px"},"slow"); //6 
    $(".image-slide1").delay(1500).animate({"margin-left":"0"},0); //1
}
setInterval("show_img1()",1500);

/* 이미지 슬라이드2 */
/* function show_img2() {
    $(".image-slide2").delay(2000).animate({"margin-left":"-450px"},"slow"); //2 
    $(".image-slide2").delay(2000).animate({"margin-left":"-900px"},"slow"); //3
    $(".image-slide2").delay(2000).animate({"margin-left":"-450px"},"slow"); //2
    $(".image-slide2").delay(2000).animate({"margin-left":"0"},"slow"); // 1


}
setInterval("show_img2()",2000);
 */
