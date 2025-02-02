// Libraries
import { ChangeEvent, useEffect, useRef } from 'react';
import { twMerge } from 'tailwind-merge';

// Local
import Icon from 'components/Icon';
import { SetStateType } from 'types/global';

interface SearchBarProps {
  searchPlace: Array<string>;
  setResult: SetStateType<Array<string>>;
  placeholder?: string;
  className?: string;
}

const SearchBar = ({
  searchPlace,
  setResult,
  placeholder,
  className,
}: SearchBarProps) => {
  const startSearch = useRef(searchPlace);

  // Set the result to the search place when the component is mounted
  useEffect(() => {
    setResult(startSearch.current);
  }, [setResult]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const search = event.target.value as string;
    if (!search) return setResult(searchPlace);

    const result = searchPlace.filter((item) =>
      item.toLowerCase().includes(search.toLowerCase()),
    );

    setResult(result);
  };

  const css = twMerge(
    'flex w-full items-center relative',
    'py-2 pl-16 pr-4',
    'placeholder:text-base-content bg-base-100',
    'outline-none border-b border-base-300',
    className,
  );

  return (
    <div className={css}>
      <Icon
        value={{ name: 'IoSearchOutline', library: 'io5' }}
        className='flex items-center h-full text-xl absolute left-6'
      />

      <input
        placeholder={placeholder ? placeholder : 'Search. . . '}
        onChange={handleChange}
        defaultValue=''
        className='w-full outline-none'
      ></input>
    </div>
  );
};

export default SearchBar;
