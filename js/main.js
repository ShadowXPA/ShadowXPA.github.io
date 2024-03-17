$(() => {
    const selectNextBackground = () => {
        const elements = $('.background')
        const count = elements.length
        const nextIndex = Math.floor(Math.random() * count)
        const nextElement = $(elements[nextIndex])

        if (nextElement.hasClass('active')) {
            return selectNextBackground()
        }

        $('.background.active').removeClass('active')
        setTimeout(() => {
            nextElement.addClass('active')
        }, 5000)
        return nextIndex
    }

    $('.background').each((index, element) => {
        const elem = $(element)
        const background = elem.attr('data-bg')

        elem.css('background-image', `url('img/${background}')`)
    })

    selectNextBackground()

    setInterval(() => {
        selectNextBackground()
    }, 17000)
})
