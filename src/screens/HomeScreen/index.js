import React, { useState } from 'react';
import { Container, List } from './styles';

import HeaderComponent from '../../components/Header';
import CreditComponent from '../../components/Credit';
import BalanceComponent from '../../components/Balance';
import MenuComponent from '../../components/Menu';

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