interface ExemplarSelect {
  select: {
    id?: true;
    bookId?: true;
    status?: true;
  };
}

export interface BooksFindManyParams {
  select?: {
    id?: true;
    isbn?: true;
    title?: true;
    author?: true;
    publicationYear?: true;
    exemplars?: boolean | ExemplarSelect;
  };
}
