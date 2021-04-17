
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/home/user42/florianne.fr/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/home/user42/florianne.fr/src/pages/404.js")),
  "component---src-pages-index-js": preferDefault(require("/home/user42/florianne.fr/src/pages/index.js")),
  "component---src-pages-resume-js": preferDefault(require("/home/user42/florianne.fr/src/pages/resume.js"))
}

