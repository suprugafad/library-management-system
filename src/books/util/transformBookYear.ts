import { Book } from '@prisma/client';
import { BookResponseDto } from '../dto/book-response.dto';

export const transformBookYear = ({
  publicationYear,
  ...restData
}: Book): BookResponseDto => ({
  ...restData,
  publicationYear: publicationYear.getFullYear(),
});
