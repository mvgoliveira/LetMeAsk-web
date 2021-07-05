import copyImg from '../../assets/images/copy.svg'; 
import {ButtonRoomCode} from './styles'

type RoomCodeProps = {
  code: string;
}

export function RoomCode(props: RoomCodeProps) {
  
  function copyRoomCodeToClipBoard() {
    navigator.clipboard.writeText(props.code);
    document.getElementById('Room-Code')!.innerHTML = "Copiado!"
    document.getElementById('Room-Code')!.style.color = "#835AFD"
    setTimeout(() => {
      document.getElementById('Room-Code')!.innerHTML = `Sala #${props.code}`
      document.getElementById('Room-Code')!.style.color = "#000"
    }, 1000);
    
  }

  return (
    <ButtonRoomCode onClick={copyRoomCodeToClipBoard}>
      <div>
        <img src={copyImg} alt="Copy room code" />
      </div>
      <span id="Room-Code"> Sala #{props.code} </span>
    </ButtonRoomCode>
  )
}