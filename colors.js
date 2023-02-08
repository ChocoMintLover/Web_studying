var Links = {
SetColor:function(color) {
    var alist = document.querySelectorAll('a');
    for(var i = 0; i < alist.length; i++) {
    alist[i].style.color = color;
    }
}
}
var Body = {
SetColor:function(color) {
    document.querySelector('body').style.color = color;  
},
SetBackgroundColor:function(color) {
    document.querySelector('body').style.backgroundColor = color;
}
}
function nightModeHandler(self) {
var target = document.querySelector('body');
    if(self.value === 'night') {
        Body.SetBackgroundColor('black');
        Body.SetColor('white');
        self.value = 'day';
        Links.SetColor('powderblue');
    }
    else {
        Body.SetBackgroundColor('white');
        Body.SetColor('black');
        self.value = 'night';
        Links.SetColor('blue');
    }
}