import React, { useCallback, useEffect, useState } from 'react';
import { createContext, useContext } from 'react';
import { observer } from 'mobx-react';

import { subreddit } from '../../store/subreddit';

import { ISubredditContextProps, ISubredditProviderProps } from './types';
import { subredditService } from '../../services/subredditService';
import { TSlug } from '../../dtos/slug';

const SubRedditContext = createContext<ISubredditContextProps>(
  {} as ISubredditContextProps,
);

const SubRedditProvider = observer(({ children }: ISubredditProviderProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const getSubreddit = useCallback(async () => {
    const response = await subredditService.fetchSubredditData();

    if (!response.ok || !response.data) {
      throw new Error(
        'Ocorreu um error ao buscar as informações desse subreddit.',
      );
    }

    subreddit.setSubreddit(response.data);
  }, []);

  const getPosts = useCallback(async (slug: TSlug) => {
    setIsLoading(true);

    const response = await subredditService.fetchPostsData(slug);

    if (!response.ok || !response.data) {
      throw new Error('Occorreu um erro ao buscar os posts desse subreddit.');
    }

    subreddit.setPosts(response.data);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    getSubreddit();
  }, [getSubreddit]);

  return (
    <SubRedditContext.Provider
      value={{
        subreddit: subreddit.information,
        getPosts,
        posts: subreddit.posts,
        isLoading,
      }}
    >
      {children}
    </SubRedditContext.Provider>
  );
});

const useSubReddit = () => {
  return useContext(SubRedditContext);
};

export { SubRedditProvider, useSubReddit };
