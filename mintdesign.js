$(".faq-heading").click(function () {
  $header = $(this);
  //getting the next element
  $content = $header.next();
  //open up the content needed - toggle the slide- if visible, slide up, if not slidedown.
  $content.slideToggle(500, function () {});

  var imgsrc = $header.find("img").attr('src')

  if(imgsrc === 'plus.svg'){
    $header.find("img").attr('src', 'minus.svg')
  }
  else {
    $header.find("img").attr('src', 'plus.svg')
  }
});


