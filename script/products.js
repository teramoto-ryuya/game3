const white=document.querySelector('.white')
const menu_btn=document.querySelector('.navi_btn')
const navi=document.querySelector('#navi')
const body=document.querySelector('body')

//メイン
window.addEventListener('load',()=>{
    white.classList.add('shat');
    const body=document.querySelector('body')
});

window.setTimeout(function(){
    body.classList.remove('stop')
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