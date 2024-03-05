import { FC } from "react"
import { Header } from "../../components/Header/Header"
import { Container, Wrapper } from "./Home.styled"
import { IHeaderBgColor } from "../../helpers/interface";


export const Home: FC<IHeaderBgColor> = () => {
  return (
    <Container  >
      <Wrapper>
        <Header $backgroundColor="transparent" />
        Home
      </Wrapper>
    </Container>
  )
}
