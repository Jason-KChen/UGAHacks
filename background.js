chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {

    var urlTemplate1 = "https://business.skyscanner.net/apiservices/pricing/v1.0"
    var urlTemplate2 = "https://business.skyscanner.net/apiservices/pricing/uk2/v1.0/SESSIONKEY?apiKey=prtl6749387986743898559646983194"
    var targetURL = "";
    var method = request.method;

    var templateBodyData = "country=US&currency=USD&locale=en-US&locationSchema=iata&apikey=prtl6749387986743898559646983194&grouppricing=on&originplace=ORIGINAP&destinationplace=DESTINATIONAP&outbounddate=DEPARTDATE&adults=1&children=0&infants=0&cabinclass=Economy"
    var filledBodyData = "country=US&currency=USD&locale=en-US&locationSchema=iata&apikey=prtl6749387986743898559646983194&grouppricing=on&originplace=ATL&destinationplace=LAX&outbounddate=2016-11-12&adults=1&children=0&infants=0&cabinclass=Economy"
    var requestBody = "";
    window.alert("Listener started2");
    if (request.method == "POST") {
        requestBody = templateBodyData;
        requestBody = requestBody.replace("ORIGINAP", request.originAP);
        requestBody = requestBody.replace("DESTINATIONAP", request.destinationAP);
        requestBody = requestBody.replace("DEPARTDATE", request.departDate);
        targetURL = urlTemplate1

    } else {
        requestBody = "";
        targetURL = urlTemplate2;
        targetURL = targetURL.replace("SESSIONKEY", request.sessionKey);
    }

    window.alert(targetURL);
    window.alert(requestBody);
    $.ajax({
        url: targetURL,
        async: true,
        crossDomain: true,
        crossOrigin: true,
        beforeSend: function(xhrObj){
            // Request headers
            xhrObj.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
            xhrObj.setRequestHeader("Accept", "application/json")
            xhrObj.setRequestHeader("cache-control", "no-cache")
            },
            type: method,
            // Request body
            data: requestBody
    })
        .done(function(data, status, xhr) {
            var returnArray = []
            if (method == "POST") {
                returnArray.push(xhr.getResponseHeader('Location'))
            } else {
                window.alert(data["Itineraries"][0]["PricingOptions"][0]["Agents"][0].toString());
                var agentName = convertAgentIDtoName(data["Itineraries"][0]["PricingOptions"][0]["Agents"][0].toString());
                var ticketPrice = data["Itineraries"][0]["PricingOptions"][0]["Price"].toString();
                var deeplink = data["Itineraries"][0]["PricingOptions"][0]["DeeplinkUrl"];
                returnArray.push(agentName);
                returnArray.push(ticketPrice);
                returnArray.push(deeplink);
            }

            sendResponse({
                data: returnArray
            })

    })
        .fail(function() {
            console.log("asd");
            sendResponse({
                "sessionKey": "2"
            })
        });
    return true;
});
