import * as Dialog from '@radix-ui/react-dialog';

import { OverLay } from './styles';

export function NewTransactionModal() {
    return (
        <Dialog.Portal>
            <OverLay />

            <Dialog.Content>
                <Dialog.Title>New transaction</Dialog.Title>

                <Dialog.Close />
            </Dialog.Content>
        </Dialog.Portal>
    )
}