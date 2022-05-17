(function () {
    if (
        navigator.userAgent.match(/Mobi/i) ||
        navigator.userAgent.match(/Android/i) ||
        navigator.userAgent.match(/iPhone/i) ||
        navigator.userAgent.match(/IPad/i)
    ) {
        // 当前设备是移动设备
        console.log('我是移动设备呀！！！！')
        window.location.href = './mobile.html'
    }


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

    // search
    var scheduleBox = document.querySelector('#search-form')
    var toggleSearch = document.querySelector('#toggle-search')
    var toggleSearchSearch = document.querySelector("#inputSearch")
    var toggleSearchImg = document.querySelector('#inputImage')
    console.log(toggleSearchSearch)
    console.log(toggleSearchImg)
    // 使用事件委托，对全局的事件进行判断
    document.addEventListener("click", function (e) {
        // 判断被点击的元素是不是scheduleInput元素，不是的话，就隐藏之
        var e = e || window.event;
        var target = e.target || e.srcElement;
        console.log(target)
        console.log(scheduleBox)
        if (target == toggleSearch || target == toggleSearch || target == toggleSearchSearch || target == toggleSearchImg) {
            console.log('toggleSearch')
            $('#search-form').addClass('open')
        }
        else if (e.target !== scheduleBox || e.target !== toggleSearch) {
            // 目标元素不是搜索input div  或者 不是搜索按钮
            scheduleBox.setAttribute("class", "");
        }
    });



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


    let hasMoreconfirst = $('.part3 .hasMoreTab .bd>.con .xyxx_list:first-child')
    let hasMoreconlast = $('.part3 .hasMoreTab .bd>.con .xyxx_list:last-child')
    //校园快讯
    let hdul = $('.part3 .hasMoreTab .hd').find('ul li')
    hdul.on('click', function () {
        $(this).addClass('on').siblings().removeClass('on')
        let id = $(this).data('id')
        if ($(this).attr('class') === 'on') {
            console.log(id)
            if (id === 1) {
                hasMoreconfirst.css({ 'display': 'block' })
                hasMoreconlast.css({ 'display': 'none' })
            } else if (id === 2) {
                hasMoreconfirst.css({ 'display': 'none' })
                hasMoreconlast.css({ 'display': 'block' })
            }
        }
    })

    let hastzggconfirst = $('.part3 .tzgg .bd>.con .xyxx_list:first-child')
    let hastzggconlast = $('.part3 .tzgg .bd>.con .xyxx_list:last-child')
    let tzgg = $('.part3 .tzgg .hd').find('ul li')
    tzgg.on('click', function () {
        $(this).addClass('on').siblings().removeClass('on')
        let id = $(this).data('id')
        if ($(this).attr('class') === 'on') {
            console.log(id)
            if (id === 1) {
                hastzggconfirst.css({ 'display': 'block' })
                hastzggconlast.css({ 'display': 'none' })
            } else if (id === 2) {
                hastzggconfirst.css({ 'display': 'none' })
                hastzggconlast.css({ 'display': 'block' })
            }
        }
    })


    // swiper
    new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        // slidesPerView 对应的格子数量
        slidesPerView: 4,
        paginationClickable: true,
        spaceBetween: 30,
        // 如果需要前进后退按钮
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        loop: true
    });


}())