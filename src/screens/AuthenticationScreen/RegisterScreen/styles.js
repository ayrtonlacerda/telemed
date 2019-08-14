import styled from 'styled-components/native';
import { metrics, colors, fonts } from '../../../styles';

export const Container = styled.View`
  display: flex;
  flex: 1;
  background-color: ${colors.PRIMARY_COLOR};
  align-items: center;
  justify-content: center;
  width: ${metrics.SCREEN_WIDTH};
  padding-top: ${metrics.padding_larger * 2.5};
`;

export const SelectPhoto = styled.TouchableOpacity`
  display: flex;
  background-color: ${colors.GREY_LIGHT};
  align-items: center;
  justify-content: center;
  width: 110;
  height: 110;
  border-radius: 55;
  border: 8px;
  border-color: ${colors.WHITE};
`;

export const TextCamera = styled.Text`
  font-size: ${fonts.SMALL * 0.7};
  text-align: center;
  color: ${colors.SECONDARY_COLOR};
`;

export const Icon = styled.Image` 
  width: 45;
  height: 45; 
  color: ${colors.SECONDARY_COLOR};
  margin-bottom: 3;
`;