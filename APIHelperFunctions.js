function extractSessionKey(wholeURL) {
    var index = wholeURL.indexOf("/v1.0/");
    return wholeURL.substring(index + 6);
}
var dataArr = []
function extractCheapest(sessionKey, index) {
    var message = {
        "method": "GET",
        "sessionKey": sessionKey,
        "ind": index
    }
    chrome.runtime.sendMessage(message, function(response) {
        dataArr.push(response.data);
       console.log(dataArr); document.getElementById('price1').innerHTML = dataArr[0,1];
        
    })
}

