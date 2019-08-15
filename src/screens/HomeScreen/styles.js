import styled from 'styled-components/native';

import { metrics, colors } from '../../styles';

export const Container = styled.View`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: flex-start;
  background-color: ${colors.WHITE_GREY};
`;

export const MainContainer = styled.View`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: flex-start;
`;

export const ImageContainer = styled.View`
  display: flex;
  width: ${metrics.SCREEN_WIDTH};
  height: ${metrics.SCREEN_HEIGHT * 0.28};
  align-items: center;
  justify-content: center;
  background-color: ${colors.SECONDARY_COLOR};
`;

export const SearchContainer = styled.View`
  display: flex;
  width: ${metrics.SCREEN_WIDTH * 0.8};
  /* height: ; */
  align-items: center;
  justify-content: center;
  background-color: ${colors.SECONDARY_COLOR};
`;

export const Title = styled.Text``;
