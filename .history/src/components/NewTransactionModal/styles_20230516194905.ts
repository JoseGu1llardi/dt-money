import * as Dialog from '@radix-ui/react-dialog';

import { styled } from "styled-components";

export const OverLay = styled(Dialog.Overlay)`
    position: fixed;
    width: 100vw;
    height: 100vh;
    inset: 0;
    background: rgba(0, 0, 0, 0.75);
`;

export const Content = styled(Dialog.Content)`
    min-width: 32rem;
    border-radius: 6px;
    padding: 2.5rem 3rem;
    background: ${({ theme }) => theme['gray-800']};
    
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    
    form {
        margin-top: 2rem;
        
        display: flex;
        flex-direction: column;
        gap: 1rem;
        
        input {
            border-radius: 6px;
            border: 0;
            background: ${({ theme }) => theme['gray-900']};
            color: ${({ theme }) => theme['gray-300']};
            padding: 1rem;
        }
    }
`;