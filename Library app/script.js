$(document).ready(function() {
    // Example library data
    let library = ["hello","one Book","home"];
   

    searchInput = $("#searchbook"); 
    returnInput  = $("#returnbook");
    addInput = $("#addbook");
    display_search = $("#display-search");
    display_return = $('#display-return');
    display_add = $("#display-add");
    lendbtn = $("#lend");
    returnbtn = $("#return");
    addbtn = $("#add");
    input = $(".input");

    lendbtn.hide();
    addbtn.hide();
    returnbtn.hide();
    display_search.hide();
    display_return.hide();
    display_add.hide();

 
   
 


    input.click(function(){

        lendbtn.hide();
        returnbtn.hide();
        display_search.hide();
        display_return.hide();
        
        addbtn.hide();
        display_add.hide();


    })





    $("#searchEnter").click(function(){

        book_found = false;
        for(let i = 0 ; i<library.length ;i++){
            
          if(searchInput.val() == library[i]){
              display_search.text("The book " + searchInput.val() + " is available. Do you want to lend it?" );
              display_search.show();
              lendbtn.show();

              lendbtn.click(function(){
                library.splice(i,1);
                lendbtn.hide();
                display_search.hide();

                
              })
              book_found = true;
              break;
          }
         
          


        }

        if(!book_found){
          display_search.text("This book is not available.")
          display_search.show();
        }




    })



    $("#returnEnter").click(function(){

        
            
          
              display_return.text("Do you want to return " + returnInput.val()+ " to the library?"  );
              display_return.show();
              returnbtn.show();

              returnbtn.click(function(){
                library.push(returnInput.val());
                returnbtn.hide();
                display_return.hide();
                
              })
          })
         
        
          
    $("#addEnter").click(function(){

        
            
          
      display_add.text("Do you want to add " + addInput.val()+ " to the library?"  );
      display_add.show();
      addbtn.show();

      addbtn.click(function(){
        library.push(addInput.val());
        addbtn.hide();
        display_add.hide();
        
      })
  })
 

          
          


        



 })
    
