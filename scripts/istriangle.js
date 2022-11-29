const inputs = document.querySelectorAll(".angle-input");
const isTriangleBtn = document.querySelector('#is-triangle-btn');
const outputEl = document.querySelector("#output");

function calculateSumOfAngle(angle1,angle2,angle3){
    const sumOfAngle = angle1+angle2+angle3;
    return sumOfAngle;
}
function isTriangle(){
    const sumOfAngle = calculateSumOfAngle(Number(inputs[0].value), Number(inputs[1].value), Number(inputs[2].value));
    
    if(sumOfAngle ===180){
        outputEl.innerText = "Yay, the angles form a Triangle"
    }
    else{
        outputEl.innerText = "Ohhh! The angles doesn't form a Triangle"
    }
}
isTriangleBtn.addEventListener("click",isTriangle )