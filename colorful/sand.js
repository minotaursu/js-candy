void
function($) {
    sand = {
        trigger: 0,
        showlog: function() {
            console.log("https://github.com/minotaursu");
            console.log("https://weibo.com/julyflame");
        },
        changeColor: function() {
            $(".man a").bind("click", function() {
                if (0 == sand.trigger % 3)
                    $(this).css("background-color", "red");
                else if (1 == sand.trigger % 3)
                    $(this).css("background-color", "green");
                else if (2 == sand.trigger % 3)
                    $(this).css("background-color", "blue");
                sand.trigger++;
            });
        },
        randomColor: function() {
            $(".man a").each(function(index) {
                var self=this;
                setTimeout(function(cb) {
                    $(".man a").css("border-color", "blue");
                    $(self).css("border-color", "red");
                }, (index+1)*1000);
            });
        }
    };
    $(document).ready(function() {
        sand.showlog();
        sand.changeColor();
        sand.randomColor();
    });

}(jQuery);