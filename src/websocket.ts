import { io } from "socket.io-client";
import { refreshBetBoard } from "./betBoard";
import { BE_URL } from "./data";
import { scene, User, userData } from "./interfaces";
import { selectThis } from "./select";

export const socket = io(BE_URL);


export const placeBet = ()=>{
    console.log('placeBet')
    socket.emit('place-bet',userData)    
}
export const startSocket = ()=>{
    socket.on("connect", () => {
        console.log(`connect ${socket.id}`);
        placeBet()
    });
    socket.on("disconnect", () => {
        console.log(`disconnect`);
    });
    socket.on('scoreBoard',(e)=>{
        scene.scoreBoard = e
    })
    socket.on('type',(e)=>{
        scene.type = e
    })
    socket.on('board',(e)=>{
        scene.board = e
    })
    socket.on('timer',(e)=>{
        scene.timer = e
    })
    socket.on('winner',(e)=>{
        scene.winner = e
    })
    socket.on('bets',(e: User[])=>{
        console.log("bets")
        scene.bets = e
        e.forEach((u)=>{
            if(userData.userId === u.userId){
                userData.bet = u.bet
                userData.isWinner = u.isWinner
                selectThis(userData.bet)
            }
        })
        refreshBetBoard()
    })
    
}