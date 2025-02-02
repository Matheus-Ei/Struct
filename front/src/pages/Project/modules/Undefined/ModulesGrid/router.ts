// Local
import { IconType } from 'types/global';

interface ModuleType {
  name: string;
  description: string;
  icon: IconType;
}

const modules: Array<ModuleType> = [
  {
    name: 'notes',
    description: 'Module to create and manage notes.',
    icon: { name: 'PiNoteBlankFill', library: 'pi' },
  },
];

export default modules;
