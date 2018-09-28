option = {
    title : {
        text:  'NBA历史三分球排行榜前十名命中率',
        subtext: '来源于网络',
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient : 'vertical',
        x : 'left',
        data:['雷·阿伦' , '雷吉·米勒' , '杰森·特里' , '凯尔·科沃尔' , '贾马尔·克劳福德' , '保罗·皮尔斯' , '斯蒂芬·库里' , '文斯·卡特' , '杰森·基德' , '乔·约翰逊',]
    },
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            magicType : {
                show: true,
                type: ['pie', 'funnel'],
                option: {
                    funnel: {
                        x: '25%',
                        width: '50%',
                        funnelAlign: 'left',
                        max: 1548
                    }
                }
            },
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    calculable : true,
    series : [
        {
            name:'三分球命中率',
            type:'pie',
            radius : '55%',
            center: ['50%', '60%'],
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
