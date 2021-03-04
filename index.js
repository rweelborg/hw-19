console.log("your index.js file is loded correctly")

$("#button").click(function() {
    doBounce($(this), 3, '10px', 300);   
});


function doBounce(element, times, distance, speed) {
    for(i = 0; i < times; i++) {
        element.animate({marginTop: '-='+distance},speed)
            .animate({marginTop: '+='+distance},speed);
    }        
}
