function getCookie(e) {
    var c = e + "=";
    var d = document.cookie.split(";");
    for (var b = 0; b < d.length; b++) {
        var a = d[b];
        while (a.charAt(0) == " ") a = a.substring(1);
        if (a.indexOf(c) == 0) return a.substring(c.length, a.length);
    }
    return "";
}
getCookie("cookieConsent") === "" && $(".cookies__section").addClass("active"),
    $(".cookies__copy span").click(function () {
        $(".cookies__slide1").hide(), $(".cookies__slide2").show();
    }),
    $(".cookies__slide2 a").click(function () {
        $(".cookies__slide2").hide(), $(".cookies__slide1").show();
    }),
    $(".cookies__checkbox-wrapper").click(function () {
        let a = $(this).children(".cookies__checkbox");
        $(".cookies__checkbox").removeClass("checked"), a.addClass("checked");
    }),
    $(".cookies__slide1 #cookiesAll").click(function () {
        var a = new Date();
        a.setTime(a.getTime() + 15724800000), (document.cookie = "cookieConsent=OPTIMAL; expires=" + a.toGMTString() + "; path=/");
    }),
    $(".cookies__slide1 #cookiesSelection").click(function () {
        var a = new Date();
        a.setTime(a.getTime() + 15724800000),
            $("#cookiesLimited").hasClass("checked") ? (document.cookie = "cookieConsent=LIMITED; expires=" + a.toGMTString() + "; path=/") : (document.cookie = "cookieConsent=OPTIMAL; expires=" + a.toGMTString() + "; path=/");
    });

