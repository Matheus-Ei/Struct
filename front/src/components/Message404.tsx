// Local
import Icon from './Icon';

interface Message404Props {
  text: string;
}

const Message404 = ({ text }: Message404Props) => {
  return (
    <div className='flex items-center justify-start w-full h-fit gap-x-6 ml-10 mt-4'>
      <Icon
        value={{ name: 'TbError404', library: 'tb' }}
        className='text-4xl w-fit'
      />

      <h1 className='text-xl w-fit'>{text}</h1>
    </div>
  );
};

export default Message404;
