
    let modal = document.getElementById("container-sala1");
    function entrarSala(){
      modal.style = "display:flex;"
    }

    function sairSala(){
      modal.style = "display:none;"
    }

  

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
                entry.target.classList('showw');
            }
    })
})

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

const observer2 = new IntersectionObserver((entries2) => {
    entries2.forEach((entry2) => {
        console.log(entry2)
        if (entry2.isIntersecting) {
            entry2.target.classList.add('show2');
        } else {
                entry2.target.classList('show2');
            }
    })
})

const hidden2Elements = document.querySelectorAll('.hidden2');
hidden2Elements.forEach((el2) => observer2.observe(el2));
const observer3 = new IntersectionObserver((entries3) => {
    entries3.forEach((entry3) => {
        console.log(entry3)
        if (entry3.isIntersecting) {
            entry3.target.classList.add('show3');
        } else {
                entry3.target.classList('show3');
            }
    })
})

const hidden3Elements = document.querySelectorAll('.hidden3');
hidden3Elements.forEach((el3) => observer3.observe(el3));

const observer4 = new IntersectionObserver((entries4) => {
    entries4.forEach((entry4) => {
        console.log(entry4)
        if (entry4.isIntersecting) {
            entry4.target.classList.add('show4');
        } else {
                entry4.target.classList('show4');
            }
    })
})

const hidden4Elements = document.querySelectorAll('.hidden4');
hidden4Elements.forEach((el4) => observer4.observe(el4));

const observer5 = new IntersectionObserver((entries5) => {
    entries5.forEach((entry5) => {
        console.log(entry5)
        if (entry5.isIntersecting) {
            entry5.target.classList.add('show5');
        } else {
                entry5.target.classList('show5');
            }
    })
})

const hidden5Elements = document.querySelectorAll('.hidden5');
hidden5Elements.forEach((el5) => observer4.observe(el5));

/*comparation*/

  function initComparisons() {
    var x, i;
    /*find all elements with an "overlay" class:*/
    x = document.getElementsByClassName("img-comp-overlay");
    for (i = 0; i < x.length; i++) {
      /*once for each "overlay" element:
      pass the "overlay" element as a parameter when executing the compareImages function:*/
      compareImages(x[i]);
    }
    function compareImages(img) {
      var slider, img, clicked = 0, w, h;
      /*get the width and height of the img element*/
      w = img.offsetWidth;
      h = img.offsetHeight;
      /*set the width of the img element to 50%:*/
      img.style.width = (w / 2) + "px";
      /*create slider:*/
      slider = document.createElement("DIV");
      slider.setAttribute("class", "img-comp-slider");
      /*insert slider*/
      img.parentElement.insertBefore(slider, img);
      /*position the slider in the middle:*/
      slider.style.top = (h / 2) - (slider.offsetHeight / 2) + "px";
      slider.style.left = (w / 2) - (slider.offsetWidth / 2) + "px";
      /*execute a function when the mouse button is pressed:*/
      slider.addEventListener("mousedown", slideReady);
      /*and another function when the mouse button is released:*/
      window.addEventListener("mouseup", slideFinish);
      /*or touched (for touch screens:*/
      slider.addEventListener("touchstart", slideReady);
      /*and released (for touch screens:*/
      window.addEventListener("touchend", slideFinish);
      function slideReady(e) {
        /*prevent any other actions that may occur when moving over the image:*/
        e.preventDefault();
        /*the slider is now clicked and ready to move:*/
        clicked = 1;
        /*execute a function when the slider is moved:*/
        window.addEventListener("mousemove", slideMove);
        window.addEventListener("touchmove", slideMove);
      }
      function slideFinish() {
        /*the slider is no longer clicked:*/
        clicked = 0;
      }
      function slideMove(e) {
        var pos;
        /*if the slider is no longer clicked, exit this function:*/
        if (clicked == 0) return false;
        /*get the cursor's x position:*/
        pos = getCursorPos(e)
        /*prevent the slider from being positioned outside the image:*/
        if (pos < 0) pos = 0;
        if (pos > w) pos = w;
        /*execute a function that will resize the overlay image according to the cursor:*/
        slide(pos);
      }
      function getCursorPos(e) {
        var a, x = 0;
        e = (e.changedTouches) ? e.changedTouches[0] : e;
        /*get the x positions of the image:*/
        a = img.getBoundingClientRect();
        /*calculate the cursor's x coordinate, relative to the image:*/
        x = e.pageX - a.left;
        /*consider any page scrolling:*/
        x = x - window.pageXOffset;
        return x;
      }
      function slide(x) {
        /*resize the image:*/
        img.style.width = x + "px";
        /*position the slider:*/
        slider.style.left = img.offsetWidth - (slider.offsetWidth / 2) + "px";
      }
    }
  }
initComparisons();
var Aparecer = document.getElementById("Aparecer")
function interior(){
  Aparecer.innerHTML = '<div class="img-comp-container align-comparation wow"><div class="img-comp-img"><img src="PastaCarros/img/interior-claro.jpg" style="width: 50vw; height: 60vh;"/></div><div class="img-comp-img img-comp-overlay"><img src="PastaCarros/img/interior-escuro.jpg"style="width: 50vw; height: 60vh"/></div></div></div>'
  function initComparisons() {
    var x, i;
    /*find all elements with an "overlay" class:*/
    x = document.getElementsByClassName("img-comp-overlay");
    for (i = 0; i < x.length; i++) {
      /*once for each "overlay" element:
      pass the "overlay" element as a parameter when executing the compareImages function:*/
      compareImages(x[i]);
    }
    function compareImages(img) {
      var slider, img, clicked = 0, w, h;
      /*get the width and height of the img element*/
      w = img.offsetWidth;
      h = img.offsetHeight;
      /*set the width of the img element to 50%:*/
      img.style.width = (w / 2) + "px";
      /*create slider:*/
      slider = document.createElement("DIV");
      slider.setAttribute("class", "img-comp-slider");
      /*insert slider*/
      img.parentElement.insertBefore(slider, img);
      /*position the slider in the middle:*/
      slider.style.top = (h / 2) - (slider.offsetHeight / 2) + "px";
      slider.style.left = (w / 2) - (slider.offsetWidth / 2) + "px";
      /*execute a function when the mouse button is pressed:*/
      slider.addEventListener("mousedown", slideReady);
      /*and another function when the mouse button is released:*/
      window.addEventListener("mouseup", slideFinish);
      /*or touched (for touch screens:*/
      slider.addEventListener("touchstart", slideReady);
      /*and released (for touch screens:*/
      window.addEventListener("touchend", slideFinish);
      function slideReady(e) {
        /*prevent any other actions that may occur when moving over the image:*/
        e.preventDefault();
        /*the slider is now clicked and ready to move:*/
        clicked = 1;
        /*execute a function when the slider is moved:*/
        window.addEventListener("mousemove", slideMove);
        window.addEventListener("touchmove", slideMove);
      }
      function slideFinish() {
        /*the slider is no longer clicked:*/
        clicked = 0;
      }
      function slideMove(e) {
        var pos;
        /*if the slider is no longer clicked, exit this function:*/
        if (clicked == 0) return false;
        /*get the cursor's x position:*/
        pos = getCursorPos(e)
        /*prevent the slider from being positioned outside the image:*/
        if (pos < 0) pos = 0;
        if (pos > w) pos = w;
        /*execute a function that will resize the overlay image according to the cursor:*/
        slide(pos);
      }
      function getCursorPos(e) {
        var a, x = 0;
        e = (e.changedTouches) ? e.changedTouches[0] : e;
        /*get the x positions of the image:*/
        a = img.getBoundingClientRect();
        /*calculate the cursor's x coordinate, relative to the image:*/
        x = e.pageX - a.left;
        /*consider any page scrolling:*/
        x = x - window.pageXOffset;
        return x;
      }
      function slide(x) {
        /*resize the image:*/
        img.style.width = x + "px";
        /*position the slider:*/
        slider.style.left = img.offsetWidth - (slider.offsetWidth / 2) + "px";
      }
    }
  }
initComparisons();
}
function exterior()
{
Aparecer.innerHTML = '<div class="carro-poggers"><img src="PastaCarros/img/carro-poggers.png" alt=""></div>'
}
function modalAparecer()
{
Aparecer.innerHTML = ' <div class="container-sala1" id="container-sala1"><div class="modal-sala1"> <br><br><br> <h4 id="H4modal">É NECESSÁRIO UM LOGIN PRIMEIRO!</h4> <br><br><br> <input type="text" placeholder="Ex: Marcolinha@gmail.cum"><br>  <p id="Pmodel">Digite seu e-email ou número de telefone</p> <br><br><br> <input type="text" placeholder="senha"> <p id="Pmodel">Digite sua senha.   Esqueceu a senha?</p> <br><br><br> <button id="buttonmodal">Logar</button> <button class="btn btn-danger-modal" onclick="sairSala()"> X </button>  </div></div>'

}
function calculadora(){
  var y = 1600000.00
  var result = 0
  var x = prompt('Quantos dias você ficará com o carro?: ')
  var condicao = prompt('Deseja alugar à vista ou parcelado?: ')
  if (condicao == 'a vista'){
  y = y * x
  var dsc = 0.10
  result = y - (y * dsc) 
  alert ('O  valor total será de : '+result) 




  }else if(condicao == 'parcelado'){
    var acres = 0.15
    y = y * x
    result = y+(y * acres)
    var vezes = prompt('Deseja parcelar quantas vezes?: ')
    var parcelado
    parcelado = result / vezes
    result = result + y
    alert ('O  valor total mais os acrescimos será de : '+result+'\n parcelado: '+vezes+'x vezes'+' com o valor de '+parcelado) 


  }
  else{
    alert('Esse valor é invalido!')
  }
}
