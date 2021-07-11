import copyImg from '../../assets/images/copy.svg'; 
import { FiCheck } from 'react-icons/fi';

import {ButtonRoomCode} from './styles';

type RoomCodeProps = {
  code: string;
}

export function RoomCode(props: RoomCodeProps) {
  
  function copyRoomCodeToClipBoard() {
    navigator.clipboard.writeText(props.code);

    //style
    document.getElementById('Room-Code')!.innerHTML = "Copiado!"
    document.getElementById('Room-Code')!.style.color = "var(--purple-white)"
    document.getElementById('copyIcon')!.style.height = "0"
    document.getElementById('copyIcon')!.style.width = "0"
    document.getElementById('CheckMarkIcon')!.style.height = "20px"
    document.getElementById('CheckMarkIcon')!.style.width = "20px"
    setTimeout(() => {
      document.getElementById('Room-Code')!.innerHTML = `Sala #${props.code}`
      document.getElementById('Room-Code')!.style.color = "var(--text-100)"
      document.getElementById('copyIcon')!.style.height = "20px"
      document.getElementById('copyIcon')!.style.width = "20px"
      document.getElementById('CheckMarkIcon')!.style.height = "0"
      document.getElementById('CheckMarkIcon')!.style.width = "0"
    }, 2000);
  }

  return (
    <ButtonRoomCode onClick={copyRoomCodeToClipBoard}>
      <div>
        <img id="copyIcon" src={copyImg} alt="Copy room code" />
        <FiCheck id="CheckMarkIcon" color="#fff"/>
      </div>
      <span id="Room-Code"> Sala #{props.code} </span>
    </ButtonRoomCode>
  )
}