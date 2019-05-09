import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  baseUrl = environment.apiUrl;

constructor(private http: HttpClient) { }

submit(model: any) {
  return this.http.post(this.baseUrl + 'comment/submit', model);
}

getComment(id): Observable<Comment> {
  return this.http.get<Comment>(this.baseUrl + 'comment/' + id);
}

getComments(): Observable<Comment[]> {
  return this.http.get<Comment[]>(this.baseUrl + 'comment');
}

submitMulti(comments: any) {
  return this.http.post(this.baseUrl + 'comment/submitmulti', comments);
}

}
