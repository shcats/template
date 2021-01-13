console.log('Modele.js')

async function start() {
    return  await Promise.resolve('async working')
}

start().then(console.log)