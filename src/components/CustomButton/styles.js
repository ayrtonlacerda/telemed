import styled from 'styled-components/native';
import Icons from 'react-native-vector-icons/MaterialIcons';
import { metrics, colors, fonts } from '../../styles';

export const Container = styled.TouchableOpacity`
  display: flex;
  width: ${metrics.SCREEN_WIDTH * 0.8};
  height: 50;
  align-items: center;
  justify-content: center;
  margin-top: ${metrics.margin_larger};
  margin-bottom: ${metrics.margin_larger};
  background-color: ${colors.SECONDARY_COLOR};
  border-radius: 23;
  margin-top: ${metrics.margin_mediun * 2};
`;

export const Description = styled.Text`
  font-size: ${fonts.SMALL};
  color: ${colors.WHITE};
`;