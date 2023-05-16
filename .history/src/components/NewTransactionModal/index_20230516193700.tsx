import * as Dialog from '@radix-ui/react-dialog';

import { Content, OverLay } from './styles';

export function NewTransactionModal() {
    return (
        <Dialog.Portal>
            <OverLay />

            <Content>
                <Dialog.Title>New transaction</Dialog.Title>

                <form action="">
                    <input type="text" placeholder='Description' required />
                    <input type="number" placeholder='Price' required />
                    <input type="text" placeholder='Category' required />

                    <button type='submit'>Register</button>
                </form>

                <Dialog.Close />
            </Content>
        </Dialog.Portal>
    )
}