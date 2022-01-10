$("#btnsend").click(function () {
    alert("From: " + $("#txtfrom").val() +
        ", Subject: " + $("#txtsubject").val() +
        ", Message: " + $("#txtmessage").val());

    $("#picGanderson").fadeOut("slow");
})