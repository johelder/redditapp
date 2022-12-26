import { AxiosError } from 'axios';
import { api } from '../api';

import { TSlug } from '../../dtos/slug';
import {
  IGetPostsResultProps,
  IGetSubredditResultProps,
  IPostParams,
} from './types';

export const subredditService = {
  fetchSubredditData: async (): Promise<{
    result: IGetSubredditResultProps | AxiosError;
  }> => {
    try {
      const response = await api.get<IGetSubredditResultProps>('/about');

      return { result: response.data };
    } catch (error) {
      if (error instanceof AxiosError) {
        return { result: error };
      }

      throw error;
    }
  },

  fetchPostsData: async (
    slug: TSlug,
    params: IPostParams = {},
  ): Promise<{ result: IGetPostsResultProps | AxiosError }> => {
    try {
      const response = await api.get<IGetPostsResultProps>(`/${slug}`, {
        params,
      });

      return { result: response.data };
    } catch (error) {
      if (error instanceof AxiosError) {
        return { result: error };
      }

      throw error;
    }
  },
};
