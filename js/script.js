
$(function () {
    $(".js-animate").on("inview", function () {
        $(this).addClass("is-inview");
    });

    $(".fadeUp-anime").on("inview", function () {
        $(this).addClass("fade-on");
    });

    $(".faede_right").on("inview", function () {
        $(this).addClass("right-on");
    });

    $(".faede_left").on("inview", function () {
        $(this).addClass("left-on");
    });

    $("#loading").on("inview", function () {
        $(this).addClass("loaded");
    });

    $(".open_menu").on("click", function () {
        $(this).toggleClass("active");
        $('.global-menu').toggleClass("show");
    });

    $(".global-menu a").on("click", function () {
        $('.open_menu').removeClass("active");
        $('.global-menu').removeClass("show");
    });

    $(".mv_video_btn").on("click", function () {
        $('.modall').toggleClass("pray");
    });

    $(".modall").on("click", function () {
        $('.modall').removeClass("pray");
    });

    $('a[href^="#"]').click(function () {
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top - 50;
        $("html, body").animate({ scrollTop: position }, 300);
        return false;
    });

    $('.slider').slick({
        arrows: false,//左右の矢印はなし
        autoplay: true,//自動的に動き出すか。初期値はfalse。
        autoplaySpeed: 0,//自動的に動き出す待ち時間。初期値は3000ですが今回の見せ方では0
        speed: 6900,//スライドのスピード。初期値は300。
        infinite: true,//スライドをループさせるかどうか。初期値はtrue。
        pauseOnHover: false,//オンマウスでスライドを一時停止させるかどうか。初期値はtrue。
        pauseOnFocus: false,//フォーカスした際にスライドを一時停止させるかどうか。初期値はtrue。
        cssEase: 'linear',//動き方。初期値はeaseですが、スムースな動きで見せたいのでlinear
        slidesToShow: 5,//スライドを画面に4枚見せる
        slidesToScroll: 1,//1回のスライドで動かす要素数
    });

});


window.onload = function () {
    luxy.init();
}

// $(() => {
//     $('.mv_btn').modalVideo({ channel: 'youtube' });
// });


// マウスストーカー要素
var mouseStalker

// マウスストーカー要素の位置
var stalker = {
    x: 0,
    y: 0
}

// マウスの位置
var mouse = {
    x: 0,
    y: 0
}

// 読み込み後に初期化をするためのハンドラ
document.addEventListener('DOMContentLoaded', setup)

// マウスの動きを監視
document.addEventListener('mousemove', mousemove)

// 初期化処理
function setup() {
    // マウスストーカー要素を取得
    mouseStalker = document.querySelector('.mouse-stalker')

    // 更新処理を開始
    update()
}

// マウスが動くたびにマウスの位置を保持しておく
function mousemove(e) {
    mouse.x = e.clientX
    mouse.y = e.clientY
}

// 更新処理
function update() {
    // マウスストーカー要素の位置を更新
    stalker.x += (mouse.x - stalker.x) * 0.1
    stalker.y += (mouse.y - stalker.y) * 0.1

    // マウスストーカーの位置を小数点第一位まで四捨五入
    var x = Math.round(stalker.x * 10) / 10
    var y = Math.round(stalker.y * 10) / 10

    // マウスストーカー要素のスタイルを更新
    mouseStalker.style.transform = `translate3d(` + x + 'px,' + y + 'px, 0)'

    // ループ
    requestAnimationFrame(update)
}
