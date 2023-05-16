import { styled } from "styled-components";


export const SearchFormContainer = styled.form`
    display: flex;
    gap: 1rem;
    
    input {
        flex: 1;
        border-radius: 6px;
        border: 0;
        background: ${({ theme }) => theme["gray-900"]};
    }
`;