//抓取DOM
const container = document.querySelector('.container')
const card = document.querySelector('.card')
    //3D物件DOM
const avatar = document.querySelector('.avatar')
const title = document.querySelector('.title')
const h3 = document.querySelectorAll('h3')
const link = document.querySelector('.link')
const hire = document.querySelector('.hire')

//加掛事件監聽
container.addEventListener('mousemove',(e)=>{
    //touchmove = 手指在螢幕上移動的時候觸發 
    //console.log(e.pageX,e.pageY);
    let xAxis = (window.innerWidth/2 - e.pageX)/20
    let yAxis = (window.innerHeight/2 - e.pageY)/20    
    card.style.transform = `rotateX(${yAxis}deg) rotateY(${xAxis}deg)`

})

//動畫生效
container.addEventListener('mouseenter',(e)=>{
    //滑鼠進入container的時候不要有transition，才不會影響原本的效果
    card.style.transition='none'
    //DOM彈出效果
    avatar.style.transform = `translateZ(120px)`
    title.style.transform = `translateZ(80px)`
    h3.forEach((e)=>{
        e.style.transform = `translateZ(40px)`
    })
    link.style.transform = `translateZ(80px)`
    hire.style.transform = `translateZ(120px)`
})

//動畫取消
container.addEventListener('mouseleave',(e)=>{
    //滑鼠離開container的時候加上transition，解決動畫斷層
    card.style.transition='0.5s ease'
    card.style.transform = null
    // card.style.transform = 'none'
    // card.style.transform = `rotateX(0deg) rotateY(0deg)`
    //DOM彈出效果取消
    avatar.style.transform = `translateZ(0px)`
    title.style.transform = `translateZ(0px)`
    link.style.transform = `translateZ(0px)`
    hire.style.transform = `translateZ(0px)`
})

//測試
avatar.addEventListener('click',(e)=>{
    console.log('hi');
})

//上班了
hire.addEventListener('click',(e)=>{
    hire.innerHTML = `<button>請撥 0933 909 238</button>`
})