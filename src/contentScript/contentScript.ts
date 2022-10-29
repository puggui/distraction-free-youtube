setInterval(() => {
    const filters = [ 
        '[title="Shorts"]', '[page-subtype="subscriptions"]', '[title="Originals"]', 
        '[aria-label="Originals"]', '[page-subtype="home"]', '[page-subtype="explore"]', '[id="related"]']
    for (const filter of filters) {
        const element = document.querySelector(filter)
        if (element) {
            element.remove()
        }
    }
}, 100)

setInterval(() => {
    const filters = ['ytp-endscreen-content', 'ytp-endscreen-next', 'ytp-endscreen-previous']
    for (const filter of filters) {
        const element = document.getElementsByClassName(filter)[0]
        if (element) {
            element.remove()
        }
    }
}, 100)

setInterval(() => {
    const container = document.getElementsByTagName('ytd-channel-video-player-renderer')[0]
    const pauseButton = document.querySelector('[class="ytp-play-button ytp-button"]') as HTMLElement
    if (container && pauseButton.title == 'Pause (k)') {
        pauseButton.click()
        container.remove()
    }
}, 100)

setInterval(() => {
    const element = document.getElementsByClassName('ytp-autonav-toggle-button')[0] as HTMLElement
    if (element && element.ariaChecked == 'true'){
         element.click()
    }
}, 100)