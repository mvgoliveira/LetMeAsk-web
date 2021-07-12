import copyImg from '../../assets/images/copy.svg'; 
import { FiCheck } from 'react-icons/fi';

import {ButtonRoomCode} from './styles';
import { useEffect } from 'react';

type RoomCodeProps = {
  code: string;
}

export function RoomCode(props: RoomCodeProps) {
  useEffect(() => {
    document.getElementById('Room-Code')!.setAttribute('data-value', 'Código da sala');
  }, [])
  
  function copyRoomCodeToClipBoard() {
    navigator.clipboard.writeText(props.code);

    //style
    document.getElementById('Room-Code')!.innerHTML = "Copiado!"
    document.getElementById('Room-Code')!.setAttribute('data-value', 'Copiado!')
    document.getElementById('Room-Code')!.style.color = "var(--purple-white)"
    document.getElementById('copyIcon')!.style.display = "none"
    document.getElementById('CheckMarkIcon')!.style.display = "block"
    setTimeout(() => {
      document.getElementById('Room-Code')!.innerHTML = `Sala #${props.code}`
      document.getElementById('Room-Code')!.setAttribute('data-value', 'Código da sala')
      document.getElementById('Room-Code')!.style.color = "var(--text-100)"
      document.getElementById('copyIcon')!.style.display = "block"
      document.getElementById('CheckMarkIcon')!.style.display = "none"
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