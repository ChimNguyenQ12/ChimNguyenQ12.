$(document).ready(function () {
    $("#khong").mouseenter(function () {
        var x = Math.floor(Math.random() * 550);
        var y = Math.floor(Math.random() * 550);
        $("#khong").animate({
            left: x,
            top: y,
        });
    });
    let i=0;
    $("#khong").click(function (e) {
        if(i==0)
        {
            $("#khong").text("Có");
            i++;
            //$("#khong").stop();
        } 
        else
        {
            alert("Anh vẫn yêu em =))");
        }
        // $("#khong").mouseenter(function () { 
        //     $("#khong").text("Có");
        // });
        // $("#khong").mouseleave(function () { 
        //     $("#khong").text("Không");
        // });
    })
    $("#co").click(function (e) {
        alert("Anh cũng yêu em!");
    });
});