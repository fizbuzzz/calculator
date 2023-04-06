
document.addEventListener('DOMContentLoaded', () => {
    //vars 
    const calc = document.querySelector('.calc');
    let output = document.querySelector('.calc__elem.output');
    let currentOpetator = null;
    let currentResult = 0;
    calc.addEventListener('click', function(e) {
        const {target} = e;
        if (target.classList.contains('calc__elem')) {
            switch(target.innerHTML) {
                case '0':
                case '1':
                case '2':
                case '3':
                case '4':
                case '5':
                case '6':
                case '7':
                case '8':
                case '9':
                    setOutput(target.innerHTML)
                    break;
                case '+': 
                case '−':
                    // currentOpetator = target.innerHTML;
                    // setSecondNum(currentOpetator)
                case '×':
                case '÷':
                    currentOpetator = target.innerHTML;
                    setSecondNum(currentOpetator)
                    break;
                case '=':
                    if (output.innerHTML == '0') return
                    getResult()
                    break;
                case 'AC':
                    resetCalc()
                    break;
                case '←':
                    cutStr()
                    break;
                    
            }

        }
    })
    
    function setOutput (num) {
        
        if (output.innerHTML == '0') {
            output.innerHTML = num
        }
        else {
            output.innerHTML += num
        }

    }

    function setSecondNum (currentOpetator) {

        if (output.innerHTML == '0') {
            output.innerHTML = output.innerHTML + currentOpetator
        } else if (output.innerHTML.split(currentOpetator).length === 3) {
            console.log(1+5)
        }  else if (['+', '−', '=', '×', '÷'].includes(output.innerHTML.split('')[output.innerHTML.split('').length-1])) {
            let lastSymbol = output.innerHTML.split('')[output.innerHTML.split('').length-1];
            let newStr = output.innerHTML.slice(0, -1) + currentOpetator
            output.innerHTML = newStr
            // output.innerHTML = output.innerHTML + currentOpetator
            // console.log(output.innerHTML.split(''))
            // output.innerHTML.split('')[]
            console.log(output.innerHTML.split('')[output.innerHTML.split('').length-1])
        } else  {
            output.innerHTML += currentOpetator
        }
        console.log(output.innerHTML.split(currentOpetator))
    
        

    }

    function getResult() {

        let str = output.innerHTML.split(',').join('');
        let first = output.innerHTML.split(currentOpetator)[0]
        let second = output.innerHTML.split(currentOpetator)[1]
        console.log(currentOpetator)
        if (str.includes('+') || str.includes('−') || str.includes('×')) {
            console.log( `${+first}${currentOpetator}${+second}`)
            output.innerHTML = `${first}${currentOpetator}${second}` 
        }
    }

    function resetCalc () {
        output.innerHTML = 0
    }

    function cutStr () {
        if (output.innerHTML == '0') {
            return
        } else if (output.innerHTML.length === 1 && output.innerHTML != 0) output.innerHTML = '00'
        output.innerHTML = output.innerHTML.slice(0, -1);
        
    }

})


