console.log("x")
let url = "https://data.cityofnewyork.us/resource/erm2-nwe9.json?agency=NYPD&borough="

function fuse(town) {
    url += town
    console.log(url)
    //removeUrl()
}

// function removeUrl() {

// }
//X to later assign (data API) to use outside ajax function.
var x;

$(() => {
    $('button').on('click', (event) => {
        event.preventDefault();

        const userInput = $('input[type="text"]').val();

        $.ajax({
            url: url,
            type: "GET",
            data: {
                "$limit": userInput || 10,

            }
        }).then(function myname(data) {
                console.log(data);
                 x=data;
                for (let i = 0; i < data.length; i++) {

                    console.log(i)
                    $('.cc').append(data[i].complaint_type + "<br>");
                    $("#complaint").append(`<button id="resolution" onclick="resolution(${i})" type="button">What NYPD do?</>`)
                 
                    
                }


                
            },
            () => {
                console.log("bad request");
            }
        );
    });

});

function resolution(arr) {
    $('#cc2').append(x[arr].resolution_description + "<br>");

}