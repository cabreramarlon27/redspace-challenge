import { Injectable } from '@angular/core'
import { IApiService } from '../interfaces/ApiService'
import { Observable } from 'rxjs'
import { map, catchError, switchMap, mergeMap } from 'rxjs/operators'
import { environment } from '../../environments/environment.prod';
import {
  HttpClient,
} from '@angular/common/http'
@Injectable({
  providedIn: 'root',
})
export class WordpressService implements IApiService {
  baseUrl: string;
  constructor(private http: HttpClient) {
      this.baseUrl = environment.wordpressHost + '/wp-json/wp/v2';
  }
  getList<T>(url: string): Observable<T> {
    return this.http.get<any>(this.baseUrl + url).pipe(
      map((data) =>
        data.map((item: any) => {
          return item
        }),
      ),
    )
  }

  get(url: string): Observable<any> {
    return this.http.get<any>(this.baseUrl + url).pipe(
      map((data) => {
        return data
      }),
    )
  }
}
