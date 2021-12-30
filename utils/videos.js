class Videos {
  static options = [];
  static defaultOption;

  constructor(name, url) {
    this.name = name;
    this.url = url;

    if (!Videos.defaultOption) Videos.defaultOption = this;

    Videos.options.push(this);
  }
}

new Videos("Mice", "/catnip_mice.mp4");
new Videos("Birds", "/videos/birds.mp4");

export default Videos;
