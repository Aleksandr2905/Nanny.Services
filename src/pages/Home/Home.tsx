import { FC } from "react"
import { Header } from "../../components/Header/Header"
import { Btn, Container, IconArrow, Text, Title, TitleWrap, Wrapper } from "./Home.styled"
import sprite from "../../assets/icons/sprite.svg"
import { useNavigate } from "react-router-dom"

export const Home: FC = () => {
  const navigate = useNavigate();
  return (
    <Container  >
      <Wrapper>
        <Header $backgroundColor="transparent" />
        <TitleWrap>
          <Title>Make Life Easier for the Family:</Title>
          <Text>Find Babysitters Online for All Occasions</Text>
          <Btn type="button" onClick={() => navigate('nannies')}>
            Get started
            <IconArrow width={18} height={18}>
              <use href={`${sprite}#icon-Arrow-up`} />
            </IconArrow>
          </Btn>
        </TitleWrap>
      </Wrapper>
    </Container>
  )
}
