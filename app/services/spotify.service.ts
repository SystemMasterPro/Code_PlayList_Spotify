import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  cabeceras: HttpHeaders = new HttpHeaders({
    'Authorization':'Bearer BQBEO8TejaTgWAvFyCQrU_XMrOXRog6hlMVuSgLRqwehhnhu4sKS40zIFrFDbz9iDTsgVWgTydvo52q-o5s',
  })
  constructor(private http: HttpClient) { }
  
  getNewReleases() { 
   return this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers:this.cabeceras});
  }
  getArtistas(palabra: string) { 
   return this.http.get(`https://api.spotify.com/v1/search?q=${palabra}&type=artist&limit=15`,{ headers: this.cabeceras })
  }
  getArtista(id:string){
return this.http.get(`https://api.spotify.com/v1/artists/${id}`,{ headers: this.cabeceras });
}

getTopTracks(id:string){
return this.http.get(`https://api.spotify.com/v1/artists/${id}/top-tracks?country=us`,{ headers: this.cabeceras });
}
}
