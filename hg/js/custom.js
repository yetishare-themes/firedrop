$(document).on("click", 'a[href="#urlUpload"]', function(){
   $("#uploadButton").addClass("hidden");
   $("#transferFilesButton").removeClass("hidden");
});
$(document).on("click", 'a[href="#fileUpload"]', function(){
   $("#transferFilesButton").addClass("hidden");
   $("#uploadButton").removeClass("hidden");
});

document.getElementById("options").onclick = function(){
   $("#options").addClass("hidden");
   $("#saveoptions").removeClass("hidden");
};

$(document).on("click", '#saveoptions', function(){
   $("#saveoptions").addClass("hidden");
   $("#options").removeClass("hidden");
});

$(window).load(function() {

    'use strict';

    $("#navigation").sticky({topSpacing: 0});

});

jQuery(document).ready(function($) {

    'use strict';

    $('.animated').appear(function() {
        var elem = $(this);
        var animation = elem.data('animation');
        if (!elem.hasClass('visible')) {
            var animationDelay = elem.data('animation-delay');
            if (animationDelay) {

                setTimeout(function() {
                    elem.addClass(animation + " visible");
                }, animationDelay);

            } else {
                elem.addClass(animation + " visible");
            }
        }
    });
});

function showUploaderPopup()
{
    jQuery('#fileUploadWrapper').modal('show', {backdrop: 'static'}).on('shown.bs.modal');
}

function showSuccessNotification(title, content)
{
	alert(title+': '+content);
}

function showErrorNotification(title, content)
{
	alert(title+': '+content);
}

var pageH = $('html').height();
$('.getIn').css('height', pageH);