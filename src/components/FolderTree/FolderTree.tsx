/** @jsx h */
import { Fragment, h } from 'preact';
import { useCallback, useState } from 'preact/hooks';
import styles from './FolderTree.scss';
import '../../registry/icons/ts-file-icon.component'
import '../../registry/icons/folder-icon.component'
import { FolderLine } from './FolderLine/FolderLine';
import { FileLine } from './FileLine/FileLine';
import { DraggableDivider } from './DraggableDivider/DraggableDivider';
import { Ref, useRef } from 'preact/compat';
import { FsTreeNode } from './interfaces/FsTreeNode';
import { sortFsTree } from './helpers/sortFsTree'

const PROJECT_VIEW_WIDTH = 300;

export function FolderTree() {
    let fsTree: FsTreeNode = {
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
                        "extension": "",
                        "description": "Описание readme несколько слов о папочке можно вместе со ссылкой anchor"
                    },
                    {
                        "path": ".git/HEAD",
                        "name": "HEAD",
                        "type": "file",
                        "extension": "",
                        "description": "Описание readme несколько слов о папочке можно вместе со ссылкой anchor"
                    },
                    {
                        "path": ".git/ORIG_HEAD",
                        "name": "ORIG_HEAD",
                        "type": "file",
                        "extension": "",
                        "description": "Описание readme несколько слов о папочке можно вместе со ссылкой anchor"
                    },
                    {
                        "path": ".git/config",
                        "name": "config",
                        "type": "file",
                        "extension": "",
                        "description": "Описание readme несколько слов о папочке можно вместе со ссылкой anchor"
                    },
                    {
                        "path": ".git/description",
                        "name": "description",
                        "type": "file",
                        "extension": "",
                        "description": "Описание readme несколько слов о папочке можно вместе со ссылкой anchor"
                    },
                    {
                        "path": ".git/hooks",
                        "name": "hooks",
                        "type": "directory",
                        "description": "Описание readme несколько слов о папочке можно вместе со ссылкой anchor"
                    },
                    {
                        "path": ".git/index",
                        "name": "index",
                        "type": "file",
                        "extension": "",
                        "description": "Описание readme несколько слов о папочке можно вместе со ссылкой anchor"
                    },
                    {
                        "path": ".git/info",
                        "name": "info",
                        "type": "directory",
                        "description": "Описание readme несколько слов о папочке можно вместе со ссылкой anchor"
                    },
                    {
                        "path": ".git/logs",
                        "name": "logs",
                        "type": "directory",
                        "description": "Описание readme несколько слов о папочке можно вместе со ссылкой anchor"
                    },
                    {
                        "path": ".git/objects",
                        "name": "objects",
                        "type": "directory",
                        "description": "Описание readme несколько слов о папочке можно вместе со ссылкой anchor"
                    },
                    {
                        "path": ".git/packed-refs",
                        "name": "packed-refs",
                        "type": "file",
                        "extension": "",
                        "description": "Описание readme несколько слов о папочке можно вместе со ссылкой anchor"
                    },
                    {
                        "path": ".git/refs",
                        "name": "refs",
                        "type": "directory",
                        "description": "Описание readme несколько слов о папочке можно вместе со ссылкой anchor"
                    }
                ],
                "type": "directory",
                "description": "Описание readme несколько слов о папочке можно вместе со ссылкой anchor"
            },
            {
                "path": ".gitignore",
                "name": ".gitignore",
                "type": "file",
                "extension": "",
                "description": "Описание readme несколько слов о папочке можно вместе со ссылкой anchor"
            },
            {
                "path": ".idea",
                "name": ".idea",
                "children": [
                    {
                        "path": ".idea/codestream.xml",
                        "name": "codestream.xml",
                        "type": "file",
                        "extension": ".xml",
                        "description": "Описание readme несколько слов о папочке можно вместе со ссылкой anchor"
                    },
                    {
                        "path": ".idea/custom.iml",
                        "name": "custom.iml",
                        "type": "file",
                        "extension": ".iml",
                        "description": "Описание readme несколько слов о папочке можно вместе со ссылкой anchor"
                    },
                    {
                        "path": ".idea/deployment.xml",
                        "name": "deployment.xml",
                        "type": "file",
                        "extension": ".xml",
                        "description": "Описание readme несколько слов о папочке можно вместе со ссылкой anchor"
                    },
                    {
                        "path": ".idea/inspectionProfiles",
                        "name": "inspectionProfiles",
                        "type": "directory",
                        "description": "Описание readme несколько слов о папочке можно вместе со ссылкой anchor"
                    },
                    {
                        "path": ".idea/modules.xml",
                        "name": "modules.xml",
                        "type": "file",
                        "extension": ".xml",
                        "description": "Описание readme несколько слов о папочке можно вместе со ссылкой anchor"
                    },
                    {
                        "path": ".idea/sshConfigs.xml",
                        "name": "sshConfigs.xml",
                        "type": "file",
                        "extension": ".xml",
                        "description": "Описание readme несколько слов о папочке можно вместе со ссылкой anchor"
                    },
                    {
                        "path": ".idea/vcs.xml",
                        "name": "vcs.xml",
                        "type": "file",
                        "extension": ".xml",
                        "description": "Описание readme несколько слов о папочке можно вместе со ссылкой anchor"
                    },
                    {
                        "path": ".idea/watcherTasks.xml",
                        "name": "watcherTasks.xml",
                        "type": "file",
                        "extension": ".xml",
                        "description": "Описание readme несколько слов о папочке можно вместе со ссылкой anchor"
                    },
                    {
                        "path": ".idea/webServers.xml",
                        "name": "webServers.xml",
                        "type": "file",
                        "extension": ".xml",
                        "description": "Описание readme несколько слов о папочке можно вместе со ссылкой anchor"
                    },
                    {
                        "path": ".idea/workspace.xml",
                        "name": "workspace.xml",
                        "type": "file",
                        "extension": ".xml",
                        "description": "Описание readme несколько слов о папочке можно вместе со ссылкой anchor"
                    }
                ],
                "type": "directory",
                "description": "Описание readme несколько слов о папочке можно вместе со ссылкой anchor"
            },
            {
                "path": ".storybook",
                "name": ".storybook",
                "children": [
                    {
                        "path": ".storybook/main.js",
                        "name": "main.js",
                        "type": "file",
                        "extension": ".js",
                        "description": "Описание readme несколько слов о папочке можно вместе со ссылкой anchor"
                    },
                    {
                        "path": ".storybook/preview-head.html",
                        "name": "preview-head.html",
                        "type": "file",
                        "extension": ".html",
                        "description": "Описание readme несколько слов о папочке можно вместе со ссылкой anchor"
                    },
                    {
                        "path": ".storybook/preview.js",
                        "name": "preview.js",
                        "type": "file",
                        "extension": ".js",
                        "description": "Описание readme несколько слов о папочке можно вместе со ссылкой anchor"
                    }
                ],
                "type": "directory",
                "description": "Описание readme несколько слов о папочке можно вместе со ссылкой anchor"
            },
            {
                "path": "README.md",
                "name": "README.md",
                "type": "file",
                "extension": ".md",
                "description": "Описание readme несколько слов о папочке можно вместе со ссылкой anchor"
            },
            {
                "path": "babel.config.json",
                "name": "babel.config.json",
                "type": "file",
                "extension": ".json",
                "description": "Описание readme несколько слов о папочке можно вместе со ссылкой anchor"
            },
            {
                "path": "dist",
                "name": "dist",
                "children": [
                    {
                        "path": "dist/es5",
                        "name": "es5",
                        "type": "directory",
                        "description": "Описание readme несколько слов о папочке можно вместе со ссылкой anchor",
                        "children": [
                            {
                                "path": "dist/es5",
                                "name": "es5",
                                "type": "directory",
                                "description": "Описание readme несколько слов о папочке можно вместе со ссылкой anchor"
                            },
                            {
                                "path": "dist/es6",
                                "name": "es6",
                                "type": "directory",
                                "description": "Описание readme несколько слов о папочке можно вместе со ссылкой anchor"
                            },
                            {
                                "path": "dist/index.html",
                                "name": "index.html",
                                "type": "file",
                                "extension": ".html",
                                "description": "Описание readme несколько слов о папочке можно вместе со ссылкой anchor"
                            }
                        ],
                    },
                    {
                        "path": "dist/es6",
                        "name": "es6",
                        "type": "directory",
                        "description": "Описание readme несколько слов о папочке можно вместе со ссылкой anchor"
                    },
                    {
                        "path": "dist/index.html",
                        "name": "index.html",
                        "type": "file",
                        "extension": ".html",
                        "description": "Описание readme несколько слов о папочке можно вместе со ссылкой anchor"
                    }
                ],
                "type": "directory",
                "description": "Описание readme несколько слов о папочке можно вместе со ссылкой anchor"
            },
            {
                "path": "package.json",
                "name": "package.json",
                "type": "file",
                "extension": ".json",
                "description": "Описание readme несколько слов о папочке можно вместе со ссылкой anchor"
            },
            {
                "path": "rollup.config.js",
                "name": "rollup.config.js",
                "type": "file",
                "extension": ".js",
                "description": "Описание readme несколько слов о папочке можно вместе со ссылкой anchor"
            },
            {
                "path": "src",
                "name": "src",
                "children": [
                    {
                        "path": "src/components",
                        "name": "components",
                        "type": "directory",
                        "description": "Описание readme несколько слов о папочке можно вместе со ссылкой anchor"
                    },
                    {
                        "path": "src/index.html",
                        "name": "index.html",
                        "type": "file",
                        "extension": ".html",
                        "description": "Описание readme несколько слов о папочке можно вместе со ссылкой anchor"
                    },
                    {
                        "path": "src/index.ts",
                        "name": "index.ts",
                        "type": "file",
                        "extension": ".ts",
                        "description": "Описание readme несколько слов о папочке можно вместе со ссылкой anchor"
                    },
                    {
                        "path": "src/registry",
                        "name": "registry",
                        "type": "directory",
                        "description": "Описание readme несколько слов о папочке можно вместе со ссылкой anchor"
                    },
                    {
                        "path": "src/stories",
                        "name": "stories",
                        "type": "directory",
                        "description": "Описание readme несколько слов о папочке можно вместе со ссылкой anchor"
                    },
                    {
                        "path": "src/types",
                        "name": "types",
                        "type": "directory",
                        "description": "Описание readme несколько слов о папочке можно вместе со ссылкой anchor"
                    },
                    {
                        "path": "src/utils",
                        "name": "utils",
                        "type": "directory",
                        "description": "Описание readme несколько слов о папочке можно вместе со ссылкой anchor"
                    }
                ],
                "type": "directory",
                "description": "Описание readme несколько слов о папочке можно вместе со ссылкой anchor"
            },
            {
                "path": "storybook-static",
                "name": "storybook-static",
                "children": [
                    {
                        "path": "storybook-static/0.b73eaee9a88f178d62ed.manager.bundle.js",
                        "name": "0.b73eaee9a88f178d62ed.manager.bundle.js",
                        "type": "file",
                        "extension": ".js",
                        "description": "Описание readme несколько слов о папочке можно вместе со ссылкой anchor"
                    },
                    {
                        "path": "storybook-static/1.f296d183a17268696d73.manager.bundle.js",
                        "name": "1.f296d183a17268696d73.manager.bundle.js",
                        "type": "file",
                        "extension": ".js",
                        "description": "Описание readme несколько слов о папочке можно вместе со ссылкой anchor"
                    },
                    {
                        "path": "storybook-static/10.9998ba67d65d81d20896.manager.bundle.js",
                        "name": "10.9998ba67d65d81d20896.manager.bundle.js",
                        "type": "file",
                        "extension": ".js",
                        "description": "Описание readme несколько слов о папочке можно вместе со ссылкой anchor"
                    },
                    {
                        "path": "storybook-static/11.49c687eaa6261f8b7be2.manager.bundle.js",
                        "name": "11.49c687eaa6261f8b7be2.manager.bundle.js",
                        "type": "file",
                        "extension": ".js",
                        "description": "Описание readme несколько слов о папочке можно вместе со ссылкой anchor"
                    },
                    {
                        "path": "storybook-static/11.49c687eaa6261f8b7be2.manager.bundle.js.LICENSE.txt",
                        "name": "11.49c687eaa6261f8b7be2.manager.bundle.js.LICENSE.txt",
                        "type": "file",
                        "extension": ".txt",
                        "description": "Описание readme несколько слов о папочке можно вместе со ссылкой anchor"
                    },
                    {
                        "path": "storybook-static/12.c9538ed3766c96f289e7.manager.bundle.js",
                        "name": "12.c9538ed3766c96f289e7.manager.bundle.js",
                        "type": "file",
                        "extension": ".js",
                        "description": "Описание readme несколько слов о папочке можно вместе со ссылкой anchor"
                    },
                    {
                        "path": "storybook-static/5.fa71488e730c5c7f885f.manager.bundle.js",
                        "name": "5.fa71488e730c5c7f885f.manager.bundle.js",
                        "type": "file",
                        "extension": ".js",
                        "description": "Описание readme несколько слов о папочке можно вместе со ссылкой anchor"
                    },
                    {
                        "path": "storybook-static/5.fa71488e730c5c7f885f.manager.bundle.js.LICENSE.txt",
                        "name": "5.fa71488e730c5c7f885f.manager.bundle.js.LICENSE.txt",
                        "type": "file",
                        "extension": ".txt",
                        "description": "Описание readme несколько слов о папочке можно вместе со ссылкой anchor"
                    },
                    {
                        "path": "storybook-static/6.8096ae4aadde0743697b.manager.bundle.js",
                        "name": "6.8096ae4aadde0743697b.manager.bundle.js",
                        "type": "file",
                        "extension": ".js",
                        "description": "Описание readme несколько слов о папочке можно вместе со ссылкой anchor"
                    },
                    {
                        "path": "storybook-static/7.b34baecbd082bc7b188d.manager.bundle.js",
                        "name": "7.b34baecbd082bc7b188d.manager.bundle.js",
                        "type": "file",
                        "extension": ".js",
                        "description": "Описание readme несколько слов о папочке можно вместе со ссылкой anchor"
                    },
                    {
                        "path": "storybook-static/8.15577edffecf900a8de2.manager.bundle.js",
                        "name": "8.15577edffecf900a8de2.manager.bundle.js",
                        "type": "file",
                        "extension": ".js",
                        "description": "Описание readme несколько слов о папочке можно вместе со ссылкой anchor"
                    },
                    {
                        "path": "storybook-static/9.d7d85aa0a49a98f17218.manager.bundle.js",
                        "name": "9.d7d85aa0a49a98f17218.manager.bundle.js",
                        "type": "file",
                        "extension": ".js",
                        "description": "Описание readme несколько слов о папочке можно вместе со ссылкой anchor"
                    },
                    {
                        "path": "storybook-static/favicon.ico",
                        "name": "favicon.ico",
                        "type": "file",
                        "extension": ".ico",
                        "description": "Описание readme несколько слов о папочке можно вместе со ссылкой anchor"
                    },
                    {
                        "path": "storybook-static/index.html",
                        "name": "index.html",
                        "type": "file",
                        "extension": ".html",
                        "description": "Описание readme несколько слов о папочке можно вместе со ссылкой anchor"
                    },
                    {
                        "path": "storybook-static/main.ce406c7e93b98325390e.manager.bundle.js",
                        "name": "main.ce406c7e93b98325390e.manager.bundle.js",
                        "type": "file",
                        "extension": ".js",
                        "description": "Описание readme несколько слов о папочке можно вместе со ссылкой anchor"
                    },
                    {
                        "path": "storybook-static/runtime~main.909d038f912f063e8837.manager.bundle.js",
                        "name": "runtime~main.909d038f912f063e8837.manager.bundle.js",
                        "type": "file",
                        "extension": ".js",
                        "description": "Описание readme несколько слов о папочке можно вместе со ссылкой anchor"
                    },
                    {
                        "path": "storybook-static/vendors~main.d3455eed64b243c89325.manager.bundle.js",
                        "name": "vendors~main.d3455eed64b243c89325.manager.bundle.js",
                        "type": "file",
                        "extension": ".js",
                        "description": "Описание readme несколько слов о папочке можно вместе со ссылкой anchor"
                    },
                    {
                        "path": "storybook-static/vendors~main.d3455eed64b243c89325.manager.bundle.js.LICENSE.txt",
                        "name": "vendors~main.d3455eed64b243c89325.manager.bundle.js.LICENSE.txt",
                        "type": "file",
                        "extension": ".txt",
                        "description": "Описание readme несколько слов о папочке можно вместе со ссылкой anchor"
                    }
                ],
                "type": "directory",
                "description": "Описание readme несколько слов о папочке можно вместе со ссылкой anchor"
            },
            {
                "path": "tmp",
                "name": "tmp",
                "children": [
                    {
                        "path": "tmp/Button.jsx",
                        "name": "Button.jsx",
                        "type": "file",
                        "extension": ".jsx",
                        "description": "Описание readme несколько слов о папочке можно вместе со ссылкой anchor"
                    },
                    {
                        "path": "tmp/Button.stories.jsx",
                        "name": "Button.stories.jsx",
                        "type": "file",
                        "extension": ".jsx",
                        "description": "Описание readme несколько слов о папочке можно вместе со ссылкой anchor"
                    },
                    {
                        "path": "tmp/Header.jsx",
                        "name": "Header.jsx",
                        "type": "file",
                        "extension": ".jsx",
                        "description": "Описание readme несколько слов о папочке можно вместе со ссылкой anchor"
                    },
                    {
                        "path": "tmp/Header.stories.jsx",
                        "name": "Header.stories.jsx",
                        "type": "file",
                        "extension": ".jsx",
                        "description": "Описание readme несколько слов о папочке можно вместе со ссылкой anchor"
                    },
                    {
                        "path": "tmp/Introduction.stories.mdx",
                        "name": "Introduction.stories.mdx",
                        "type": "file",
                        "extension": ".mdx",
                        "description": "Описание readme несколько слов о папочке можно вместе со ссылкой anchor"
                    },
                    {
                        "path": "tmp/Page.jsx",
                        "name": "Page.jsx",
                        "type": "file",
                        "extension": ".jsx",
                        "description": "Описание readme несколько слов о папочке можно вместе со ссылкой anchor"
                    },
                    {
                        "path": "tmp/Page.stories.jsx",
                        "name": "Page.stories.jsx",
                        "type": "file",
                        "extension": ".jsx",
                        "description": "Описание readme несколько слов о папочке можно вместе со ссылкой anchor"
                    },
                    {
                        "path": "tmp/button.css",
                        "name": "button.css",
                        "type": "file",
                        "extension": ".css",
                        "description": "Описание readme несколько слов о папочке можно вместе со ссылкой anchor"
                    },
                    {
                        "path": "tmp/header.css",
                        "name": "header.css",
                        "type": "file",
                        "extension": ".css",
                        "description": "Описание readme несколько слов о папочке можно вместе со ссылкой anchor"
                    },
                    {
                        "path": "tmp/page.css",
                        "name": "page.css",
                        "type": "file",
                        "extension": ".css",
                        "description": "Описание readme несколько слов о папочке можно вместе со ссылкой anchor"
                    }
                ],
                "type": "directory",
                "description": "Описание readme несколько слов о папочке можно вместе со ссылкой anchor"
            },
            {
                "path": "tsconfig.json",
                "name": "tsconfig.json",
                "type": "file",
                "extension": ".json",
                "description": "Описание readme несколько слов о папочке можно вместе со ссылкой anchor"
            },
            {
                "path": "tt.json",
                "name": "tt.json",
                "type": "file",
                "extension": ".json",
                "description": "Описание readme несколько слов о папочке можно вместе со ссылкой anchor"
            },
            {
                "path": "yarn.lock",
                "name": "yarn.lock",
                "type": "file",
                "extension": ".lock",
                "description": "Описание readme несколько слов о папочке можно вместе со ссылкой anchor"
            }
        ],
        "type": "directory",
        "description": "Описание readme несколько слов о папочке можно вместе со ссылкой anchor"
    };

    fsTree = sortFsTree(fsTree);

    const [lastDescriptionOpened, setLastDescriptionOpened] = useState(null);
    const [folderOpenedState, setFolderOpenedState] = useState({} as Record<string, boolean>);
    const isOpened = useCallback((isFolder: boolean, description: string, name: string) => {
        if (isFolder) {
            setFolderOpenedState(prevState => ({...prevState, [name]: !prevState[name]}));
        }

        setLastDescriptionOpened(description);
    }, []);

    const containerRef: Ref<HTMLDivElement> = useRef(null);
    const [xPosition, setXPosition] = useState(PROJECT_VIEW_WIDTH);
    const onResize = useCallback((position: number) => {
        setXPosition(position);
    }, []);

    function printFiles(children): any {
        return children?.map(firstChild => {
            if (firstChild.type === 'file') {
                return <FileLine onClick={isOpened.bind(null, false, firstChild.description)}
                                 name={firstChild.name}
                                 extension={firstChild.extension}/>;
            } else {
                return <FolderLine
                    onClick={isOpened.bind(null, true, firstChild.description)}
                    name={firstChild.name}
                    isOpened={folderOpenedState[firstChild.name]}>

                    {firstChild.children.map(nextChild => {
                        if (nextChild.type === 'file') {
                            return <FileLine name={nextChild.name}
                                             extension={nextChild.extension}
                                             onClick={isOpened.bind(null, false, nextChild.description)}
                            />;
                        } else {
                            return <FolderLine
                                onClick={isOpened.bind(null, true, nextChild.description)}
                                name={nextChild.name}
                                isOpened={folderOpenedState[nextChild.name]}>
                                {printFiles(nextChild.children)}
                            </FolderLine>
                        }
                    })}
                </FolderLine>
            }
        })
    }

    return (
        <Fragment>
            <style>
                {styles}
            </style>
            <div className="container" ref={containerRef}>
                <DraggableDivider onResize={onResize}
                                  xPosition={PROJECT_VIEW_WIDTH}>
                    <div
                        className="project"
                        style={{width: xPosition}}>

                        {printFiles(fsTree.children)}
                    </div>
                    <div className="editor" style={{width: containerRef.current?.clientWidth - xPosition}}>
                        {lastDescriptionOpened}
                    </div>
                </DraggableDivider>
            </div>
        </Fragment>
    );
}
