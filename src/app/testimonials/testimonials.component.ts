import { Component, OnInit, ViewChild, ChangeDetectorRef, ViewEncapsulation } from '@angular/core';
import { NguCarousel, NguCarouselConfig } from '@ngu/carousel';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TestimonialsComponent implements OnInit {
  public carouselTileItems: Array<any>;
  name = 'Angular';
  slideNo = 0;
  withAnim = true;
  resetAnim = true;
  @ViewChild('myCarousel') myCarousel: NguCarousel<any>;
  carouselConfig: NguCarouselConfig = {
    grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
    load: 3,
    // interval: {timing: 3000, initialDelay: 1000},
    loop: true,
    touch: true,
    velocity: 0.2
  }
  carouselItems = [
    {
      id:'1',
      title:'Jojo John Moolayil',
      subTitle: 'Jojo John managed Naveen directly',
      message:'Naveen is an extremely diligent and goal oriented individual. His passion for continuously learning and improving his skillsets'+
      'and problem solving abilities makes him an extremely dependable team member.'+
      'Naveen is technically sound and has rich exposure to a variety of technologies in UI development.'
    }, 
    {
      id:'2',
      title:'Darshith Badiyani',
      subTitle: 'Naveen worked with Darshith in the same group',
      message:'Naveen is one of the serious and hardworking person I have worked with at Flutura. He has great experience on the UI front '+
      'and is open to learn new things and pitch his own ideas for best user experience. He\'s a responsible developer willing to go the '+
      'distance for best output.'
    }, 
  ];

  constructor(private cdr: ChangeDetectorRef) { }


  ngOnInit() {
    this.carouselTileItems = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
    this.cdr.detectChanges();
  }

  moveTo(slide) {
    this.myCarousel.moveTo(slide, !this.withAnim);
  }

}
