import * as Dialog from '@radix-ui/react-dialog';

import { Content, OverLay } from './styles';

export function NewTransactionModal() {
    return (
        <Dialog.Portal>
            <OverLay />

            <Content>
                <Dialog.Title>New transaction</Dialog.Title>

                <Dialog.Close />
            </Content>
        </Dialog.Portal>
    )
}