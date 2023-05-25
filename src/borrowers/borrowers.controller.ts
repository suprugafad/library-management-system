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
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { BorrowersService } from './borrowers.service';
import { UpdateBorrowerDto } from './dto/update-borrower.dto';
import { CreateBorrowerDto } from './dto/create-borrower.dto';
import { BorrowersQueryParamsDto } from './dto/borrowers-query-params.dto';

@Controller('borrowers')
export class BorrowersController {
  constructor(private readonly borrowersService: BorrowersService) {}

  @Post()
  async create(@Body() createBorrowerDto: CreateBorrowerDto) {
    const borrower = await this.borrowersService.create(createBorrowerDto);

    return { data: [borrower] };
  }

  @Get()
  findAll(@Query() borrowersQueryParams: BorrowersQueryParamsDto) {
    return this.borrowersService.getAll(borrowersQueryParams);
  }

  @Get(':id')
  async findOne(@Param('id', new ParseIntPipe()) id: number) {
    const borrower = await this.borrowersService.getOne(id);
    return { data: [borrower] };
  }

  @Patch(':id')
  async update(
    @Param('id', new ParseIntPipe()) id: number,
    @Body() updateBorrowerDto: UpdateBorrowerDto,
  ) {
    const borrower = await this.borrowersService.update(id, updateBorrowerDto);

    return { data: [borrower] };
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async remove(@Param('id', new ParseIntPipe()) id: number) {
    await this.borrowersService.remove(id);
  }
}
