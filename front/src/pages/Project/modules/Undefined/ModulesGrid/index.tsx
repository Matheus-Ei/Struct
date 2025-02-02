// Library
import SearchBar from 'components/SearchBar';
import { useState } from 'react';

// Local
import Module from './Module';
import modules from './router';

const ModulesGrid = () => {
  const [moduleList, setModuleList] = useState<string[]>([]);

  const getModules = () => {
    return modules.map((item, index) => {
      if (!moduleList.includes(item.name)) return null;

      return <Module key={index} {...item} />;
    });
  };

  return (
    <div className='flex flex-col w-full'>
      <SearchBar
        searchPlace={modules.map((item) => item.name)}
        setResult={setModuleList}
      />

      <div className='w-full grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-y-4 p-4'>
        {getModules()}
      </div>
    </div>
  );
};

export default ModulesGrid;
