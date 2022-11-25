import { BASE_SCORE_BOARD} from "./data"
export const chars = ["🗿", "🧻","✂️"] as const


export interface Entitty{
    x: number,
    y: number,
    direction: number
    char: (typeof chars[number]) | "💀"
  }
export interface Scene{
  type: 'game' | 'message'
  timer: number
  board: Entitty[]
  winner: string
  scoreBoard:ScoreBoard
  setInterval?: any ,
  bets: User[]

}
export interface ScoreBoard{
  "🗿": number
  "🧻":number
  "✂️": number
  "💀": number
}

export interface User{
  userId: string
  bet: typeof chars[number]
}
export const scene:Scene={
type: 'message',
timer: 10,
board: [],
scoreBoard:BASE_SCORE_BOARD(),
winner:'',
bets: []
}

const urlParams = new URLSearchParams(window.location.search);
const userId = urlParams.get('user') || "Gagan";
export const userData: User = {
  bet: "🗿",
  userId,
}
export let changeBet= (b:typeof chars[number]) =>{
  userData.bet = b
}

console.log(userData)