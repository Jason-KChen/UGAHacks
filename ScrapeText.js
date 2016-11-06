
//email me this one please
function img_create(src, alt, title) {
    var img= document.createElement('img');
    //console.log(src);
    img.src= src;
    img.style.height = '300px';
    img.style.width = '400px';
    if (alt!=null) img.alt= alt;
    if (title!=null) img.title= title;
    return img;
}
// "^(?=.*?\f+u+c+k+\b)(?=.*?\y+o+u+\b).*$"bitch
// Math.floor(Math.random() * (catGifs.length - 1)) + 0
// "https://i.imgur.com/ 3dDW3.gif"
var dictionary = [ "pokemon", "league", "b+i+t+c+h+", "b+i+t+c+h+e+s+", "f+u+c+k+", "d+i+e+", "f+k+", "f+c+k+", "s+h+i+t+"];
var re; 
var catGifs = ["https://i.imgur.com/3dDW3.gif", "https://i.imgur.com/QNqcDwJ.gif", "https://imgur.com/Duqccay.gif", "https://imgur.com/dJXKJo7.gif", "https://imgur.com/b1qihjQ.gif", "https://imgur.com/04EQtM6.gif", "https://imgur.com/4JFfaXN.gif", "https://imgur.com/kXGvEK7.gif" , "https://imgur.com/Y7nvscz.gif", "https://imgur.com/UhY4zo8.gif", "https://imgur.com/XP0jtuN.gif", "https://imgur.com/qMRqWfk.gif", "https://imgur.com/BJAtJRm.gif", "https://imgur.com/VKBxygA.gif"];


function getClasses(){
    var images = document.getElementsByTagName("p");
    //images.append()
for (var i = 0; i < images.length ; i++)
{  
    for(var j = 0; j < dictionary.length; j++)
        {
             if(images[i].innerHTML.search(dictionary[j]) != -1)
            {
                console.log("testing " + images[i].innerHTML)
                var newImg = img_create(catGifs[Math.floor((Math.random() * catGifs.length))]);
                images[i].innerHTML = "";
                images[i].appendChild(newImg);
            }
        }
   
    
}
}



$( document ).ready( getClasses );
