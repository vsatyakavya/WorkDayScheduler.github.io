$(document).ready(function(){
  

function saveEvent(){
 
   var id=$(this).parent().attr("id");
   var task= $(this).siblings(".description").val();
   localStorage.setItem(id,task);
     
}
$(".saveBtn").on("click", saveEvent);


$(".time-block").each(function(){
   var id= $(this).attr("id");
   var task=localStorage.getItem(id);
   var description=$(this).children(".description")

   description.val(task);

   var time=moment().hours();
   time=time-3
   
   id=parseInt(id);
   console.log({id,time});
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

