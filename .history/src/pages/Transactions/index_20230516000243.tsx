import { Header } from "../../components/Header";

import { Summary } from "../../components/Summary";

import { PriceHighlight, TransactionTable, TransactionsContainer } from "./styles";

export function Transactions() {
    return (
        <>
            <Header />
            <Summary />

            <TransactionsContainer>
                <TransactionTable>
                    <tbody>
                        <tr>
                            <td width="50%">website development</td>
                            <td>
                                <PriceHighlight variant="income">
                                    $ 12.000,00
                                </PriceHighlight>
                            </td>
                            <td>Sale</td>
                            <td>13/04/2022</td>
                        </tr>
                        <tr>
                            <td width="50%">Meet</td>
                            <td>
                                <PriceHighlight>
                                    -$ 35,00
                                </PriceHighlight>
                            </td>
                            <td>Alimentation</td>
                            <td>13/04/2022</td>
                        </tr>
                    </tbody>
                </TransactionTable>
            </TransactionsContainer>
        </>
    )
}