function getGithubInfo(user) {
    //1. Create an instance of XMLHttpRequest class and send a GET request using it.
    // The function should finally return the object(it now contains the response!)
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) { // 4: request finished and response is ready AND Returns the status-number of a request 200: "OK"
            showUser(JSON.parse(this.responseText));
        }
        else if (this.readyState == 4) {
            noSuchUser(user);
        }
    };
    xhttp.open("GET", "https://api.github.com/users/" + user, true); //Specifying Request
    xhttp.send();
}
function showUser(user) {
    $("#heading").text(user.login)
    $("#avatar").append('<img src="'+user.avatar_url+'" width="300px" height="300px"/>')
    var obj = $("#information").text("Name: "+user.name +"\n Github Id: "+user.id +"\n Github Url: "+user.html_url +"\n Followers: "+user.followers +"\n Following: "+user.following)
    obj.html(obj.html().replace(/\n/g,'<br/>'));
}
function noSuchUser(username) {
    $("#heading").text("No such profile")
}
$(document).ready(function () {
    $(document).on('keypress', '#username', function (e) {
        //check if the enter(i.e return) key is pressed
        $("#heading").html("")
        $("#avatar").html("")
        $("#information").html("")
        if (e.which == 13) {
            //get what the user enters
            username = $(this).val();
            //reset the text typed in the input
            $(this).val("");
            //get the user's information and store the response
            getGithubInfo(username);
        }
    })
});
