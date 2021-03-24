module.exports.translator = {
	deutsh: name => age => champion => lvl =>
		`VorName:${name}\tAlter:${age}\tChampion:${champion}\tNiveau:${lvl} `,
	espagnol: name => age => champion => lvl =>
		`nombre de pila : ${name}\tedad :${age}\tcampeón : ${champion}\tnivel : ${lvl} `,
	frensh: name => age => champion => lvl =>
		`prenom:${name}\tDate de naissance:${age}\tChampion${champion}\tNiveau : ${lvl} `,
}
module.exports.personnesData = [
	{
		name: 'Malek',
		age: 21,
		champion: 'Jett',
		lvl: 999,
	},
	{
		name: 'Omar',
		age: 21,
		champion: 'Reyna',
		lvl: 950,
	},
	{
		name: 'Rayen',
		age: 21,
		champion: 'Jett',
		lvl: 800,
	},
]
