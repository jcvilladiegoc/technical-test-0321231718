import { Base } from "./base";

export interface Pagination<T extends Base<T>> {
    paginationCount: number;
    disableNext: boolean;
    disablePrev: boolean;
    items: T[];
    pageSize: number;
    from: number;
    to: number;
}

export abstract class PaginationCursorDao<T extends Base<T>> {

    protected cursorStart: any;
    protected cursorEnd: any;
    protected paginationCount: number = 0;
    protected disableNext: boolean = false;
    protected disablePrev: boolean = false;
    protected items: T[] = [];
    protected pageSize: number = 10;

    setPageSize(size: number) {
        this.pageSize = size;
    }

    getPaginate(items: T[]): Pagination<T> {
        const pagination: Pagination<T> = {
            disableNext: this.disableNext,
            disablePrev: this.disablePrev,
            items: items,
            pageSize: this.pageSize,
            paginationCount: this.paginationCount,
            from: (this.paginationCount - 1) * this.pageSize + 1,
            to: (this.paginationCount - 1) * this.pageSize + items.length
        }
        return pagination;
    }

    abstract getItems(): Promise<Pagination<T>>;
    abstract nextPage(): Promise<Pagination<T>>;
    abstract prevPage(): Promise<Pagination<T>>;

}
