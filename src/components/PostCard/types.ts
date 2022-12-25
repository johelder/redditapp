import { TouchableOpacityProps } from 'react-native';
import { IPost } from '../../dtos/post';

export interface IPostCardProps extends TouchableOpacityProps {
  post: IPost;
}
