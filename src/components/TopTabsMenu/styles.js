import styled from 'styled-components/native';
import { metrics, colors, fonts } from '../../styles';

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  height: 70px;
  width: ${metrics.SCREEN_WIDTH};
  background-color: ${colors.SECONDARY_COLOR}; 
  align-items: center;
  justify-content: flex-start;
`;

export const ButtonContainer = styled.TouchableOpacity`
  display: flex;
  height: 70px;
  width: ${metrics.SCREEN_WIDTH * 0.5}; 
  align-items: center;
  justify-content: center;
`;

export const TextButton = styled.Text`
  font-size: ${fonts.SMALL};
  color: ${props => (props.active ? colors.WHITE : colors.TRANSPARENT_WHITE)};
`;

export const Triangle = styled.Image`
  position: absolute;
  top: 55;
  width: 25;
  height: 25;
`