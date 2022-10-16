import Emitter from "./Emitter"
import { GLTFLoader } from "../../../node_modules/three/examples/jsm/loaders/GLTFLoader"
export default class Loader extends Emitter {
  private loader: GLTFLoader
  constructor() {
    super()
    this.loader = new GLTFLoader()
  }
  async load(path: string) {
    return new Promise((resolve, reject) => {
      this.emit("loading", path)
      this.loader.load(
        path,
        (gbl) => {
          this.emit("loaded", gbl)
          resolve(gbl)
        },
        (xhr) => {
          this.emit("progress", xhr.loaded / xhr.total)
        },
        (err) => {
          this.emit("error", err)
          reject(err)
        }
      )
    })
  }
}
