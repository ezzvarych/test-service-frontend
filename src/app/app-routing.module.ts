import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AllQuestionsComponent} from './components/questions/all-questions/all-questions.component';
import {AddNewQuestionsComponent} from './components/questions/add-new-questions/add-new-questions.component';
import {RegistrationComponent} from './components/users/auth/registration/registration.component';
import {LoginComponent} from './components/users/auth/login/login.component';
import {AllAreasComponent} from './components/areas/all-areas/all-areas.component';
import {OneAreaComponent} from './components/areas/one-area/one-area.component';
import {WatchVideoComponent} from './components/videos/watch-video/watch-video.component';
import {GetFriendsComponent} from './components/users/get-friends/get-friends.component';
import {UserPageComponent} from './components/users/user-page/user-page.component';
import {ShowAreaTestComponent} from './components/tests/show-area-test/show-area-test.component';
import {AllCompetitionsComponent} from './components/competitions/all-competitions/all-competitions.component';
import {OneCompetitionComponent} from './components/competitions/one-competition/one-competition/one-competition.component';
import {TeacherPageComponent} from './components/teacher/teacher-page/teacher-page.component';
import {AdminPageComponent} from './components/admin/admin-page/admin-page.component';
import {TeacherThemesComponent} from './components/teacher/teacher-themes/teacher-themes.component';
import {MainPageComponent} from './components/main-page/main-page.component';


const routes: Routes = [
  {path: 'questions', component: AllQuestionsComponent},
  {path: 'questions/create', component: AddNewQuestionsComponent},
  {path: 'register', component: RegistrationComponent},
  {path: 'login', component: LoginComponent},
  {path: 'areas', component: AllAreasComponent},
  {path: 'areas/:id', component: OneAreaComponent},
  {path: 'videos/:id', component: WatchVideoComponent},
  {path: 'friends', component: GetFriendsComponent},
  {path: 'users/:id', component: UserPageComponent},
  {path: 'tests/:id', component: ShowAreaTestComponent},
  {path: 'competitions', component: AllCompetitionsComponent},
  {path: 'competitions/:id', component: OneCompetitionComponent},
  {path: 'teacher', component: TeacherPageComponent},
  {path: 'teacher/:id', component: TeacherThemesComponent},
  {path: 'admin', component: AdminPageComponent},
  {path: '', component: MainPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
