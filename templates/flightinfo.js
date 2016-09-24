 var settings = {
                          "async": true,
                          "crossDomain": true,
                          "url": "https://flifo-qa.api.aero/flifo/v3/flight/SIN/SQ/5333/a",
                          "method": "GET",
                          "headers": {
                            "x-apikey": "2cfd0827f82ceaccae7882938b4b1627",
                            "cache-control": "no-cache",
                            "postman-token": "7e164a8e-f4f6-07a4-04cd-e40cc085133f"
                          }

                        $.ajax(settings).done(function (response) {
                          console.log(response);
                           $('#airportCode').text(response.airportcode)
                          $('#airlineCode').text(response.airline)
                          $('#flightnumber').text(response.flightnumber)
                        });