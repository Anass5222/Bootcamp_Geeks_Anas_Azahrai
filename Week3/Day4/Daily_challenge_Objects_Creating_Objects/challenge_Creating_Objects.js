
class Video {
  constructor(title, uploader, time) {
    this.title = title;       // string
    this.uploader = uploader; // string
    this.time = time;         // number (durée en secondes)
  }

  watch() {
    console.log(`${this.uploader} watched all ${this.time} seconds of ${this.title}!`);
  }
}



const video1 = new Video('Intro to JavaScript', 'Sarah', 120);
video1.watch();

const video2 = new Video('Understanding Classes', 'Mike', 600);
video2.watch();

const videosData = [
  { title: 'Intro to JavaScript', uploader: 'Sarah', time: 120 },
  { title: 'Understanding Classes', uploader: 'Mike', time: 600 },
  { title: 'Array Methods Explained', uploader: 'Emma', time: 450 },
  { title: 'Async JavaScript', uploader: 'Leo', time: 900 },
  { title: 'DOM for Beginners', uploader: 'Nora', time: 300 },
];



const videos = videosData.map(({ title, uploader, time }) => new Video(title, uploader, time));
videos.forEach(video => video.watch());
