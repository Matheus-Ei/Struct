// Libraries
import { createElement } from 'react';

// Libraries
import Undefined from './modules/Undefined';
import router from './util/router';
import { ProjectContext } from './context';
import useSafeContext from 'hooks/useSafeContext';

interface RouterType {
  endpoint: () => JSX.Element;
  name: string;
}

const getModule = (element: RouterType) => {
  if (!module || !element) return <Undefined />;

  return createElement(element.endpoint, {});
};

const Page = () => {
  const { page } = useSafeContext(ProjectContext);

  const module: Array<RouterType> = router.filter((item) => {
    if (!page.data) return false;

    return page.data.module === item.name;
  });

  return (
    <div className='w-full h-screen flex justify-center'>
      <div className='w-11/12 h-screen flex justify-center'>
        {getModule(module[0])}
      </div>
    </div>
  );
};

export default Page;
