$(function () {
  var headSwiper = new Swiper('.header-swiper-container', {
    direction: 'vertical',
    loop: true, // 循环模式选项
    autoplay: true,
  });
  //列表轮播
  var listSwiper = new Swiper('.swiper-container', {
    loop: true, // 循环模式选项
    autoplay: true,
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
    },
    // 如果需要前进后退按钮
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  // 词云轮播
  // var wordSwiper = new Swiper('.word-swiper-container', {
  //   loop: true, // 循环模式选项
  //   autoplay: true,
  //   // 如果需要分页器
  //   // pagination: {
  //   //   el: '.swiper-pagination',
  //   // },
  //   // 如果需要前进后退按钮
  //   // navigation: {
  //   //   nextEl: '.swiper-button-next',
  //   //   prevEl: '.swiper-button-prev',
  //   // },
  // });
  var wordData01, wordData02;
  var data01 = [['aaaa', 24], ['ss12ss', 42], ['dddd', 12], ['xx1xx', 99], ['qwwert', 10], ['d1ddd', 32], ['321', 99], ['2d2s', 142], ['xxxx', 19], ['qwwert', 10], ['d1ddd', 312], ['321', 99], ['2d2s', 142],];
  var data02 = [['qqq', 24], ['ss12ss', 42], ['sss', 12], ['hhh', 99], ['xxxx', 19], ['qwwert', 10], ['d1ddd', 312], ['321', 99], ['2d2s', 142],];
  var data03 = [['www', 24], ['ss12ss', 42], ['dasdd', 12], ['ttt', 99], ['qwwert', 10], ['d1mmd', 32], ['x4xx', 19], ['pppp', 10], ['74e', 312], ['321', 99], ['2d2s', 142],];
  var dataArr = [data01, data02, data03];
  var dataIndex01 = 0, dataIndex02 = 0;
  $('.tab-box-item').click(function () {
    $(this).siblings().removeClass('active');
    $(this).addClass('active');
    if($(this).parents('.data-map').attr('id')==='data-map'){
      return false
    }
    dataIndex01 = $(this).index();
    if($(this).parents('.word-swiper-container').find('.wordCloud').attr('id')==='wordCloud01'){
      changeWordCloud01();
    }else {
      changeWordCloud02();
    }
  });

  changeWordCloud01();
  changeWordCloud02();
  function changeWordCloud01(){
    WordCloud(document.getElementById('wordCloud01'), {
      list: dataArr[dataIndex01],
      backgroundColor: null,
      color: "#ccc",
      rotationSteps: 30,
      minSize: '10px',
      drawOutOfBound: false,
      shrinkToFit: true
    });
  };
  function changeWordCloud02(){
    WordCloud(document.getElementById('wordCloud02'), {
      list: dataArr[dataIndex02],
      backgroundColor: null,
      color: "#ccc",
      rotationSteps: 30,
      minSize: '10px',
      drawOutOfBound: false,
      shrinkToFit: true
    });
  };

});
