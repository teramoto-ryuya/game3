const white=document.querySelector('.white')
const txt_mon1=document.querySelector('.inner-wrap h2')
const sera=document.querySelector('.sera')
const war1=document.querySelector('.war1')
const war2=document.querySelector('.war2')
const waku=document.querySelector('.sera_back')
const waku2=document.querySelector('.sera_back2')
const txt_sai=document.querySelector('.sai')
const txt_sai2=document.querySelector('.sai2')
const blue=document.querySelector('.serafiras')
const hontai=document.querySelector('.hontai')
const hontai2=document.querySelector('.hontai2')
const menu_btn=document.querySelector('.navi_btn')
const navi=document.querySelector('#navi')
const body=document.querySelector('body')

let scroll=0;

window.addEventListener('load',()=>{
    white.classList.add('shat');
});

window.setTimeout(function(){
    white.classList.add('z-in');
},2000)

window.setTimeout(function(){
    txt_mon1.classList.add('on');
},1500)

document.addEventListener('scroll',()=>{
    let scroll=window.scrollY;
    if(scroll>1500){
        war2.classList.add('waron');
        hontai.classList.add('on')
        waku.classList.add('on')
        txt_sai.classList.add('on')
        war1.classList.add('on')
    }
    if(scroll>2000){
        hontai2.classList.add('on')
        waku2.classList.add('on')
        txt_sai2.classList.add('on')
    }
})

//ハンバーガーメニュー
menu_btn.addEventListener('click',()=>{

    navi.classList.toggle('open');
    menu_btn.classList.toggle('close');
})
  