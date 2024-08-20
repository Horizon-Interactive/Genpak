export default class {
  constructor(private str: string) {}

  /**
   * Will Generate random text for the save file
   */
  public generate() {
    const split = this.splitText();
    const arr: string[] = [];
    arr[0] = split[0].replace(".", "#");
    arr[1] = split[1].replace("a", "#");
    arr[2] = split[2].replace(":", "#");
    return arr.join("||");
  }

  public splitText() {
    return this.str.split("%");
  }
}
