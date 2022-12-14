import { BASE_SCORE_BOARD} from "./data"
export const chars = ["๐ฟ", "๐งป","โ๏ธ"] as const

export const charIndex = {
  "๐ฟ":0,
  "๐งป":1,
  "โ๏ธ":2
}
export type Entitty = [0|1|2|3, number, number, number]
// {
//     x: number,
//     y: number,
//     direction: number
//     char: (typeof chars[number]) | "๐"
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
  "๐ฟ": number
  "๐งป":number
  "โ๏ธ": number
  "๐": number
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
