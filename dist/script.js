$(".search-button").on("click", function () {
  $.ajax({
    url:
      "http://www.omdbapi.com/?apikey=68c736d5&s=" + $(".input-keyword").val(),
    success: (result) => {
      const movies = result.Search;
      let cards = "";
      movies.forEach((m) => {
        cards += `<div class="w-auto mx-auto">
                    <div class="rounded-lg bg-white shadow-lg">
                        <img src="${m.Poster}" alt="movie poster" class="rounded-t-lg" />
                        <div class="p-4">
                        <h2 class="mb-2 text-lg font-semibold">${m.Title}</h2>
                        <p class="mb-2 text-sm text-gray-700">${m.Year}</p>
                        <p class="mb-4 text-sm text-gray-700">Director: John Doe</p>
                        <a href="#" class="block rounded-lg bg-blue-500 px-4 py-2 text-center font-semibold text-white hover:bg-blue-600">Show Detail</a>
                        </div>
                    </div>
                    </div>`;
      });
      $(".movie-container").html(cards);
    },

    error: (e) => {
      console.log(e.responseText);
    },
  });
});
