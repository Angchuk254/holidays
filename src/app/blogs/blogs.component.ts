import { Component } from '@angular/core';
import { BlogService } from '../services/blog.service';
import { Blog } from '../model/blog.model';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blogs',
  imports: [RouterLink, CommonModule],
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.scss'
})
export class BlogsComponent {
  blogs: Blog[] = [];

  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    this.blogs = this.blogService.getBlogs();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
