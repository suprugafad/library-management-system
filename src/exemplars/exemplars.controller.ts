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
import { ApiTags } from '@nestjs/swagger';
import {
  AppApiCreatedResponse,
  AppApiNoContentResponse,
  AppApiOkResponse,
  AppApiPaginatedResponse,
} from 'src/decorators/app-api.decorators';
import { ExemplarResponseDto } from './dto/exemplar-response.dto';
import { ExemplarsPaginatedResponseDto } from './dto/exemplars-paginatet-response.dto';

@ApiTags('exemplars')
@Controller('exemplars')
export class ExemplarsController {
  constructor(private readonly exemplarsService: ExemplarsService) {}

  @AppApiCreatedResponse({ type: ExemplarResponseDto })
  @Post()
  async create(@Body() createExemplarDto: CreateExemplarDto) {
    const exemplar = await this.exemplarsService.create(createExemplarDto);

    return { data: [exemplar] };
  }

  @AppApiPaginatedResponse({ type: ExemplarsPaginatedResponseDto })
  @Get()
  findAll(
    @Query()
    exemplarsQueryParams: ExemplarsQueryParamsDto,
  ) {
    return this.exemplarsService.getAll(exemplarsQueryParams);
  }

  @AppApiOkResponse({ type: ExemplarResponseDto })
  @Get(':id')
  async findOne(@Param('id', new ParseIntPipe()) id: number) {
    const exemplar = await this.exemplarsService.getOne(id);

    return { data: [exemplar] };
  }

  @AppApiOkResponse({ type: ExemplarResponseDto })
  @Patch(':id')
  async update(
    @Param('id', new ParseIntPipe()) id: number,
    @Body()
    updateExemplarDto: UpdateExemplarDto,
  ) {
    const exemplar = await this.exemplarsService.update(id, updateExemplarDto);

    return { data: [exemplar] };
  }

  @AppApiNoContentResponse()
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async remove(@Param('id', new ParseIntPipe()) id: number) {
    await this.exemplarsService.remove(id);
  }
}
