// Using jquery library in order to create element out of the anchor tags that when click alerts user that the page will change

$(document).ready(function() {
    $('a').on('click', function() {
        alert('You are about to leave this page');
    });
});