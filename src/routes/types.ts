import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { TSlug } from '../dtos/slug';

export type TRootStackParamList = {
  Home: {
    slug: TSlug;
  };
};

export type TNavigationProps<T extends keyof TRootStackParamList> =
  NativeStackScreenProps<TRootStackParamList, T>;

export type TStackProps = NativeStackScreenProps<TRootStackParamList>;
