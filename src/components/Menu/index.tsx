import React from 'react'
import { AntDesign, Ionicons, MaterialIcons } from '@expo/vector-icons'

import { View, Container, Card, Title } from './styles'

const MenuComponent: React.FC = () => (
  <View>
    <Container horizontal showsHorizontalScrollIndicator={false}>
      <Card>
        <Ionicons name='ios-barcode' size={24} color='#fff' />
        <Title>Pagar</Title>
      </Card>
      <Card>
        <AntDesign name='arrowup' size={24} color='#fff' />
        <Title>Transferir</Title>
      </Card>
      <Card>
        <AntDesign name='arrowdown' size={24} color='#fff' />
        <Title>Depositar</Title>
      </Card>
      <Card>
        <MaterialIcons name='person-add' size={24} color='#fff' />
        <Title>Indicar amigos</Title>
      </Card>
      <Card>
        <MaterialIcons name='chat-bubble-outline' size={24} color='#fff' />
        <Title>Cobrar</Title>
      </Card>
      <Card>
        <MaterialIcons name='lock' size={24} color='#fff' />
        <Title>Bloquear cartão</Title>
      </Card>
    </Container>
  </View>
)

export default MenuComponent
