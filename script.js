function checkAnswer(answer) {
  let result = document.getElementById("result");
  if (answer === "Mitochondria") {
    result.innerHTML = "✅ Correct! The mitochondria is the powerhouse of the cell.";
  } else {
    result.innerHTML = "❌ Incorrect. Try again!";
  }
}

function startExperiment() {
  let exp = document.getElementById("experiment");
  exp.innerHTML = "<p>🔥 Heating water... Steam rising... Energy transformation in action!</p>";
}
