// Quiz Answer Checker
function checkAnswer(answer, subject) {
  const resultId = subject + "-result";
  const result = document.getElementById(resultId);

  let feedback = "❌ Incorrect. Try again!";

  if (subject === "bio" && answer === "Chloroplast") {
    feedback = "✅ Correct! Chloroplasts perform photosynthesis.";
  } else if (subject === "chem" && answer === "7") {
    feedback = "✅ Correct! Neutral solutions have pH 7.";
  } else if (subject === "phys" && answer === "Newton’s Third Law") {
    feedback = "✅ Correct! Newton’s Third Law explains action-reaction.";
  } else if (subject === "earth" && answer === "Plate Tectonics") {
    feedback = "✅ Correct! Earthquakes are caused by tectonic plate movement.";
  }

  if (result) {
    result.innerHTML = feedback;
    result.style.fontWeight = "bold";
  } else {
    console.warn("Result element not found for subject:", subject);
  }
}

// Experiment Starter
function startExperiment(name) {
  const expContainer = document.getElementById("experiment");

  const message = `
    <div style="background:#f0f8ff; padding:15px; border-radius:8px; margin-top:10px;">
      <h3>🔬 Experiment Started: ${name}</h3>
      <p>Detailed steps and simulation for <strong>${name}</strong> will be displayed here.</p>
    </div>
  `;

  if (expContainer) {
    expContainer.innerHTML = message;
  } else {
    alert("Starting experiment: " + name + "\nDetailed steps will be displayed here.");
  }
        }
