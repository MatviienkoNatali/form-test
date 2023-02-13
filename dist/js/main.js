"use strict";var form=document.querySelector(".form"),required=form.querySelectorAll(".required"),errorMessage=form.querySelectorAll(".error-message"),registerBtn=form.querySelector(".register-btn"),firstName=document.getElementById("firstName"),lastName=document.getElementById("lastName"),company=document.getElementById("company"),email=document.getElementById("email"),filter=/^([a-zA-Z0-9_\.\-])+\@([a-zA-Z0-9]{2,4})+$/;function submitForm(){registerBtn.addEventListener("click",(function(){form&&(checkEmailValidation(),required.forEach((function(e){var t=e.closest(".form__group");e.value.length<3?t.classList.add("error"):t.classList.remove("error"),e.addEventListener("keyup",(function(){console.log(e.value.length),e.value.length>=3&&t.classList.remove("error")}))})))}))}function checkEmailValidation(){emailValidation(),email.addEventListener("keydown",(function(){emailValidation()}))}function emailValidation(){if(!filter.test(email.value))return email.style.border="1px solid #ea4335",!1;email.style.border="1px solid #E5E5E5",firstName.value.length>=3&&lastName.value.length>=3&&company.value.length>=3&&sendJSON()}function sendJSON(){var e=new XMLHttpRequest;e.open("POST","http://test/json.php",!0),e.setRequestHeader("Content-Type","application/json");var t=JSON.stringify({name:firstName.value,lastname:lastName.value,email:email.value,company:company.value});e.send(t)}function resetForm(){form.querySelectorAll("input").forEach((function(e){e.value=""}))}errorMessage&&errorMessage.forEach((function(e){e.style.display="none"})),submitForm();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiZm9ybSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInJlcXVpcmVkIiwicXVlcnlTZWxlY3RvckFsbCIsImVycm9yTWVzc2FnZSIsInJlZ2lzdGVyQnRuIiwiZmlyc3ROYW1lIiwiZ2V0RWxlbWVudEJ5SWQiLCJsYXN0TmFtZSIsImNvbXBhbnkiLCJlbWFpbCIsImZpbHRlciIsInN1Ym1pdEZvcm0iLCJhZGRFdmVudExpc3RlbmVyIiwiY2hlY2tFbWFpbFZhbGlkYXRpb24iLCJmb3JFYWNoIiwiaW5wdXQiLCJwYXJlbnQiLCJjbG9zZXN0IiwidmFsdWUiLCJsZW5ndGgiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJjb25zb2xlIiwibG9nIiwiZW1haWxWYWxpZGF0aW9uIiwidGVzdCIsInN0eWxlIiwiYm9yZGVyIiwic2VuZEpTT04iLCJ4aHIiLCJYTUxIdHRwUmVxdWVzdCIsIm9wZW4iLCJzZXRSZXF1ZXN0SGVhZGVyIiwiZGF0YSIsIkpTT04iLCJzdHJpbmdpZnkiLCJuYW1lIiwibGFzdG5hbWUiLCJzZW5kIiwicmVzZXRGb3JtIiwidGV4dCIsImRpc3BsYXkiXSwibWFwcGluZ3MiOiJBQUFBLGFBRUEsSUFBTUEsS0FBT0MsU0FBU0MsY0FBYyxTQUM5QkMsU0FBV0gsS0FBS0ksaUJBQWlCLGFBQ2pDQyxhQUFlTCxLQUFLSSxpQkFBaUIsa0JBQ3JDRSxZQUFjTixLQUFLRSxjQUFjLGlCQUVqQ0ssVUFBWU4sU0FBU08sZUFBZSxhQUNwQ0MsU0FBV1IsU0FBU08sZUFBZSxZQUNuQ0UsUUFBVVQsU0FBU08sZUFBZSxXQUVsQ0csTUFBUVYsU0FBU08sZUFBZSxTQUNoQ0ksT0FBUyw2Q0FPZixTQUFTQyxhQUNMUCxZQUFZUSxpQkFBaUIsU0FBUyxXQUMvQmQsT0FDQ2UsdUJBQ0FaLFNBQVNhLFNBQVEsU0FBQUMsR0FDYixJQUFNQyxFQUFTRCxFQUFNRSxRQUFRLGdCQUUxQkYsRUFBTUcsTUFBTUMsT0FBUyxFQUNwQkgsRUFBT0ksVUFBVUMsSUFBSSxTQUVyQkwsRUFBT0ksVUFBVUUsT0FBTyxTQUU1QlAsRUFBTUgsaUJBQWlCLFNBQVMsV0FDNUJXLFFBQVFDLElBQUlULEVBQU1HLE1BQU1DLFFBQ3JCSixFQUFNRyxNQUFNQyxRQUFVLEdBQ3JCSCxFQUFPSSxVQUFVRSxPQUFPLFFBRWhDLEdBQ0osSUFFUixHQUNKLENBRUEsU0FBU1QsdUJBQ0xZLGtCQUNBaEIsTUFBTUcsaUJBQWlCLFdBQVcsV0FDOUJhLGlCQUNKLEdBQ0osQ0FFQSxTQUFTQSxrQkFDTCxJQUFLZixPQUFPZ0IsS0FBS2pCLE1BQU1TLE9BRW5CLE9BREFULE1BQU1rQixNQUFNQyxPQUFTLHFCQUNkLEVBRVBuQixNQUFNa0IsTUFBTUMsT0FBUyxvQkFDbEJ2QixVQUFVYSxNQUFNQyxRQUFVLEdBQUtaLFNBQVNXLE1BQU1DLFFBQVUsR0FBS1gsUUFBUVUsTUFBTUMsUUFBVSxHQUNwRlUsVUFHWixDQUVBLFNBQVNBLFdBQ0wsSUFBTUMsRUFBTSxJQUFJQyxlQUVoQkQsRUFBSUUsS0FBSyxPQURHLHdCQUNVLEdBQ3RCRixFQUFJRyxpQkFBaUIsZUFBZ0Isb0JBQ3JDLElBQU1DLEVBQU9DLEtBQUtDLFVBQVUsQ0FBRUMsS0FBUWhDLFVBQVVhLE1BQU9vQixTQUFZL0IsU0FBU1csTUFBT1QsTUFBU0EsTUFBTVMsTUFBT1YsUUFBV0EsUUFBUVUsUUFDNUhZLEVBQUlTLEtBQUtMLEVBSWIsQ0FFQSxTQUFTTSxZQUNVMUMsS0FBS0ksaUJBQWlCLFNBQzlCWSxTQUFRLFNBQUFDLEdBQ1hBLEVBQU1HLE1BQVEsRUFDbEIsR0FDSixDQWhFR2YsY0FDQ0EsYUFBYVcsU0FBUSxTQUFBMkIsR0FDakJBLEVBQUtkLE1BQU1lLFFBQVUsTUFDekIsSUF1QkgvQiIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCJcblxuY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtJyk7XG5jb25zdCByZXF1aXJlZCA9IGZvcm0ucXVlcnlTZWxlY3RvckFsbCgnLnJlcXVpcmVkJyk7XG5jb25zdCBlcnJvck1lc3NhZ2UgPSBmb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoJy5lcnJvci1tZXNzYWdlJyk7XG5jb25zdCByZWdpc3RlckJ0biA9IGZvcm0ucXVlcnlTZWxlY3RvcignLnJlZ2lzdGVyLWJ0bicpO1xuXG5jb25zdCBmaXJzdE5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmlyc3ROYW1lJyk7XG5jb25zdCBsYXN0TmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsYXN0TmFtZScpO1xuY29uc3QgY29tcGFueSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21wYW55Jyk7XG5cbmNvbnN0IGVtYWlsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VtYWlsJyk7XG5jb25zdCBmaWx0ZXIgPSAvXihbYS16QS1aMC05X1xcLlxcLV0pK1xcQChbYS16QS1aMC05XXsyLDR9KSskLztcblxuaWYoZXJyb3JNZXNzYWdlKXtcbiAgICBlcnJvck1lc3NhZ2UuZm9yRWFjaCh0ZXh0ID0+e1xuICAgICAgICB0ZXh0LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9KVxufVxuZnVuY3Rpb24gc3VibWl0Rm9ybSgpe1xuICAgIHJlZ2lzdGVyQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICAgICAgaWYoZm9ybSl7XG4gICAgICAgICAgICBjaGVja0VtYWlsVmFsaWRhdGlvbigpO1xuICAgICAgICAgICAgcmVxdWlyZWQuZm9yRWFjaChpbnB1dCA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgcGFyZW50ID0gaW5wdXQuY2xvc2VzdCgnLmZvcm1fX2dyb3VwJyk7XG5cbiAgICAgICAgICAgICAgICBpZihpbnB1dC52YWx1ZS5sZW5ndGggPCAzKXtcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50LmNsYXNzTGlzdC5hZGQoJ2Vycm9yJyk7XG4gICAgICAgICAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBwYXJlbnQuY2xhc3NMaXN0LnJlbW92ZSgnZXJyb3InKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBmdW5jdGlvbiAoKXtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coaW5wdXQudmFsdWUubGVuZ3RoKVxuICAgICAgICAgICAgICAgICAgICBpZihpbnB1dC52YWx1ZS5sZW5ndGggPj0gMyl7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnQuY2xhc3NMaXN0LnJlbW92ZSgnZXJyb3InKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfSlcbn1zdWJtaXRGb3JtKCk7XG5cbmZ1bmN0aW9uIGNoZWNrRW1haWxWYWxpZGF0aW9uKCkge1xuICAgIGVtYWlsVmFsaWRhdGlvbigpO1xuICAgIGVtYWlsLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBmdW5jdGlvbigpe1xuICAgICAgICBlbWFpbFZhbGlkYXRpb24oKTtcbiAgICB9KVxufTtcblxuZnVuY3Rpb24gZW1haWxWYWxpZGF0aW9uKCl7XG4gICAgaWYgKCFmaWx0ZXIudGVzdChlbWFpbC52YWx1ZSkpIHtcbiAgICAgICAgZW1haWwuc3R5bGUuYm9yZGVyID0gXCIxcHggc29saWQgI2VhNDMzNVwiO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZW1haWwuc3R5bGUuYm9yZGVyID0gXCIxcHggc29saWQgI0U1RTVFNVwiO1xuICAgICAgICBpZihmaXJzdE5hbWUudmFsdWUubGVuZ3RoID49IDMgJiYgbGFzdE5hbWUudmFsdWUubGVuZ3RoID49IDMgJiYgY29tcGFueS52YWx1ZS5sZW5ndGggPj0gMyl7XG4gICAgICAgICAgICBzZW5kSlNPTigpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiBzZW5kSlNPTigpe1xuICAgIGNvbnN0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgIGNvbnN0IHVybCA9IFwiaHR0cDovL3Rlc3QvanNvbi5waHBcIjtcbiAgICB4aHIub3BlbihcIlBPU1RcIiwgdXJsLCB0cnVlKTtcbiAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb25cIik7XG4gICAgY29uc3QgZGF0YSA9IEpTT04uc3RyaW5naWZ5KHsgXCJuYW1lXCI6IGZpcnN0TmFtZS52YWx1ZSwgXCJsYXN0bmFtZVwiOiBsYXN0TmFtZS52YWx1ZSwgXCJlbWFpbFwiOiBlbWFpbC52YWx1ZSwgXCJjb21wYW55XCI6IGNvbXBhbnkudmFsdWUsIH0pO1xuICAgIHhoci5zZW5kKGRhdGEpO1xuXG4gICAgLy8gZm9ybS5yZXNldCgpO1xuICAgIC8vIHJlc2V0Rm9ybSgpO1xufVxuXG5mdW5jdGlvbiByZXNldEZvcm0oKXtcbiAgICBjb25zdCBpbnB1dHMgPSBmb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0Jyk7XG4gICAgaW5wdXRzLmZvckVhY2goaW5wdXQgPT4ge1xuICAgICAgICBpbnB1dC52YWx1ZSA9ICcnO1xuICAgIH0pO1xufVxuXG4iXX0=
