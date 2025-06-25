const menu_btn=document.querySelector('.navi_btn')
const navi=document.querySelector('#navi')
const white=document.querySelector('.white')
const body=document.querySelector('body')
const bg=document.querySelector('#bg')

let scroll=0;

//メイン
window.addEventListener('load',()=>{
    white.classList.add('shat');
});

window.setTimeout(function(){
    let elements = document.getElementsByClassName('white');
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.zIndex = "1";
    }
},2000)

//ハンバーガーメニュー
menu_btn.addEventListener('click',()=>{

    navi.classList.toggle('open');
    menu_btn.classList.toggle('close');
})