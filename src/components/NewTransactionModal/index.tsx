import Modal from "react-modal";
import closeImg from "../../assets/close.svg";
import icomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';

import { Container, TransactionTypeContainer } from "./styled";

interface INewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: INewTransactionModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button 
        type="button" 
        onClick={onRequestClose} 
        className="react-modal-close">
        <img src={closeImg} alt="Fechar modal" />
      </button>

      <Container>
        <h2>Cadastra transação</h2>
        <input type="text" placeholder="Título" />
        <input type="number" placeholder="Valor" />
        <TransactionTypeContainer>
          <button type="button">
            <img src={icomeImg} alt="Entrada"/>
            <span>Entrada</span>
          </button>
          <button type="button">
            <img src={outcomeImg} alt="Saída"/>
            <span>Saída</span>
          </button>
        </TransactionTypeContainer>
        <input type="Categoria" />
        <button type="submit">Cadastra</button>
      </Container>
    </Modal>
  );
}
