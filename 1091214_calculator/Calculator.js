const input = document.querySelector('input')

/*當input裡面為0的時候就將e.innerText設為input.value
若是不為0時(已有數字)則字串相加，不會讓0在第一位出現*/
document.querySelectorAll('.NumKey').forEach(
    (e)=>{
        e.onclick=()=> input.value = 
        input.value!== '0'?
        input.value+e.innerText:
        e.innerText
    }
)


//建立一個存放數字的陣列
const numArray = []


const opCallback = opName =>()=>{
    //將目前的值轉為數字型態
    let currentValue = parseFloat(input.value);

    //如果opCallback是percent的話，就將值設定為乘以0.01然後設定回目前的值
    if(opName === 'percent'){
        currentValue *= 0.01;
        input.value = currentValue;
    }
    else{
        if(numArray && numArray.length){
            numArray.push({value:currentValue})

            const result = evaluate(numArray)

            numArray.push({value:result})
            numArray.push({value:opName})
            
            input.value=""
        }
        else{
            numArray.push({value:currentValue})
            numArray.push({value:opName})

            input.value=""
        }
    }
}

const evaluate = numArray =>{
    const  secondOperand = numArray.pop().value;
    const  operator = numArray.pop().value;
    const  firstOperand = numArray.pop().value;

    switch(operator){
        case "add" :
            return firstOperand+secondOperand;
            break;
        case "subtract" :
            return firstOperand-secondOperand;
            break;
        case "multiply" :
            return firstOperand*secondOperand;
            break;
        case "divide" :
            return firstOperand/secondOperand;
            break;
        default:
            return secondOperand
    }
}

for(const opName of ["add","subtract","multiply","divide","percent"]){
    document.querySelector(`.key[op=${opName}]`).onclick = opCallback(opName)
}

document.querySelector('.equalKey').onclick=()=>{
    if(numArray && numArray.length){
        numArray.push({value:parseFloat(input.value)});
        input.value = evaluate(numArray)
    }
}


document.querySelector('.clearKey').onclick=()=>{
    input.value=0;
    numArray.length=0;
}


document.querySelector('.key[op=negate]').onclick=()=>{
    input.value=-parseFloat(input.value);
}

