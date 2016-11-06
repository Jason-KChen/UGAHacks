function extractSessionKey(wholeURL) {
    var index = wholeURL.indexOf("/v1.0/");
    return wholeURL.substring(index + 6);
}

function extractCheapest(sessionKey) {
    var message = {
        "method": "GET",
        "sessionKey": sessionKey
    }
    chrome.runtime.sendMessage(message, function(response) {
        console.log(response.data)
    })
}

function testAPICall(origin, destination, date) {
    //var sessionKey = "";
    var message = {
        "method": "POST",
        "originAP": origin,
        "destinationAP": destination,
        "departDate": date
    }
    window.alert("Listener started1");
    chrome.runtime.sendMessage(message, function(response) {
        console.log(response.data);
        if (response.data.length == 1) {
            sessionKey = extractSessionKey(response.data[0]);
        }
        console.log(sessionKey);
        extractCheapest(sessionKey);
    })
}

var datesForAPI = [];

function setDatesForAPI() {
    var today = new Date();
    var todayDate = today.toISOString().substring(0, 10);
    datesForAPI.push(todayDate);
    today.setDate(today.getDate() + 30);
    var todayOffset30 = today.toISOString().substring(0, 10);
    datesForAPI.push(todayOffset30);
    today.setDate(today.getDate() + 150);
    var todayOffset180 = today.toISOString().substring(0, 10);
    datesForAPI.push(todayOffset180);
    console.log(datesForAPI);
}
