$(".openbtn").click(function(){
    $(this).toggleClass('active');
    $("#g-nav").toggleClass('panelactive');
});

$("#g-nav a").click(function(){
    $(".openbtn").removeClass('active');
    $("#g-nav").removeClass('panelactive');
});

$("#dimention2").click(function(){
    $("#globeBiz").toggleClass('negative');
    $("#globeBiz2").toggleClass('negative');
    $("#form2").toggleClass('negative');
    $("#map").toggleClass('active');
});

$("#dimention3").click(function(){
    $("#globeBiz").removeClass('negative');
    $("#globeBiz2").removeClass('negative');
    $("#form2").removeClass('negative');
    $("#map").removeClass('active');
});

var input2d = document.getElementById("2d");
var input3d = document.getElementById("3d")

var map2d = document.getElementById("twodmap")

console.log(map2d)

function switchmap (event){
    console.log(event.target.value)
    var value = event.target.value;
    if(value == "2d"){
        map2d.src = `./${M}.jpg`
        map2d.style.display = "block"
        map.style.display = "none"
        map2.style.display = "none"
    }
    else{
        map2d.style.display = "none"
        map.style.display = "block"
        map2.style.display = "block"
    }
}

input2d.addEventListener('change', switchmap)
input3d.addEventListener('change', switchmap)