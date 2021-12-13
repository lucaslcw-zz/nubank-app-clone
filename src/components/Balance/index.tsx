import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import { Card, Header, Title, Footer, BalanceTitle, Balance, Hidden } from './styles'

export interface IBalanceComponentProps {
  balanceVisible: boolean
}

const BalanceComponent: React.FC<IBalanceComponentProps> = (props) => {
  const { balanceVisible } = props
  return (
    <Card>
      <Header>
        <MaterialCommunityIcons name='database' size={22} color='#676767' />
        <Title>Conta</Title>
      </Header>
      <Footer>
        <BalanceTitle>Saldo disponível</BalanceTitle>
        {balanceVisible ? <Balance>R$ 40,25</Balance> : <Hidden />}
      </Footer>
    </Card>
  )
}

export default BalanceComponent
