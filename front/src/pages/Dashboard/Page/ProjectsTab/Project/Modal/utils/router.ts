// Tabs
import About from '../tabs/About';
import Pages from '../tabs/Pages';
import Settings from '../tabs/Settings';
import Shared from '../tabs/Shared';

// Local
import { TabProps } from './types';

export interface RouterType {
  title: string;
  component: (props: TabProps) => JSX.Element | null;
}

const router: RouterType[] = [
  { title: 'About', component: About },
  { title: 'Pages', component: Pages },
  { title: 'Settings', component: Settings },
  { title: 'Shared', component: Shared },
];

export default router;
