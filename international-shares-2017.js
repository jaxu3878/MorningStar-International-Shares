/* Scroll Down Button */
$(function() {
    $("a[href^='#']").on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - 73
        }, 500, 'linear');
    });
});

$(document).ready(function() {

    $('#insightsconfirm').hide();

    /* Popup Form */

setTimeout(function(){
    var lightbox = lity('#insightsrego');
}, 5000);

    /* Bar Graph */
    var $bargraph = $('#compareanddiversify');
    $bargraph.waypoint(function() {
        CanvasJS.addColorSet("investmentCompare", [ //colorSet Array
            "#9b1636",
            "#076e7f"
        ]);
        var barchart = new CanvasJS.Chart("annualFees", {
            colorSet: "investmentCompare",
            backgroundColor: "transparent",
            animationEnabled: true,
            axisY: {
                labelFontFamily: "UniversNextforMORNPCCnLt",
                labelFontColor: "#000000",
                labelFontSize: 12,
                maximum: 250,
                interval: 50,
                tickLength: 0,
                lineThickness: 0,
                gridColor: "#8e8e8d",
                gridThickness: 1
            },
            axisX: {
                labelFontFamily: "UniversNextforMORNPCCnLt",
                labelFontColor: "transparent",
                labelFontSize: 0,
                labelMaxWidth: 300,
                labelAutoFit: true,
                tickColor: "transparent",
                lineThickness: 4,
                lineColor: "#8e8e8d"
            },
            data: [{
                type: "column",
                toolTipContent: "<p style='\"'white-space: pre-wrap; width: 150px;'\"'>{label}: <strong>{y}</strong></p>",
                dataPoints: [{
                    y: 100,
                    label: "Morningstar International Shares Fund"
                }, {
                    y: 245,
                    label: "Average Actively Managed International Shares Fund"
                }]
            }]
        });
        barchart.render();
        this.destroy();
    });

    /* Form Validation */
    $("#insightsSignup").validate({
        submitHandler: function() {
            $.ajax({
                type: "post",
                url: "https://s1258972516.t.eloqua.com/e/f2",
                data: $('#insightsSignup').serialize(),
                complete: function(data) {
                    $('#insightsreceive').hide();
                    $('#insightsconfirm').show();
                    setTimeout(function(){
                        lightbox.close();
                        $('#insightsregister').hide();
                    }, 5000);
                }
            });
        },
        rules: {
            fname: "required",
            lname: "required",
            email: {
                required: true,
                email: true
            },
            investortype: "required"
        },
        messages: {
            fname: "Please enter your firstname",
            lname: "Please enter your lastname",
            email: "Please enter a valid email address",
            investortype: "Please select an investor type"
        },
        errorElement: "em",
        errorPlacement: function(error, element) {
            // Add the `help-block` class to the error element
            error.addClass("help-block");

            if (element.prop("type") === "checkbox") {
                error.insertAfter(element.parent("label"));
            } else {
                error.insertAfter(element);
            }
        },
        highlight: function(element, errorClass, validClass) {
            $(element).parents(".col-sm-5").addClass("has-error").removeClass("has-success");
        },
        unhighlight: function(element, errorClass, validClass) {
            $(element).parents(".col-sm-5").addClass("has-success").removeClass("has-error");
        }
    });
});
