// CSS modules
type CSSModuleClasses = { readonly [key: string]: string };

declare module "*.module.css" {
  const classes: CSSModuleClasses;
  export default classes;
}
declare module "*.module.scss" {
  const classes: CSSModuleClasses;
  export default classes;
}
declare module "*.module.sass" {
  const classes: CSSModuleClasses;
  export default classes;
}
declare module "*.module.less" {
  const classes: CSSModuleClasses;
  export default classes;
}

// CSS
declare module "*.css" {}
declare module "*.scss" {}
declare module "*.sass" {}
declare module "*.less" {}
