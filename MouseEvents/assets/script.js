$( document ).ready(function() {
  var fruits1 = ['apple1', 'avocado1', 'guava1', 'pomegranate1','pineapple1',  'tomato1', 'lemon1',  'pumpkin1', 'pear1',  'orange1','melon1', 'kiwi1' ];
  var fruits2 = ['apple2', 'avocado2',  'guava2','pomegranate2', 'pineapple2', 'tomato2', 'lemon2', 'pumpkin2',  'pear2',  'orange2', 'melon2', 'kiwi2'];

  console.log(fruits1.length);

  $( '.fruits1' ).click(function() {
    var num = Math.floor((Math.random() * 12) );
    $(this).html('<img src="assets/fruit/' + fruits1[num] + '.svg"/>');

    });
  $( '.fruits2' ).click(function() {
    var num = Math.floor((Math.random() * 12));

    $(this).html('<img src="assets/fruit/' + fruits2[num] + '.svg"/>');

  });
});
