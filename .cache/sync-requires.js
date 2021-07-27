
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-js": preferDefault(require("/home/user42/florianne.fr/src/pages/404.js")),
  "component---src-pages-42-projects-js": preferDefault(require("/home/user42/florianne.fr/src/pages/42projects.js")),
  "component---src-pages-aboutme-js": preferDefault(require("/home/user42/florianne.fr/src/pages/aboutme.js")),
  "component---src-pages-index-js": preferDefault(require("/home/user42/florianne.fr/src/pages/index.js")),
  "component---src-pages-myprojects-js": preferDefault(require("/home/user42/florianne.fr/src/pages/myprojects.js")),
  "component---src-pages-resume-js": preferDefault(require("/home/user42/florianne.fr/src/pages/resume.js")),
  "component---src-pages-translate-js": preferDefault(require("/home/user42/florianne.fr/src/pages/translate.js"))
}

