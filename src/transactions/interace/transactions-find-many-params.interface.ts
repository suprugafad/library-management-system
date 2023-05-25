export interface TransactionsFindManyParams {
  where?: {
    returnedAt?: null;
    dueToDate?: {
      lt?: Date;
    };
  };
  select?: {
    id?: true;
    borrowerId?: true;
    exemplarId?: true;
    borrowedAt?: true;
    returnedAt?: true;
    dueToDate?: true;
  };
}
