

function carouselImg(opt) {
    /*    
      轮播图()
      1、鼠标移入高亮
      2、鼠标移入切换图片的src，然后有一个淡入淡出的效果
          最简单的写法切src
          src      是图片的路径       给当前 on的img增加src
      3、自动轮播
      4、鼠标移入，停止轮播
      5、左侧和右侧可以相应的跳转轮播图
        
      carouselimg
        ({ //配置参数
            ele: '#box',//最外层id名(必选参数)
           
            imgdata: ['img/001.jpg', 'img/002.jpg', 'img/003.jpg', 'img/004.jpg'],//图片数据(必选参数)
            time: 2//切换图片的秒数(可选参数)
        });
  */

    let defaultopt = {
        el: '',
        time: 2//图片切换时间
    }

    //替补方案
    Object.assign(defaultopt, opt);
    let srcArray = defaultopt.imgdata
    let now = 0 //当前节点索引
    let domImage = $(defaultopt.el).find('.bd .on img') //图片节点
    let str = defaultopt.imgdata.map((item, index) => `<li data-id="${index + 1}"></li>`).join('')
    console.log('str-----', str)
    console.log('el', $(defaultopt.el).find('hd ul'))
    $(defaultopt.el).find('.hd ul').html(str)
    $(defaultopt.el).find('.hd li').siblings('li').eq(now).addClass('on').siblings().removeClass('on')//高亮元素 / css也可以写
    // 鼠标移入
    $(defaultopt.el).find('.hd li').on("mouseenter", function (event) {
        // 1、普通写法
        // $(this).addClass('on')//高亮
        // $(this).siblings().removeClass('on')
        //2、链式写法
        $(this).addClass('on').siblings().removeClass('on')
        // 如何找到  $(this).index????  data-id 可以获取
        let domImage = $(this).parent().parent().next().children().find('li img')  //轮播图的img节点,已经找到了所有的img节点
        let id = $(this).data('id') - 1
        now = id
        console.log(now)
        domImage.attr('src', srcArray[id])
        domImage.css()
        $(this).addClass
    });

    /*
        自动轮播 + 高亮显示
        拿到当前的index值
        边界值 0 和 4
    */
    let timer = null
    function zidong() {
        timer = setInterval(function () {
            console.log(srcArray.length)
            if (now === srcArray.length - 1) {//在0和4之间
                now = 0
            } else if (now >= 0 && now <= srcArray.length - 1) {//在
                now++
            }
            gaoliang()
            domImage.attr('src', srcArray[now])
        }, defaultopt.time * 1000)
    }
    zidong()

    function gaoliang() {
        $(defaultopt.el).find('.hd li').eq(now).addClass('on').siblings().removeClass('on') //高亮
    }

    /*
       右侧点击
         点击之后拿到索引，然后索引+1
         边界值   0和4 
    */
    $(defaultopt.el).find('div.next').click(function () {
        // console.log('点我右侧', $(this))
        //  >=0 <= 3
        if (now >= 0 && now <= srcArray.length - 2) {
            now++
            // now === 3
        } else if (now === srcArray.length - 1 || now === srcArray.length ) {
            // 如果同时存在 定时器 now 增加1 且 右键的时候，会出现同时加1的情况 
            now = 0
        }
        console.log(now)
        domImage.attr('src', srcArray[now])
        gaoliang()
    })

    /*
      左侧点击
      边界值 0 和 4
    */

    $(defaultopt.el).find('div.prev').click(function () {
        console.log('点我左侧')
        // >=1 <= 3
        if (now >= 1 && now <= srcArray.length - 1) {
            now--
        } else if (now === 0) {
            now = srcArray.length - 1
        }
        console.log(now)
        domImage.attr('src', srcArray[now])
        gaoliang()
    })

    // 鼠标移入清除定时器
    $(defaultopt.el).mouseenter(function () {
        console.log('鼠标移入')
        clearInterval(timer);
    }).mouseleave(function () {
        //鼠标移出
        zidong()
    })
}