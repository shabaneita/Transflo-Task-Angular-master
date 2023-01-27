export class ApiResponse<T> {
    StatusCode:any;
    isSuccess?:boolean;
    errorMessages:[]=[];
    result?:T ;
}
