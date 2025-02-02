// Library
import { createContext } from 'react';

// Local
import { PageType } from 'services/page/types';

export interface PageTabContextType {
  menu: { show: boolean; toggle: (arg0?: boolean) => void };
  children: { show: boolean; toggle: (arg0?: boolean) => void };
  isHover: boolean;
  clickPosition: {
    value: { x: number; y: number };
    set: (arg0: { x: number; y: number }) => void;
  };
  page: PageType;
}

export const PageTabContext = createContext<PageTabContextType | undefined>(
  undefined,
);
