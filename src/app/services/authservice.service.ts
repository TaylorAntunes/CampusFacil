import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { environment } from '../../environment/environment.prod';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})


export class AuthserviceService {

  private readonly baseUrl = environment.baseUrl;

  constructor(private httpClient: HttpClient) {}

  register(data: User): Observable<User> {
    return this.httpClient.post<User>(`${this.baseUrl}/auth/users/`, data);
  }

}
