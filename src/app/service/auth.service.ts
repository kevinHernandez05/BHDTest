import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage-angular';
import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, from, Observable, of } from 'rxjs';
import { NavController } from '@ionic/angular';

/*models*/
import { ILogin } from '../model/login.model';
import { IResponse } from '../model/response.model';
import { IJwtToken } from '../model/jwt.model';

const helper = new JwtHelperService();
const TOKEN_KEY = 'jwt-token';
const BASE_URL = "https://bhdleon-interview-test.herokuapp.com/";

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public token: IJwtToken;
  private userData = new BehaviorSubject(null);

  constructor(
    private storage: Storage,
    private http: HttpClient,
    private plt: Platform,
    private router: Router,
    private nav: NavController
  ) {}

  login(credentials: ILogin): Observable<any> {

    let response: IResponse = {
      statusCode: 0,
      message: "",
      error: ""
    }

    let jwt: IJwtToken = {
      token: ""
    };

    this.http.post<IJwtToken>(BASE_URL + 'login', credentials)
      .subscribe(
        (res) =>{
          jwt = res;
          response.statusCode = 201;
        },
        (err)=>{
          response = err;
          console.log(response)

        },
        () => {

          if (response.statusCode == 201 && jwt.token !== "") {
            this.router.navigateByUrl('home/dash')
            return of(true);

          }
          return of(null);
        }
      );

      return;

  }

  logout() {
    this.nav.navigateRoot('/');

    // this.storage.remove(TOKEN_KEY).then(() => {
    //   this.router.navigateByUrl('/');
    //   this.userData.next(null);
    // });
  }
}
