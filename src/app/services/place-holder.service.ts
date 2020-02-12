import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: "root"
})
export class PlaceHolderService {
  constructor(private http: HttpClient) { }

  configUrl = "https://jsonplaceholder.typicode.com/todos";

  async get(): Promise<any> {
    return await this.http.get(this.configUrl).toPromise();
  }
}
