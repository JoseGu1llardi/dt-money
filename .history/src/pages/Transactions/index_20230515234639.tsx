import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { TransactionsContainer } from "./styles";


export function Transactions() {
    return (
        <>
            <Header />
            <Summary />

            <TransactionsContainer>
                <table>
                    <tbody>
                        <tr>
                            <td width="50%">website development</td>
                            <td>$ 12.000,00</td>
                            <td>Sale</td>
                            <td>13/04/2022</td>
                        </tr>
                        <tr>
                            <td width="50%">Meet</td>
                            <td>-$ 35,00</td>
                            <td>Alimentation</td>
                            <td>13/04/2022</td>
                        </tr>
                    </tbody>
                </table>
            </TransactionsContainer>
        </>
    )
}