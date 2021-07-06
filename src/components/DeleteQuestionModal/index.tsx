import { Modal, Container } from "./style";

import trashImg from '../../assets/images/delete.svg'; 
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
        <img src={trashImg} alt="Trash bin icon" />
        <span>Excluir pergunta</span>
        <p>Tem certeza que você deseja excluir esta pergunta?</p>

        <div className="buttonsContainer">
          {children}
        </div>
      </Modal>
    </Container>
  );  
}