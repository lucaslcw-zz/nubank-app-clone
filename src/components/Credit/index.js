import React from 'react';
import { Card, Header, Title, Footer, BalanceTitle, Balance, Hidden, Limit, Spotlight } from './styles';
import { AntDesign } from '@expo/vector-icons';

export default function CreditComponent(props) {
  return (
    <Card>
      <Header>
        <AntDesign name='creditcard' size={22} color='#676767' />
        <Title>Cartão de crédito</Title>
      </Header>
      <Footer>
        <BalanceTitle>Fatura atual</BalanceTitle>
        {props.balanceVisible ? <Balance>R$ 1.520,40</Balance> : <Hidden />}
        {props.balanceVisible ? <Limit>Limite disponível <Spotlight>R$ 4.830,00</Spotlight></Limit> : null}
      </Footer>
    </Card>
  )
}