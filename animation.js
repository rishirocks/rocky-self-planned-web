document.addEventListener('DOMContentLoaded', function() {
    var navLinks = document.querySelectorAll('div a');
  
    for (var i = 0; i < navLinks.length; i++) {
      navLinks[i].addEventListener('click', scrollToSection);
    }
  
    function scrollToSection(event) {
      event.preventDefault();
  
      var targetId = this.getAttribute('href');
      var targetElement = document.querySelector(targetId);
      targetElement.scrollIntoView({
        behavior: 'smooth'
      });
    }
});


function saveContent() {
  const content = document.getElementById('editableContent').innerText;
  localStorage.setItem('savedContent', content);
  alert('Content saved!');
}
window.onload = function() {
  const savedContent = localStorage.getItem('savedContent');
  if (savedContent) {
    document.getElementById('editableContent').innerText = savedContent;
  }
};


function addCrossLine(cell) {
  cell.classList.toggle('cross-line');
}


  