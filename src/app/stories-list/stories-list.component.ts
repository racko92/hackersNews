import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { HomepageService } from '../services/homepage.service';

@Component({
  selector: 'app-stories-list',
  templateUrl: './stories-list.component.html',
  styleUrls: ['./stories-list.component.scss'],
})
export class StoriesListComponent implements OnInit {
  loadedStoryIds: any = [];
  firstIndex: number = 0
  indexToLoad: number = 10

  constructor(private homepageService: HomepageService) {

  }

  ngOnInit(): void {
    this.homepageService
      .onFetchTopStoriesIds()
      .subscribe((response: any) => {
        this.loadedStoryIds = response
      })
  }

  loadTenMore() {
    this.firstIndex = this.indexToLoad
    this.indexToLoad = this.indexToLoad + 10
  }

  loadPreviousTen() {
    this.firstIndex = this.firstIndex - 10
    this.indexToLoad = this.indexToLoad - 10
  }
}
