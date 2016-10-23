$(document).ready(function(){

  $('#tweet-controls').hide();
  $('.tweet-actions').hide();
  $('.stats').hide();
  $('.reply').hide();

  $('#tweet-submit').prop('disabled', true);

  $('#main-text-area').on('click', function () {
    $('#tweet-controls').fadeIn('fast', 'linear');
    $(this).height(65);
  });

  $('#tweet-submit').on('click', function(){
    $('#stream').prepend($('#main-text-area').val());
    $('#stream').prepend('<img class="avatar" src="img/alagoon.jpg" />', '<br>','<strong class="fullname">Cameron Skidmore</strong>', '<span class="username">       @cskidz99</span>', '<br>');
    $('#main-text-area').val('');
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

      if (characters > 140 || characters === 0) {
        $('#tweet-submit').prop('disabled', true);
      } else {
        $('#tweet-submit').prop('disabled', false);
      }

      count.text(maxCharacters - characters);
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
