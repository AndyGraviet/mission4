// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

//document.getElementById("btnSend").addEventListener("click", function () {
//    alert("This worked: " + $("#userName").value);
//})


$("#btnSend").click(() => {
    alert($("#userName").val())
})