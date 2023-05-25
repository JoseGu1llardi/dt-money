import { ReactNode, createContext, useEffect, useState } from "react";

interface TransactionType {
    id: number;
    description: string;
    type: 'income' | 'outcome';
    price: number;
    category: string;
    createdAt: string;
}

interface TransactionContextType {
    transactions: TransactionType[];
}

interface TransactionsProviderProps {
    children: ReactNode;
}

export const TransactionsContext = createContext({} as TransactionContextType);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
    const [transactions, setTransactions] = useState<TransactionType[]>([]);

    async function loadTransaction() {
        const response = await fetch('http://localhost:3000/transactions');
        const data = await response.json();

        setTransactions(data);
    }

    useEffect(() => {
        loadTransaction()
    }, []);

    return (
        <TransactionsContext.Provider value={{ transactions }}>
            {children}
        </TransactionsContext.Provider>
    )
}