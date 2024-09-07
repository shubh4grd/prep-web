import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonials-section',
  templateUrl: './testimonials-section.component.html',
  styleUrls: ['./testimonials-section.component.css']
})
export class TestimonialsSectionComponent {

  testimonials = [
    { review: 'Excellent app!', name: 'Mandeep Kaur', location: 'Chandigarh', image : 'assets/images/user-img.svg' },
    { review: 'This app helped me study.', name: 'John Doe', location: 'New York', image : 'assets/images/user-img.svg' },
    { review: 'Great practice questions.', name: 'Jane Smith', location: 'London', image : 'assets/images/user-img.svg' }
  ];
}
