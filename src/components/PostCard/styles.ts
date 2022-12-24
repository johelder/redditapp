import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  width: 100%;
  height: 100px;

  flex-direction: row;
  align-items: center;

  border-radius: 8px;

  margin-bottom: 10px;
`;

export const CardImageContainer = styled.View`
  width: 25%;
  height: 100%;
`;

export const CardImage = styled.Image`
  width: 100%;
  height: 100%;

  border-radius: 8px;
`;

export const CardContent = styled.View`
  width: 75%;
  height: 100%;

  justify-content: space-between;
  padding: 6px;
`;

export const Header = styled.View`
  align-items: flex-end;
`;

export const Body = styled.View``;

export const CardTitle = styled.Text.attrs({
  numberOfLines: 2,
})`
  font-family: ${({ theme }) => theme.fonts.primary.medium};
  font-size: 14px;

  color: ${({ theme }) => theme.colors.dark};
`;

export const Footer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const FooterLabelContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Label = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary.regular};
  font-size: 10px;

  color: ${({ theme }) => theme.colors.gray_400};
  margin-left: 4px;
`;
