function extractSessionKey(wholeURL) {
    var index = wholeURL.indexOf("/v1.0/");
    return wholeURL.substring(index + 6);
}

function extractCheapest(sessionKey, index) {
    var message = {
        "method": "GET",
        "sessionKey": sessionKey,
        "ind": index
    }
    chrome.runtime.sendMessage(message, function(response) {
        console.log(response.data)
    })
}
