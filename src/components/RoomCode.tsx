import copyImg from '../assets/images/copy.svg'; 
import {ButtonRoomCode} from '../styles/buttons'

type RoomCodeProps = {
  code: string;
}

export function RoomCode(props: RoomCodeProps) {
  
  function copyRoomCodeToClipBoard() {
    navigator.clipboard.writeText(props.code)
  }

  return (
    <ButtonRoomCode onClick={copyRoomCodeToClipBoard}>
      <div>
        <img src={copyImg} alt="Copy room code" />
      </div>
      <span> Sala #{props.code} </span>
    </ButtonRoomCode>
  )
}