import { TExemplarStatus } from './interface/exemplar-status.interface';

export class ExemplarModel {
  id: number;
  bookId: number;
  status: TExemplarStatus;
}
