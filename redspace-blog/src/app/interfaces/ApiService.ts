import { Observable} from 'rxjs';
export interface IApiService {
    getList(url: string): Observable<any>;
    get(url: string): Observable<any>;
}