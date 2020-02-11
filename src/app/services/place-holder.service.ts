import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: "root"
})
export class PlaceHolderService {
  constructor(private http: HttpClient) { }

  configUrl = "https://jsonplaceholder.typicode.com/todos";

  getConfig() {
    return this.http.get(this.configUrl);
  }
}
