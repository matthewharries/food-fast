$(document).ready(function() {       	
			$("#search-button").click((e) =>{
        e.preventDefault();
        var inputValue = $("#search-value").val();
        var currentURL = "https://www.themealdb.com/api/json/v1/1/search.php?s=" + inputValue;
        $.ajax({
            url: currentURL,
            responseType: 'json',
            success: (json) => {
							if(json.meals != undefined){
								$("#number-results").html(json.meals.length);
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
		
		$(".is-info").click((e) =>{
        e.preventDefault();
        var inputValue = $("#search-value").val();
				var randomURL = 'https://www.themealdb.com/api/json/v1/1/random.php'
        $.ajax({
            url: randomURL,
            responseType: 'json',
            success: (json) => {
							if(json.meals != undefined){
								$("#number-results").html(json.meals.length);
								var results = '<h1 id="sub-title" class="title">Random Recipe!</h1>';

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
