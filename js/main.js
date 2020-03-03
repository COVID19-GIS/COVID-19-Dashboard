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
  //词云图
  var wordData01, wordData02;
  var data01 = [['aaaa', 24], ['ss12ss', 42], ['dddd', 12], ['xx1xx', 99], ['qwwert', 10], ['d1ddd', 32], ['321', 99], ['2d2s', 142], ['xxxx', 19], ['qwwert', 10], ['d1ddd', 312], ['321', 99], ['2d2s', 142],];
  var data02 = [['qqq', 24], ['ss12ss', 42], ['sss', 12], ['hhh', 99], ['xxxx', 19], ['qwwert', 10], ['d1ddd', 312], ['321', 99], ['2d2s', 142],];
  var data03 = [['www', 24], ['ss12ss', 42], ['dasdd', 12], ['ttt', 99], ['qwwert', 10], ['d1mmd', 32], ['x4xx', 19], ['pppp', 10], ['74e', 312], ['321', 99], ['2d2s', 142],];
  var dataArr = [data01, data02, data03];
  var dataIndex01 = 0, dataIndex02 = 0;
  //切换词云图
  $('.nextWordBtn01').click(function () {
      if (dataIndex01 >= dataArr.length - 1) {
        dataIndex01 = 0;
      } else {
        dataIndex01++
      }
    changeWordCloud01();
    }
  );
  $('.prevWordBtn01').click(function () {
    if (dataIndex01 == 0) {
      dataIndex01 = dataArr.length - 1;
    } else {
      dataIndex01--
    }
    changeWordCloud01();
  });
  $('.nextWordBtn02').click(function () {
      if (dataIndex02 >= dataArr.length - 1) {
        dataIndex02 = 0;
      } else {
        dataIndex02++
      }
    changeWordCloud02();
    }
  );
  $('.prevWordBtn02').click(function () {
    if (dataIndex02 == 0) {
      dataIndex02 = dataArr.length - 1;
    } else {
      dataIndex02--
    }
    changeWordCloud02();
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


  //timeline
  // var chart_bar = echarts.init(document.getElementsByClassName('chart')[0])
  // var timeline = echarts.init(document.getElementById('timeline-embed'));
  // console.log(timeline)
  // timeline.setOption(
  //   {
  //     //timeline基本配置都写在baseoption 中
  //     baseOption: {
  //       timeline: {
  //         //loop: false,
  //         axisType: 'category',
  //         show: true,
  //         autoPlay: true,
  //         playInterval: 1500,
  //         data: ['2019-12-28', '12-29', '12-30', '12-31', '2020-01-01', '01-02', '01-03', '01-04', '01-05', '01-06', '01-07']
  //       },
  //       grid: {containLabel: true},
  //       xAxis: [{
  //         type: 'value',
  //         name: '人',
  //         max: 2000,
  //         axisLine: {
  //           lineStyle: {
  //             color: '#00a1e4'
  //           }
  //         },
  //       },],
  //       yAxis: [{
  //         type: 'category',
  //         inverse: true,
  //         axisLine: {
  //           lineStyle: {
  //             color: '#00a1e4'
  //           }
  //         },
  //       }],
  //       series: [
  //         {
  //           type: 'bar',
  //         },
  //       ]
  //     },
  //
  //
  //     //变量则写在options中
  //     options: [
  //       {
  //         yAxis: [{
  //           data: ['Mainland China', 'South Korea', 'Italy', 'Japan', 'Iran']
  //         }],
  //         title: {
  //           text: '2019-12-28统计值',
  //           textStyle: {
  //             color: '#00a1e4'
  //           }
  //         },
  //         series: [
  //           {
  //             data: [1213, 44, 8, 28, 24]
  //           },
  //
  //         ]
  //       },
  //       {
  //         yAxis: [{
  //           data: ['Mainland China', 'South Korea', 'Italy', 'Japan', 'Iran']
  //         }],
  //         title: {
  //           text: '2019-12-29统计值'
  //         },
  //         series: [
  //           {
  //             data: [1213, 44, 8, 28, 24]
  //           },
  //
  //         ]
  //       },
  //       {
  //         yAxis: [{
  //           data: ['Mainland China', 'South Korea', 'Italy', 'Japan', 'Iran']
  //         }],
  //         title: {
  //           text: '2019-12-29统计值',
  //           textStyle: {
  //             color: '#00a1e4'
  //           }
  //         },
  //         series: [
  //           {
  //             data: [613, 44, 8, 28, 24]
  //           },
  //
  //         ]
  //       },
  //       {
  //         yAxis: [{
  //           data: ['Mainland China', 'South Korea', 'Italy', 'Japan', 'Iran']
  //         }],
  //         title: {
  //           text: '2019-12-29统计值',
  //           textStyle: {
  //             color: '#00a1e4'
  //           }
  //         },
  //         series: [
  //           {
  //             data: [213, 44, 8, 28, 24]
  //           },
  //
  //         ]
  //       },
  //       {
  //         yAxis: [{
  //           data: ['Mainland China', 'South Korea', 'Italy', 'Japan', 'Iran']
  //         }],
  //         title: {
  //           text: '2019-12-29统计值'
  //         },
  //         series: [
  //           {
  //             data: [1213, 44, 8, 28, 24]
  //           },
  //
  //         ]
  //       },
  //       {
  //         yAxis: [{
  //           data: ['Mainland China', 'South Korea', 'Italy', 'Japan', 'Iran']
  //         }],
  //         title: {
  //           text: '2019-12-29统计值',
  //           textStyle: {
  //             color: '#00a1e4'
  //           }
  //         },
  //         series: [
  //           {
  //             data: [123, 44, 8, 28, 24]
  //           },
  //
  //         ]
  //       },
  //     ]
  //   }
  // );

});
