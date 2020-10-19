import React from 'react';
import { Container, Name, ButtonContainer, Button } from './styles';
import { MaterialCommunityIcons, Feather } from '@expo/vector-icons'; 

export default function HeaderComponent(props) {
  return (
    <Container>
      <Name>Olá, Lucas</Name>
      <ButtonContainer>
        <Button onPress={() => props.handleBalanceVisible()}>
          <MaterialCommunityIcons name='eye-off-outline' size={22} color='#fff' />
        </Button>
        <Button>
          <Feather name='settings' size={22} color='#fff' />
        </Button>
      </ButtonContainer>
    </Container>
  )
}