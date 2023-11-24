import { Component, Input, OnInit } from '@angular/core';
import { HomepageService } from '../services/homepage.service';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss'],
})
export class StoryComponent implements OnInit {
  loadedStoriesIds: number[] = [];
  // @Input() loadedStories: any = [];
  @Input() storyId!: number
  @Input() index!: number
  story?: any;
  baseUrl: any;
  error: string = '';

  constructor(private homepageService: HomepageService) { }

  // get baseUrl variable from service for http.get
  public get displayBaseUrl(): string {
    return this.homepageService.baseUrl;
  }

  ngOnInit() {
    this.homepageService.onFetchStory(this.storyId).subscribe(
      (responseData) => {
        // Shallow Copy
        this.story = responseData
        // this.loadedStories = [...this.loadedStories, responseData];
      },
      (error: string) => {
        this.error = error;
        console.log(error);
      }
    )
  }
}
