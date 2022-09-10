import { sortFsTree } from './sortFsTree';

test('test fs tree sorting', () => {

    // expect(sortFsTree({
    //     type: 'directory',
    //     name: '',
    //     path: '',
    //     extension: '',
    //     children: [
    //         {
    //             type: 'file',
    //             name: '',
    //             path: '',
    //             extension: '',
    //             children: [],
    //         },
    //         {
    //             type: 'directory',
    //             name: '',
    //             path: '',
    //             extension: '',
    //             children: [
    //                 {
    //                     type: 'file',
    //                     name: '',
    //                     path: '',
    //                     extension: '',
    //                     children: [],
    //                 },
    //                 {
    //                     type: 'file',
    //                     name: '',
    //                     path: '',
    //                     extension: '',
    //                     children: [],
    //                 },
    //                 {
    //                     type: 'directory',
    //                     name: '',
    //                     path: '',
    //                     extension: '',
    //                     children: [],
    //                 }
    //             ],
    //         },
    //         {
    //             type: 'file',
    //             name: '',
    //             path: '',
    //             extension: '',
    //             children: [],
    //         },
    //         {
    //             type: 'directory',
    //             name: '',
    //             path: '',
    //             extension: '',
    //             children: [],
    //         }
    //     ],
    // })).toEqual({
    //     type: 'directory',
    //     name: '',
    //     path: '',
    //     extension: '',
    //     children: [
    //         {
    //             type: 'directory',
    //             name: '',
    //             path: '',
    //             extension: '',
    //             children: [],
    //         },
    //         {
    //             type: 'directory',
    //             name: '',
    //             path: '',
    //             extension: '',
    //             children: [
    //                 {
    //                     type: 'directory',
    //                     name: '',
    //                     path: '',
    //                     extension: '',
    //                     children: [],
    //                 },
    //                 {
    //                     type: 'file',
    //                     name: '',
    //                     path: '',
    //                     extension: '',
    //                     children: [],
    //                 },
    //                 {
    //                     type: 'file',
    //                     name: '',
    //                     path: '',
    //                     extension: '',
    //                     children: [],
    //                 }
    //             ],
    //         },
    //         {
    //             type: 'file',
    //             name: '',
    //             path: '',
    //             extension: '',
    //             children: [],
    //         },
    //         {
    //             type: 'file',
    //             name: '',
    //             path: '',
    //             extension: '',
    //             children: [],
    //         }
    //     ],
    // });

    expect(sortFsTree({
        "path": "./",
        "name": ".",
        "children": [
            {
                "path": ".git",
                "name": ".git",
                "children": [
                    {
                        "path": ".git/COMMIT_EDITMSG",
                        "name": "COMMIT_EDITMSG",
                        "type": "file",
                        "extension": ""
                    },
                    {
                        "path": ".git/HEAD",
                        "name": "HEAD",
                        "type": "file",
                        "extension": ""
                    },
                    {
                        "path": ".git/ORIG_HEAD",
                        "name": "ORIG_HEAD",
                        "type": "file",
                        "extension": ""
                    },
                    {
                        "path": ".git/config",
                        "name": "config",
                        "type": "file",
                        "extension": ""
                    },
                    {
                        "path": ".git/description",
                        "name": "description",
                        "type": "file",
                        "extension": ""
                    },
                    {
                        "path": ".git/hooks",
                        "name": "hooks",
                        "type": "directory"
                    },
                    {
                        "path": ".git/index",
                        "name": "index",
                        "type": "file",
                        "extension": ""
                    },
                    {
                        "path": ".git/info",
                        "name": "info",
                        "type": "directory"
                    },
                    {
                        "path": ".git/logs",
                        "name": "logs",
                        "type": "directory"
                    },
                    {
                        "path": ".git/objects",
                        "name": "objects",
                        "type": "directory"
                    },
                    {
                        "path": ".git/packed-refs",
                        "name": "packed-refs",
                        "type": "file",
                        "extension": ""
                    },
                    {
                        "path": ".git/refs",
                        "name": "refs",
                        "type": "directory"
                    }
                ],
                "type": "directory"
            },

        ],
        "type": "directory"
    })).toEqual({
        "path": "./",
        "name": ".",
        "children": [
            {
                "path": ".git",
                "name": ".git",
                "children": [
                    {
                        "path": ".git/hooks",
                        "name": "hooks",
                        "type": "directory"
                    },
                    {
                        "path": ".git/info",
                        "name": "info",
                        "type": "directory"
                    },
                    {
                        "path": ".git/logs",
                        "name": "logs",
                        "type": "directory"
                    },
                    {
                        "path": ".git/objects",
                        "name": "objects",
                        "type": "directory"
                    },
                    {
                        "path": ".git/refs",
                        "name": "refs",
                        "type": "directory"
                    },
                    {
                        "path": ".git/COMMIT_EDITMSG",
                        "name": "COMMIT_EDITMSG",
                        "type": "file",
                        "extension": ""
                    },
                    {
                        "path": ".git/HEAD",
                        "name": "HEAD",
                        "type": "file",
                        "extension": ""
                    },
                    {
                        "path": ".git/ORIG_HEAD",
                        "name": "ORIG_HEAD",
                        "type": "file",
                        "extension": ""
                    },
                    {
                        "path": ".git/config",
                        "name": "config",
                        "type": "file",
                        "extension": ""
                    },
                    {
                        "path": ".git/description",
                        "name": "description",
                        "type": "file",
                        "extension": ""
                    },
                    {
                        "path": ".git/index",
                        "name": "index",
                        "type": "file",
                        "extension": ""
                    },
                    {
                        "path": ".git/packed-refs",
                        "name": "packed-refs",
                        "type": "file",
                        "extension": ""
                    },
                ],
                "type": "directory"
            },

        ],
        "type": "directory"
    })
});
