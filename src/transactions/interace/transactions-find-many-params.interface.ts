export interface TransactionsFindManyParams {
  where?: {
    returnedAt?: null;
  };
  select?: {
    borrower?: true;
    exemplar?: true;
    borrowedAt?: true;
    dueToDate?: true;
  };
  include?: {
    borrower?: true;
    exemplar?: true;
  };
}
