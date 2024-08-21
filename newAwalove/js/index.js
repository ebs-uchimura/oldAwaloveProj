/**
 * index.js
 *
 * function： LP画面用
 **/

"use strict";

(function ($) {
    // トグル用フラグ
    let menuFlg = false;

    $(function () {
        // 体験モニターボタン非表示
        $(".visual").hide();
        // 透明体験モニターボタン表示
        $(".trans").show();

        // モバイル
        if (device() == 'mobile') {
            $(".fixed_btn").show();

        } else {
            $(".fixed_btn").hide();
        }

        // ハンバーガークリック時
        $(".hamburger").on("click", function () {
            // トグル
            menuFlg = !menuFlg;

            // 画面最上部に位置をずらす
            $(".menu-base").scrollTop($(window).scrollTop());

            // フラグON
            if (menuFlg) {
                // メニューを非表示
                $(".menuarea").removeClass("display-none");
            } else {
                // メニューを表示
                $(".menuarea").addClass("display-none");
            }
        });

        // メニュークリック時
        $(".menu-text li").on("click", function () {
            // トグル
            menuFlg = !menuFlg;

            // フラグON
            if (menuFlg) {
                // メニューを表示
                $(".menuarea").removeClass("display-none");
            } else {
                // メニューを表示
                $(".menuarea").addClass("display-none");
            }
        });

        // メニュー×ボタンクリック時
        $(".menuarea .batsu").on("click", function () {
            // トグル
            menuFlg = true;
            // メニューを非表示
            $(".menuarea").addClass("display-none");
        });

        // ポップアップクリック時
        $(".intro_button").on("click", function () {
            // メニューを非表示
            $(".poparea").removeClass("display-none");
        });

        // ポップアップ×ボタンクリック時
        $(".poparea .batsu").on("click", function () {
            // メニューを非表示
            $(".poparea").addClass("display-none");
        });
    });

})(window.jQuery);

function device() {
    const ua = navigator.userAgent;
    if (ua.indexOf('iPhone') > 0 || ua.indexOf('iPod') > 0 || ua.indexOf('Android') > 0 && ua.indexOf('Mobile') > 0) {
        return 'mobile';
    } else if (ua.indexOf('iPad') > 0 || ua.indexOf('Android') > 0) {
        return 'tablet';
    } else {
        return 'desktop';
    }
}