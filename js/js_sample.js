(function($) {

    jQuery.fn.helloWorld = function(content,link1,link2) {
//var link1='24h.com.vn';

$('#dialog-form').remove();
        $('#cover').remove();
$('body').append('<div id="dialog-form"><a href="#" class="cancel"><span class="top-right"></span>&times;</a><h3>Hellow world</h3><center><button onclick="location.href='+"'"+link1+"'"+';" id="yes">Ok</button><button onclick="location.href='+"'"+link2+"'"+';" id="no">Cancel</button></center>');
$('body').append('<div id="cover">');
$('#dialog-form h3').text(content);
 //event.stopPropagation();
    }
}(jQuery));