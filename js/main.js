$(() => {
    const date = new Date()
    const time = {
        min: 0,
        max: 2359,
        sunrise: [500, 900],
        day: [900, 1700],
        sunset: [1700, 2100],
        night: [2100, 500]
    }

    const opacity = {
        sky: {
            min: 5,
            max: 100
        },
        ground: {
            min: 10,
            max: 100
        }
    }

    const selectNextStarsBackground = () => {
        const elements = $('.stars div')
        const count = elements.length
        const nextIndex = Math.floor(Math.random() * count)
        const nextElement = $(elements[nextIndex])

        if (nextElement.hasClass('active')) {
            return selectNextStarsBackground()
        }

        $('.stars div.active').removeClass('active')
        setTimeout(() => {
            nextElement.addClass('active')
        }, 5000)
        return nextIndex
    }

    const handleDayNightCycle = () => {
        const currentTime = parseInt((`0${date.getHours()}`).slice(-2) + '' + (`0${date.getMinutes()}`).slice(-2))

        if (isSunrise(currentTime)) {
            $('.sky').css('opacity', `${calculatePercentage(currentTime, time.sunrise[0], time.sunrise[1], opacity.sky.min, opacity.sky.max)}%`)
            $('.ground').css('opacity', `${calculatePercentage(currentTime, time.sunrise[0], time.sunrise[1], opacity.ground.min, opacity.ground.max)}%`)
        } else if (isDay(currentTime)) {
            $('.sky').css('opacity', `${opacity.sky.max}%`)
            $('.ground').css('opacity', `${opacity.ground.max}%`)
        } else if (isSunset(currentTime)) {
            $('.sky').css('opacity', `${calculatePercentage(currentTime, time.sunset[0], time.sunset[1], opacity.sky.max, opacity.sky.min)}%`)
            $('.ground').css('opacity', `${calculatePercentage(currentTime, time.sunset[0], time.sunset[1], opacity.ground.max, opacity.ground.min)}%`)
        } else if (isNight(currentTime)) {
            $('.sky').css('opacity', `${opacity.sky.min}%`)
            $('.ground').css('opacity', `${opacity.ground.min}%`)
        }

        setTimeout(() => {
            date.setMinutes(date.getMinutes() + 1)
            handleDayNightCycle()
        }, 60000)
    }

    const isSunrise = (currentTime) => {
        const start = time.sunrise[0]
        const end = time.sunrise[1]
        return currentTime >= start && currentTime < end
    }

    const isDay = (currentTime) => {
        const start = time.day[0]
        const end = time.day[1]
        return currentTime >= start && currentTime < end
    }

    const isSunset = (currentTime) => {
        const start = time.sunset[0]
        const end = time.sunset[1]
        return currentTime >= start && currentTime < end
    }

    const isNight = (currentTime) => {
        const start = time.night[0]
        const end = time.night[1]
        return currentTime >= start && currentTime <= time.max || currentTime >= time.min && currentTime < end
    }

    const calculatePercentage = (x, start, end, min, max) => {
        const i = end - start
        const j = max - min
        const y = (x - start) / i
        return (y * j) + min
    }

    $('[data-bg]').each((index, element) => {
        const elem = $(element)
        const background = elem.attr('data-bg')

        elem.css('background-image', `url('img/${background}')`)
    })

    handleDayNightCycle()
    selectNextStarsBackground()

    setInterval(() => {
        selectNextStarsBackground()
    }, 17000)
})
