// Library
import clsx from 'clsx';

// Local
import Icon from 'components/Icon';

interface TitleProps {
  text?: string;
  icon?: { position?: 'left' | 'right'; name?: string; library?: string };
}

const Title = ({ text, icon }: TitleProps) => {
  if (!text && !icon) return null;

  const iconLeft = icon?.position === 'left';
  const iconRight = icon?.position === 'right';

  const iconCss = clsx({
    'order-1': iconLeft,
    'order-2': iconRight,
  });

  const textCss = clsx('font-bold italic select-none', {
    'order-2': iconLeft,
    'order-1': iconRight,
  });

  const iconValue =
    icon && icon.name && icon.library
      ? { name: icon.name, library: icon.library }
      : { name: 'MdEdit', library: 'md' };

  return (
    <div className='flex items-center gap-x-2'>
      {icon && <Icon value={iconValue} className={iconCss} />}

      {text && <h1 className={textCss}>{text}</h1>}
    </div>
  );
};

export default Title;
