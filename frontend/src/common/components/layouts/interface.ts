export interface IModuleLink {
  icon: JSX.Element;
  title: string;
  to?: string;
  isAdminModule: boolean;
  navBottom?: boolean;
  BottomProps?: {
    order: number;
  };
}
