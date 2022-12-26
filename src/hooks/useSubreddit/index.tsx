import React, { useCallback, useEffect, useState } from 'react';
import { createContext, useContext } from 'react';
import { observer } from 'mobx-react';
import { AxiosError } from 'axios';

import { subreddit } from '../../store/subreddit';
import { subredditService } from '../../services/subredditService';

import {
  ISubredditContextProps,
  ISubredditProviderProps,
  TStatus,
} from './types';
import { TSlug } from '../../dtos/slug';

const SubRedditContext = createContext<ISubredditContextProps>(
  {} as ISubredditContextProps,
);

const SubRedditProvider = observer(({ children }: ISubredditProviderProps) => {
  const [status, setStatus] = useState<TStatus>('idle');
  const [nextPage, setNextPage] = useState('');

  const getSubreddit = useCallback(async () => {
    const { result } = await subredditService.fetchSubredditData();

    if (result instanceof AxiosError) {
      setStatus('error');

      return;
    }

    subreddit.setSubreddit(result.data);
  }, []);

  const getPosts = useCallback(async (slug: TSlug) => {
    setStatus('loading');

    const { result } = await subredditService.fetchPostsData(slug);

    if (result instanceof AxiosError) {
      setStatus('error');

      return;
    }

    subreddit.setPosts(result.data.children);
    setNextPage(result.data.after);
    setStatus('success');
  }, []);

  const getMorePosts = useCallback(
    async (slug: TSlug) => {
      if (!nextPage) {
        return;
      }

      const params = {
        after: nextPage,
      };

      const { result } = await subredditService.fetchPostsData(slug, params);

      if (result instanceof AxiosError) {
        return;
      }
      setNextPage(result.data.after);
      subreddit.setMorePosts(result.data.children);
    },
    [nextPage],
  );

  useEffect(() => {
    getSubreddit();
  }, [getSubreddit]);

  return (
    <SubRedditContext.Provider
      value={{
        subreddit: subreddit.information,
        getPosts,
        getMorePosts,
        posts: subreddit.posts,
        status,
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
