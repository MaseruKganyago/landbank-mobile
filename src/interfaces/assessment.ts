import { IReferenceListItem } from './referencelist';

export interface IAssessment {
  id: number;
  time: string;
  loanApplication: string;
  address: string;
  status: IReferenceListItem;
  action: IReferenceListItem;
}
