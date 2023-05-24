import { GenericPagination } from 'src/common/generic-pagination.model';
import { PaginationQueryParamsDto } from 'src/common/pagination-query-params.dto';

export abstract class GenericRepository<T> {
  abstract getAll(
    queryParams: PaginationQueryParamsDto & any,
  ): Promise<GenericPagination<T>>;

  abstract getById(id: number): Promise<T>;

  abstract create(data: T): Promise<T>;

  abstract update(id: number, updateDto: Partial<T>): Promise<T>;

  abstract remove(id: number): Promise<void>;
}
