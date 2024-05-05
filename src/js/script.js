let imagens =['src/assets/slide1.jpg','src/assets/slide2.jpg','src/assets/slide3.jpg', 'src/assets/slide4.jpg'];
let index =0;
let time =3000;

function slideShow(){
    document.getElementById('img-slide').src=imagens[index];
    index++;

        if(index == imagens.length){
          index =0;
        }
        setTimeout('slideShow()',time);
}
slideShow();
