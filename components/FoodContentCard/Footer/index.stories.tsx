import { StoryFn } from '@storybook/react';
import { ComponentProps } from 'react';
import FoodContentCardFooter from '.';
import FoodContentCard from '..';

const CreatorProfileComponent = {
  title: 'Component/FoodContentCard/CreatorProfile',
  component: FoodContentCardFooter
};
export default CreatorProfileComponent;

type CreatorProfileProps = ComponentProps<typeof FoodContentCardFooter>;

/**
 * 게시글 작성자를 보여주는 컴포넌트입니다.
 */
export const CreatorProfileTemplate: StoryFn<CreatorProfileProps> = (args) => (
  <FoodContentCard.Layout>
    <FoodContentCardFooter {...args} />
  </FoodContentCard.Layout>
);
CreatorProfileTemplate.args = {
  src: 'https://i.ytimg.com/vi/B2s5seuBCn0/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLArD-nM9VEHz5TZ3qai6BzHy9H28A',
  children: '김코딩'
};
