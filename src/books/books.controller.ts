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
import { ApiExtraModels, ApiTags } from '@nestjs/swagger';
import {
  AppApiCreatedResponse,
  AppApiNoContentResponse,
  AppApiOkResponse,
} from 'src/decorators/app-api.decorators';
import {
  BookResponseDto,
  BooksNestedResponseDto,
} from './dto/book-response.dto';
import { ApiPaginatedResponse } from 'src/decorators/api-paginated-response.decorator';
import { PaginatedResponseDto } from 'src/common/dto/paginated-response.dto';

@ApiExtraModels(PaginatedResponseDto)
@ApiTags('books')
@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @AppApiCreatedResponse({ type: BooksNestedResponseDto })
  @Post()
  async create(@Body() createBookDto: CreateBookDto) {
    const book = await this.booksService.create(createBookDto);

    return { data: [book] };
  }

  @ApiPaginatedResponse(BookResponseDto)
  @Get()
  findAll(@Query() booksQueryParams: BooksQueryParamsDto) {
    return this.booksService.getAll(booksQueryParams);
  }

  @AppApiOkResponse({ type: BooksNestedResponseDto })
  @Get(':id')
  async findOne(@Param('id', new ParseIntPipe()) id: number) {
    const book = await this.booksService.getOne(id);

    return { data: [book] };
  }

  @AppApiOkResponse({ type: BooksNestedResponseDto })
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
