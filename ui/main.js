console.log('Loaded!');

// Change the text of the main-text div
var element=document.getElementById('main-text'
      );
      
element.innerHTML = 'New value';

//move the image
var img = document.getElementById('madi');
var marginLeft=0;
function moveRight() {
    marginLeft=marginLeft +10;
    image.style.marginLeft=marginLeft + 'px';
}
img.onclick = function(){
    var interval=setInterval(moveRight,100);
};