$(document).ready(function() {
    var gradTypeInput; 
    var nameInput; 
    var heightInput; 
    var widthInput; 
    var color1Input; 
    var color2Input; 
    var shapeInput; 

    $('input[name=first]:radio').click(function() {
        if($(this).prop("checked") == true) {
            $(".form-group-hidden").hide();
            gradTypeInput = $('input[name=first]:radio').val();
            $('input[name=second]:radio').prop( "checked", false );
        }
    });

    $('input[name=second]:radio').click(function() {
        if($(this).prop("checked") == true) {
            $(".form-group-hidden").show();
            gradTypeInput = $('input[name=second]:radio').val(); 
            $('input[name=first]:radio').prop( "checked", false );
        }
    });

    
    $("#formOne").submit(function(event) {
        nameInput = $("input#type2").val();
        heightInput = $("input#type3").val(); 
        widthInput = $("input#type4").val(); 
        color1Input = $("input#type5").val();
        color2Input = $("input#type6").val();  
        shapeInput = $("input#type1A").val(); 
        console.log(shapeInput); 
        
        if(shapeInput === "circle") {
            $(".type5").append("circle, ");
            shapeInput = shapeInput.concat(", ", color1Input); 
            console.log(shapeInput);
        } else if(shapeInput === "ellipse") {
            $(".type5").append("ellipse, ");
            shapeInput = shapeInput.concat(", ", color1Input);
            console.log(shapeInput);
        }

        if(gradTypeInput === "radial") {
            $("html").css({"background-image": "radial-gradient(" + shapeInput + ", " + $('input#type6').val() + ")"});
        } else {
            $("html").css({"background-image": "linear-gradient(" +  $('input#type5').val() + ", " + $('input#type6').val() + ")"});
        }

        $(".type1").append(gradTypeInput);
        $(".type2").append(nameInput);
        $(".type3").append(heightInput);
        $(".type4").append(widthInput);
        $(".type5").append(color1Input);
        $(".type6").append(color2Input); 

        $("#code").show(); 
        event.preventDefault();
    });

    $("#reset").click(function() {
        $("#code").hide();
        $(".type1").empty();
        $(".type2").empty();
        $(".type3").empty();
        $(".type4").empty();
        $(".type5").empty();
        $(".type6").empty();
        $(".type7").empty();

        $("html").css({"background-image": "linear-gradient(white, white"});
    }); 
}); 