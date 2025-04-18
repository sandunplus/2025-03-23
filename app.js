let value = Math.floor((Math.random()*10)+1);
console.log(value);
let count =3;

function onButtonClicked()
{
    let userValue = parseInt(document.getElementById("textInput").value);
    let newMassage;
    count--;
    if(count ==0)
        alert("Game Over, correct value is:"+value);
    else if(userValue>value)
        document.getElementById("massage").innerText = "Your value is too much, attempts left:"+count;
    else if(userValue<value)
        document.getElementById("massage").innerText = "Your value is too low, attempts left:"+count;
    else if(userValue==value)
        document.getElementById("massage").innerText = "Your value is correct";
}
