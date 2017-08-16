/**
 * Created by Administrator on 2016/11/10.
 */


    $(function () {
        $('#tabs1').tabs()
    });

    $(function () {
        $('#tabs2').tabs()
    });

    $(function () {

        $('.toggle_img1').click(function () {
            $('.toggle_img1 img').toggle();

            $('.toggle1').siblings().animate({
                height:"toggle"
            })
        })
    })

    $(function () {

        $('.toggle_img2').click(function () {
            $('.toggle_img2 img').toggle();

            $('.toggle2').siblings().animate({
                height:"toggle"
            })
        })
    })


