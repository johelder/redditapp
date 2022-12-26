import React, { useCallback, useEffect } from 'react';
import { ListRenderItemInfo, StatusBar } from 'react-native';
import { useIsFocused } from '@react-navigation/native';

import { THomeProps } from './types';
import { IPost } from '../../dtos/post';

import { PostCard } from '../../components/PostCard';
import { Loading } from '../../components/Loading';
import { useSubReddit } from '../../hooks/useSubreddit';

import * as S from './styles';

export const Home = ({ navigation, route }: THomeProps) => {
  const isScreenFocused = useIsFocused();
  const { subreddit, getPosts, getMorePosts, posts, status } = useSubReddit();

  useEffect(() => {
    if (isScreenFocused) {
      getPosts(route.params.slug);
    }
  }, [getPosts, isScreenFocused, route.params.slug]);

  const renderPost = useCallback(
    ({ item: post }: ListRenderItemInfo<IPost>) => {
      return (
        <PostCard
          post={post}
          onPress={() =>
            navigation.navigate('PostDetails', {
              title: post.data.title,
              permalink: post.data.permalink,
            })
          }
        />
      );
    },
    [navigation],
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
                  uri: subreddit.header_img,
                }}
              />
            </S.HeaderCoverContainer>

            <S.HeaderTitle>/r/{subreddit.display_name}</S.HeaderTitle>
            <S.HeaderSubtitle>{subreddit.title}</S.HeaderSubtitle>
          </S.HeaderContainer>

          {status === 'loading' ? (
            <Loading />
          ) : (
            <S.PostsList
              data={posts}
              renderItem={renderPost}
              keyExtractor={post => post.data.id}
              onRefresh={() => getPosts(route.params.slug)}
              refreshing={status === 'loading'}
              onEndReached={() => getMorePosts(route.params.slug)}
              onEndReachedThreshold={0.1}
            />
          )}
        </S.Content>
      </S.Container>
    </>
  );
};
