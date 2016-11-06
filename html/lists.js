window.onload = function() {
    var airports;
     chrome.storage.sync.get({
    airport:[]//put defaultvalues if any
},
function(data) {
   airports = data.airport; //to access single data.airport[index]
   //update(data.list);//storing the storage value in a variable and passing to update function
         //console.log(airports[2]);
}
);  
        

    
    
    
    
    console.log("inside");
    chrome.storage.sync.get({
    cities:[]//put defaultvalues if any
    },
function(data) {
        console.log(document.URL);
        console.log(document.baseURI);
        
        console.log(data.cities);
        for(var i = 0; i < data.cities.length; i++)
            {
                console.log(data.cities[i]);
               /*$('<button/>', {
                        text: data.cities[i], //set text 1 to 10
                        id: airports[i],
                        val: airport[i],
                        click: function () { alert('hi'); }
                    }).appendTo('ul.list-group'); */
               var list =  $('<li />', {"class": "list-group-item", html: data.cities[i]})//.appendTo('ul.list-group');
                
                $('<a />', {"href": "flights.html?airport="+airports[i]}).append(list).appendTo('ul.list-group');
            }
        
   //window.alert(data.airport); //to access single data.airport[index]
   //update(data.list);//storing the storage value in a variable and passing to update function
}
);  
} 