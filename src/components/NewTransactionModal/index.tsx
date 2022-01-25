import { FormEvent, useState } from "react";
import Modal from "react-modal";
import closeImg from "../../assets/close.svg";
import icomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import { api } from "../../services/api";

import { Container, RadioBox, TransactionTypeContainer } from "./styled";

interface INewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: INewTransactionModalProps) {

  const[type, setType] = useState('deposit');
  const[title, setTitle] = useState('');
  const[value, setValue] = useState(0);
  const[category, setCategory] = useState('');


  function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();
    const data = { type, title, value, category};
    api.post('/transactions', data);
  }
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

      <Container onClick={handleCreateNewTransaction}>
        <h2>Cadastra transação</h2>
        <input type="text" placeholder="Título" value={title} onChange={event => setTitle(event.target.value)}/>
        <input type="number" placeholder="Valor" value={value} onChange={event => setValue(Number(event.target.value))}/>
        <TransactionTypeContainer>
          <RadioBox 
            type="button" 
            onClick={() => setType('deposit')}
            isActive={type === 'deposit'}
            octiveColor="green"
            >

            <img src={icomeImg} alt="Entrada"/>
            <span>Entrada</span>
          </RadioBox>
          <RadioBox 
            type="button" 
            onClick={() => setType('withdraw')}
            isActive={type === 'withdraw'}
            octiveColor="red"
            >
            <img src={outcomeImg} alt="Saída"/>
            <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>
        <input type="Categoria" placeholder="Categoriad" value={category} onChange={event => setCategory(event.target.value)}/>
        <button type="submit">Cadastra</button>
      </Container>
    </Modal>
  );
}
