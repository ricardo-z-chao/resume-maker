export type NavItemData = {
  title: string;
  link: string | undefined;
  icon?: string;
  width?: number;
  menu?: NavItemData[];
};
