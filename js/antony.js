$("form#submitForm").submit(function(event){
    event.preventDefault();
    var name=$("#name").val();
    alert(  name + " Thank you for reaching out to us, you will recieve a feedback shortly!!!");
});