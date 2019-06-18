
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

function load() {
    document.getElementById("content-div").style.display = "none    ";
    setTimeout(showPage, 3000);
}

function showPage() {
    document.getElementById("loading-div").style.display = "none";
    document.getElementById("content-div").style.display = "block";
}