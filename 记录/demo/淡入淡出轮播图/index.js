
//对应图片 小圆点 的下标
var index = 0;
//获取所有的图片
var itemList = document.getElementsByClassName("item");
// 定时器
var t2 = null;
// 先让所有的图片 透明度 全都为0 
//获取小圆点的数组
var pageItems = document.querySelectorAll(".pagenation>div")
// console.log(pageItems)
//用定时器实现图片的切换
var t1 = setInterval(function () {
    index = index >= (itemList.length - 1) ? 0 : ++index;
    // index++;
    for (var i = 0; i < itemList.length; i++) {
        itemList[i].style.opacity = 0;
        pageItems[i].style.background = "grey"
    }
    //动画效果的设置
    itemList[index].style.transition = "opacity 1s ease .2s"
    itemList[index].style.opacity = 1
    pageItems[index].style.background = "purple"

}, 1500)
// 鼠标进入轮播区域 停止定时器
document.getElementsByClassName("banner")[0].onmouseover = function () {

    if (t2 != null) {
        clearInterval(t2)
    } else {
        clearInterval(t1)
    }
}
document.getElementsByClassName("banner")[0].onmouseout = function () {
    t2 = setInterval(function () {
        index = index >= (itemList.length - 1) ? 0 : ++index;
        // index++;
        for (var i = 0; i < itemList.length; i++) {
            itemList[i].style.opacity = 0;
            pageItems[i].style.background = "grey"
        }
        itemList[index].style.transition = "opacity 1s ease .2s"
        itemList[index].style.opacity = 1
        pageItems[index].style.background = "purple"

    }, 1500)

}
// 分液器里面的 div 
//   for(var i=0;i<pageItems.length;i++){
//     pageItems[i].style.background="grey"
//         pageItems[i].onclick= function(){
//             this.style.background="purple"
//         }
//   }
// 事件委托来
document.querySelector(".pagenation").onclick = function (e) {
    // 判断它是否是点击 子元素 触发？？？
    // console.log(e.target)
    if (e.target.className == "pagenation") {
        // console.log("父元素点击触发")
    } else {
        // 子元素触发
        // console.log("子元素点击触发")
        var id = e.target.id;
        var pageIndex = null;
        // console.log(id)
        for (var i = 0; i < pageItems.length; i++) {
            pageItems[i].style.background = "grey"

            if (id.indexOf(i) > 0) {
                pageIndex = i;
            }
        }
        e.target.style.background = "purple"
        // 图片 跟随变更
        index = pageIndex
        for (var i = 0; i < itemList.length; i++) {
            itemList[i].style.opacity = 0;
        }
        itemList[index].style.opacity = 1;
        // console.log(pageIndex)
        //index
    }

    console.log("--------")
}
//获取节点
var goout = document.getElementsByClassName("goout")[0];
var goon = document.getElementsByClassName("goon")[0];
goout.onclick = function () {
    //实现思路和自动切换思路一样
    index = index >= (itemList.length - 1) ? 0 : ++index;
    // index++;
    for (var i = 0; i < itemList.length; i++) {
        itemList[i].style.opacity = 0;
        pageItems[i].style.background = "grey"
    }
    itemList[index].style.transition = "opacity 1s ease .2s"
    itemList[index].style.opacity = 1
    pageItems[index].style.background = "purple"
}
goon.onclick = function () {
    index = index <= 0 ? itemList.length - 1 : --index;
    // index++;
    for (var i = 0; i < itemList.length; i++) {
        itemList[i].style.opacity = 0;
        pageItems[i].style.background = "grey"
    }
    itemList[index].style.transition = "opacity 1s ease .2s"
    itemList[index].style.opacity = 1
    pageItems[index].style.background = "purple"
}
