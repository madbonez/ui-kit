// https://stackoverflow.com/questions/29908261/prevent-text-selection-on-mouse-drag/29908832
export function unFocus() {
    if (document['selection']) {
        document['selection'].empty()
    } else {
        window.getSelection().removeAllRanges()
    }
}
