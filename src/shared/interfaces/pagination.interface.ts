/**
 * Pagination Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2019.09.19
 */
export interface PaginationInterface {
    page: number;
    pageSize: number;
    totalPage?: number;
    totalData?: number;
}
