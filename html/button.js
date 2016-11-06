
       $("button").click(function(){
           $(this).replaceWith(
        "<form style='' class='navbar-form navbar-left'>"+
        "<div class='form-group'>"+
         " <input type='text' class='form-control' style='width: 50%; margin: auto' placeholder='Search'>"+
        "</div>"+
        "<button type='submit' class='btn btn-default'>"+'Submit'+"</button>"+
      "</form>")});
