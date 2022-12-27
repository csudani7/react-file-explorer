type ChildrenType = {
  id: string;
  module: string;
  leaf?: boolean;
  children?: Array<ChildrenType>;
  collapsed?: boolean | undefined;
};

interface TreeChild {
  id: string;
  module: string;
  leaf?: boolean;
  collapsed?: boolean | undefined;
  children?: Array<ChildrenType>;
}

export interface TreeType {
  id: string;
  module: string;
  collapsed: boolean;
  children: Array<TreeChild>;
}
