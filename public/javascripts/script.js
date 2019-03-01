
function f(){


    var sentence = $("#sentence").val();

    $.ajax({
        type: "POST",
        url: '/viterbi/tag',
        data: {'sentence':sentence},
        success: function(result){
            $("#result").val(result);
        }
    });

}