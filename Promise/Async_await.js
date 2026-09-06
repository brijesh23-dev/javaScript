
async function getData() {
    return "hello";
}

getData().then(res => console.log(res))
    .catch(error => console.log(error))

const p = new Promise((resolve, reject) => {
    resolve("promise Resolved")
})

async function PrintData() {
    p.then(res => console.log(res))
        .catch(e => console.log(e));
}
PrintData()


async function fetchData() {
    try {
        const res = await fetch("https://api.github.com/users/brijesh23-dev")
        const data = await res.json();
        console.log(data)
    } catch (error) {
        console.log("network issue")
    }
}

fetchData()