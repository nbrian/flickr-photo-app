import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Photo, Photos } from '../shared';

@Injectable()
export class PhotoService {
  private url = 'https://www.flickr.com/services/rest/'; 
  private flickr_methods = { 
    search: 'flickr.photos.search',
    photoDetail: 'flickr.photos.getInfo'
  };
  private photos: Photos;
  private searchDetails: {text: string, page: number};
  

  constructor(private http: HttpClient) { }

  private getUrlParams(type): HttpParams{
    return new HttpParams()
    .set('method', type)
    .set('api_key', 'c7729b749fb8818b6f1b72e09549b9c8')
    .set('format', 'json')
    .set('nojsoncallback', '1');
  }

  getPhotoDetail(id) {
    let params = this.getUrlParams(this.flickr_methods.photoDetail).set('photo_id', id);
    
    return this.http.get(this.url, {params}).pipe(
      map((res:{photo: any, stat: string, message?: string}) => {
        return res.stat === 'fail' ? res.message : res.photo;
      })
    );
  }

  test(): Observable<String> {
    return new Observable(o => {
      setTimeout(() => o.next('Testing'), 1000);
    });
  }

  getPhotos(text: string, page: number): Observable<Photos> {
    this.searchDetails = {text: text, page: page};
    let params = this.getUrlParams(this.flickr_methods.search)
      .set('text', text).set('page', page.toString());
    
    return this.http.get(this.url, {params}).pipe(
        map((res:{photos: Photos, stat: string}) => {
          this.photos = res.photos;
          return res.photos;
        }));
  }

  getSearchDetails(): {text: string, page: number} {
    return this.searchDetails;
  }
}