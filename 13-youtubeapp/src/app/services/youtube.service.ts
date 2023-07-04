import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { URLSearchParams } from 'url';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  private youtubeUrl: string;
  private apikey: string;
  private playlist: string;
  private nextPageToken: string;

  constructor(public http: HttpClient) {
    this.youtubeUrl = 'https://www.googleapis.com/youtube/v3';
    this.apikey = 'apikey';
    this.playlist = 'playlist';
    this.nextPageToken = '';
  }

  getVideos() {
    const url = `${ this.youtubeUrl }/playlistItems`;
    let params = new HttpParams();
    params = params.set('part', 'snippet');
    params = params.set('maxResults', '10');
    params = params.set('playlistId', this.playlist);
    params = params.set('key', this.apikey);

    if (this.nextPageToken) {
      params = params.set('pageToken', this.nextPageToken);
    }

    return this.http.get(url, { params })
              .pipe( map( (res: any) => {
                console.log(res);
                this.nextPageToken = res.nextPageToken;
                const videos = [];
                for (const video of res.items) {
                  const snippet = video.snippet;
                  videos.push(snippet);
                }
                return videos;
              }));
  }
}
