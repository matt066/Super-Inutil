function abrirPopUp(){
   var pagina = "pagina.html";
   var popup = document.querySelector("iframe");
   popup.src = pagina;
   popup.style.display = "block";
}
iframe{
   -webkit-transform: translate(-50%,-50%);
   -moz-transform: translate(-50%,-50%);
   transform: translate(-50%, -50%);
   top: 50%;
   left: 50%;
   position: fixed;
   display: none;
   position: fixed;
   z-index: 99;
   width: 500px;
   height: 300px;
}