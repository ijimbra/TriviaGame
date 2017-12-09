var input = $( "form input:radio" )
  .wrap( "<span></span>" )
  .parent()
  .css({
    background: "yellow",
    border: "3px red solid"
  });

  // Prevent form submission
  $( "form" ).submit(function(e) {
    e.preventDefault();
  });
