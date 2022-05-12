function toggle2(opt){
    let defaultopt={
        time:300 //默认时间为300
    }
    Object.assign(defaultopt, opt);

    //鼠标移入
    $(defaultopt.el).mouseenter(function(){
        console.log()
        $(this).children(defaultopt.childerEl).slideDown(defaultopt.time);
    })

    // 鼠标移出
    $(defaultopt.el).mouseleave(function(){
        //鼠标移入
        // $(this).children('.sub').css('display','block')
        $(this).children('.sub').slideUp(defaultopt.time)
    })
}