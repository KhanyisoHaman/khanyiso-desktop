// Request data from a backend

// Put simply, HTTP is a proctocol which allows us to send information around the web. For example, when your browser asks you for http://domain. HTTP requests come in different flavors, using different verbs (GET, POST, PUT, AND DELETE are the four most common). The kind of request your browser makes (and the kind will we will use in this chapter) is a GET request. A GET request generally means we would like server to send us some data.

//  Don't worry too musch about the details for now: Once you've seen HTTP requests in practice, it becomes a lot easier to understand.

// AJAX stands for Asynchronous JavaScript an XML. Now that's a mouthful.


// Basically, it is a system that allows us to send requests and handle the responses from within our JS Code. For example, when you leave a comment on a blog post, when you send or receive an email on web-mail service like GMAIL, or when a webpage updates itselfwithout refreshing, it is often using AJAX to do so.

//Two other initialisms you may see in this context are API AND JSON

//API stands for Application Programming Interface. Manyu companies and services provide API's which will react in specific ways when we send them HTTP requests. You will come across a few in this course.

//A set of functions and procedures allowing the creation of applications that access the features or data of an operating system, application, or other service.

//JSON, or JavaScript Object Notation, is a way of representing and handling data as a JavaScript object. It is extremely useful for sending and receiving data over the internet, as it makes it easy to deal with structured data.

// Chuck Norris

function newQuote() {
    // the url we are making a request to
    let url = "https://api.chucknorris.io/jokes/random?category=dev";

    $.ajax( {
        url: url,
        method: "get",

        success: function (data) {
            // do something when call is successful
            console.log(data);
            $('#quote').text(data.value);
            $('#url').attr('href', data.url);
            $('#icon').attr('src', data.icon_url);
        },

        error: function (error) {
            console.log(error);
        }
    });
}

$(document).ready(function () {
    newQuote();
    $('button').on('click', newQuote());
});