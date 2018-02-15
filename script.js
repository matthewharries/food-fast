$(document).ready(function() {       
    $("#search-button").click((e) =>{
        e.preventDefault();
        var inputValue = $("#search-value").val();
        var stackURL = "http://www.themealdb.com/api/json/v1/1/search.php?s=" + inputValue;
        $.ajax({
            url: stackURL,
            responseType: 'json',
            success: (json) => {
							console.log(json)
//                var results = "<h2>Stack Overflow Answers for: <em>'" + inputValue + "'</em> </h2><ul>";
//                
//                //Only display top 8 most relevant answers
//                for (var i = 0; (i < 8 && i < json.items.length); i++){
//                    results += "<li><a target='_blank' href='" + json.items[i].link + "'>" + json.items[i].title + "</a></li>";
//                }
//                results += "</ul>"
//                $("#stackOverflowResults").html(results);
            }
        })
    });
});
