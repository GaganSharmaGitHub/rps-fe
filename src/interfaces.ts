import { BASE_SCORE_BOARD} from "./data"
export const chars = ["🗿", "🧻","✂️"] as const

export const charIndex = {
  "🗿":0,
  "🧻":1,
  "✂️":2
}
export type Entitty = [0|1|2|3, number, number, number]
// {
//     x: number,
//     y: number,
//     direction: number
//     char: (typeof chars[number]) | "💀"
//   }
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
  bet: number
  isWinner: boolean
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
  bet: 0,
  userId,
  isWinner: false
}
export let changeBet= (b:typeof chars[number]) =>{
  userData.bet = charIndex[b]
}
