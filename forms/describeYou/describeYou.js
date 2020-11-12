rndBtn.onclick = function() {
let userSelection = $("input[name=rbnPersonality]:checked").prop("value")
lbl1.value = 'I would agree that you are a ${userSelection} person too!`
}

BtnNxt.onclick=function(){
ChangeForm(favExercise)

}




