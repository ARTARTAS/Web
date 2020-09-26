hover = document.getElementById("123");

hover.onmouseover = function(){
    this.style.color = 'white';
}
hover.onmouseout = function(){ // курсор ушёл с элемента-родителя
    this.style.color = 'green';
}