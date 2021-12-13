import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'

import {
  HeaderComponent,
  CreditComponent,
  BalanceComponent,
  MenuComponent
} from '../../components'
import { Container, List } from './styles'

const HomeScreen: React.FC = () => {
  const [balanceVisible, setBalanceVisible] = useState<boolean>(true)

  const handleBalanceVisible = () => setBalanceVisible(!balanceVisible)

  return (
    <Container>
      <StatusBar style='light' />
      <HeaderComponent handleBalanceVisible={handleBalanceVisible} />
      <List showsVerticalScrollIndicator={false}>
        <CreditComponent balanceVisible={balanceVisible} />
        <BalanceComponent balanceVisible={balanceVisible} />
      </List>
      <MenuComponent />
    </Container>
  )
}

export default HomeScreen
