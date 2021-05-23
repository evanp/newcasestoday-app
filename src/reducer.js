let initialState = {
    lastDate: (new Date()).toISOString().slice(0, 10),
    newCases: 0,
    delta: 0,
    sda: 0,
    timeline: []
}

export default function reducer(currentState = initialState, action) {

    switch (action.type) {
        case "FETCH_NEW_CASES":
            return { lastDate: action.data.lastDate, newCases: action.data.newCases, delta: action.data.delta, sda: action.data.sda, timeline: action.data.timeline }
        default:
            return currentState
    }
}