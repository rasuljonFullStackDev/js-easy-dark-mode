const darkBtn = document.querySelector("#dark-btn");

darkBtn.addEventListener("click", (e) => {
  document.querySelector("html").classList.toggle("active");
  if(e.target.textContent.toLowerCase()=='dark'){
      e.target.textContent = 'Light'
      return; 
  }
  e.target.textContent = 'Dark'

});
