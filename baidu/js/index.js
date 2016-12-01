/**
 * Created by Administrator on 2016/11/29.
 */
$(function(){
    var num=0;
    var flog=true;
    var ch=$(window).height();
    var cw=$(window).width();
    var marginT=parseInt($("#fullPage").css("marginTop")?$("#fullPage").css("marginTop"):0);
    touch.on("body","swipeup","#fullPage",function(e){
        e.preventDefault();
            if(!flog){
                return;
            }
            num++;
            if(num==4){
                num=3;
                return;
            }
            $("#fullPage").css({
                marginTop:-num*ch,
                transition:"margin-top 0.5s ease"
            })
            flog=false;
    })//up
    touch.on("body","swipedown","#fullPage",function(e){
        console.log(flog+"--");
             e.preventDefault();
            if(!flog){
            return;
            }
            num--;
            if(num==-1){
                num=0;
                return;
            }
            $("#fullPage").css({
                marginTop:-num*ch,
                transition:"margin-top 0.5s ease"
            })
            flog=false;
    })//down
    $("#fullPage")[0].addEventListener("webkitTransitionEnd",function () {
        flog=true;
        $(".menu").css("display","none");
    })


    // 菜单
    var flog2=true;
    $(".menu-r").click(function(){
        if(flog2){
            $(".menu").css("display","block");
            $(".menu-r div").eq(0).css({
                transform:"translate(0,5px) rotate(45deg)",
                transition:"transform 0.5s"
            });
            $(".menu-r div").eq(1).css({
                transform:"translate(0,-5px) rotate(-45deg)",
                transition:"transform 0.5s"
            });
            $(".menu a").each(function(index,obj){
                $(obj).css({
                    animation:"menu 2s forwards "+index*0.2+"s"
                });
            })
            flog2=false;
        }else{
            $(".menu-r div").eq(0).css({
                transform:"translate(0,0px) rotate(0deg)",
                transition:"transform 0.5s"

            });
            $(".menu-r div").eq(1).css({
                transform:"translate(0,0px) rotate(0deg)",
                transition:"transform 0.5s"

            });
            $(".menu a").each(function(index,obj){
                $(obj).css({
                    animation:"menu-back forwards "+(2-index*0.2)+"s"
                });
            })

            flog2=true;
        }
    })
    //换屏的bug
    $(window).resize(function(){
        ch=$(window).height();
        $("#fullPage").css({
            marginTop:-num*ch,
            transition:"margin-top 0.5s ease"
        })
    })
    //去除浏览器默认行为
    $("body").mousedown(function(e){
        e.preventDefault()
    })
    $("body").mousemove(function(e){
        e.preventDefault()
    })
    // 所有的动画
    /*for(var i=1;i<4;i++){
        $("#fullPage div").eq(num).find(".all-l").css({
            animation:"none"
        })
        if(num==i){
            $("#fullPage div").eq(num).find(".all-l").css({
                animation:"all-l 5s"
            })
        }
    }*/
})//function