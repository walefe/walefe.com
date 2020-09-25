import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  margin: 0 auto;
  background: #7289DA;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 900px;
  height: 400px;
  color: #fff;

  img {
    width: 300px;
    height: 300px;
    border-radius: 50%;
    margin: 12px 0;
  }
`;
