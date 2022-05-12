function carouselimg() {
    /*    
      轮播图（无封装写法）
      1、鼠标移入高亮
      2、鼠标移入切换图片的src，然后有一个淡入淡出的效果
          最简单的罪罚，切src
          src      是图片的路径       给当前 on的img增加src
      3、自动轮播
      4、鼠标移入，停止轮播
      5、左侧和右侧可以相应的跳转轮播图
  */
    var srcArray = ['images/banner1.png', 'images/banner2.png', 'images/banner3.png', 'images/banner4.png', 'images/banner5.png']
    // 获取节点的左边 怎么识别到对应的index？？ index
    let now = 0 //当前节点索引
    let domImage = $('#ibanner').find('.bd .on img') //图片节点
    console.log(domImage)
    $('#ibanner').find('.hd li').siblings('li').eq(now).addClass('on').siblings().removeClass('on')//高亮元素 / css也可以写
    // 鼠标移入
    $('#ibanner').find('.hd li').on("mouseenter", function (event) {
        // 1、普通写法
        // $(this).addClass('on')//高亮
        // $(this).siblings().removeClass('on')
        //2、链式写法
        $(this).addClass('on').siblings().removeClass('on')
        // 如何找到  $(this).index????  data-id 可以获取
        let domImage = $(this).parent().parent().next().children().find('li img')  //轮播图的img节点,已经找到了所有的img节点
        let id = $(this).data('id')
        now = id
        domImage.attr('src', srcArray[id - 1])
    });


    /*
        自动轮播 + 高亮显示
        拿到当前的index值
        边界值 0 和 4
    */
    let timer = null
    function zidong() {
        timer = setInterval(function () {
            if (now === 4) {//在0和4之间
                now = 0
            } else if (now >= 0 && now <= 4) {//在
                now++
            }
            gaoliang()
            domImage.attr('src', srcArray[now])
        }, 2000)
    }
    zidong()

    function gaoliang(){
        $('#ibanner').find('.hd li').eq(now).addClass('on').siblings().removeClass('on') //高亮
    }

    /*
       右侧点击
         点击之后拿到索引，然后索引+1
         边界值   0和4 
    */ 
    $('#ibanner').find('div.next').click(function(){
        console.log('点我右侧',$(this))
        if(now >=0 && now<=3){
            now++
        }else if( now === 4 ){
            now =0
        }
        console.log(now)
        domImage.attr('src', srcArray[now])
        gaoliang()
    })
    // 左侧点击
    //   边界值 0 和 4
    $('#ibanner').find('div.prev').click(function(){
        console.log('点我左侧')
        if(now >=1 && now<=4){
            now--
        }else if( now ===0){
            now =4
        }
        domImage.attr('src', srcArray[now])
        gaoliang()
    })

    // 鼠标移入清除定时器
    $('#ibanner').mouseenter(function () {
        console.log('鼠标移入')
        clearInterval(timer);
    }).mouseleave(function () {
        zidong()
    })
}