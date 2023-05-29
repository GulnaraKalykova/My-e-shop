class Router {
  routes = [];

  constructor() {
    this.listen();
  }

  add = (path, cb) => {
    this.routes.push({ path, cb });
    //routes = [{path:'card/id', cb:()=> console.log('HELLO')}]
    return this;
  };

  listen = () => {
    clearInterval(this.interval);
    this.interval = setInterval(this.interval, 50);
  };

  getFragment = () => {
    let fragment = "";
    const match = window.location.href.match(/#(.*)$/);
    fragment = match ? match[1] : "";
    return fragment;
  };

  interval = () => {
    if (this.current === this.getFragment()) return;
    this.current = this.getFragment();
    // card/2
    this.routes.some((route) => {
      //routes = [{path:'card/id', cb:()=> console.log('Hello')}, ]
      // console.log("current", this.current);
      // console.log('route.path', route.path)
      const match = this.current.match(route.path);
      // console.log("match", match);
      if (match) {
        match.shift();
        route.cb(match[0]);
      }
      return false;
    });
  };
}

export default Router;
