$.getJSON('http://localhost:3000/api/recent_posts', function(data) {
  console.log(data.articles);

  $.each(data.articles, function() {
        $('.post').append('<h3>' + this.title + '</h3>' + '<p class="truncate">' + this.text + '</p>');
    });
});
