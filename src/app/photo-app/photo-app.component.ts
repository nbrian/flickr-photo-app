import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { PhotoService, Photo } from '../shared';

@Component({
  selector: 'photo-app',
  templateUrl: './photo-app.component.html',
  styleUrls: ['./photo-app.component.scss']
})
export class PhotoAppComponent implements OnInit {
  photos: Array<Photo>;
  pages: number;
  page: number;
  searchForm;
  searching: boolean;

  constructor(private photoService: PhotoService){}

  ngOnInit() {
    this.searching = false;
    const searchDetails = !!this.photoService.getSearchDetails() ? this.photoService.getSearchDetails() : {text: '', page: 1};

    this.searchForm = new FormGroup({
      search: new FormControl(searchDetails.text)
    });
    this.page = searchDetails.page;

    if(!!searchDetails.text) {
      this.submit(this.page);
    }
  }

  getThumbnail(photo: Photo) {
    return `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_s.jpg`;
  }

  submit(page) {
    this.searching = true;
    this.photoService.getPhotos(this.searchForm.value.search, page).subscribe(
      photos => {
        this.searching = false;
        this.photos = photos.photo
        this.page = photos.page
        this.pages = Number(photos.pages)
      }
    );
  }
}
