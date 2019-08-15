import styled from 'styled-components/native';
import { metrics } from '../../styles';

export const Contain = styled.View`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: flex-start;
`;

export const ContainImage = styled.View`
  display: flex;
  width: ${metrics.SCREEN_WIDTH * 0.8};
  height: ${metrics.SCREEN_WIDTH * 0.75};
  padding-bottom: ${metrics.padding_larger};
  align-items: center;
  justify-content: center;
`;

export const Main = styled.View`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: flex-start;
`;

export const ImageLogo = styled.Image`
  width: ${metrics.SCREEN_WIDTH * 0.5};
  height: ${metrics.SCREEN_WIDTH * 0.5};
`;

export const Text = styled.Text``;
