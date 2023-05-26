import { ApiProperty } from '@nestjs/swagger';

export class BooksReportItem {
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

  @ApiProperty({ example: 4 })
  totalExemplars: 4;
}

export class BooksReportResponse {
  @ApiProperty({ type: BooksReportItem, isArray: true })
  data: [BooksReportItem];
}
