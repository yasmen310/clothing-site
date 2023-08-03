function changeImage(img) {
  if (img.src.match('IMG4/mod0.jpg')) {
    img.src = 'IMG4/mod1.jpg';
  } else if(img.src.match('IMG4/mod1.jpg')) {
    img.src = 'IMG4/mod2.jpg';
  }
  else if(img.src.match( 'IMG4/mod2.jpg')){
        img.src = 'IMG4/mod3.jpg';
  }
  else if(img.src.match( 'IMG4/mod3.jpg')){
          img.src ='IMG4/mod4.jpg';    
  }
  else if(img.src.match( 'IMG4/mod4.jpg')){
          img.src ='IMG4/mod5.jpg';    
  }else if(img.src.match( 'IMG4/mod5.jpg')){
          img.src ='IMG4/mod6.jpg';    
  }else if(img.src.match( 'IMG4/mod6.jpg')){
          img.src ='IMG4/mod7.jpg';    
  }
  else{
      img.src = 'IMG4/mod0.jpg';
  }
}
function changeImage2(img) {
  if (img.src.match('IMG4/modal2.jpg')) {
    img.src = 'IMG4/modal1.jpg';
  } else if(img.src.match('IMG4/modal1.jpg')) {
    img.src = 'IMG4/moal3.jpg';
  }
  else if(img.src.match( 'IMG4/moal3.jpg')){
        img.src = 'IMG4/modal4.webp';
  }
  else if(img.src.match( 'IMG4/modal4.webp')){
          img.src ='IMG4/modal5.webp';    
  }
  else if(img.src.match( 'IMG4/modal5.webp')){
          img.src ='IMG4/modal6.jpg';    
  }else if(img.src.match( 'IMG4/modal6.jpg')){
          img.src ='IMG4/modal7.webp';    
  }else if(img.src.match( 'IMG4/modal7.webp')){
          img.src ='IMG4/modal8.jpg';    
  }
  else{
      img.src = 'IMG4/modal2.jpg';
  }
}

function changeImage3(img) {
  if (img.src.match('IMG4/maxresdef.jpg')) {
    img.src = 'IMG4/clothes.jpg';
  } else if(img.src.match('IMG4/clothes.jpg')) {
    img.src = 'IMG4/2895971-1072258571.jpg';
  }
  else if(img.src.match('IMG4/2895971-1072258571.jpg'))
  {
  img.src = 'IMG4/2981f0213742bc86ff92fc03b44b114c.jpg';
  }
  else if(img.src.match('IMG4/2981f0213742bc86ff92fc03b44b114c.jpg')) {
        img.src = 'IMG4/3062.jpg';
  }else if(img.src.match('IMG4/3062.jpg')) {
        img.src = 'IMG4/maxres.jpg';
  }else if(img.src.match('IMG4/maxres.jpg')) {
        img.src = 'IMG4/screen-2-e1582795963570.jpg';
  }else if(img.src.match('IMG4/screen-2-e1582795963570.jpg')) {
        img.src = 'IMG4/modalone.jpg';
  }
  else{
    img.src='IMG4/maxresdef.jpg';
  }
  
}

function changeImage4(img) {
  if (img.src.match('IMG4/maxresdefaul.jpg')) {
    img.src = 'IMG4/1859-2.jpg';
  } else if(img.src.match('IMG4/1859-2.jpg')) {
    img.src = 'IMG4/hqdefault.jpg';
  }
  else if(img.src.match('IMG4/hqdefault.jpg'))
  {
  img.src = 'IMG4/sddefault.jpg';
  }
  else if(img.src.match('IMG4/sddefault.jpg')) {
        img.src = 'IMG4/hqdefault44.jpg';
  }else if(img.src.match('IMG4/hqdefault44.jpg')) {
        img.src = 'IMG4/maxresd66.jpg';
  }
  else{
    img.src='IMG4/maxresdefaul.jpg';
  }
  
}
