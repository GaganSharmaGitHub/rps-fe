import { chars, scene } from "./interfaces"

export const refreshBetBoard = ()=>{
    const ele =document.getElementById("bets-list")
    if(ele){
        let li = '<table>'
        scene.bets.forEach((e)=>{
            li+=`<tr> <td>${e.isWinner ? "👑 ":"🎩 "}</td><td> ${e.userId}</td><td>${chars[e.bet]}</td></tr>`
        })
        ele.innerHTML = li +'</table>'
    }
}