import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from "@nestjs/common";
import { BorrowersService } from './borrowers.service';
import { CreateBorrowerDto, UpdateBorrowerDto, BorrowBookDto } from './dto';

@Controller('borrowers')
export class BorrowersController {
  constructor(private readonly borrowersService: BorrowersService) {}

  @Post()
  create(@Body() createBorrowerDto: CreateBorrowerDto) {
    return this.borrowersService.create(createBorrowerDto);
  }

  @Get()
  findAll() {
    return this.borrowersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.borrowersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateBorrowerDto: UpdateBorrowerDto) {
    return this.borrowersService.update(+id, updateBorrowerDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.borrowersService.remove(+id);
  }

  @Post(':id/borrow')
  borrowBook(@Param('id', ParseIntPipe) borrowerId: number, @Body() borrowBookDto: BorrowBookDto) {
    return this.borrowersService.borrowBook(borrowerId, borrowBookDto);
  }

  @Post(':id/return')
  returnBook(@Param('id', ParseIntPipe) borrowerId: number, @Body('exemplarId', ParseIntPipe) exemplarId: number) {
    return this.borrowersService.returnBook(borrowerId, exemplarId);
  }
}
