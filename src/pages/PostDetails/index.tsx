import React from 'react';
import { WebView } from 'react-native-webview';
import { TPostDetailsProps } from './types';

export const PostDetails = ({ route }: TPostDetailsProps) => {
  const { permalink } = route.params;

  return (
    <WebView
      testID="post-details"
      source={{ uri: `https://reddit.com/${permalink}` }}
    />
  );
};
