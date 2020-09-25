import React from 'react';

import GlobalStyle from '../../styles/global';

import { Wrapper, Content } from './styles';

export default function Layout({ children }) {
  return (
    <Wrapper>
      <GlobalStyle />
      <Content>
        {children}
      </Content>
    </Wrapper>
  )
}