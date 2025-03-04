// Local
import Emoji from 'components/Emoji';
import Icon from 'components/Icon';
import useSafeContext from 'hooks/useSafeContext';
import { PageType } from 'services/page/types';
import { PageTabContext } from '../context';

interface PageIconProps {
  childrens: Array<PageType> | null;
}

const PageIcon = ({ childrens }: PageIconProps) => {
  const { children, isHover, page } = useSafeContext(PageTabContext);

  if (!isHover || childrens?.length === 0) {
    return <Emoji symbol={page.emoji} />;
  }

  const iconStyle = children.show
    ? { name: 'IoIosArrowDown', library: 'io' }
    : { name: 'IoIosArrowForward', library: 'io' };

  return (
    <Icon
      value={iconStyle}
      className='text-xl'
      onClick={() => children.toggle()}
    />
  );
};

export default PageIcon;
