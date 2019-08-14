import styled from 'styled-components/native';
import { metrics, colors } from '../../../styles';

export const Container = styled.View`
  display: flex;
  flex: 1;
  background-color: ${colors.PRIMARY_COLOR};
  align-items: center;
  justify-content: flex-start;
  width: ${metrics.SCREEN_WIDTH};
  height: ${metrics.SCREEN_HEIGHT * 0.55};
  padding-top: ${metrics.padding_larger * 2.5};
`;