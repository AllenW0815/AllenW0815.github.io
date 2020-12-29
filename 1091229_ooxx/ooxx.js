//抓取DOM節點
const msg = document.querySelector('#msg')
const restartBtn = document.querySelector('#btn')
const boxes = document.querySelectorAll('.box')
//給空陣列存放OX 用於判斷勝利情況
const space = []
//設定OX及當前玩家
const o_text = 'O'
const x_text = 'X'
    //這邊要用let不然會沒法切換OX
let nowPlayer

//測試 拿到一個nodeList
// console.log(boxes);

//畫出九宮格的線條的函式，不然就是要對個別的box寫不同的CSS
const drawLine = () => {    
    boxes.forEach((box,index)=>{
        let styleString = ''
        if(index<3){
            //最後要記得加分號
            styleString += `border-bottom: 3px solid var(--primaryColor);`
        }
        if(index>5){
            styleString += `border-top: 3px solid var(--primaryColor);`
        }
        if(index%3 === 0){
            styleString += `border-right: 3px solid var(--primaryColor);`
        }
        if(index%3 === 2){
            styleString += `border-left: 3px solid var(--primaryColor);`
        }
        box.style = styleString
        //對每一個box加入事件監聽
        box.addEventListener('click', boxDrawing)
    })
}

//每一格被點的時候會被觸發
const boxDrawing = (e) =>{
    //測試
    // console.log('test');
    const id = e.target.id
    //在一開始有將space裡面都設定為null，所以!space[id] = true 會繼續執行
    if(!space[id]){
        space[id]= nowPlayer
        e.target.innerHTML = nowPlayer
        if(playerHasWon()){
            msg.innerText = `${nowPlayer} 贏了!好棒棒!`
            return
        }
        //還缺剩下和局的情況沒做
        //如果現在是O則nowPlayer就變為X，反之
        nowPlayer = nowPlayer === o_text ? x_text: o_text
    }
}

//找出獲勝的情況
const playerHasWon = () =>{
    //設定左上已畫時玩家的勝利情況
    if(space[0]===nowPlayer){
        if(space[1]===nowPlayer && space[2]===nowPlayer){
            //告訴上一個函式的條件為true
            return true;
        }
        if(space[4]===nowPlayer && space[8]===nowPlayer){
            return true;
        }
        if(space[3]===nowPlayer && space[6]===nowPlayer){
            return true;
        }
    }
    //設定右下已畫時玩家的勝利情況
    if(space[8]===nowPlayer){
        if(space[2]===nowPlayer && space[5]===nowPlayer){
            return true;
        }
        if(space[0]===nowPlayer && space[4]===nowPlayer){
            return true;
        }
        if(space[6]===nowPlayer && space[7]===nowPlayer){
            return true;
        }
    }
    //設定十字線以及對角線的勝利情況
    if(space[4]===nowPlayer){
        if(space[1]===nowPlayer && space[7]===nowPlayer){
            return true;
        }
        if(space[3]===nowPlayer && space[5]===nowPlayer){
            return true;
        }
        if(space[0]===nowPlayer && space[8]===nowPlayer){
            return true;
        }
        if(space[2]===nowPlayer && space[6]===nowPlayer){
            return true;
        }
    }
    //還缺剩下和局的情況
}

//重新開始的函式
const gameRestart = ()=>{
    //改上方文字
    msg.innerText = "Let's play OOXX !"
    //將每一格子的內容設為空值
    boxes.forEach((box)=>{
        box.innerHTML=''
    })
    //將陣列全部重設為null
    for(let i=0;i<space.length;i++)  {
        space[i] = null
    }
    //設定先手的是O 
    nowPlayer = o_text
}

restartBtn.addEventListener('click',gameRestart)

//讓畫面一開始就呼叫函式重設，然後畫出九宮格的線條
gameRestart()
drawLine()

