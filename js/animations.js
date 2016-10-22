$(document).ready(function(){

  $('#tweet-controls').hide();
  $('.tweet-actions').hide();
  $('.stats').hide();
  $('.reply').hide();

  $('#main-text-area').on('click', function () {
    $('#tweet-controls').fadeIn('fast', 'linear');
    $(this).height(65);
  });

  $('#tweet-submit').on('click', function(){
    $('#stream').prepend($('#main-text-area'));

  });

  // $('#main-text-area').on('focusout', function () {
  //   $('#tweet-controls').hide();
  //   $(this).height(20.5);
  // });

  //THIS WAS THE VERSION THE MENTORS HELPED ME EDIT
  // maxCharacters = 140;
  //
  // $('#char-count').text(maxCharacters);
  //
  // $('.tweet-compose').bind('keyup keydown', function() {
  //     var count = $('#char-count');
  //     var characters = $('#main-text-area').val().length;
  //     var otherCount = count.text(maxCharacters - characters);
  //
  //     if (characters > 130) {
  //         count.addClass('over');
  //     } else {
  //         count.removeClass('over');
  //     }
  // });

  //THIS WAS MY ORIGINAL. THE PROB WAS THE ID WAS OVERRIDING THE CLASS
  maxCharacters = 140;

  $('#char-count').text(maxCharacters);

  $('.tweet-compose').bind('keyup keydown', function() {
      var count = $('#char-count');
      var characters = $(this).val().length;



      if (characters > 129) {
          count.addClass('over');
      } else {
          count.removeClass('over');
      }

      if (characters <= 140) {
        $('#tweet-submit').prop('disabled', false);
      } else {
        $('#tweet-submit').prop('disabled', true);
      }

      count.text(maxCharacters - characters);

      // $('#tweet-submit').on('click', function(){
      //   count.text = 0;
      // });
  });

  $('.tweet').hover(function(){
    $('.tweet-actions').show();
  }, function(){
    $('.tweet-actions').hide();
    $('.reply').hide();
  });

  $('.tweet').hover(function(){
    $('.stats').show();
  }, function(){
    $('.stats').hide();
  });

  $('.action-reply').on('click', function(){
    $('.reply').show();
  });


});
