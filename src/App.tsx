import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import { useState } from "react";
import { NewTransactionModal } from "./components/NewTransactionModal";


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
      <NewTransactionModal 
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloeseNewTransctionModal}
        />
      <GlobalStyle />
    </div>
  );
}

export default App;
