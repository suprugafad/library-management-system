import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  Query,
  HttpStatus,
  HttpCode,
} from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { BooksQueryParamsDto } from './dto/books-query-params.dto';
import { ApiTags } from '@nestjs/swagger';
import {
  AppApiCreatedResponse,
  AppApiNoContentResponse,
  AppApiOkResponse,
} from 'src/decorators/app-api.decorators';
import { BooksResponseDto } from './dto/book-response.dto';
import { BooksPaginatedResponseDto } from './dto/book-paginated-response.dto';

@ApiTags('books')
@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @AppApiCreatedResponse({ type: BooksResponseDto })
  @Post()
  async create(@Body() createBookDto: CreateBookDto) {
    const book = await this.booksService.create(createBookDto);

    return { data: [book] };
  }

  @AppApiOkResponse({ type: BooksPaginatedResponseDto })
  @Get()
  findAll(@Query() booksQueryParams: BooksQueryParamsDto) {
    return this.booksService.getAll(booksQueryParams);
  }

  @AppApiOkResponse({ type: BooksResponseDto })
  @Get(':id')
  async findOne(@Param('id', new ParseIntPipe()) id: number) {
    const book = await this.booksService.getOne(id);

    return { data: [book] };
  }

  @AppApiOkResponse({ type: BooksResponseDto })
  @Patch(':id')
  async update(
    @Param('id', new ParseIntPipe()) id: number,
    @Body() updateBookDto: UpdateBookDto,
  ) {
    const book = await this.booksService.update(id, updateBookDto);

    return { data: [book] };
  }

  @AppApiNoContentResponse()
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async remove(@Param('id', new ParseIntPipe()) id: number) {
    await this.booksService.remove(id);
  }
}
