import { clear, drawBoard, drawScore, drawTimer, drawWinner } from "./canvas"
import {  scene } from "./interfaces"

export const animate = () => {
  clear()
  // drawBoard(board)
  // moveBoard()
  drawBoard(scene.board)
  if (scene.type == 'message') {
    if(scene.winner){
      drawWinner(scene.winner)
    }
    drawTimer(scene.timer)
  }
  drawScore(scene.scoreBoard)
  requestAnimationFrame(animate)
}