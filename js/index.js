~function () {
    var myChart = echarts.init(Et1);
    var option = {
        title: {
            text: 'NBA历史三分球排行榜前十名',
            subtext: 'NBA惊人',
            textStyle: {
                fontSize: 14
            }
        },
        tooltip: {
            trigger: 'axis'
        },
        toolbox: {
            show: true,
            feature: {
                magicType: {show: true, type: ['line', 'bar']}
            }
        },
        xAxis: [
            {
                type: 'category',
                data: ['雷·阿伦', '\n雷吉·米勒', '杰森·特里', '\n凯尔·科沃尔', '贾马尔·克劳福德', '\n保罗·皮尔斯', '斯蒂芬·库里', '\n文斯·卡特', '杰森·基德', '\n乔·约翰逊'],
                axisLabel: {
                    interval: 0
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                axisLabel: {
                    formatter: '{value} 个'
                }
            }
        ],
        series: [
            {
                name: '三分球个数',
                type: 'bar',
                data: [2973, 2560, 2282, 2213, 2153, 2143, 2129, 2106, 1988, 1978],
                markPoint: {
                    data: [
                        {type: 'max', name: '最大值'},
                        {type: 'min', name: '最小值'}
                    ]
                },
                markLine: {
                    data: [
                        {type: 'average', name: '平均值'}
                    ]
                }
            }
        ]
    };
    myChart.setOption(option);
}();

~function () {
    var myChart = echarts.init(Et2);
    var option = {
        tooltip : {
            trigger: 'axis'
        },
        legend: {
            data:['库里三分球命中数',"库里出场次数"]
        },
        toolbox: {
            show : true,
            feature : {
                magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
            }
        },
        calculable : true,
        xAxis : [
            {
                type : 'category',
                boundaryGap : false,
                data :['2012-2013','2013-2014','2014-2015','2015-2016','2016-2017']
            }
        ],
        yAxis : [
            {
                type : 'value'
            }
        ],
        series : [
            {
                name:'库里三分球命中数',
                type:'line',
                stack: '总量',
                data:[272,261,286,402,324,212]
            },
            {
                name:'库里出场次数',
                type:'line',
                stack: '总量',
                data:[78, 78, 80, 79, 78, 55]
            },

        ]
    };

    myChart.setOption(option);
}();

~function () {
    var myChart = echarts.init(Et3);
    var option = {
        title : {
            text:  'NBA历史三分球排行榜前十名命中率',
            subtext: '来源于网络',
            x:'center',
            textStyle: {
                fontSize: 14
            }
        },
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        toolbox: {
            show : true,
            feature : {
                magicType : {
                    show: true,
                    type: ['pie', 'funnel'],
                    option: {
                        funnel: {
                            x: '25%',
                            width: '50%',
                            funnelAlign: 'left',
                            max: 400
                        }
                    }
                }
            }
        },
        calculable : true,
        series : [
            {
                name:'三分球命中率',
                type:'pie',
                radius : '55%',
                center: ['50%', '50%'],
                data:[
                    {value:229, name:'雷·阿伦'},
                    {value:184, name:'雷吉·米勒'},
                    {value:172, name:'杰森·特里'},
                    {value:201, name:'凯尔·科沃尔'},
                    {value:190, name:'贾马尔·克劳福德'},
                    {value:163, name:'保罗·皮尔斯'},
                    {value:341, name:'斯蒂芬·库里'},
                    {value:165, name:'杰森·特里'},
                    {value:143, name:'文斯·卡特'},
                    {value:165, name:'乔·约翰逊'}
                ]
            }
        ]
    };
    myChart.setOption(option);
}();