import React, { useLayoutEffect } from 'react';
import { WebView } from 'react-native-webview';
import { TPostDetailsProps } from './types';

export const PostDetails = ({ navigation, route }: TPostDetailsProps) => {
  const { title, permalink } = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({
      title,
    });
  });

  return <WebView source={{ uri: `https://reddit.com/${permalink}` }} />;
};
