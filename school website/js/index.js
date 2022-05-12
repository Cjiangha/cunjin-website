(function () {
    // 导航toggle
    function togglesum() {
        var elarr = ['#m2', '#m6', '#m8', '#m9', '#m10']
        elarr.forEach((item, index) => {
            if (item == '#m2') {
                //第一个延迟1000ms
                toggle2({
                    el: elarr[0],
                    childerEl: '.sub',
                    time: 1000 //默认时间为300
                })
            } else {
                // 正常使用，不传值 默认300
                toggle2({
                    el: item,
                    childerEl: '.sub',
                    // time: 400 //默认时间为300
                })
            }
        });
    }
    // nav
    togglesum();

    // banner
    carouselImg({
        el: '#ibanner', //(必填参数)
        imgdata:
            ['images/banner1.png',
                'images/banner2.png',
                'images/banner3.png',
                'images/banner4.png'],//(必填参数)
        time: 3 //(可选参数)
    })






}())