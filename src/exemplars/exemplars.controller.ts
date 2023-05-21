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
  Query,
} from '@nestjs/common';
import { ExemplarsService } from './exemplars.service';
import { CreateExemplarDto } from './dto/create-exemplar.dto';
import { UpdateExemplarDto } from './dto/update-exemplar.dto';
import { ExemplarsQueryParamsDto } from './dto/exemplars-query-params.dto';

@Controller('exemplars')
export class ExemplarsController {
  constructor(private readonly exemplarsService: ExemplarsService) {}

  @Post()
  create(
    @Body(new ValidationPipe({ transform: true }))
    createExemplarDto: CreateExemplarDto,
  ) {
    return this.exemplarsService.create(createExemplarDto);
  }

  @Get()
  findAll(
    @Query(new ValidationPipe({ transform: true }))
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
    @Body(new ValidationPipe({ transform: true }))
    updateExemplarDto: UpdateExemplarDto,
  ) {
    return this.exemplarsService.update(id, updateExemplarDto);
  }

  @Delete(':id')
  remove(@Param('id', new ParseIntPipe()) id: number) {
    return this.exemplarsService.remove(id);
  }
}
