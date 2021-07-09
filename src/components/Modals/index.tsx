import { Modal, Container } from "./style";

import deleteImg from '../../assets/images/delete.svg'; 
import disableImg from '../../assets/images/disable.svg'; 
import { ReactNode, useState } from "react";
import { useEffect } from "react";

type DeleteQuestionModalProps = ReactNode & {
  isOpen: boolean;
  children: ReactNode;
}

export function DeleteQuestionModal({isOpen, children}: DeleteQuestionModalProps) {
  const [isModalOpen, setIsModalOpen] = useState(isOpen);

  useEffect(() => {
    setIsModalOpen(isOpen);
  }, [isOpen])

  return (
    <Container isOpen={isModalOpen}>
      <Modal>
        <img src={deleteImg} alt="Trash bin icon" />
        <span>Excluir pergunta</span>
        <p>Tem certeza que você deseja excluir esta pergunta?</p>

        <div className="buttonsContainer">
          {children}
        </div>
      </Modal>
    </Container>
  );  
}

export function EndRoomModal({isOpen, children}: DeleteQuestionModalProps) {
  const [isModalOpen, setIsModalOpen] = useState(isOpen);

  useEffect(() => {
    setIsModalOpen(isOpen);
  }, [isOpen])

  return (
    <Container isOpen={isModalOpen}>
      <Modal>
        <img src={disableImg} alt="Encerrar sala" />
        <span>Encerrar Sala</span>
        <p>Tem certeza que você deseja encerrar esta sala?</p>

        <div className="buttonsContainer">
          {children}
        </div>
      </Modal>
    </Container>
  );
}