const white_back=document.querySelector('#white_back p');
const white=document.querySelector('.white')
const back=document.querySelector('#white_back')
const txt_st=document.querySelector('.txt_st')
const kotorin=document.querySelector('.koto_kage')
const haikei=document.querySelector('#bg')
const gaiyou=document.querySelector('.gaiyou')
const gaiyou_y=gaiyou.getBoundingClientRect().top;
const story=document.querySelector('.story')
const story_y=story.getBoundingClientRect().top;
const menu_btn=document.querySelector('.navi_btn')
const navi=document.querySelector('#navi')
const txt_ac=document.querySelector('.txt_ac')
const txt_ch=document.querySelector('.txt_ch')
const txt_mo=document.querySelector('.txt_mo')
const txt_pr=document.querySelector('.txt_pr')
const bunkatu_ac1=document.querySelector('.katu_ac1')
const bunkatu_ac2=document.querySelector('.katu_ac2')
const bunkatu_ac3=document.querySelector('.katu_ac3')
const bunkatu_ch1=document.querySelector('.koto')
const bunkatu_ch2=document.querySelector('.rasu')
const bunkatu_ch3=document.querySelector('.iori')
const bunkatu_mo1=document.querySelector('.demo')
const bunkatu_mo2=document.querySelector('.suru')
const bunkatu_mo3=document.querySelector('.saku')
const bunkatu_pro3=document.querySelector('.pro1')
const bunkatu_pro2=document.querySelector('.pro2')
const bunkatu_pro1=document.querySelector('.pro3')
const body=document.querySelector('body')

let scroll=0;

//メイン
window.addEventListener('load',()=>{
    //alert("読み込み完了");
    white_back.classList.add('show'); 
});

window.setTimeout(function(){
    white_back.classList.add('down');
},2300)

window.setTimeout(function(){
    white.classList.add('shat');
},4500)

window.setTimeout(function(){
    document.getElementById('white_back').style.zIndex = 1;
},5000)


//背景チェンジ
document.addEventListener('scroll',()=>{
    let scroll=window.scrollY;
    console.log(scroll);
    if(scroll<story_y){
        haikei.classList.remove('bg_02')
        haikei.classList.add('bg_01')
    }
    if(scroll>story_y){
        haikei.classList.remove('bg_01')
        haikei.classList.add('bg_02')
      }
})

//背景スライド
document.addEventListener('scroll',()=>{
    let scroll=window.scrollY;
    if(scroll>1580){
        bunkatu_ac1.classList.add('ani_up')
    }
    
    if(scroll>1600){
        bunkatu_ac2.classList.add('ani_up')
    }
    
    if(scroll>1620){
        bunkatu_ac3.classList.add('ani_up')
    }

    if(scroll>2460){
        bunkatu_ch1.classList.add('ani_up')
    }

    if(scroll>2480){
        bunkatu_ch2.classList.add('ani_up')
    }

    if(scroll>2500){
        bunkatu_ch3.classList.add('ani_up')
    }

    if(scroll>3450){
        bunkatu_mo1.classList.add('ani_up')
    }

    if(scroll>3470){
        bunkatu_mo2.classList.add('ani_up')
    }

    if(scroll>3490){
        bunkatu_mo3.classList.add('ani_up')
    }

    if(scroll>4370){
        bunkatu_pro1.classList.add('ani_up')
    }

    if(scroll>4390){
        bunkatu_pro2.classList.add('ani_up')
    }

    if(scroll>4410){
        bunkatu_pro3.classList.add('ani_up')
    }
})

//テキスト
document.addEventListener('scroll',()=>{
    let scroll=window.scrollY;
    console.log(scroll);
    if(scroll>1745){
        txt_ac.classList.add('ani_left')
    }        

    if(scroll>2735){
        txt_ch.classList.add('ani_right')
    }

    if(scroll>3660){
        txt_mo.classList.add('ani_left')
    }

    if(scroll>4515){
        txt_pr.classList.add('ani_right')
    }
})

//物語
document.addEventListener('scroll',()=>{
    let scroll=window.scrollY;
    console.log(scroll);
    if(scroll>5800){
        txt_st.classList.add('on');
    }

    if(scroll>6000){
        kotorin.classList.add('on');
    }
})

//ハンバーガーメニュー
menu_btn.addEventListener('click',()=>{
    navi.classList.toggle('open');
    menu_btn.classList.toggle('close');
})
