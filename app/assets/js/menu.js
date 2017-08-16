/**
 * Created by CJoy on 2016/11/10.
 */

window.onload =function () {

    var isLeftShow=true;
    $('#menu_icon').click(function () {
        if(isLeftShow){
                $( "#left_content" ).animate({
                    left: '-70%'
                },500,"linear",
                function () {
                    isLeftShow=false;
                    $(".content_right").show();
                });
            $( "#right_menu" ).animate({
                    left: '30%'
                },500,"linear",
                function () {
                    isLeftShow=false;
                    // $(".content_right").show();
                });
        }else{
            $('#left_content').animate({
                left:'0'
            },500,"linear",function(){
                isLeftShow=true;
                // $(".content_right").hide();
            });

            $( "#right_menu" ).animate({
                    left: '100%'
                },500,"linear",
                function () {
                    isLeftShow=true;
                });
        }


    });


}