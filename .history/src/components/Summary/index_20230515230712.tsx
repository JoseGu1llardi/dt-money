import { ArrowCircleUp } from "phosphor-react";
import { SummaryContainer } from "./styles";
import { useTheme } from "styled-components";

export function Summary() {
    const theme = useTheme();

    return (
        <SummaryContainer>
            <div>
                <header>
                    <span>Incoming</span>
                    <ArrowCircleUp size={32} color={ } />
                </header>
            </div>
        </SummaryContainer>
    )
}