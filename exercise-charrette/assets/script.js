$(document).ready(function(){

	$('#button-3').click(function() {
		$(this).animate({
			opacity: 0.4,
			marginLeft: '0.6in',
			fontSize: '24px'
			borderWidth: '10px'
		}, 500 );
	});
	$('#button-7').click(function() {
		$(this).animate({
			opacity: 1,
			marginLeft: '0.6in',
			fontSize: ,
			borderWidth: '10px'
		}, 500 );
	});
	$("#10").click(function() {
     $('html, body').animate({
        scrollTop: $("#40").offset().top
     }, 2000);
  });
	$('button-15').click(function scrollWin() {
    window.scrollTo(500, 0);
}
  });

$('#button-6').click(function() {
  var elem = document.getElementById("red");
  var pos = 0;
  var id = setInterval(frame, 10);
  function frame() ({
    if (pos == 350) {
      clearInterval(id);
    } else {
      pos++;
      elem.style.top = pos + 'px';
      elem.style.left = pos + 'px';
    }

});
