import { FsTreeNode } from '../interfaces/FsTreeNode';

export function sortFsTree(tree: FsTreeNode): FsTreeNode {
    tree.children = sortFsTreeNodes(tree.children ?? []);
    return tree;
}

export function sortFsTreeNodes(children: FsTreeNode[]): FsTreeNode[] {
    children.forEach(f => {
        f.children = sortFsTreeNodes(f.children ?? []);
    });

    return children
        .sort((f1, f2) => {
            if (f1.type === f2.type) {
                return 0;
            }

            if (f1.type === 'file') {
                return 1;
            } else {
                return -1;
            }
        })
        .sort((a, b) => {
            if (a.type !== b.type) {
                return 0;
            }

            const nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase();
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
            return 0;
        })
}

let asd = {
    "children": [
        {
            "children": [],
            "extension": "",
            "name": "",
            "path": "",
            "type": "directory"
        },
        {
            "children": [
                {
                    "children": [],
                    "extension": "",
                    "name": "",
                    "path": "",
                    "type": "directory"
                },
                {
                    "children": [],
                    "extension": "",
                    "name": "",
                    "path": "",
                    "type": "file"
                },
                {
                    "children": [],
                    "extension": "",
                    "name": "",
                    "path": "",
                    "type": "file"
                }
            ],
            "extension": "",
            "name": "",
            "path": "",
            "type": "directory"
        },
        {
            "children": [],
            "extension": "",
            "name": "",
            "path": "",
            "type": "file"
        },
        {
            "children": [],
            "extension": "",
            "name": "",
            "path": "",
            "type": "file"
        }
    ],
    "extension": "",
    "name": "",
    "path": "",
    "type": "directory"
}
