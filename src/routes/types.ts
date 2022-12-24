import type { NativeStackScreenProps } from '@react-navigation/native-stack';

type Slug = 'best' | 'new' | 'hot' | 'controversial';

export type TRootStackParamList = {
  Home: {
    slug: Slug;
  };
};

export type TNavigationProps<T extends keyof TRootStackParamList> =
  NativeStackScreenProps<TRootStackParamList, T>;

export type TStackProps = NativeStackScreenProps<TRootStackParamList>;
