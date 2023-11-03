import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponentComponent } from './components/login-component/login-component.component';
import { HomeComponent } from './components/home/home.component';
import { UpdateComponent } from './components/update/update.component';
import { EditComponent } from './components/edit/edit.component';
import { PostComponent } from './components/post/post.component';



const routes: Routes = [
  { path: 'login', component: LoginComponentComponent },
  { path: 'home', component: HomeComponent },
  { path: 'update', component: UpdateComponent },
  { path: 'edit/:id', component: EditComponent },
  { path: 'post', component: PostComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
