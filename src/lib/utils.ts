export function rand(min: number, max: number) {
	return min + Math.random() * (max - min)
}

export function randHsl() {
	const h = rand(1, 360)
	const s = rand(0, 100)
	const l = rand(0, 100)

	return `hsl(${h}, ${s}%, ${l}%)`
}
