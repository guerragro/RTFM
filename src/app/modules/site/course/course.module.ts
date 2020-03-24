import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseComponent } from './component/course/course.component';
import {FormsModule} from '@angular/forms';
import {CourseRouting} from './course-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {CourseService} from './course.service';

@NgModule({
  declarations: [CourseComponent],
  imports: [
    HttpClientModule,
    CommonModule,
    FormsModule,
    CourseRouting
  ],
  providers: [
    CourseService,
    HttpClientModule
  ]
})
export class CourseModule { }
