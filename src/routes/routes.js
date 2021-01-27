import { PostsContainer } from '../components/PostsContainer/PostsContainer';
import { FavoritesPostsContainer } from '../components/FavoritesPostsContainer/FavoritesPostsContainer';

export const routes = [
  { menuItem: 'Regular Posts', path: '/', component: PostsContainer },
  { menuItem: 'Favorites Posts', path: '/favorites', component: FavoritesPostsContainer },
];
