const modal = document.getElementById('myModal');

document.getElementById('btn').addEventListener('click', function(){
  modal.style.display = "block";
});

document.getElementById('close').addEventListener('click', function(){
  modal.style.display = "none";
})
