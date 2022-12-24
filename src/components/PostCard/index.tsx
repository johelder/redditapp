import React from 'react';
import * as Phosphor from 'phosphor-react-native';

import { useTheme } from 'styled-components';

import * as S from './styles';

export const PostCard = () => {
  const theme = useTheme();

  return (
    <S.Container>
      <S.CardImageContainer>
        <S.CardImage
          source={{
            uri: 'https://vandal-us.s3.amazonaws.com/spree/products/59eba8f0adcd9200d0a8e698/original/open-uri20180924-12-1pwnq5b.jpg',
          }}
        />
      </S.CardImageContainer>

      <S.CardContent>
        <S.Header>
          <S.Label>1 minuto atrás</S.Label>
        </S.Header>

        <S.Body>
          <S.CardTitle>
            Lorem ipsum dolor sit amet, consect etur adipiscing elit.
          </S.CardTitle>
        </S.Body>

        <S.Footer>
          <S.FooterLabelContainer>
            <Phosphor.User
              color={theme.colors.gray_400}
              size={12}
              weight="regular"
            />
            <S.Label>pepe_the_frog</S.Label>
          </S.FooterLabelContainer>

          <S.FooterLabelContainer>
            <Phosphor.ArrowFatUp
              color={theme.colors.gray_400}
              size={12}
              weight="regular"
            />
            <S.Label>1.000</S.Label>
          </S.FooterLabelContainer>

          <S.FooterLabelContainer>
            <Phosphor.ChatCircleDots
              color={theme.colors.gray_400}
              size={12}
              weight="regular"
            />
            <S.Label>555</S.Label>
          </S.FooterLabelContainer>
        </S.Footer>
      </S.CardContent>
    </S.Container>
  );
};
