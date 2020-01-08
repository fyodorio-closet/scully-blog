# ScullyBlog

### Draft steps to build the blog from scratch with [Scully](https://github.com/scullyio/scully ) (Angular-based static site generator) using dynamic data from [dev.to API](https://docs.dev.to/api/). Based on [this article](https://dev.to/dkoppenhagen/create-powerfull-fast-pre-rendered-angular-apps-using-scully-static-site-generator-31fb) and [official docs](https://github.com/scullyio/scully/blob/master/docs/getting-started.md).
* `npx -p @angular/cli@^9.0.0-rc ng new scully-blog --routing`
* `cd scully-blog`
* `ng add @scullyio/init`
* `ng g @scullyio/init:blog`
* `ng g m home --route=home --module=app-routing`
* configure routes, update home component ([read more](https://github.com/scullyio/scully/blob/master/docs/getting-started.md))
* `app.component.html` should contain `<router-outlet></router-outlet>` (remove unnecessary code)
* add dev.to API config properties to routes of `scully.config.js` ([read more](https://dev.to/dkoppenhagen/create-powerfull-fast-pre-rendered-angular-apps-using-scully-static-site-generator-31fb))
* add `HttpClientModule` to imports of `app.module.ts`
* *add service to fetch post data for each post page*
* for development run `npm start`
* for static site building
    * `npm run build`
    * `npm run scully`
    * `npm run scully:serve` or `cd dist/static && npx http-server`
* *probably, routing will not work with child routing modules - provide all the modules/components for app routes inside the parent one*
