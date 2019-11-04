$(function(){
    
    var name=pageName()//页面名称：
    var path=GetUrlPath()//页面路径：

    console.log("页面名称："+name)
    console.log("页面路径："+path)


    //判断是否是PC
    if(!IsPC()){//移动端
        if(path.indexOf('mobile')==-1){//是PC端则跳转到移动端
            if(name==''){
                window.location.href='mobile/index.html'
            }else{
                window.location.href='mobile/'+name+".html"
            }
        }
    }else{//PC端
        if(path.indexOf('mobile')!=-1){//当前打开的页面为移动端,需跳转到PC端
            window.location.href='../'+name+".html"
        }
    }


    $(window).scroll(function() {
        console.log(ScollPostion().top);
        if(ScollPostion().top>200){
            $("#homePage_top").addClass('homePage_top_1')
        }else{
            $("#homePage_top").removeClass('homePage_top_1')
        }
    });

    function ScollPostion() { //滚动条位置
        var t, l, w, h;
        if(document.documentElement && document.documentElement.scrollTop) {
            t = document.documentElement.scrollTop;
            l = document.documentElement.scrollLeft;
            w = document.documentElement.scrollWidth;
            h = document.documentElement.scrollHeight;
        } else if(document.body) {
            t = document.body.scrollTop;
            l = document.body.scrollLeft;
            w = document.body.scrollWidth;
            h = document.body.scrollHeight;
        }
        return {
            top: t,
            left: l,
            width: w,
            height: h
        };
    }
    //获取页面名称
    function pageName()
    {
      var a = location.href;
      var b = a.split("/");
      var c = b.slice(b.length-1, b.length).toString(String).split(".");
      return c.slice(0, 1);
    }
    //获取页面路径
    function GetUrlPath(){
　　　　var url = document.location.toString();				
　　　　if(url.indexOf("/") != -1){
            url = url.substring(0,  url.lastIndexOf("/")) ;
　　　　}
　　　　return url;
　　}
    function IsPC() {
        var userAgentInfo = navigator.userAgent;
        var Agents = ["Android", "iPhone","SymbianOS", "Windows Phone", "iPod"];
        var flag = true;
        for (var v = 0; v < Agents.length; v++) {
            if (userAgentInfo.indexOf(Agents[v]) > 0) {
                flag = false;
                break;
            }
        }
        if(window.screen.width>=768){
            flag = true;
        }
        return flag;
    }
})