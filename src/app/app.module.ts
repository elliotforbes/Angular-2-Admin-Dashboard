import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

/*
 * Components 
 */
import { AppComponent }  from './app.component';
import { TopNav }        from './common/top-nav/top-nav.component';
import { HomeComponent } from './components/home/home.component';
import { ArticleComponent } from './components/article/article.component';
import { CourseComponent } from './components/course/course.component';
import { UserComponent } from './components/user/user.component';
import { BlogComponent } from './components/blog/blog.component';
import { EmailComponent } from './components/email/email.component';
import { StatsComponent } from './components/stats/stats.component';
import { SocialComponent } from './components/social/social.component';

/*
 * App Routes
 */
const appRoutes: Routes = [
  { path : '', pathMatch: 'full', component: HomeComponent},
  { path: 'article', component: ArticleComponent },
  { path: 'course', component: CourseComponent },
  { path: 'user', component: UserComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'email', component: EmailComponent },
  { path: 'stats', component: StatsComponent },
  { path: 'social', component: SocialComponent }

];

/*
 * Entry Point for Application
 */
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    AppComponent,
    TopNav,
    HomeComponent,
    ArticleComponent,
    CourseComponent,
    UserComponent,
    BlogComponent,
    EmailComponent,
    StatsComponent,
    SocialComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }