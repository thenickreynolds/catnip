class Video {
  constructor(name, path) {
    this.name = name;
    this.path = path;
  }
}

class Videos {
  static options = [
    new Video("Mice", "/videos/mice.mp4"),
    new Video("Birds", "/videos/birds.mp4"),
    new Video("Fireplace", "/videos/Fireplace.mp4"),
    new Video("Sky", "/videos/Sky.mp4"),
    new Video("Nambia", "https://www.youtube.com/watch?v=-s0vUJamgEw"),
  ];

  static defaultOption = this.options[0];

  static fromName(name) {
    const fitleredOptions = this.options.filter((v) => v.name === name);
    if (fitleredOptions.length > 0) {
      return fitleredOptions[0];
    } else {
      return this.defaultOption;
    }
  }
}

export default Videos;
