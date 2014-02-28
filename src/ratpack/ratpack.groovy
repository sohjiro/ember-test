import static ratpack.groovy.Groovy.ratpack
import static ratpack.groovy.Groovy.groovyTemplate

ratpack {
  handlers {
    get {
      render groovyTemplate("index.html")
    }

    assets "public"
  }
}
