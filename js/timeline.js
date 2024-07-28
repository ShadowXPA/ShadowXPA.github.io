$(() => {
    const getIcon = (timelineIcon) => {
        return timelineIcon ? `<i class="icon bi bi-${timelineIcon}"></i>` : ''
    }

    const getDate = (timelineDate, start = true) => {
        const date = start ? timelineDate.start : timelineDate.end

        let str = `${date.year}`

        if (date.month) {
            str += '/' + (`0${date.month}`).slice(-2)
        }

        if (date.day) {
            str += '/' + (`0${date.day}`).slice(-2)
        }

        if (start) {
            str += ' - '

            if (timelineDate.end) {
                str += getDate(timelineDate, false)
            } else {
                str += 'Present'
            }
        }

        return str
    }

    const getBadges = (timelineBadges) => {
        let badges = ''

        for (let i = 0; i < timelineBadges?.length ?? 0; i++) {
            const color = timelineBadges[i].color ?? 'secondary'
            badges += `<span class="badge text-bg-${color}">${timelineBadges[i].text}</span>`
        }

        return badges
    }

    const getLinks = (timelineLinks) => {
        let links = ''

        for (let i = 0; i < timelineLinks?.length ?? 0; i++) {
            const icon = timelineLinks[i].icon ?? 'link-45deg'
            links += `<div class="link"><a href="${timelineLinks[i].uri}" target="_blank"><i class="bi bi-${icon}"></i></a></div>`
        }

        return links
    }

    for (let i = 0; i < timeline.length; i++) {
        const icon = getIcon(timeline[i].icon)
        const title = timeline[i].title
        const date = getDate(timeline[i].date)
        const location = timeline[i].location
        const dateAndLocation = date + (location ? ` &#8226; ${location}` : '')
        const description = timeline[i].description ?? ''
        const badges = getBadges(timeline[i].badges)
        const links = getLinks(timeline[i].links)

        $('#timeline')
            .prepend(`
                <div class="event d-flex">
                    <div class="event-circle"><i class="bi bi-circle-fill"></i></div>
                    <div class="event-info">
                        <div class="name">${icon}${title}</div>
                        <div class="date-location">${dateAndLocation}</div>
                        <div class="description">${description}</div>
                        <div class="badges d-flex flex-wrap">${badges}</div>
                        <div class="links d-flex flex-wrap">${links}</div>
                    </div>
                </div>
            `)
    }
})
