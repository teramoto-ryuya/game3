const white=document.querySelector('.white')
const menu_btn=document.querySelector('.navi_btn')
const navi=document.querySelector('#navi')
const body=document.querySelector('body')
const bg=document.querySelector('#bg')
const rasu=document.querySelector('#rasu')
const koto=document.querySelector('#koto')
const ino=document.querySelector('#ino')
const tak=document.querySelector('#tak')
const haikei=document.querySelector('#bg')

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

//背景チェンジ
document.addEventListener('scroll',()=>{
    let scroll=window.scrollY;
    console.log(scroll);
    if(scroll<1500){
        haikei.classList.remove('bg_05')
        haikei.classList.add('bg_00')
    }
    if(scroll>1300){
        haikei.classList.remove('bg_00')
        haikei.classList.add('bg_05')
      }
})

//ラスティル背景
document.getElementById('rasu').addEventListener("mouseenter",()=>{
    haikei.classList.remove('bg_00')
    haikei.classList.add('bg_01')
})
document.getElementById('rasu').addEventListener("mouseleave",()=>{
    haikei.classList.remove('bg_01')
    haikei.classList.add('bg_00')
})

//コトリン背景
document.getElementById('koto').addEventListener("mouseenter",()=>{
    haikei.classList.remove('bg_00')
    haikei.classList.add('bg_02')
})
document.getElementById('koto').addEventListener("mouseleave",()=>{
    haikei.classList.remove('bg_02')
    haikei.classList.add('bg_00')
})

//イノリ背景
document.getElementById('ino').addEventListener("mouseenter",()=>{
    haikei.classList.remove('bg_00')
    haikei.classList.add('bg_03')
})
document.getElementById('ino').addEventListener("mouseleave",()=>{
    haikei.classList.remove('bg_03')
    haikei.classList.add('bg_00')
})

//タッカー背景
document.getElementById('tak').addEventListener("mouseenter",()=>{
    haikei.classList.remove('bg_00')
    haikei.classList.add('bg_04')
})
document.getElementById('tak').addEventListener("mouseleave",()=>{
    haikei.classList.remove('bg_04')
    haikei.classList.add('bg_00')
})

//ハンバーガーメニュー
menu_btn.addEventListener('click',()=>{

    navi.classList.toggle('open');
    menu_btn.classList.toggle('close');
})