import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
    ParseIntPipe,
    ValidationPipe,
  } from '@nestjs/common';
  import { TransactionsService } from './transactions.service';
  import { CreateTransactionDto } from './dto/create-transaction.dto';
  import { UpdateTransactionDto } from './dto/update-transaction.dto';
  import { TransactionsQueryParamsDto } from './dto/transactions-query-params.dto';
  
  @Controller('transactions')
  export class TransactionsController {
    constructor(private readonly transactionsService: TransactionsService) {}
  
    @Post()
    create(
      @Body(new ValidationPipe({ transform: true })) createTransactionDto: CreateTransactionDto,
    ) {
      return this.transactionsService.create(createTransactionDto);
    }
  
    @Get()
    findAll(@Param() TransactionsQueryParams: TransactionsQueryParamsDto) {
      return this.transactionsService.getAll(TransactionsQueryParams);
    }
  
    @Get(':id')
    findOne(@Param('id', new ParseIntPipe()) id: number) {
      return this.transactionsService.getOne(id);
    }
  
    @Patch(':id')
    update(
      @Param('id', new ParseIntPipe()) id: number,
      @Body() updateTransactionDto: UpdateTransactionDto,
    ) {
      return this.transactionsService.update(id, updateTransactionDto);
    }
  
    @Delete(':id')
    remove(@Param('id', new ParseIntPipe()) id: number) {
      return this.transactionsService.remove(id);
    }
  }
  