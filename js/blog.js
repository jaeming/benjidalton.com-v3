$.getJSON('http://benji.herokuapp.com/api/recent_posts', function(data) {
  console.log(data.articles);

  $.each(data.articles, function() {
    $('#posts').append('<div class="post-box"><h3 class="post-title">' + this.title + '</h3>' + '<div class="post-body">' + this.text + '<div class="bottom_fade"></div></div> <a href="http://benji.herokuapp.com/articles/' + this.id + '" class="post-link">Read More...</a></div>');
    });
});
