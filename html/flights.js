window.onload = function() {
    
    console.log(document.URL);
    var url = document.URL
    //var url = document.URL.search("?");
   // url = url.substring(url.indexOf("?")+1);
    url = url.substring(url.indexOf("=")+1);
    console.log(url);
    document.getElementById('dest').innerHTML = url;
    
    //update the title
    
    //call the api
    InitiateAPIRequest("ATL", url);
    
}