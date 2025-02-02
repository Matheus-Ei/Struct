// Local
import { NodeElementType } from '../types';
import Paragraph from './types/Paragraph';

// Type of each node type
export interface NodesType {
  type: string;
  element: (props: NodeElementType) => JSX.Element;
}

// Array of node possible types
const typesRouter: NodesType[] = [
  {
    type: 'paragraph',
    element: Paragraph,
  },
];

export default typesRouter;
