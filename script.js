// set the target date for the countdown (new year eve 2025)

const countdownDate = new Date("December 31, 2025 23:59:59").getTime();

// Set an interval to update the countdown every 1 second ( 1000 ms)

const timer = setInterval(() => {
  // Get the current date and time
  const now = new Date().getTime();

  // Calculate the remaining time in milliseconds
  const distance = countdownDate - now;

  // Convert remaining time into days
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));

  // Convert remaining time into hours ( excluding days )
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

  // Convert remaining time into minutes ( excluding hours )
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

  // Convert remmaining time into seconds ( excluding minutes)
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Update the HTML elements with the calculated values ( and pad with "0" if needed)
  document.getElementById("Days").innerText = days.toString().padStart(2, "0");
  document.getElementById("Hours").innerText = hours.toString().padStart(2, "0");
  document.getElementById("Minutes").innerText = minutes.toString().padStart(2, "0");
  document.getElementById("Seconds").innerText = seconds.toString().padStart(2, "0");

  // If the countdown is complete ( Time is Up )
  if (distance < 0) {
    //Stop the timer
    clearInterval(timer);

    // Replace the timer with a celebration message
    document.querySelector(".timer").innerHTML = "<h2> 🎉 Happy New Year 2026 🎉</h2>";
  }
}, 1000);  // Run this every 1000 milliseconds ( 1 second )
