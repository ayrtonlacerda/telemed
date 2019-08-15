import styled from 'styled-components/native';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';

import { metrics, colors, fonts } from '../../styles';

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: ${metrics.SCREEN_WIDTH};
  height: 65;
  justify-content: space-between;
  padding-left: ${metrics.margin_larger};
  padding-right: ${metrics.margin_larger};
  background-color: ${colors.SECONDARY_COLOR};
`;

export const Title = styled.Text`
  font-size: ${fonts.MEDIUM};
  color: ${colors.WHITE};
`;

export const SlapHole = styled.View`
  width: 35;
  height: 35;
`;

export const ArrowBack = styled(Icons)``;
