import { Routes } from '@angular/router';
import { CommentCreateComponent } from './comment/comment-create/comment-create.component';
import { HomeComponent } from './home/home.component';
import { CommentListComponent } from './comment/comment-list/comment-list.component';
import { CommentEditComponent } from './comment/comment-edit/comment-edit.component';
import { CommentEditResolver } from './_resolvers/comment-edit.resolver';

export const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    {
        path: '',
        runGuardsAndResolvers: 'always',
        children: [
            { path: 'comment-create', component: CommentCreateComponent },
            { path: 'comment-list', component: CommentListComponent },
            { path: 'comment/:id', component: CommentEditComponent, resolve: {comment: CommentEditResolver} }
        ]
    },
    { path: '**', redirectTo: '', pathMatch: 'full'}
];
