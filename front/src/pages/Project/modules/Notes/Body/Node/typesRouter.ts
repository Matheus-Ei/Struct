// Local
import { NodeElementType } from '../types';
import Paragraph from './types/Paragraph';
import H1 from './types/H1';
import H2 from './types/H2';
import H3 from './types/H3';

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
  {
    type: 'h1',
    element: H1,
  },
  {
    type: 'h2',
    element: H2,
  },
  {
    type: 'h3',
    element: H3,
  },
];

export default typesRouter;
