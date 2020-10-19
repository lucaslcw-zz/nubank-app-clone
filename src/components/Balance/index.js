import React from 'react';
import { Card, Header, Title, Footer, BalanceTitle, Balance, Hidden } from './styles';
import { MaterialCommunityIcons } from '@expo/vector-icons';  

export default function BalanceComponent(props) {
  return (
    <Card>
      <Header>
        <MaterialCommunityIcons name='database' size={22} color='#676767' />
        <Title>Conta</Title>
      </Header>
      <Footer>
        <BalanceTitle>Saldo disponível</BalanceTitle>
        {props.balanceVisible ? <Balance>R$ 40,25</Balance> : <Hidden />}
      </Footer>
    </Card>
  )
}