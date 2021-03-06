function upDate(upimg) {
    var src = upimg.getAttribute( "src" );
    var alt = upimg.getAttribute( "alt" );
    document.getElementById('image').style.backgroundImage = "url('" + src + "')";
    document.getElementById('image').innerHTML = alt;
}
function unDo() {
    X = document.getElementById('image');
    X.style.backgroundImage = "url('')";
    document.getElementById('image').innerHTML = "Hover over an images to display";
}
