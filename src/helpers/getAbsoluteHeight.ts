export function getAbsoluteHeight(el: HTMLElement) {
    // Get the DOM Node if you pass in a string
    el = (typeof el === 'string') ? document.querySelector(el) : el;

    let styles = window.getComputedStyle(el);
    let margin = parseFloat(styles['marginTop']) +
        parseFloat(styles['marginBottom']);
    let border = parseFloat(styles['borderTopWidth']) + parseFloat(styles['borderBottomWidth']);

    return Math.ceil(el.offsetHeight + margin + border);
}
