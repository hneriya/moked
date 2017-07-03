// page scrolling according to the tabs
$(document).ready(function() {
    $(".scroll").click(function(event) {
        event.preventDefault();
        $("html,body").animate({ scrollTop: $(this.hash).offset().top - 100 }, 500);
        $('.navbar-default a').removeClass('selected');
        $(this).addClass('selected');
    });
});

// google map functionality
function initMap() {
    var uluru = { lat: 32.812597, lng: 35.065891 };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: uluru
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
}
