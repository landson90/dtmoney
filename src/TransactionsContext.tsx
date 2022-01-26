import { createContext, useEffect, useState, ReactNode } from 'react';
import { api } from './services/api';

interface ITransaction {
    id: number,
    title: string,
    amount: number,
    type: string,
    category: string,
    createAt: string
}

interface ITransactionsProvider {
    children: ReactNode
}

type TransactionInput = Omit<ITransaction, 'id' | 'createAt'>

interface ITransactionsContextData {
    transactions: ITransaction[];
    createTransaction: (transaction: TransactionInput) => Promise<void>;
}

export const TransactionsContext = createContext<ITransactionsContextData>({} as ITransactionsContextData);

export function TransactionsProvider({children}: ITransactionsProvider) {
    const[transactions, setTransactions] = useState<ITransaction[]>([]);

    useEffect(() => {
        api.get("/transactions").then((response) => {
          
            setTransactions(response.data.transactions)
        });
      }, []);

    async  function createTransaction(transactionInput: TransactionInput) {
       const response = await  api.post('/transactions', {
           ...transactionInput,
           createAt: new Date(),
       });
       const { transaction } = response.data;
       setTransactions([...transactions, transaction]);
      }

      return(
       <TransactionsContext.Provider value={{ transactions, createTransaction}} >
            {children}
       </TransactionsContext.Provider>
      );
}