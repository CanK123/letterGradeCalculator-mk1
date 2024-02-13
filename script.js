const mt1Checkbox = document.getElementById("mt1");
const mt2Checkbox = document.getElementById("mt2");
const finalCheckbox = document.getElementById("final");
const QHCheckbox = document.getElementById("QH");
const mt1Weight = document.getElementById("mt1Weight");
const mt2Weight = document.getElementById("mt2Weight");
const finalWeight = document.getElementById("finalWeight");
const QHWeight = document.getElementById("QHWeight");
const mt1Grade = document.getElementById("mt1Grade");
const mt2Grade = document.getElementById("mt2Grade");
const finalGrade = document.getElementById("finalGrade");
const QHGrade = document.getElementById("QHGrade");
const submitButton = document.getElementById("Submit");

function calculate(){
    let mt1G = Number(mt1Grade.value);
    let mt1W = Number(mt1Weight.value);
    let mt2G = Number(mt2Grade.value);
    let mt2W = Number(mt2Weight.value);
    let finalG = Number(finalGrade.value);
    let finalW = Number(finalWeight.value);
    let QHG = Number(QHGrade.value);
    let QHW = Number(QHWeight.value);
    let total = 0;
    if(mt1Checkbox.checked){
        mt1G = (mt1W * mt1G)/100;
        total += mt1G;
    }
    if(mt2Checkbox.checked){
        mt2G = (mt2W * mt2G)/100;
        total += mt2G;
    }
    if(finalCheckbox.checked){
        finalG = (finalW * finalG)/100;
        total += finalG;
    }
    if(QHCheckbox.checked){
        QHG = (QHW * QHG)/100;
        total += QHG;
    }
    document.getElementById("weightedGrade").textContent = total.toPrecision(2);
    if (total >= 90) {
        document.getElementById("letterGrade").textContent = "AA";
    } else if (total >= 85) {
        document.getElementById("letterGrade").textContent = "BA";
    } else if (total >= 80) {
        document.getElementById("letterGrade").textContent = "BB";
    } else if (total >= 75) {
        document.getElementById("letterGrade").textContent = "CB";
    } else if (total >= 70) {
        document.getElementById("letterGrade").textContent = "CC";
    } else if (total >= 65) {
        document.getElementById("letterGrade").textContent = "DC";
    } else if (total >= 60) {
        document.getElementById("letterGrade").textContent = "DD";
    } else {
        document.getElementById("letterGrade").textContent = "FF";
    }
}