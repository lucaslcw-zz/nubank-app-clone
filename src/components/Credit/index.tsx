import React from 'react'
import { AntDesign } from '@expo/vector-icons'

import { Card, Header, Title, Footer, BalanceTitle, Balance, Hidden, Limit, Spotlight } from './styles'

export interface ICreditComponentProps {
  balanceVisible: boolean
}

const CreditComponent: React.FC<ICreditComponentProps> = (props) => {
  const { balanceVisible } = props
  return (
    <Card>
      <Header>
        <AntDesign name='creditcard' size={22} color='#676767' />
        <Title>Cartão de crédito</Title>
      </Header>
      <Footer>
        <BalanceTitle>Fatura atual</BalanceTitle>
        {balanceVisible ? <Balance>R$ 1.520,40</Balance> : <Hidden />}
        {balanceVisible ? <Limit>Limite disponível <Spotlight>R$ 4.830,00</Spotlight></Limit> : null}
      </Footer>
    </Card>
  )
}

export default CreditComponent
