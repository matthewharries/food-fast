$(document).ready(function() {       
    $("#search-button").click((e) =>{
        e.preventDefault();
        var inputValue = $("#search-value").val();
        var stackURL = "http://www.themealdb.com/api/json/v1/1/search.php?s=" + inputValue;
        $.ajax({
            url: stackURL,
            responseType: 'json',
            success: (json) => {
							if(json.meals != undefined){
								var results = '<h1 id="sub-title" class="title">Results for <em>' + inputValue + '</em></h1>';

								json.meals.forEach((obj)=>{
									results += '<div class="box"><article class="media"><div class="media-content"><div class="content"><p><strong>' + obj.strMeal + '</strong><br></p>';

									results += '<em>Instructions</em><br><p>' + obj.strInstructions + '</p>';

									results += '<em>Ingredients</em><ul>';

									var i = 1;
									while(obj['strIngredient' + i] != "" && i < 21){
										results += '<li>' + obj['strIngredient' + i] +' - ' + obj['strMeasure' + i] + '</li>';
										i++;
									}

									results += '</ul></div></div></article></div>';

								});
							}else {
								var results = '<h1 id="sub-title" class="title">No results for <em>' + inputValue + '</em></h1>';
								$("#number-results").html(0);
							}
							$("#main-content").html(results);
           }
        });
    });
});
