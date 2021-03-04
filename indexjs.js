var width = 0
function carouselshow(){
    if(pageYOffset>=500){
        width+=500
        if(width==3000){
            document.getElementById("carouselcontent").style.transform="translateX(-"+width+"px)"
            document.getElementById("carouselcontent").style.transition="all .5s ease-in-out"
            setTimeout("returncarousel()",500)
        }else{
            document.getElementById("carouselcontent").style.transform="translateX(-"+width+"px)"
            document.getElementById("carouselcontent").style.transition="all .5s ease-in-out"
        }   
    }
}
function returncarousel(){
    width=0
    document.getElementById("carouselcontent").style.transition="none"
    document.getElementById("carouselcontent").style.transform="translateX("+width+"px)"
}

window.onscroll = function(){
    if(pageYOffset >= 500){
        document.getElementById("carousel-container").style.transform="scale(1)"
        document.getElementById("carousel-container").style.opacity="1"
    }
    if(pageYOffset >= 1100){
        document.getElementById("button1").style.transform="scale(1)"
        document.getElementById("button2").style.transform="scale(1)"
        document.getElementById("button3").style.transform="scale(1)"
        document.getElementById("feature-content").style.transform="scale(1)"
    }
}
var runcarousel = setInterval("carouselshow()",2000)

function changefeatures(num){
    var listofbtn = document.getElementsByClassName("feature-btns")
    for(i=0; i<listofbtn.length; i++){
        if(num == i+1){
            var id = document.getElementsByClassName("feature-btns")[i].id
            var featureid = "feature"+num;

            document.getElementById(id).style.borderBottom="2px solid white"
            document.getElementById(id).style.opacity="1"
            document.getElementById(featureid).style.opacity="1"
            document.getElementById(featureid).style.zIndex="1"
        }else{
            var tempid = document.getElementsByClassName("feature-btns")[i].id
            var tempfeature = "feature"+(i+1)
            document.getElementById(tempid).style.borderBottom="none"
            document.getElementById(tempid).style.opacity="0.7"
            document.getElementById(tempfeature).style.opacity="0"
            document.getElementById(tempfeature).style.zIndex="-2"
        }
    }
}

function changeprice(num){
    for(i=1; i<4; i++){
        if(i==num){
            var id = "pricing"+num;
            var idcon = "pricecon"+num;

            document.getElementById(id).style.height="500px"
            document.getElementById(id).style.backgroundColor="rgb(0, 129, 146)"
            document.getElementById(idcon).style.height="400px"
            document.getElementById(idcon).style.width="386px"
            document.getElementById(idcon).style.margin="7px 7px"
            document.getElementById(idcon).style.borderBottomLeftRadius="15px"
            document.getElementById(idcon).style.borderBottomRightRadius="15px"
        }else{
            var id = "pricing"+i
            var idcon = "pricecon"+i

            document.getElementById(id).style.height="400px"
            document.getElementById(id).style.backgroundColor="rgb(139, 139, 139)"
            document.getElementById(idcon).style.height="300px"
            document.getElementById(idcon).style.width="400px"
            document.getElementById(idcon).style.margin="0px"
            document.getElementById(idcon).style.borderBottomLeftRadius="0px"
            document.getElementById(idcon).style.borderBottomRightRadius="0px"
        }
    }
}

function loginpage(){
    document.getElementById("logindiv").style.zIndex="1002"
    document.getElementById("logindiv").style.transform="scale(1)"
    setTimeout("enableSection()", 200)
}
function popoutlogin(){
    document.getElementById("logindiv").style.zIndex="-2"
    document.getElementById("logindiv").style.transform="scale(0)"
    setTimeout("removeSection()",200)
}
function removeSection(){
    document.getElementById("indexloginpage").style.zIndex="-2"
}
function enableSection(){
    document.getElementById("indexloginpage").style.zIndex="999"
}

function listofshows(){
    document.getElementById("indexloginpage").style.zIndex="999"
    document.getElementById("showsdiv").style.zIndex="1002"
}

function changeshows(num){
    for(var i=1; i<=8; i++){
        if(num==i){
            var id1 = "cat"+num;
            var id2 = "shows-"+num;

            document.getElementById(id1).style.borderBottom="1px solid white"
            document.getElementById(id2).style.zIndex="1004"
            document.getElementById(id2).style.transform="scale(1)"
        }else{
            var id1 = "cat"+i;
            var id2 = "shows-"+i;

            document.getElementById(id1).style.borderBottom="none"
            document.getElementById(id2).style.zIndex="1002"
            document.getElementById(id2).style.transform="scale(0)"
        }
    }
}

function popoutshows(){
    document.getElementById("showsdiv").style.zIndex="-2"
    document.getElementById("indexloginpage").style.zIndex="-2"
}