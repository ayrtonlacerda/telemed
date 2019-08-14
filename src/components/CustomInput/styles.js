import styled from 'styled-components/native';
import Icons from 'react-native-vector-icons/MaterialIcons';
import { metrics, colors, fonts } from '../../styles';

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: ${metrics.margin_larger};
  margin-bottom: ${metrics.margin_larger};
`;

export const Icon = styled.Image`
  width: 25;
  height: 25;
  color: ${colors.WHITE};
  margin-right: ${metrics.margin_larger * 1.5}; 
`

export const TextInput = styled.TextInput.attrs({
  placeholderTextColor: props => (props.grey ? colors.GREY_LIGHT : colors.TRANSPARENT_WHITE),
})`
  width: ${metrics.SCREEN_WIDTH * 0.7};
  height: 45;
  font-size: ${fonts.MEDIUM};
  border-bottom-color: ${props => (props.grey ? colors.GREY : colors.WHITE)};
  border-style: solid;
  border-bottom-width: 0.8;
  color: ${props => (props.grey ? colors.GREY : colors.WHITE)};
`;

export const CunstonIcons = styled(Icons)`
  align-items: center;
  justify-content: center;
  color: ${props => (props.grey ? colors.GREY : colors.WHITE)};
  margin-right: ${metrics.margin_larger * 1.3};
  top: 3;
`;