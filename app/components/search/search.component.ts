import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  artistas: any;
  constructor( private service:SpotifyService, private router:Router) { }

  ngOnInit(): void {
  }
  buscar(palabra: string) { 
    this.service.getArtistas(palabra)
      .subscribe((data: any) => {
        this.artistas = data.artists.items;
      });
  }

  verArtistas(item:string) { 
    this.router.navigate(['/artist', item]);
  }
}
