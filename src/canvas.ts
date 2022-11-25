import { CANVAS_HEIGHT, CANVAS_WIDTH } from "./data"
import { Entitty, ScoreBoard, userData } from "./interfaces"

export const canvas:HTMLCanvasElement = document.querySelector("#canvas") as HTMLCanvasElement
canvas.height = CANVAS_HEIGHT
canvas.width = CANVAS_WIDTH
export const contex = canvas.getContext("2d") as CanvasRenderingContext2D

// The size of the emoji is set with the font
contex.font = '60px serif'
// use these alignment properties for "better" positioning
contex.textBaseline = "middle"; 
// draw the emoji
export const clear = ()=>contex.clearRect(0, 0, canvas.width, canvas.height);

export const draw = (e:Entitty)=>{
  if(e.char === '💀') return
  contex.fillText(e.char, e.x - 5,e. y)
  
}
export const drawScore=(scores: ScoreBoard)=>{
  let y= 60
  Object.entries(scores).forEach(([k,v])=>{
    if(userData.bet == k){
      contex.strokeRect(20,y-40,70,70)
    }
    contex.fillText(`${k}:${v}`, 20,y)
    y+=90
  })
}
export const drawTimer=(t:number)=>{
  contex.fillText(`${t}s`, CANVAS_WIDTH/2,CANVAS_HEIGHT/2)
  contex.fillText(`Starting in...`, CANVAS_WIDTH/2,CANVAS_HEIGHT/2-100)
}

export const drawWinner=(winner: string)=>{
  contex.fillText(`🥳 YAY! ${winner} WON 🥳`, 500,CANVAS_HEIGHT -100)
}
export const drawBoard=(board: Entitty[])=>{
    board.forEach((e)=>{
      // scene.scoreBoard[e.char]+=1
      draw(e)
    })
  }
  