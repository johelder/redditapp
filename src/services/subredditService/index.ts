import { api } from '../api';
import { TSlug } from '../../dtos/slug';
import { IGetPostsResultProps, IGetSubredditResultProps } from './types';

export const subredditService = {
  fetchSubredditData: async () => {
    try {
      const response = await api.get<IGetSubredditResultProps>('/about');

      return {
        ok: true,
        data: response.data.data,
      };
    } catch (error) {
      return {
        ok: false,
        error,
      };
    }
  },

  fetchPostsData: async (slug: TSlug) => {
    try {
      const response = await api.get<IGetPostsResultProps>(`/${slug}`);

      return {
        ok: true,
        data: response.data.data.children,
      };
    } catch (error) {
      return {
        ok: false,
        error,
      };
    }
  },
};
