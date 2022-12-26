import { FlatList, FlatListProps } from 'react-native';
import styled from 'styled-components/native';
import { IPost } from '../../dtos/post';

export const Container = styled.SafeAreaView`
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Content = styled.View`
  height: 100%;
  width: 100%;
`;

export const HeaderContainer = styled.View`
  width: 100%;
`;

export const HeaderCoverContainer = styled.View`
  width: 100%;
  height: 120px;
`;

export const HeaderCover = styled.Image`
  width: 100%;
  height: 100%;

  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
`;

export const HeaderTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary.semiBold};
  font-size: 16px;
  text-align: center;

  margin: 6px 0 4px;
`;

export const HeaderSubtitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary.regular};
  font-size: 14px;
  text-align: center;

  margin-bottom: 10px;
`;

export const PostsList = styled(
  FlatList as new (props: FlatListProps<IPost>) => FlatList<IPost>,
).attrs({
  showsVerticalScrollIndicator: false,
  flexGrow: 1,
  paddingHorizontal: 15,
})``;

export const ErrorContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const ErrorLabel = styled.Text`
  font-family: ${({theme}) => theme.fonts.primary.medium};
  font-size: 14px;
  text-align: center;

  color: ${({theme}) => theme.colors.attention}
`;
