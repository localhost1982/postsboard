import { FavoritesPostsContainer } from 'components/FavoritesPostsContainer';
import { PostsContainer } from 'components/PostsContainer';

export const routes = [
  { menuItem: 'Regular Posts', path: '/', component: PostsContainer },
  { menuItem: 'Favorites Posts', path: '/favorites', component: FavoritesPostsContainer },
];
