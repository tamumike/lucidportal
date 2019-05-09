import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { CommentService } from './_services/comment.service';
import { CommentListComponent } from './comment/comment-list/comment-list.component';
import { CommentCreateComponent } from './comment/comment-create/comment-create.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { HomeComponent } from './home/home.component';
import { CommentEditComponent } from './comment/comment-edit/comment-edit.component';
import { AlertifyService } from './_services/alertify.service';
import { CommentEditResolver } from './_resolvers/comment-edit.resolver';

@NgModule({
   declarations: [
      AppComponent,
      NavComponent,
      CommentListComponent,
      CommentCreateComponent,
      CommentEditComponent,
      HomeComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule,
      RouterModule.forRoot(appRoutes)
   ],
   providers: [
      CommentService,
      AlertifyService,
      CommentEditResolver
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
