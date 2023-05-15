import { styled } from "styled-components";


export const SummaryContainer = styled.section`
    width: 100%;
    max-width: 1120px;
    margin: 0 auto;
    padding: 0 1.25rem;
    
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(3, 1fr);
    
    margin-top: -5rem;
`;

export const SummaryCard = styled.div`
    padding: 2rem;
    border-radius: 6px;
    background: ${({ theme }) => theme["gray-600"]};
    
    header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: ${({ theme }) => theme["gray-300"]};
    }
    
    strong {
        display: block;
        margin-top: 1rem;
        font-size: 2rem;
    }
`;