import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'YRPIndustry';
  courseArr: any = [
    {
      id: 1, courseImg: '../assets/images/download.png', courseName: "MEAN Stack",
      synopsis: "test",
      seoUri: "aSZ"
    },
    {
      id: 1, courseImg: '../assets/images/react.png', courseName: "MEAN Stack",
      synopsis: "test",
      seoUri: "aSZ"
    },
    {
      id: 1, courseImg: '', courseName: "MEAN Stack",
      synopsis: "test",
      seoUri: "aSZ"
    },
    {
      id: 1, courseImg: '', courseName: "MEAN Stack",
      synopsis: "test",
      seoUri: "aSZ"
    }

  ]
  courseConfig = {
    dots: false,
    infinite: false,
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: false,
          arrows: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          dots: false,
        },
      },
    ],
  };
  reviewList: any = [
    {
      id: 1,  courseName: "MEAN Stack",
      userName: "test",
      review: "aSZ",
      reviewDays:'10 days'
    },
    {
      id: 1,  courseName: "MEAN Stack",
      userName: "test",
      review: "aSZ",
      reviewDays:'10 days'
    },
    {
      id: 1,  courseName: "MEAN Stack",
      userName: "test",
      review: "aSZ",
      reviewDays:'1 days'
    },
    {
      id: 1,  courseName: "MEAN Stack",
      userName: "test",
      review: "aSZ",
      reviewDays:'1 days'
    }

  ]
  reviewConfig = {
    dots: false,
    infinite: false,
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: false,
          arrows: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          dots: false,
        },
      },
    ],
  };
}
