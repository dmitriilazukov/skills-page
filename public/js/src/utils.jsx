export function preventEventPropagation(e) {
    if (!e.touches) {
        //e.preventDefault();
        e.stopPropagation();
    }
}

export function getClientCoords(e) {
    if (e.touches) {
        return {
            clientX: e.touches[0].clientX,
            clientY: e.touches[0].clientY
        }
    }
    else {
        return {
            clientX: e.clientX,
            clientY: e.clientY
        }
    }
}