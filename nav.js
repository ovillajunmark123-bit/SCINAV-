const data = {
  "Onion Cells": "Learn how organelles like the nucleus, mitochondria, and chloroplasts keep cells alive and functioning.",
  "DNA Extraction": "Simple lab activity showing how genetic material can be isolated from fruits.",
  "Photosynthesis": "Understand how plants convert sunlight into energy, producing oxygen as a by‑product.",
  "Plant Growth Light": "Explore how light, water, and soil nutrients affect plant development.",
  "Catalase Enzyme": "Discover how enzymes speed up chemical reactions in living organisms.",
  "Osmosis Potato": "Observe how water moves across membranes, affecting cell size and shape.",
  "Bacterial Growth": "Learn how bacteria multiply under different conditions on agar plates.",
  "Pulse Rate": "Measure how exercise changes cardiovascular activity.",
  "Yeast Fermentation": "See how yeast produces carbon dioxide and alcohol during sugar breakdown.",
  "Transpiration": "Investigate how plants lose water through leaves using a potometer.",
  "pH Enzyme": "Test how acidity or alkalinity influences enzyme efficiency.",
  "Seed Germination": "Compare how seeds sprout under varying light, moisture, and temperature.",
  "Blood Typing": "Practice identifying blood groups using antigen‑antibody reactions.",
  "Titration": "Neutralize acids with bases using indicators.",
  "Electrolysis": "Observe hydrogen and oxygen gas production from splitting water molecules.",
  "Reaction Rate": "Test how temperature affects the speed of chemical reactions.",
  "Chromatography": "Separate pigments to reveal hidden colors in pen ink.",
  "Flame Test": "Identify metals by the colors they produce in flames.",
  "Liquid Density": "Compare how oil, water, and syrup layer due to density differences.",
  "Vinegar Baking Soda": "Classic experiment showing CO₂ gas release.",
  "Rust Formation": "Study how iron corrodes faster in saltwater than freshwater.",
  "Slime Polymer": "Mix glue and borax to create stretchy slime.",
  "Thermal Reaction": "Measure temperature changes in chemical reactions.",
  "Water Hardness": "Compare soap lather formation in hard vs. soft water.",
  "Crystal Growth": "Watch salt crystals form as water evaporates.",
  "pH Household": "Use indicators to measure acidity and alkalinity of household substances.",
  "Pendulum Motion": "Measure how string length affects swing period.",
  "Projectile Motion": "Track ball trajectories at different launch angles.",
  "Balloon Rocket": "Demonstrate action‑reaction with balloon rockets.",
  "Friction Test": "Compare sliding distances on smooth vs. rough surfaces.",
  "Egg Buoyancy": "Show how saltwater makes eggs float.",
  "Sound Resonance": "Explore pitch changes in tubes of different lengths.",
  "Magnet Strength": "Test how many paperclips magnets can hold.",
  "Circuit Building": "Light a bulb using batteries and wires.",
  "Solar Panel": "Measure voltage from mini solar panels in sunlight vs. shade.",
  "Heat Transfer": "Compare conduction rates in different metals.",
  "Light Reflection": "Measure angles of incidence and reflection.",
  "Rubber Elasticity": "Measure force needed to stretch bands.",
  "Projectile Range": "Launch balls at different angles and measure distances.",
  "Volcano Model": "Simulate eruptions with baking soda and vinegar.",
  "Earthquake Simulation": "Shake sand trays with blocks to mimic quakes.",
  "Water Filtration": "Build filters with sand, gravel, and charcoal.",
  "Wind Erosion": "Blow air over soil samples to see erosion.",
  "Rainfall Runoff": "Test slope effects on water flow.",
  "Rock Weathering": "Observe limestone reacting with vinegar.",
  "Ocean Currents": "Demonstrate density‑driven flow with saltwater.",
  "Greenhouse Effect": "Compare temperatures in covered vs. uncovered jars.",
  "Cloud Bottle": "Create clouds in a bottle with pressure changes.",
  "Soil Permeability": "Measure water absorption in different soils.",
  "Tsunami Tank": "Observe wave impacts in a tank.",
  "Carbon Cycle": "Show CO₂ absorption with limewater.",
  "Solar Oven": "Cook food using foil and sunlight.",
  "Water Cycle Bag": "Demonstrate condensation and precipitation in a bag.",
  "Earth Layers": "Build clay or gelatin models of crust, mantle, core.",
  "Paleontology Dig": "Excavate “fossils” from sand."
};

document.getElementById("searchBox").addEventListener("keyup", function() {
  const query = this.value.toLowerCase();
  const output = document.getElementById("searchOutput");
  output.innerHTML = "";

  if (query.length > 0) {
    for (const [key, explanation] of Object.entries(data)) {
      if (key.toLowerCase().includes(query)) {
        output.innerHTML += `<div class="result-card"><h3>${key}</h3><p>${explanation}</p></div>`;
      }
    }
    if (output.innerHTML === "") {
      output.innerHTML = "<p>No results found.</p>";
    }
  }
});
