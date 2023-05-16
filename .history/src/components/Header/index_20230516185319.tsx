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
                    <NewTransactionButton>
                        New transaction
                    </NewTransactionButton>
                </Dialog.Root>
            </HeaderContent>
        </HeaderContainer>
    )
}