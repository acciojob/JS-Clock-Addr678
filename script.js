//your code here
function rotateClockHands() {
  // Get current time
  const currentTime = new Date();

  // Calculate the degrees for each clock hand
  const seconds = currentTime.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360) + 90;
  const minutes = currentTime.getMinutes();
  const minutesDegrees = ((minutes / 60) * 360) + 90;
  const hours = currentTime.getHours();
  const hoursDegrees = ((hours / 12) * 360) + 90;

  // Rotate each clock hand using CSS transform property
  const secondHand = document.querySelector('.second-hand');
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const minuteHand = document.querySelector('.min-hand');
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

  const hourHand = document.querySelector('.hour-hand');
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

// Update clock hands every second
setInterval(rotateClockHands, 1000);

