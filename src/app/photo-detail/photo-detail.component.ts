import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Photo, PhotoService } from '../shared';

@Component({
  selector: 'photo-detail',
  templateUrl: './photo-detail.component.html',
  styleUrls: ['./photo-detail.component.scss']
})
export class PhotoDetailComponent implements OnInit {
  id: string;
  photo: Photo;
  title: string;
  imgSrc: string;
  details: {title: string, description: string, tags: string[]};
  searching:boolean;

  constructor(
    private router: Router,
    private route: ActivatedRoute, 
    private photoService: PhotoService){}

  ngOnInit() {
    this.searching = true;

    const id = this.route.snapshot.paramMap.get('id');
    this.photoService.getPhotoDetail(id).subscribe(photo=> {
      this.details = {
        title: photo.title._content,
        description: photo.description._content,
        tags: photo.tags.tag.map(t => t['_content'])
      }
      const size = 'z';
      this.imgSrc = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_${size}.jpg`;

      this.searching = false;
    });
  }

  back() {
    this.router.navigate(['photos']);
  }

}
