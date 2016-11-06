
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
// "^(?=.*?\f+u+c+k+\b)(?=.*?\y+o+u+\b).*$"bitch "poke*mon", "league", "b+i+t+c+h+", "b+i+t+c+h+e+s+", "f+u+c+k+", "d+i+e+", "f+k+", "f+c+k+", "s+h+i+t+"
// Math.floor(Math.random() * (catGifs.length - 1)) + 0
// "https://i.imgur.com/ 3dDW3.gif"
var dictionary = ["los angeles", "new york", "las vegas", "chicago", "san diego", "washington", "orlando", "houston", "seattle", "san Antonio", "miami", "boston", "atlanta", "san francisco", "hawaii" ];
var shortName = ["LAX", "JFK", "LAS", "ORD", "SAN", "DCA", "MCO", "IAH", "SEA", "SAT", "MIA", "BOS", "ATL", "SFO", "HNM"];

var tags = ["p", "h1", "h2", "h3", "h4", "h5", "h6", "span", "th", "a", "ul", "li"]
var cityList = [];
var airport =[];
var copy = false;
function getClasses(   ){
    
    
    for (var t = 0 ; t < tags.length ; t++)
        {
            var images = document.getElementsByTagName(tags[t]);
            //console.log(tags[i]);
            for (var i = 0; i < images.length ; i++)
            {  
                for(var j = 0; j < dictionary.length; j++)
                    {
                         if(images[i].innerHTML.toUpperCase().search(dictionary[j].toUpperCase()) != -1)
                        {
                            //console.log("found "+)
                            //console.log("testing " + images[i].innerHTML)
                            if(cityList.length==0)
                                {
                                    cityList.push(dictionary[j].toUpperCase());
                                    airport.push(shortName[j]);
                                }
                            else{
                                copy = false;
                                for(var k = 0; k < cityList.length; k++)
                                    {
                                        if(dictionary[j].toUpperCase()==cityList[k])
                                            {
                                                copy = true;
                                            }
                                        
                                    }
                                
                                if(!copy)
                                    {
                                        cityList.push(dictionary[j].toUpperCase());
                                        airport.push(shortName[j]);
                                        
                                        console.log("added " + dictionary[j] + " : "+shortName[j]);
                                    }
                            }
                            //var newImg = img_create(catGifs[Math.floor((Math.random() * catGifs.length))]);
                           // images[i].innerHTML = "Let's travel here";
                            
                            ///images[i].appendChild(newImg);
                        }
                    }

            }
        }
    
    setCities(cityList);
    setAirport(airport);

    
}

function setCities(array){
    chrome.storage.sync.set({
    cities:array
}, function() {
    //console.log("added to list");
        chrome.storage.sync.get({
    cities:[]//put defaultvalues if any
},
function(data) {
   console.log(data.cities);
   //update(data.list);//storing the storage value in a variable and passing to update function
}
);  
        
});
}

function setAirport(array){
    chrome.storage.sync.set({
    airport:array
}, function() {
    //console.log("added to list");
        chrome.storage.sync.get({
    airport:[]//put defaultvalues if any
},
function(data) {
   console.log(data.airport); //to access single data.airport[index]
   //update(data.list);//storing the storage value in a variable and passing to update function
}
);  
        
});
}


/*function update(array)
   {
    array.push("testAdd");
    //then call the set to update with modified value
    chrome.storage.sync.set({
        list:array
    }, function() {
        console.log("added to list with new values");
    });
    } */


$( document ).ready( getClasses );
