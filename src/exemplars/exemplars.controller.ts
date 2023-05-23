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
import { ExemplarsService } from './exemplars.service';
import { CreateExemplarDto } from './dto/create-exemplar.dto';
import { UpdateExemplarDto } from './dto/update-exemplar.dto';
import { ExemplarsQueryParamsDto } from './dto/exemplars-query-params.dto';

@Controller('exemplars')
export class ExemplarsController {
  constructor(private readonly exemplarsService: ExemplarsService) {}

  @Post()
  create(@Body() createExemplarDto: CreateExemplarDto) {
    return this.exemplarsService.create(createExemplarDto);
  }

  @Get()
  findAll(
    @Query()
    exemplarsQueryParams: ExemplarsQueryParamsDto,
  ) {
    return this.exemplarsService.getAll(exemplarsQueryParams);
  }

  @Get(':id')
  findOne(@Param('id', new ParseIntPipe()) id: number) {
    return this.exemplarsService.getOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', new ParseIntPipe()) id: number,
    @Body()
    updateExemplarDto: UpdateExemplarDto,
  ) {
    return this.exemplarsService.update(id, updateExemplarDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id', new ParseIntPipe()) id: number) {
    return this.exemplarsService.remove(id);
  }
}
