import { useContext } from "react";

import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";

import { PriceHighlight, TransactionTable, TransactionsContainer } from "./styles";
import { formatMoney } from "../../utils/formatMoney";
import { convertDateFormat } from "../../utils/convertDateFormat";
import { TransactionsContext } from "../../contexts/TransactionsContext";

export function Transactions() {
    const { transactions } = useContext(TransactionsContext);

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