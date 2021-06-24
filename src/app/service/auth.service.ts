import { HttpClientModule } from '@angular/common/http';
import { Storage } from '@ionic/storage-angular';
import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private storage: Storage,
    private http: HttpClientModule,
    private plt: Platform,
    private router: Router) { }

}
