import styled from 'styled-components';

export const Container = styled.div`
padding: 32px;
height: 100vh;
`;

export const Wrapper = styled.div`
height: 100%;
border-radius: 30px;
background-color: var(--background-color);
`;

export const TitleWrap = styled.div`
/* display: flex;
flex-direction: column; */
max-width: 517px;
/* margin: auto; */
`;

export const Title = styled.h1`
margin-bottom: 28px;
font-size: 70px;
font-weight: 500;
line-height: 1;
letter-spacing: -0.03em;
color: #fbfbfb;
`

export const Text = styled.p`
font-size: 28px;
font-weight: 400;
line-height: 1.07;
letter-spacing: -0.02em;
margin-bottom: 64px;
color: #fbfbfb;
`
export const Btn = styled.button`
display: flex;
justify-content: center;
align-items: center;
gap: 18px;
border: 1px solid rgba(251, 251, 251, 0.4);
border-radius: 30px;
padding: 18px 50px;
font-size: 20px;
font-weight: 500;
line-height: 1.2;
letter-spacing: -0.01em;
background-color: transparent;

color: #fbfbfb;

&:hover {
    svg {
    transition: transform 0.3s;
    transform: rotate(53deg);
    }
  }
`

export const IconArrow = styled.svg`
fill: #fbfbfb;
`;