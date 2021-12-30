class Video {
  constructor(name, path) {
    this.name = name;
    this.path = path;
  }
}

class Videos {
  static MICE = new Video("Mice", "/videos/mice.mp4");
  static BIRDS = new Video("Birds", "/videos/birds.mp4");
  static options = [this.MICE, this.BIRDS];

  static defaultOption = this.MICE;
}

export default Videos;
