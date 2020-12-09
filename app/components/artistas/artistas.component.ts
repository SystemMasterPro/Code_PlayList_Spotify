import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-artistas',
  templateUrl: './artistas.component.html',
  styleUrls: ['./artistas.component.scss']
})
export class ArtistasComponent implements OnInit {
  artista: any = {};
  topTracks: any[] = [];
  constructor( private service:SpotifyService,private activeRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe((p: any) => {
      this.getArtista(p['id']);
      this.getTracks(p['id']);
    });
  }

  getArtista(id: string) { 
    this.service.getArtista(id).subscribe(a => { 
      this.artista = a;
      console.log(a)
    })
  }

    getTracks(id: string) {
    this.service.getTopTracks(id).subscribe((t:any) => { 
      this.topTracks = t.tracks;
      console.log(this.topTracks)
    })
   }
}
