import { useTheme } from "styled-components";

import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";

import { SummaryCard, SummaryContainer } from "./styles";

export function Summary() {
    const theme = useTheme();

    return (
        <SummaryContainer>
            <SummaryCard>
                <header>
                    <span>Incoming</span>
                    <ArrowCircleUp size={32} color={theme?.["green-300"]} />
                </header>

                <strong>$ 17.400,00</strong>
            </SummaryCard>

            <SummaryCard>
                <header>
                    <span>Outgoing</span>
                    <ArrowCircleDown size={32} color={theme?.["red-300"]} />
                </header>

                <strong>$ 17.400,00</strong>
            </SummaryCard>

            <SummaryCard variant="green">
                <header>
                    <span>Total</span>
                    <CurrencyDollar size={32} color={theme?.white} />
                </header>

                <strong>$ 17.400,00</strong>
            </SummaryCard>
        </SummaryContainer>
    )
}