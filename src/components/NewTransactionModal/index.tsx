import { FormEvent, useContext, useState } from "react";
import Modal from "react-modal";
import closeImg from "../../assets/close.svg";
import icomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import { TransactionsContext } from "../../TransactionsContext";

import { Container, RadioBox, TransactionTypeContainer } from "./styled";

interface INewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: INewTransactionModalProps) {
  const { createTransaction } = useContext(TransactionsContext);

  const[type, setType] = useState('deposit');
  const[title, setTitle] = useState('');
  const[amount, setAmount] = useState(0);
  const[category, setCategory] = useState('');


  function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();
    createTransaction({title, amount, category, type})
  }
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
      ariaHideApp={false}
    >
      <button 
        type="button" 
        onClick={onRequestClose} 
        className="react-modal-close">
        <img src={closeImg} alt="Fechar modal" />
      </button>

      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastra transação</h2>
        <input type="text" placeholder="Título" value={title} onChange={event => setTitle(event.target.value)}/>
        <input type="number" placeholder="Valor" value={amount} onChange={event => setAmount(Number(event.target.value))}/>
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
