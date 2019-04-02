export class DemoServiceService {

  private cnt: number = 0
  inc() {
    return ++this.cnt
  }
  dec() {
    return --this.cnt
  }
}
