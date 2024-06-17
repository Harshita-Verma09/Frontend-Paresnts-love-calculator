 function calculate() { // Fixed the typo here
    let name1 = document.getElementById("name1").value.trim();
    let name2 = document.getElementById("name2").value.trim();

    if (name1 === "" || name2 === "") {
        alert("Please enter the names");
    } else {
        const lPercentage = Math.floor(Math.random() * 100);
        const result = document.getElementById("result");

        result.innerHTML = `${name1} and ${name2} is Love Percentage: ${lPercentage} %`;

        if (lPercentage < 30) {
            result.innerHTML += '<br> Not a Great Match';
        } else if (lPercentage >= 30 && lPercentage < 70) {
            result.innerHTML += '<br> There is potential. Give it a try';
        } else {
            result.innerHTML += '<br> Great Match! Love is in the Air';
        }
    }
    
}

