function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

  document.getElementById ('mySidenav')
  .addEventListener ('click', function() {
    this.classList.toggle('sidebar-wrapper')

    $('.sidebar-nav li a').on ('click', function () {
      $('#mySidenav').click();
    });
  });