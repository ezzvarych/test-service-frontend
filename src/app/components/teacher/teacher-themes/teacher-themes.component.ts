import {Component, OnInit} from '@angular/core';
import {QuestionAreaService} from '../../../services/questions/question-area.service';
import {ActivatedRoute} from '@angular/router';
import {QuestionArea} from '../../../model/question/question-area';
import {VideoService} from '../../../services/videos/video.service';
import {QuestionsService} from '../../../services/questions/questions.service';
import {NewVideo} from '../../../model/video/new-video';
import {ThemeVideo} from '../../../model/video/theme-video';
import {AreaTheme} from '../../../model/question/area-theme';
import {QuestionOutput} from '../../../model/question/question-output';
import {QuestionType} from '../../../model/question/question-type.enum';

@Component({
  selector: 'app-teacher-themes',
  templateUrl: './teacher-themes.component.html',
  styleUrls: ['./teacher-themes.component.css']
})
export class TeacherThemesComponent implements OnInit {

  areaId: number;

  currentTheme: AreaTheme = new AreaTheme();

  isVideos = false;
  isQuestions = false;

  videos: ThemeVideo[] = [];

  newVideo: NewVideo = new NewVideo();

  questionArea: QuestionArea = new QuestionArea();

  questions: QuestionOutput[] = [];

  questionType = QuestionType;

  constructor(private questionAreaService: QuestionAreaService, private videoService: VideoService,
              private questionService: QuestionsService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.areaId = +this.route.snapshot.paramMap.get('id');
    this.questionAreaService.getOne(this.areaId).subscribe(area => {
      this.questionArea = area;
      console.log(this.questionArea);
    });
  }

  openVideos(areaTheme: AreaTheme) {
    this.currentTheme = areaTheme;
    this.isQuestions = false;
    this.isVideos = true;
    this.videoService.getVideosByThemeId(this.currentTheme.id).subscribe(videos => {
      this.videos = videos;
    });
  }

  addNewVideo() {
    this.newVideo.areaThemeId = this.currentTheme.id;
    this.videoService.addNew(this.newVideo).subscribe(value => {
      const video = new ThemeVideo();
      video.url = this.newVideo.url;
      this.videos.push(video);
    });
  }

  deleteVideo(videoId: number) {
    this.videoService.delete(videoId).subscribe(resp => {
      this.videos = this.videos.filter(v => v.id !== videoId);
    });
  }

  openQuestions(areaTheme: AreaTheme) {
    this.currentTheme = areaTheme;
    this.isVideos = false;
    this.isQuestions = true;
    this.questionService.getByTheme(areaTheme.id).subscribe(quest => this.questions = quest);
  }

  close() {
    this.isVideos = false;
    this.isQuestions = false;
  }
}
