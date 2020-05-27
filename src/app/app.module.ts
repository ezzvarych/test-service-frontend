import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AllQuestionsComponent} from './components/questions/all-questions/all-questions.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {WebSocketComponent} from './components/web-socket/web-socket.component';
import {AddNewQuestionsComponent} from './components/questions/add-new-questions/add-new-questions.component';
import {WatchVideoComponent} from './components/videos/watch-video/watch-video.component';
import {RegistrationComponent} from './components/users/auth/registration/registration.component';
import {LoginComponent} from './components/users/auth/login/login.component';
import {PageHeaderComponent} from './components/page-header/page-header.component';
import {AllAreasComponent} from './components/areas/all-areas/all-areas.component';
import {JwtInterceptor} from './interceptors/jwt-interceptor';
import {OneAreaComponent} from './components/areas/one-area/one-area.component';
import {ShowThemeTestComponent} from './components/tests/show-theme-test/show-theme-test.component';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatRadioModule} from '@angular/material/radio';
import {GetFriendsComponent} from './components/users/get-friends/get-friends.component';
import {GlobalErrorHandler} from './interceptors/global-error-handler';
import {UserPageComponent} from './components/users/user-page/user-page.component';
import {LeaderboardComponent} from './components/leaderboard/leaderboard.component';
import {ShowAreaTestComponent} from './components/tests/show-area-test/show-area-test.component';
import {AllCompetitionsComponent} from './components/competitions/all-competitions/all-competitions.component';
import {OneCompetitionComponent} from './components/competitions/one-competition/one-competition/one-competition.component';
import {TeacherPageComponent} from './components/teacher/teacher-page/teacher-page.component';
import {AdminPageComponent} from './components/admin/admin-page/admin-page.component';
import {TeacherThemesComponent} from './components/teacher/teacher-themes/teacher-themes.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MainPageComponent} from './components/main-page/main-page.component';
import {PageFooterComponent} from './components/page-footer/page-footer.component';
import {RoleOutputPipe} from './interceptors/pipes/role-output.pipe';
import {TimeSpentPipe} from './interceptors/pipes/time-spent.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AllQuestionsComponent,
    WebSocketComponent,
    AddNewQuestionsComponent,
    WatchVideoComponent,
    RegistrationComponent,
    LoginComponent,
    PageHeaderComponent,
    AllAreasComponent,
    OneAreaComponent,
    ShowThemeTestComponent,
    GetFriendsComponent,
    UserPageComponent,
    LeaderboardComponent,
    ShowAreaTestComponent,
    AllCompetitionsComponent,
    OneCompetitionComponent,
    TeacherPageComponent,
    AdminPageComponent,
    TeacherThemesComponent,
    MainPageComponent,
    PageFooterComponent,
    RoleOutputPipe,
    TimeSpentPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatRadioModule,
    NoopAnimationsModule,
    NgbModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    },
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandler
    }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
