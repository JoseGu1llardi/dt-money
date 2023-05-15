import { HeaderContainer, HeaderContent } from "./styles";

import logoImg from "../../assets/Logo (1).svg";

export function Header() {
    return (
        <HeaderContainer>
            <HeaderContent>
                <img src={logoImg} alt="" />
                <button>New transaction</button>
            </HeaderContent>
        </HeaderContainer>
    )
}