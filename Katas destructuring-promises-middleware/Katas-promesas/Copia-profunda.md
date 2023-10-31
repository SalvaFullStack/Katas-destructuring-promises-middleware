

## Copia profunda

```javascript
const player = {
	life: 100,
	power: 100,
	bullets: [
		{ x: 10, y: 20 },
		{ x: 30, y: 30 },
	],
	pos: {
		x: 10,
		y: 20,
	},
	vel: {
		x: 1,
		y: 0,
	},
}

// Mecanismo nativo para hacer copias profundas de objetos mutables (anidados)
const copiaProfunda = JSON.parse(JSON.stringify(player))

// Al cambiar una propiedad de un obj anidado no muta el valor de copiaProfunda.vel
player.vel.y = 1

console.log(copiaProfunda.vel.y, player.vel.y)				   
```