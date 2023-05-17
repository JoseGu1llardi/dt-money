import * as Dialog from '@radix-ui/react-dialog';

import { ArrowCircleUp, X } from 'phosphor-react';

import {
    CloseButton,
    Content,
    OverLay,
    TransactionTypeButton,
    TransactionTypeContainer
} from './styles';

export function NewTransactionModal() {
    return (
        <Dialog.Portal>
            <OverLay />

            <Content>
                <Dialog.Title>New transaction</Dialog.Title>

                <CloseButton>
                    <X size={24} />
                </CloseButton>

                <form action="">
                    <input type="text" placeholder='Description' required />
                    <input type="number" placeholder='Price' required />
                    <input type="text" placeholder='Category' required />

                    <TransactionTypeContainer>
                        <TransactionTypeButton>
                            <ArrowCircleUp size={24} />
                            Income
                        </TransactionTypeButton>
                    </TransactionTypeContainer>

                    <button type='submit'>Register</button>
                </form>

            </Content>
        </Dialog.Portal>
    )
}