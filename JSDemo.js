var myChartTest = echarts.init(document.getElementById("test"));//初始化echarts
var yearData = [];
$.getJSON("JSDemoTest.json",function(req){
    $.each(req.yearArray,function(index,value,array){
        //遍历七个数据放置
        if(index<7){
            yearData.push(req.yearArray[index].year)
        }
    })
    console.log(yearData);
    option = {
        xAxis: {
            type: 'category',
            data: yearData
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line'
        }]
    };
    myChartTest.setOption(option);//绘制echarts
})
