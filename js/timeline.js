$(() => {
    const getDate = (timelineDate, start = true) => {
        const date = start ? timelineDate.start : timelineDate.end

        let str = `${date.year}`

        if (date.month) {
            str += '/' + ('0' + date.month).slice(-2)
        }

        if (date.day) {
            str += '/' + ('0' + date.day).slice(-2)
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

    const getIcon = (timeline) => {
        return timeline.icon ? `<i class="icon bi bi-${timeline.icon}"></i>` : ''
    }

    const getLinks = (timeline) => {
        let links = ''

        for (let i = 0; i < timeline.links?.length ?? 0; i++) {
            links += `<div class="link"><a href="${timeline.links[i].uri}"><i class="bi bi-${timeline.links[i].icon}"></i></a></div>`
        }

        return links
    }

    for (let i = 0; i < timeline.length; i++) {
        $('#timeline')
            .prepend(`
                <div class="event d-flex align-items-center">
                    <div class="event-circle"><i class="bi bi-circle-fill"></i></div>
                    <div class="event-info">
                        <div class="name">${getIcon(timeline[i])}${timeline[i].name}</div>
                        <div class="date">${getDate(timeline[i].date)}</div>
                        <div class="description">${timeline[i]?.description ?? ''}</div>
                        <div class="links d-flex">${getLinks(timeline[i])}</div>
                    </div>
                </div>
            `)
    }
})
