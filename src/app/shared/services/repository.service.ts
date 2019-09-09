import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {

  // Constructor
  constructor(private http: HttpClient) { }

  // GET API: api/[route]
  // Public Method Functions - getRepoApi function
  public getRepoApi = (route: string) => {
    return this.http.get(this.createCompleteRoute(route, environment.SERVER_API_URL));
  }

  // POST API: api/[route]
  // Public Method Functions - createRepoApi function
  public createRepoApi = (route: string, body) => {
    return this.http.post(this.createCompleteRoute(route, environment.SERVER_API_URL), body, this.generateHeaders());
  }

  // PUT API: api/[route]
  // Public Method Functions - updateRepoApi function
  public updateRepoApi = (route: string, body) => {
    return this.http.put(this.createCompleteRoute(route, environment.SERVER_API_URL), body, this.generateHeaders());
  }

  // DELETE API: api/[route]
  // Public Method Functions - deleteRepoApi function
  public deleteRepoApi = (route: string) => {
    return this.http.delete(this.createCompleteRoute(route, environment.SERVER_API_URL));
  }

  // Private Method Functions - createCompleteRoute helper function
  private createCompleteRoute = (route: string, serverApiUrl: string) => {
    return `${serverApiUrl}/${route}`;
  }

  // Private Method Functions - generateHeaders helper function
  private generateHeaders = () => {
    return {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }
  }

}
