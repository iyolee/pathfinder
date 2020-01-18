export interface IRouteData {
  path: string;
  component?: any;
  layout?: any;
  name?: string;
  icon?: string;
  routes?: IRouteData[];
  redirect?: string;
  exact?: boolean;
  auth?: boolean | string | string[];
}
