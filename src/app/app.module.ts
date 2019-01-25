import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TimelineComponent} from './timeline/timeline.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {UserService} from './services/userService';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatGridListModule,
  MatInputModule,
  MatSelectModule,
  MatSidenavModule,
  MatToolbarModule
} from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatExpansionModule} from '@angular/material/expansion';
import {PostComponent} from './post/post.component';
import {PostCreateComponent} from './post/post-create/post-create.component';
import {TimeLineService} from './services/timeLineService';
import {CommentComponent} from './comment/comment.component';
import {CommentCreateComponent} from './comment/comment-create/comment-create.component';


@NgModule({
  declarations: [
    AppComponent,
    TimelineComponent,
    PostComponent,
    PostCreateComponent,
    CommentComponent,
    CommentCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatExpansionModule,
    MatSidenavModule,
    MatGridListModule,
    MatCardModule
  ],
  providers: [UserService, TimeLineService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
