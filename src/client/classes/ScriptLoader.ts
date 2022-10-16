export default class ScriptLoader {
  private scripts: any = []
  constructor(scripts: any) {
    this.scripts = scripts
  }
  async load() {
    await Promise.all(
      this.scripts.map((script: string) => {
        return new Promise((resolve: any, reject: any) => {
          const scriptElement = document.createElement("script")
          scriptElement.src = script
          scriptElement.type = "module"
          scriptElement.defer = true
          document.body.appendChild(scriptElement)
          scriptElement.onload = () => {
            resolve()
          }
        })
      })
    )
  }
}
