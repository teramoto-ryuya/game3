const white=document.querySelector('.white')
const menu_btn=document.querySelector('.navi_btn')
const navi=document.querySelector('#navi')
const haikei=document.querySelector('#bg')
const efect=document.querySelector('.efect')
const txt_1=document.querySelector('.txt_ac1')
const txt_2=document.querySelector('.txt_ac2')
const txt_3=document.querySelector('.sub_txt')
const txt_4=document.querySelector('.like_txt')
const txt=document.querySelector('.txt')

let scroll=0;

//メイン
window.addEventListener('load',()=>{
    white.classList.add('shat');
    let elements = document.getElementsByClassName('white');
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.zIndex = "1";
    }
});

//背景チェンジ
document.addEventListener('scroll',()=>{
    let scroll=window.scrollY;
    console.log(scroll);
    if(scroll<2470){
        haikei.classList.add('bg_01')
    }
    if(scroll>2470){
        efect.classList.add('efecton');
        haikei.classList.remove('bg_01')
        haikei.classList.add('bg_02')
    }
    if(scroll>705){
        txt_1.classList.add('ani_left')
    }
    if(scroll>715){
        txt_2.classList.add('ani_right')
      }
    if(scroll>2470){
        txt_3.classList.add('ani_left')
     }
    if(scroll>2470){
        txt_4.classList.add('ani_right')
    }
})

//ハンバーガーメニュー
menu_btn.addEventListener('click',()=>{

    navi.classList.toggle('open');
    menu_btn.classList.toggle('close');
})