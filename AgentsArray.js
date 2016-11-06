var agentLookup = {
    2473844: "BookAirFare",
    2727399: "Hotwire.com",
    2186003: "Cheaptickets",
    3507594: "Orbitz",
    2407040: "Exploretrip",
    4499219: "Expedia",
    2503955: "FlightNetwork",
    2370323: "eDreams",
    2485523: "Flyfar",
    2043155: "Bravofly",
    3987731: "Travel2Be",
    4056851: "Tripsta",
    4060493: "Travel Merry",
    2927891: "JustFly",
    4046777: "Travelocity",
    2628371: "GotoGate",
    3690449: "Qatar Airways",
    1945427: "Alaska Airlines",
    4132306: "United",
    4243475: "Virgin Australia",
    3945682: "Spirit Airlines",
    2512878: "Frontier Airlines",
    3961439: "Southwest Airlines"
}

function convertAgentIDtoName(givenIDString) {
		console.log("ASD");
    if (agentLookup.hasOwnProperty(givenIDString)) {
    		console.log("has");
        return agentLookup[givenIDString];
    }
    console.log("has not");
    return "Unidentified";
}
