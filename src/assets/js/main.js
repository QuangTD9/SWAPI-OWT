$("#btn-signin").click(function () {
    showlay();
});

$("#btn-sign-in-gg").click(function () {
    hiddenOverlay();
});

$(".overlay").click(function (event) {
    $target = $(event.target);
    if (!$target.closest('.overlay__login--pop').length) {
        hiddenOverlay();
    }
});

$(window).scroll(function () {
    if ($(window).scrollTop() >= 500) {
        $("#btn--float").css('display', 'block');
    } else {
        $("#btn--float").css('display', 'none');
    }
});

function hiddenOverlay() {
    $(".overlay").css('display', 'none');
    $("body").css('overflow-y', 'auto');
}

function showlay() {
    $(".overlay").css('display', 'block');
    $("body").css('overflow-y', 'hidden');
}

$(".btn--navigate").click(function (event) {
    location.href = "https://dashboard.davnos.com/"
});


$("#iconfacebook").click(function (event) {
    window.open('https://www.facebook.com/DallmeierVietnam/', '_blank')
});
$("#icontwiter").click(function (event) {
    window.open('https://twitter.com/Dallmeier_com', '_blank')
});
$("#iconstream").click(function (event) {
    window.open('https://www.youtube.com/user/DallmeierElectronic', '_blank')
});
$("#iconin").click(function (event) {
    window.open('https://www.linkedin.com/company/dallmeier-electronic/', '_blank')
});
$("#dmllogo").click(function (event) {
    window.location.href = '/';
});