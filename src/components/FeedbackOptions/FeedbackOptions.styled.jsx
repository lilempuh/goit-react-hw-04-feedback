import styled from '@emotion/styled';

export const Button = styled.button`
  width: 100px;
  height: 60px;
  color: #000;
  border: none;
  border-radius: 8px;
  margin-bottom: 15px;
  cursor: pointer;
  font-size: 30px;
  &:not(:last-child) {
    margin-right: 8px;
  }
  &:hover {
    background-color: blue;
  }
`;

export const ButtonStyle = styled.div`
  display: flex;
  justify-content: center;
`;
