import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 40px 0;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 0 15px;
`;

export const Name = styled.Text`
  margin-left: 10px;
  font-weight: 600;
  font-size: 28px;
  color: #fff;
`;

export const ButtonContainer = styled.View`
  flex-direction: row;
`;

export const Button = styled.TouchableOpacity`
  width: 45px;
  height: 45px;
  background: #9824c7;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  margin-left: 10px;
`;