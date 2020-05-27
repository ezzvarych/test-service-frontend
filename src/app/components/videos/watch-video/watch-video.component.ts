import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
import {CommentsService} from '../../../services/comments/comments.service';
import {CommentOutput} from '../../../model/video/comment-output';
import {CommentInput} from '../../../model/video/comment-input';
import {UserInfo} from '../../../model/user/user-info';
import {AreaThemeService} from '../../../services/questions/area-theme.service';
import {AreaThemeVideos} from '../../../model/question/area-theme-videos';

@Component({
  selector: 'app-watch-video',
  templateUrl: './watch-video.component.html',
  styleUrls: ['./watch-video.component.css']
})
export class WatchVideoComponent implements OnInit {

  id: number;

  themeVideos: AreaThemeVideos;

  currentVideoNumber = 0;
  comments: CommentOutput[] = [];
  newCommentInput: CommentInput = new CommentInput();

  isTestOpened = false;

  localStorage = localStorage;

  currentUser: UserInfo = (JSON.parse(localStorage.getItem('user')) as UserInfo);

  currentUrl: SafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl('');

  constructor(private areaThemeService: AreaThemeService, private commentsService: CommentsService,
              private route: ActivatedRoute, private sanitizer: DomSanitizer) {
  }

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.areaThemeService.getVideos(this.id).subscribe(videos => {
      this.themeVideos = videos;
      this.getCurrentVideoUrl();
      this.getCurrentVideoComments();
      // console.log(this.currentUrl);
    });
  }

  moveToNext(): boolean {
    if (this.themeVideos.videos.length === this.currentVideoNumber + 1) {
      return false;
    } else {
      this.currentVideoNumber++;
      this.getCurrentVideoUrl();
      this.getCurrentVideoComments();
      return true;
    }
  }

  private getCurrentVideoUrl() {
    this.currentUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.themeVideos.videos[this.currentVideoNumber].url);
  }

  getCurrentVideoComments() {
    this.commentsService.getVideoComments(this.themeVideos.videos[this.currentVideoNumber].id)
      .subscribe(comm => {
        this.comments = comm;
      });
  }

  moveToPrev() {
    if (this.isTestOpened) {
      this.isTestOpened = false;
      return;
    }
    this.currentVideoNumber--;
    this.getCurrentVideoUrl();
    this.getCurrentVideoComments();

  }

  existNext(): boolean {
    return this.themeVideos.videos.length - 1 > this.currentVideoNumber;
  }

  existPrev(): boolean {
    return this.currentVideoNumber > 0;
  }

  openTest() {
    this.isTestOpened = true;
  }

  sendComment() {
    console.log('Send ' + this.currentUser);
    this.newCommentInput.userId = this.currentUser.id;
    this.newCommentInput.videoId = this.themeVideos.videos[this.currentVideoNumber].id;
    this.commentsService.postComment(this.newCommentInput).subscribe(comm => {
      this.newCommentInput = new CommentInput();
      comm.userInfo = this.currentUser;
      this.comments.unshift(comm);
    });
  }

  setStyle() {
    return JSON.parse(localStorage.getItem('style'));
  }
}
