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
       console.log(dataArr); 
        var price = "price";
        var alname = "alname";
        document.getElementById('price1').innerHTML = dataArr[0,1];
        
        for(var i = 0; i < dataArr.length; i++)
            {
                for(var j = 0; j < dataArr[i].length; j++)
                    {
                        if(j==0)
                            {
                                //console.log(dataArr[i][j] + " j:"+j+" i:"+i );
                                document.getElementById(alname+(i+1)).innerHTML = dataArr[i][j];
                            }
                        else if(j==1)
                            {
                                 document.getElementById(price+(i+1)).innerHTML = dataArr[i][j];
                            }
                        else if(j==2)
                            {
                                //document.getElementById("a"+(i+1)).setAttribute("href", dataArr[i][j]);
                                $('#a'+i).attr("href", dataArr[i][j]);
                            }
                        else{
                            
                        }
                       
                    }
            }
        
        
    })
}

