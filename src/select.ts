import { chars, userData } from "./interfaces"
import { placeBet } from "./websocket"

export const init = () => {
  const allButtons = document.querySelectorAll(".bet_button")
  allButtons.forEach((e) => {
    e.addEventListener('click', () => {
      userData.bet =e.innerHTML.trim() as any
      placeBet()
    })
  })
}
export const buttonIds = {
  "🗿": "select_rock",
  "🧻": "select_paper",
  "✂️": "select_scissors"
}
export const selectThis = (k: typeof chars[number]) => {
  const allButtons = document.querySelectorAll(".bet_button")
  allButtons.forEach((el) => {
    el.classList.remove("selected")
  })
  document.getElementById(buttonIds[k])?.classList.add("selected")
  userData.bet = k
}