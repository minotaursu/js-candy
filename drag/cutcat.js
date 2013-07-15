void function($) {
    cutCat = {
        isdragging:false,
        count:0,
        mouseX:0,
        mouseY:0,
        objX:0,
        objY:0,
        showlog: function() {
            console.log("https://github.com/minotaursu");
        },
        drag: function() {
            $("#mirror").bind("mousedown",function(event){
                cutCat.isdragging=true;
                cutCat.count=0;
                mouseX=~~event.pageX;
                mouseY=~~event.pageY;
                var p=$("#mirror").offset();
                var q=$("#bg").offset();
                objX=~~(p.left-q.left);
                objY=~~(p.top-q.top);
            });
            $("#mirror").bind("mouseup",function(){
                cutCat.isdragging=false;
                cutCat.count=0;
            });
            $("#mirror").bind("mousemove",function(event){
                cutCat.count++;
                if(cutCat.isdragging&&cutCat.count%2){
                    var x=~~(event.pageX-mouseX+objX);
                    var y=~~(event.pageY-mouseY+objY);
                    x=x>250?250:x;
                    y=y>400?400:y;
                    x=x<0?0:x;
                    y=y<0?0:y;
                    $("#mirror").css("left",x+"px");
                    $("#mirror").css("top",y+"px");

                    var p=$("#mirror").offset();
                    var q=$("#bg").offset();
                    var px=~~(p.left-q.left);
                    var py=~~(p.top-q.top);
                    var offset=-px+"px"+" "+-py+"px";
                    $("#img").css("background-position",offset);

                }
            });
        }
    };
    $(document).ready(function(){
        cutCat.showlog();
        cutCat.drag();
    });
    
}(jQuery);