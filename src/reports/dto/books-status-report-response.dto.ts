import { ApiProperty } from '@nestjs/swagger';

export class BooksStatusReportItem {
  @ApiProperty({ example: 7 })
  id: number;

  @ApiProperty({ example: '9781617295850' })
  isbn: string;

  @ApiProperty({ example: 'API Design Patterns' })
  title: string;

  @ApiProperty({ example: 'JJ Geewax' })
  author: string;

  @ApiProperty({ example: 2021 })
  publicationYear: number;

  @ApiProperty({ type: Number, isArray: true, example: [1, 5, 6, 25] })
  exemplarsIds: number[];
}

export class BooksStatusReportResponse {
  @ApiProperty({ type: BooksStatusReportItem, isArray: true })
  data: BooksStatusReportItem[];
}
