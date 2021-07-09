let result = document.getElementById("result")
writeDisplay()
delKey()
reset()
calc()

function writeDisplay() {//Show user clicked keys on display
    let key = document.getElementsByClassName("num")

    for (let i = 0; i < key.length; i++) {
        key[i].addEventListener('click', () => {
            result.innerText = result.innerText + event.target.innerText
            
        })
        
    }  
}

function delKey() {//delete the last string from display
    let delBtn = document.getElementById("keyDel")

    delBtn.addEventListener('click', () => {
        result.innerText = result.innerText.slice(0, -1);
    })
}

function reset(){//reset the display
    let resetBtn = document.getElementById("keyReset")
    resetBtn.addEventListener('click', ()=>{
        result.innerText = ""
    })
}

function calc(){//calculate the user expression
    let keyEqual = document.getElementById("keyEqual")
    keyEqual.addEventListener('click', ()=>{
        newNumber = result.innerText
        result.innerText = eval(newNumber)
    })
}