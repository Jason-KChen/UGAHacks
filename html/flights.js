
window.onload = function() {
    var start;
    console.log(document.URL);
   // var url = document.URL
   // var from = url.substring(url.indexOf("&")+1);
   // from = from.substring(from.indexOf("=")+1)
   // url = url.substring(url.indexOf("?")+1, url.indexOf("&"));
  //  url = url.substring(url.indexOf("=")+1);
    //var items = url.split("&")
    var url = document.URL
    url = url.substring(url.indexOf("=")+1);
    chrome.storage.sync.get("start",function(data){
        //console.log(data.start);
        start = data.start;
       // console.log(start);
        
        
        
        console.log(start);
        console.log(url);
        //console.log(start);
        document.getElementById('airport').innerHTML = start;
        document.getElementById('dest').innerHTML = url;
    
  

        InitiateAPIRequest(start, url);
        
    })
    
    
 
    
}