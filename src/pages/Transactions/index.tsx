import { useEffect, useState } from "react";

import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";

import { PriceHighlight, TransactionTable, TransactionsContainer } from "./styles";
import { formatMoney } from "../../utils/formatMoney";
import { convertDateFormat } from "../../utils/convertDateFormat";

interface TransactionType {
    id: number;
    description: string;
    type: 'income' | 'outcome';
    price: number;
    category: string;
    createdAt: string;
}

export function Transactions() {
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
        <>
            <Header />
            <Summary />

            <TransactionsContainer>
                <SearchForm />

                <TransactionTable>
                    <tbody>
                        {
                            transactions.map(transaction => (
                                <tr key={transaction.id}>
                                    <td width="50%">{transaction.description}</td>
                                    <td>
                                        <PriceHighlight variant={transaction.type}>
                                            {formatMoney(transaction.price)}
                                        </PriceHighlight>
                                    </td>
                                    <td>{transaction.category}</td>
                                    <td>{convertDateFormat(transaction.createdAt)}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </TransactionTable>
            </TransactionsContainer>
        </>
    )
}