import { createSignal } from 'solid-js'

export default function SolidComponent() {
	const [title] = createSignal('Solid Component')

	return <div>{title}</div>
}
