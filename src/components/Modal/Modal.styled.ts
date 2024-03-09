import styled from 'styled-components';

export const Backdrop = styled.div`
  background-color: rgba(11, 11, 11, 0.6);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 99;
`;

export const Container = styled.div`
  position: relative;
  background-color: #fbfbfb;
  border-radius: 30px;
  z-index: 100;
`;

export const BtnCloseModal = styled.button`
  position: absolute;
  top: 28px;
  right: 28px;
  background-color: transparent;
  border: none;
  outline: none;
  overflow: hidden;
  padding: 0;

  & svg {
    stroke: #11101c;

    /* &:hover {
      transition: transform 0.5s;
      transform: rotate(90deg);
    } */
  }
`;