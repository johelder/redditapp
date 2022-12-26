import React from 'react';
import * as Phosphor from 'phosphor-react-native';

import { IPostCardProps } from './types';
import { formatDate } from '../../utils/dateFormat';

import { useTheme } from 'styled-components/native';

import * as S from './styles';

export const PostCard = ({ post, ...rest }: IPostCardProps) => {
  const theme = useTheme();
  const postTime = formatDate(post.data.created);

  return (
    <S.Container {...rest} testID="post-card">
      <S.CardImageContainer>
        <S.CardImage
          source={{
            uri: post.data.thumbnail,
          }}
        />
      </S.CardImageContainer>

      <S.CardContent>
        <S.Header>
          <S.Label>{postTime}</S.Label>
        </S.Header>

        <S.Body>
          <S.CardTitle>{post.data.title}</S.CardTitle>
        </S.Body>

        <S.Footer>
          <S.FooterLabelContainer>
            <Phosphor.User
              color={theme.colors.gray_400}
              size={12}
              weight="regular"
            />
            <S.Label>{post.data.author}</S.Label>
          </S.FooterLabelContainer>

          <S.FooterLabelContainer>
            <Phosphor.ArrowFatUp
              color={theme.colors.gray_400}
              size={12}
              weight="regular"
            />
            <S.Label>{post.data.ups}</S.Label>
          </S.FooterLabelContainer>

          <S.FooterLabelContainer>
            <Phosphor.ChatCircleDots
              color={theme.colors.gray_400}
              size={12}
              weight="regular"
            />
            <S.Label>{post.data.num_comments}</S.Label>
          </S.FooterLabelContainer>
        </S.Footer>
      </S.CardContent>
    </S.Container>
  );
};
