/**
 * Created by craft on 25/03/2016.
 */

//Retrieve the verses
$("#verifyVerseButton").click(function () {
    $.ajax({
        url: "/votd/getverse/" + encodeURIComponent($("#verses").val()),
        cache: false,
        success: function (data) {
            $("#verseRetrieved").html(data);
        },
        error: function (xhr, status, errorThro) {
            $("#verseRetrieved").html("<strong>" + xhr.responseText + "</strong> ");
        }
    });
});



//Show a nice loader when verses are being retrieved
jQuery.ajaxSetup({
    beforeSend: function () {
        $('#loadingDiv').show();
    },
    complete: function () {
        $('#loadingDiv').hide();
    },
    success: function () {
    }
});

<!-- Initialize the multiselect plugin: -->
$(document).ready(function () {
    $('#themes').multiselect({
        disableIfEmpty: true,
        enableFiltering: true,
        numberDisplayed: 6,
        maxHeight: 400
    });
});