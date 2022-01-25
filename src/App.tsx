import Modal from 'react-modal';
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import { createServer } from "miragejs";
import { useState } from "react";

createServer({
  routes() {
    this.namespace = "api";

    this.get("/transactions", () => {
      return [
        {
          id: 1,
          title: "Transaction 1",
          amount: 400,
          type: "deposit",
          category: "Food",
          createAt: new Date(),
        },
      ];
    });
  },
});
function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false);

  function handleOpenNewTransctionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloeseNewTransctionModal() {
    setIsNewTransactionModalOpen(false);
  }
  return (
    <div className="App">
      <Header onOpenNewTransactionModal={handleOpenNewTransctionModal}/>
      <Dashboard />
      <Modal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloeseNewTransctionModal}
      >
        <h1>Transação </h1>
      </Modal>
      <GlobalStyle />
    </div>
  );
}

export default App;
