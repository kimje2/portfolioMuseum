$(document).ready(function(){
    window.mySwipe = $('#mySwipe').Swipe({
       startSlide: 0,   //초기에 첫 번째 배너가 노출
       auto: 3000,  //3초 이후 자동으로 배너가 이동
       continuous: true, //배너가 반복되어 롤링
       disableScroll: true, //슬라이드 배너에 스크롤바 생성을 차단
       stopPropagation: true, //하위 요소에 이벤트 전달을 차단
       callback: function(index, element) {}, //이벤트가 완료되면 콜백함수를 실행
       transitionEnd: function(index, element) {} //화면이 전환되면 익명함수 실행
    }).data('Swipe');
  
    $(".prevBtn").on("click",function(){//이전 버튼을 클릭했을 때...
      mySwipe.prev(); //이전 배너로 이동
    });
  
    $(".nextBtn").on("click",function(){//다음 버튼을 클릭했을 때...
      mySwipe.next(); //다음 배너로 이동
    });
  });
  