import { scene, userData } from "./interfaces"

export const refreshBetBoard = ()=>{
    const ele =document.getElementById("bets-list")
    if(ele){
        let li = ''
        scene.bets.forEach((e)=>{
            li+=`<li class="${e.userId == userData.userId?"my":"other"}">${e.userId}:${e.bet}</li>`
        })
        ele.innerHTML = li
    }
}