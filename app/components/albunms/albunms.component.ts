import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-albunms',
  templateUrl: './albunms.component.html',
  styleUrls: ['./albunms.component.scss']
})
export class AlbunmsComponent implements OnInit {

  constructor( private service:SpotifyService) { }

  nuevasCanciones: any[]= [];
  ngOnInit(): void {
    this.service.getNewReleases()
      .subscribe((data:any) => { 
        // console.log(data.albums.items);
        this.nuevasCanciones = data.albums.items;
      })
  }

}
