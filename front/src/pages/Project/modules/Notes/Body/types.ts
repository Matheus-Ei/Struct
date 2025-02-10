// Local
import { idType } from 'types/global';

// Each node before implementation
export interface NodeElementType {
  id: idType;
  content: string;
  metadata?: string;
  type: string;
  next_id: idType;
}
