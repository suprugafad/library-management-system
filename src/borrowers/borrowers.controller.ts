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
} from '@nestjs/common';
import { BorrowersService } from './borrowers.service';
import { UpdateBorrowerDto } from './dto/update-borrower.dto';
import { CreateBorrowerDto } from './dto/create-borrower.dto';
import { BorrowersQueryParamsDto } from './dto/borrowers-query-params.dto';

@Controller('borrowers')
export class BorrowersController {
  constructor(private readonly borrowersService: BorrowersService) {}

  @Post()
  create(@Body() createBorrowerDto: CreateBorrowerDto) {
    return this.borrowersService.create(createBorrowerDto);
  }

  @Get()
  findAll(@Query() borrowersQueryParams: BorrowersQueryParamsDto) {
    return this.borrowersService.getAll(borrowersQueryParams);
  }

  @Get(':id')
  findOne(@Param('id', new ParseIntPipe()) id: number) {
    return this.borrowersService.getOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', new ParseIntPipe()) id: number,
    @Body() updateBorrowerDto: UpdateBorrowerDto,
  ) {
    return this.borrowersService.update(id, updateBorrowerDto);
  }

  @Delete(':id')
  remove(@Param('id', new ParseIntPipe()) id: number) {
    return this.borrowersService.remove(id);
  }
}
