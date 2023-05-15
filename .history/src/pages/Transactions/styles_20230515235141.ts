import { styled } from "styled-components";

export const TransactionsContainer = styled.main`
    width: 100%;
    max-width: 1120px;
    margin: 4rem auto 0;
    padding: 0 1.5rem;
`;

export const TransactionTable = styled.table`
    width: 100%;
    border-collapse: separate;
    border-spacing: 0 0.5rem;
    /* margin-top: 1.5rem; */
    
    td {
        padding: 1.25 2rem;
        background: ${({ theme }) => theme["gray-700"]};
    }
`;