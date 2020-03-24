$(function () {
  var headSwiper = new Swiper('.header-swiper-container', {
    direction: 'vertical',
    loop: false, // 循环模式选项
    autoplay: true,
  });
  //列表轮播
  // var listSwiper = new Swiper('.swiper-container', {
  //   loop: false, // 循环模式选项
  //   autoplay: false,
  //   // 如果需要分页器
  //   pagination: {
  //     el: '.swiper-pagination',
  //   },
  //   // 如果需要前进后退按钮
  //   navigation: {
  //     nextEl: '.swiper-button-next',
  //     prevEl: '.swiper-button-prev',
  //   },
  // });


  $.getJSON("./data/gdelt/gdelt_data.json", function (gdelt_json) {

    //词云
    var wordData01, wordData02;
    // console.log(gdelt_json['title'][0])
    // console.log(eval("(" + gdelt_json['title'][0] + ")"))
    title_list = gdelt_json['title']
    var data01 = eval("(" + title_list[title_list.length - 1] + ")");
    // var data01 = [['china', 1620], ['case', 802], ['new', 788], ['outbreak', 726], ['confirm', 630], ['first', 499], ['human', 486], ['what', 441], ['spread', 393]]
    var data02 = [['qqq', 24], ['ss12ss', 42], ['sss', 12], ['hhh', 99], ['xxxx', 19], ['qwwert', 10], ['d1ddd', 312], ['321', 99], ['2d2s', 142],];

    var dataArr = [data01, data02];
    var dataIndex01 = 0, dataIndex02 = 0;
    $('.tab-box-item').click(function () {
      $(this).siblings().removeClass('active');
      $(this).addClass('active');
      if ($(this).parents('.data-map').attr('id') === 'data-map') {
        return false
      }
      dataIndex01 = $(this).index();
      if ($(this).parents('.word-swiper-container').find('.wordCloud').attr('id') === 'wordCloud01') {
        changeWordCloud01();
      } else {
        changeWordCloud02();
      }
    });

    changeWordCloud01();
    changeWordCloud02();

    function changeWordCloud01() {
      var wordCloud01 = new B2wordcloud(document.getElementById('wordCloud01'), {
        list: dataArr[dataIndex01],
        tooltip: {
          show: true,
          formatter: function (item) {
            return '<div>' + item[0] + '</div>' + '<div>' + item[1] + '</div>'
          }
        },
        backgroundColor: null,
        color: "#ccc",
        rotationSteps: 30,
        minSize: '20px',
        drawOutOfBound: false,
        shrinkToFit: true
      });
      console.log(dataArr[dataIndex01])
      wordCloud01.resize()
    };

    function changeWordCloud02() {
      var wordCloud02 = new B2wordcloud(document.getElementById('wordCloud02'), {
        list: dataArr[dataIndex02],
        tooltip: {
          show: true,
          formatter: function (item) {
            return '<div>' + item[0] + '</div>' + '<div>' + item[1] + '</div>'
          }
        },
        backgroundColor: null,
        color: "#ccc",
        rotationSteps: 30,
        minSize: '20px',
        drawOutOfBound: false,
        shrinkToFit: true
      });
      wordCloud02.resize()
    };

    // GDELT
    var chart01 = echarts.init(document.getElementById('chart01'));
    var chart02 = echarts.init(document.getElementById('chart02'));
    chartOption = {
      tooltip: {
        trigger: 'axis',
        position: true
      },
      legend: {
        data: ['Daily Count', 'Tone Score'],
        textStyle: {
          color: '#fff',
          fontSize: '10'
        },
        // height:1000,
        padding: 3
      },
      grid: {
        left: '1%',
        right: '1%',
        bottom: '1%',
        top: 35,
        containLabel: true
      },
      // toolbox: {
      //   feature: {
      //     saveAsImage: {}
      //   }
      // },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: gdelt_json['date'],
        axisLine: {
          lineStyle: {
            color: '#dfdfdf'
          }
        }
      },
      yAxis: [
        {
          name: 'Daily Count',
          type: 'value',
          axisLine: {
            lineStyle: {
              color: '#dfdfdf'
            }
          },
          axisLabel: {
            formatter: function (value, index) {

              return (value*1/1000).toFixed(1)+'K'
            }
          }

        },
        {
          name: 'Tone Score',
          type: 'value',
          axisTick: {
            show: true
          },
          axisLine: {
            lineStyle: {
              color: '#dfdfdf'
            }
          }
        }
      ],
      series: [
        {
          name: 'Daily Count',
          type: 'line',
          data: gdelt_json['count']
        },
        {
          name: 'Tone Score',
          type: 'line',
          yAxisIndex: 1,
          data: gdelt_json['score']
        }
      ]
    };
    chart01.setOption(chartOption);
    chart02.setOption(chartOption);

  });


  // mapbox表格
  $('.list_item__1WHUy').click(function () {
    console.log($(this).index());
    $(this).find('svg').eq(0).hide();
    $(this).find('svg').eq(1).show();
    $(this).siblings().find('svg').eq(0).show();
    $(this).siblings().find('svg').eq(1).hide();
    $('.list_listTable__1yV4j').hide();
    $('.list_listTable__1yV4j').eq($(this).index()-1).show()
    // $(this).second().show();
  });
  $('.modulebox_hidebtn__QHdrj').click(function () {
    $(this).parents('.map-table').hide();
    $('.map-table-title').show();
  });
  $('.map-table-title').click(function () {
    $('.map-table').show();
    $('.map-table-title').hide();
  })
});
