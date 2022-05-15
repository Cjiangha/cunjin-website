/*
    1、点击下方的点切换高亮
    2、点击对应的下方原点对应索引的banner图会切换(circle[1]->banner[1])，红-> 图片
    3、点击后，左下角的文字会对应的上移，上一个节点的文字对应下移
*/

let imgSrc = ['yaowen1.jpg','yaowen2.jpg','yaowen3.jpg','yaowen4.jpg','yaowen5.jpg','yaowen6.jpg']
let bannerimg = $('.focusBox .pic').find('li img') //banner的img节点
let bannerimgli = $('.focusBox .pic').find('li')//banner的img节点
let circle = $('.focusBox .num').find('ul li') //圆点节点
let bannerimgjs = document.querySelectorAll('.focusBox .pic li img')

circle.on('click',function(){
    console.log('click')
    // 高亮显示
    $(this).addClass('on')
    $(this).siblings().removeClass('on')
    // 点击之后切换图片
    let id = $(this).data('id') - 1
    console.log(    $(this))
    // bannerimg[id].attr('src', `./img/${imgSrc[id]}`)
    $.each([bannerimgli], function(index,item) {
        item.css('display','none')
      });
      bannerimgli[id].style.display = 'list-item';
 
})
