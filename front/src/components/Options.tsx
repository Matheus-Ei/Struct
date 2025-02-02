// Libraries
import { ChangeEvent } from 'react';
import { twMerge } from 'tailwind-merge';

// Local
import { SetStateType } from 'types/global';

interface OptionsProps {
  options: Array<string>;
  selected: { value: number; set: SetStateType<number> };
  placeholder?: string;
  className?: string;
}

const renderOptions = (option: string, index: number) => {
  return (
    <option value={option} key={index}>
      {option.charAt(0).toUpperCase() + option.slice(1)}
    </option>
  );
};

const Options = ({
  options,
  selected,
  placeholder,
  className,
}: OptionsProps) => {
  const css = twMerge('bg-base-300 px-2 py-1 rounded-btn', className);

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const index = options.indexOf(event.target.value);
    selected.set(index);
  };

  return (
    <div className='flex flex-col items-center justify-center'>
      <select
        id='options'
        value={options[selected.value] || ''}
        onChange={handleChange}
        className={css}
      >
        <option value=''>{placeholder || 'Select'}</option>

        {options.map(renderOptions)}
      </select>
    </div>
  );
};

export default Options;
