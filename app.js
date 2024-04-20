function adjustSun() {
    let hour = +inputHour.value
    const K = 100 / 12
    const KC = 255 / 12
    if (hour >= 6 && hour <= 18) {
        let left = K * (hour - 6)
        sun.style.left = `${left}%`
        if (hour <= 12) {
            let bottom = 20 * (hour - 6)
            sun.style.bottom = `${bottom}px`
            let cred = 100 + 3 * KC * (hour - 6)
            let cgreen = 50 + 3 * KC * (hour - 6)
            let ered = 50 + 2 * KC * (hour - 6)
            let egreen = 20 + 1 * KC * (hour - 6)
            sun.style.background = `radial-gradient(
            rgb(${cred}, ${cgreen}, 0),
            rgb(${ered}, ${egreen}, 0)
            )`;
        }
        else if (hour > 12) {
            let bottom = 20 * (18 - hour) 
            sun.style.bottom = `${bottom}px`
            let cred = 100 + 3 * KC * (18 - hour)
            let cgreen = 50 + 3 * KC * (18 - hour)
            let ered = 50 + 2 * KC * (18 - hour)
            let egreen = 20 + 1 * KC * (18 - hour)
            sun.style.background = `radial-gradient(
            rgb(${cred}, ${cgreen}, 0),
            rgb(${ered}, ${egreen}, 0)
            )`;
        }
    }
    console.log
}
