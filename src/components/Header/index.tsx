import React from 'react'
import { MaterialCommunityIcons, Feather } from '@expo/vector-icons'

import { Container, Name, ButtonContainer, Button } from './styles'

export interface IHeaderComponentProps {
  handleBalanceVisible: () => void
}

const HeaderComponent: React.FC<IHeaderComponentProps> = (props) => {
  const { handleBalanceVisible } = props
  return (
    <Container>
      <Name>Olá, Lucas</Name>
      <ButtonContainer>
        <Button onPress={() => handleBalanceVisible()}>
          <MaterialCommunityIcons name='eye-off-outline' size={22} color='#fff' />
        </Button>
        <Button>
          <Feather name='settings' size={22} color='#fff' />
        </Button>
      </ButtonContainer>
    </Container>
  )
}

export default HeaderComponent
