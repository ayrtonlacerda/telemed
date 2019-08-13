import styled from 'styled-components/native';
import { metrics, colors } from '../../../styles';

export const Container = styled.View`
  display: flex;
  flex: 1;
  background-color: ${colors.PRIMARY_COLOR};
  align-items: center;
  justify-content: center;
  width: ${metrics.SCREEN_WIDTH};
`;