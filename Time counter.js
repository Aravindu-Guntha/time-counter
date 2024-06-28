let hoursInput = document.getElementById("hoursInput");
let minutesInput = document.getElementById("minutesInput");
let convertBtnEl = document.getElementById("convertBtn");
let errorMsg = document.getElementById("errorMsg");
let b = document.getElementById("a");
let p = document.createElement("p");
p.id = "timeInSeconds";

b.appendChild(p);
convertBtnEl.addEventListener("click", function() {
    let h = parseInt(hoursInput.value);
    let m = parseInt(minutesInput.value);
    if (hoursInput.value === "") {
        p.textContent = "";
        errorMsg.textContent = "Please Enter a Valid number of Hours";
    } else if (minutesInput.value === "") {
        p.textContent = "";
        errorMsg.textContent = "Please Enter a Valid number of Minutes";
    } else {
        p.classList.add("time");
        errorMsg.textContent = "";
        let seconds = h * 3600 + m * 60 + "s";
        p.textContent = seconds;
    }
});