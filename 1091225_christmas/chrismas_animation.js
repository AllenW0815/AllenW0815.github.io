const article = document.querySelector('article')

function bubbles(){
    //決定泡泡的數量
    let count = 250;
    let i = 0;
    while(i < count){
        // console.log(i); 測試用
        let bubble = document.createElement('span');
        //用window的視窗尺寸定出數字
        let x = Math.floor(Math.random()*window.innerWidth);
        let y = Math.floor(Math.random()*window.innerHeight);
        let size = Math.ceil(Math.random()*10)
        let animateDuration = Math.random()*10
        let animationDelay = Math.random()

        //透過上方的隨機數決定圈圈的尺寸及位置
        bubble.style.left = x+'px';
        bubble.style.top = y+'px';
        bubble.style.width = size+'px';
        bubble.style.height = size+'px';

        //決定動畫數值 延遲及持續時間
        bubble.style.animationDuration = 3+animateDuration+'s';
        bubble.style.animationDelay = 1+animationDelay+'s';

        article.appendChild(bubble)
        //忘了++就變成無限迴圈爆炸了
        i++
    }
}
bubbles()