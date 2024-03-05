import { LoginBtn, RegistrationBtn, Wrapper } from "./AuthMenu.styled"

export const AuthMenu = () => {
    return (
        <Wrapper>
            <LoginBtn type="button">Log In</LoginBtn>
            <RegistrationBtn type="button">Registration</RegistrationBtn>
        </Wrapper>
    )
}
