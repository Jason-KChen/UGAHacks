
       $("button").click(function(){
           $(this).replaceWith(
        "<form style='' class='navbar-form navbar-left'>"+
        "<div class='form-group'>"+
         " <input type='text' class='form-control' style='width: 50%; margin: auto' placeholder='Search'>"+
        "</div>"+
        "<button type='submit' class='btn btn-default'>"+'Submit'+"</button>"+
      "</form>")});

    $(function(){
        var list = ["Los Angeles", "New York", "Las Vegas", "chicago", "san diego", "washington", "orlando", "houston", "seattle", "san antonio", "miami", "boston", "atlanta" ];
        $( ".form-control" ).autocomplete({
      source: list
    });
    });