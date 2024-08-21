/**
 * form.js
 *
 * function： 注文フォーム用
 **/

"use strict";

$(function () {
    // 高さ
    const q02height = $("#q01").offset().top + 500;
    const q03height = $("#q02").offset().top + 700;
    const q04height = $("#q03").offset().top + 650;
    const questionheight = $("#questionaire").offset().top;
    const policyheight = $("#policy").offset().top - 100;
    // form上部座標
    const objTop = $('#button').offset().top;
    // データレイヤー初期化
    window.dataLayer = window.dataLayer || [];
    // 画面高さ
    const windowHeight = $(window).height();

    $(window).on('scroll', function () {
        scroll = $(window).scrollTop();
        if (scroll >= objTop - windowHeight) {
            $('.fixed_btn').css('display', 'none');
        } else {
            $('.fixed_btn').css('display', 'fixed');
        }
    });

    // アンケートボタンクリック
    $('.fiximg').click(function () {
        // モバイル
        $('html, body').animate({
            scrollTop: questionheight
        }, 300);
    });

    // アンケートボタンクリック
    $('.hearing').click(function () {
        // モバイル
        $('html, body').animate({
            scrollTop: questionheight
        }, 300);
    });

    // ラジオボタン変更
    $('input[name="q01[]"]:radio').change(function () {
        // モバイル
        $('html, body').animate({
            scrollTop: q02height
        }, 300);
    });

    // ラジオボタン変更
    $('input[name="q02[]"]:radio').change(function () {
        // モバイル
        $('html, body').animate({
            scrollTop: q03height
        }, 300);
    });

    // ラジオボタン変更
    $('input[name="q03[]"]:radio').change(function () {
        // モバイル
        $('html, body').animate({
            scrollTop: q04height
        }, 300);
    });

    // ラジオボタン変更
    $('input[name="q04[]"]:radio').change(function () {
        $('html, body').animate({
            scrollTop: policyheight
        }, 300);
    });

    // チェック変更
    $('input[type=checkbox]').change(function () {
        // チェックあり
        const checkFlg = $("#checkbox1").prop("checked");

        // チェック時
        if (checkFlg) {
            // 体験モニターボタン表示
            $(".visual").show();
            // 透明体験モニターボタン非表示
            $(".trans").hide();
            // チェックあり
            checkflg = false;

        } else {
            // 体験モニターボタン表示
            $(".visual").hide();
            // 透明体験モニターボタン非表示
            $(".trans").show();
        }
    });
});
