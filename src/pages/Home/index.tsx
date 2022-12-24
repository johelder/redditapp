import React, { useCallback } from 'react';
import { ListRenderItemInfo, StatusBar } from 'react-native';

import { THomeProps } from './types';
import { IPost } from '../../dtos/post';

import { categories } from './mock';

import * as S from './styles';
import { PostCard } from '../../components/PostCard';

export const Home = ({ route }: THomeProps) => {
  console.log(route);

  const renderPost = useCallback(
    ({ item: post }: ListRenderItemInfo<IPost>) => {
      return <PostCard />;
    },
    [],
  );

  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />

      <S.Container>
        <S.Content>
          <S.HeaderContainer>
            <S.HeaderCoverContainer>
              <S.HeaderCover
                source={{
                  uri: 'https://b.thumbs.redditmedia.com/chR666MVO0Y9ct_b4bfcKAolrYdL9u0q_hLOfuzxRWE.jpg',
                }}
              />
            </S.HeaderCoverContainer>

            <S.HeaderTitle>/r/cellbits</S.HeaderTitle>
            <S.HeaderSubtitle>🎅 subreddit do cellbit 🤶</S.HeaderSubtitle>
          </S.HeaderContainer>

          <S.PostsList
            data={categories.data.children}
            renderItem={renderPost}
            keyExtractor={post => post.id}
          />
        </S.Content>
      </S.Container>
    </>
  );
};
