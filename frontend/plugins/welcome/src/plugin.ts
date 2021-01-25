import { createPlugin } from '@backstage/core';
import RecommendedVideo from './components/RecommendedVideo';
import WatchVideo from './components/WatchVideo'
import SignIn from './components/SignIn'
import Signup from './components/SignUp'
import ForgotPass from './components/ForgotPass'
import Playlist from './components/PlaylistVideo'
import Profile from './components/Profile'
export const plugin = createPlugin({
  id: 'welcome',
  register({ router }) {
    router.registerRoute('/auth/signin', SignIn);
    router.registerRoute('/signup', Signup);
    router.registerRoute('/forgotpass', ForgotPass);
    router.registerRoute('/watch_video', WatchVideo);
    router.registerRoute('/', RecommendedVideo);
    router.registerRoute('/playlist', Playlist);
    router.registerRoute('/profile', Profile);
  },
});
