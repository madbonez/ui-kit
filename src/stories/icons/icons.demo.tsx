/** @jsx h */
import { Fragment, h } from 'preact';
import { FolderIcon } from '../../icons/FolderIcon';
import { TsFileIcon } from '../../icons/TsFileIcon';
import { UnknownFileIcon } from '../../icons/UnknownFileIcon';
import { TsxFileIcon } from '../../icons/TsxFileIcon';
import { MdFileIcon } from '../../icons/MdFileIcon';
import { CssFileIcon } from '../../icons/CssFileIcon';
import { ScssFileIcon } from '../../icons/ScssFileIcon';
import { JsonFileIcon } from '../../icons/JsonFileIcon';
import { JsFileIcon } from '../../icons/JsFileIcon';
import { HtmlFileIcon } from '../../icons/HtmlFileIcon';

export function IconsDemo(props: {size?: number}) {
    return (
        <Fragment>
            <div style={{
                display: 'flex',
                width: '200px',
                flexWrap: 'wrap',
            }}>
                <FolderIcon {...props}/>
                <TsFileIcon {...props}/>
                <TsxFileIcon {...props}/>
                <UnknownFileIcon {...props}/>
                <MdFileIcon {...props}/>
                <CssFileIcon {...props}/>
                <ScssFileIcon {...props}/>
                <JsonFileIcon {...props}/>
                <JsFileIcon {...props}/>
                <HtmlFileIcon {...props}/>
            </div>
        </Fragment>
    )
}
