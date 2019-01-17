import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  // Variable to hold book data GET from API
  book = {};

  constructor(private route:ActivatedRoute, private api: ApiService) { }

  // Function to get book details from the API
  getBookDetails(id) {
    this.api.getBook(id)
      .subscribe(data => {
        console.log(data);
        this.book = data;
      });
  }

  // Call the getBookDetails function when the component is initiated
  ngOnInit() {
    this.getBookDetails(this.route.snapshot.params['id']);
  }

}
