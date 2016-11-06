chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {

    $.ajax({
        url: "https://business.skyscanner.net/apiservices/pricing/v1.0",
        async: true,
        crossDomain: true,
        crossOrigin: true,
        beforeSend: function(xhrObj){
        // Request headers
        xhrObj.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
        xhrObj.setRequestHeader("Accept", "application/json")
        },
        type: "POST",
        // Request body
        data: "country=US&currency=USD&locale=en-US&locationSchema=iata&apikey=prtl6749387986743898559646983194&grouppricing=on&originplace=ATL&destinationplace=LAX&outbounddate=2016-11-12&adults=1&children=0&infants=0&cabinclass=Economy"
    })
        .done(function(data, status, xhr) {
        console.log("ASD");
        sendResponse({
            "sessionKey": xhr.getResponseHeader('Location')
        })
    })
        .fail(function() {
            console.log("asd");
            sendResponse({
                "sessionKey": "2"
            })
        });
});
