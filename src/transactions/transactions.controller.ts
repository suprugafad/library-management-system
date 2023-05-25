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
import { TransactionsService } from './transactions.service';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { TransactionsQueryParamsDto } from './dto/transactions-query-params.dto';
import { ApiTags } from '@nestjs/swagger';
import {
  AppApiCreatedResponse,
  AppApiNoContentResponse,
  AppApiOkResponse,
} from 'src/decorators/app-api.decorators';
import { TransactionResponseDto } from './dto/transaction-response.dto';
import { TransactionsPaginatedResponse } from './dto/transaction-paginated-response.dto';

@ApiTags('transactions')
@Controller('transactions')
export class TransactionsController {
  constructor(private readonly transactionsService: TransactionsService) {}

  @AppApiCreatedResponse({ type: TransactionResponseDto })
  @Post()
  async create(@Body() createTransactionDto: CreateTransactionDto) {
    const transaction = await this.transactionsService.create(
      createTransactionDto,
    );

    return { data: [transaction] };
  }

  @AppApiOkResponse({ type: TransactionsPaginatedResponse })
  @Get()
  findAll(@Query() transactionsQueryParams: TransactionsQueryParamsDto) {
    return this.transactionsService.getAll(transactionsQueryParams);
  }

  @AppApiOkResponse({ type: TransactionResponseDto })
  @Get(':id')
  async findOne(@Param('id', new ParseIntPipe()) id: number) {
    const transaction = await this.transactionsService.getOne(id);

    return { data: [transaction] };
  }

  @AppApiOkResponse({ type: TransactionResponseDto })
  @Patch(':id')
  async update(
    @Param('id', new ParseIntPipe()) id: number,
    @Body() updateTransactionDto: UpdateTransactionDto,
  ) {
    const transaction = await this.transactionsService.update(
      id,
      updateTransactionDto,
    );

    return { data: [transaction] };
  }

  @AppApiNoContentResponse()
  @Delete(':id')
  async remove(@Param('id', new ParseIntPipe()) id: number) {
    await this.transactionsService.remove(id);
  }
}
