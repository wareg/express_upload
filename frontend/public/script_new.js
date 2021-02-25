const onLoad = function() {
  console.log("The client is running");

  const uForm = document.getElementById('uploadForm');
  console.log(uForm);
  
  if (uForm) {
    uForm.addEventListener("submit", (e) => {
      e.preventDefault();
      console.log("We blocked the file upload process");
    })
  }
}

window.addEventListener("load", onLoad);