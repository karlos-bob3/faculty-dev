$(document).ready(function(){$("#form").submit(function(){return $.ajax({type:"POST",url:"mail.php",data:$(this).serialize()}).done(function(){$(this).find("input").val(""),alert("Спасибо за заявку! Скоро мы с вами свяжемся."),$("#form").trigger("reset")}),!1})});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvcHVwLmpzIl0sIm5hbWVzIjpbIiQiLCJkb2N1bWVudCIsInJlYWR5Iiwic3VibWl0IiwiYWpheCIsInR5cGUiLCJ1cmwiLCJkYXRhIiwidGhpcyIsInNlcmlhbGl6ZSIsImRvbmUiLCJmaW5kIiwidmFsIiwiYWxlcnQiLCJ0cmlnZ2VyIl0sIm1hcHBpbmdzIjoiQUFBQUEsRUFBRUMsVUFBVUMsTUFBTSxXQUVqQkYsRUFBRSxTQUFTRyxPQUFPLFdBVWpCLE1BVEFILEdBQUVJLE1BQ0RDLEtBQU0sT0FDTkMsSUFBSyxXQUNMQyxLQUFNUCxFQUFFUSxNQUFNQyxjQUNaQyxLQUFLLFdBQ1BWLEVBQUVRLE1BQU1HLEtBQUssU0FBU0MsSUFBSSxJQUMxQkMsTUFBTSxnREFDTmIsRUFBRSxTQUFTYyxRQUFRLFlBRWIiLCJmaWxlIjoicG9wdXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcblxuXHQkKFwiI2Zvcm1cIikuc3VibWl0KGZ1bmN0aW9uKCkge1xuXHRcdCQuYWpheCh7XG5cdFx0XHR0eXBlOiBcIlBPU1RcIixcblx0XHRcdHVybDogXCJtYWlsLnBocFwiLFxuXHRcdFx0ZGF0YTogJCh0aGlzKS5zZXJpYWxpemUoKVxuXHRcdH0pLmRvbmUoZnVuY3Rpb24oKSB7XG5cdFx0XHQkKHRoaXMpLmZpbmQoXCJpbnB1dFwiKS52YWwoXCJcIik7XG5cdFx0XHRhbGVydChcItCh0L/QsNGB0LjQsdC+INC30LAg0LfQsNGP0LLQutGDISDQodC60L7RgNC+INC80Ysg0YEg0LLQsNC80Lgg0YHQstGP0LbQtdC80YHRjy5cIik7XG5cdFx0XHQkKFwiI2Zvcm1cIikudHJpZ2dlcihcInJlc2V0XCIpO1xuXHRcdH0pO1xuXHRcdHJldHVybiBmYWxzZTtcblx0fSk7XG5cdFxufSk7Il19
