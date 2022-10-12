const adviceId = document.getElementById("id");
const adviceContent = document.getElementById("advice");
const ADVICE_URL = "https://api.adviceslip.com/advice";

async function getAdvice() {
  const response = await fetch(ADVICE_URL);
  const json = await response.json();
  const id = json.slip.id;
  const advice = json.slip.advice;
  adviceId.innerText = id;
  adviceContent.innerText = advice;
}

window.onload = getAdvice;