$(document).ready(function(){
    //getting date from moment.js
    $("#currentDay").text(moment().format('dddd, MMMM Do'));

//function to store data to local storage
function saveEvent(){
 
   var id=$(this).parent().attr("id");
   var task= $(this).siblings(".description").val();
   localStorage.setItem(id,task);
     
}
$(".saveBtn").on("click", saveEvent);

//function to add colors to textarea and get data from local storage
$(".time-block").each(function(){
   var id= $(this).attr("id");
   var task=localStorage.getItem(id);
   var description=$(this).children(".description")

   description.val(task);

   var time=moment().hours();
   id=parseInt(id);

   if(id===time)
   {
     description.addClass("present");
   }
   else if(id>time)
   {
    description.addClass("future");

   }
   else if(id<time)
   {
    description.addClass("past");

   }

})
});

