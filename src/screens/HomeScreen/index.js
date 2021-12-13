import React, { useState } from 'react';
import { Container, List } from './styles';

import {
  HeaderComponent,
  CreditComponent,
  BalanceComponent,
  MenuComponent
} from '../../components';

export default function HomeScreen() {
  const [balanceVisible, setBalanceVisible] = useState(true);

  const handleBalanceVisible = () => {
    setBalanceVisible(!balanceVisible);
  };

  return (
    <Container>
      <HeaderComponent handleBalanceVisible={handleBalanceVisible} />
      <List showsVerticalScrollIndicator={false}>
        <CreditComponent balanceVisible={balanceVisible} />
        <BalanceComponent balanceVisible={balanceVisible} />
      </List>
      <MenuComponent />
    </Container>
  )
}