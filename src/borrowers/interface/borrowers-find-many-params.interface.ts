interface TransactionSelect {
  select: {
    id?: true;
    borrowerId?: true;
    exemplarId?: true;
    borrowedAt?: true;
    returnedAt?: true;
    dueToDate?: true;
  };
}

export interface BorrowersFindManyParams {
  select?: {
    id?: true;
    firstName?: true;
    lastName?: true;
    email?: true;
    transactions?: boolean | TransactionSelect;
  };
}
