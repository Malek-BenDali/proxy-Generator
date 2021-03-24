const { translator, personnesData } = require('./data')

function* counter() {
	let i = 0
	while (i < 3) yield i++
	return
}
let languagesCounter = {
	deutshCounter: counter(),
	espagnolCounter: counter(),
	frenshCounter: counter(),
}

const translate = (target, prop) => {
	const { age, champion, lvl, name } = personnesData[
		Math.floor(Math.random() * 3)
	]
	return console.log(target[prop](name)(age)(champion)(lvl))
}

const translatorProxy = new Proxy(translator, {
	get: (target, prop) => {
		const { deutshCounter, espagnolCounter, frenshCounter } = languagesCounter
		switch (prop) {
			case 'deutsh':
				deutshCounter.next().done
					? console.log(`ich kann nicht anworten`)
					: translate(target, prop)

				break
			case 'espagnol':
				espagnolCounter.next().done
					? console.log(`vamos berlin`)
					: translate(target, prop)

				break
			case 'frensh':
				frenshCounter.next().done
					? console.log(`vamos berlin`)
					: translate(target, prop)

				break
		}
	},
})
translatorProxy.deutsh
translatorProxy.deutsh
translatorProxy.espagnol
translatorProxy.espagnol
translatorProxy.espagnol
translatorProxy.deutsh
translatorProxy.deutsh
translatorProxy.deutsh
translatorProxy.frensh
translatorProxy.frensh
