export interface FsTreeNode {
    type: string;
    extension?: string;
    path: string;
    name: string;
    children?: FsTreeNode[];
    description?: string;
}
