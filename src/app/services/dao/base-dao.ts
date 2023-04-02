import { Base } from "src/app/models/base";
import { PaginationCursorDao } from "src/app/models/pagination";

export abstract class BaseDao<T extends Base<T>> extends PaginationCursorDao<T> {

    abstract create(item: T): Promise<T>;
    abstract getAll(): Promise<T[]>;
    abstract get(id: string): Promise<T>;
    abstract update(item: T): Promise<T>;
    abstract delete(id: string): Promise<T>;

}
