var colors = ['red','blue','yellow','lightgrey','black','orange','deeppink','green','purple','saddlebrown','deepskyblue'];

var box = $("#box");

$("button").click(function(e){
    box.append('<div class="ball" style="background-color:'+ colors[Math.floor(Math.random()*11)] + '"></div>');
});