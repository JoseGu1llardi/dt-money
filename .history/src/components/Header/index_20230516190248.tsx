import * as Dialog from '@radix-ui/react-dialog';

import {
    HeaderContainer,
    HeaderContent,
    NewTransactionButton
} from "./styles";

import logoImg from "../../assets/Logo (1).svg";

export function Header() {
    return (
        <HeaderContainer>
            <HeaderContent>
                <img src={logoImg} alt="" />

                <Dialog.Root>
                    <Dialog.Trigger asChild>
                        <NewTransactionButton>
                            New transaction
                        </NewTransactionButton>
                    </Dialog.Trigger>

                    <Dialog.Portal>
                        <Dialog.Overlay />

                        <Dialog.Content>
                            <Dialog.Title>New transaction</Dialog.Title>
                        </Dialog.Content>
                    </Dialog.Portal>
                </Dialog.Root>

            </HeaderContent>
        </HeaderContainer>
    )
}