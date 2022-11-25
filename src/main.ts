import { animate } from './gameloop'
import { init } from './select'
import './style.css'
import { startSocket } from './websocket'


startSocket()
init()
requestAnimationFrame(animate)