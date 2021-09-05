import { createAtomicStyles, createAtomsFn } from '@vanilla-extract/sprinkles'
import { vars } from './theme.css'

const responsiveStyles = createAtomicStyles({
	conditions: {
		mobile: {},
		tablet: { '@media': 'screen and (min-width: 768px)' },
		desktop: { '@media': 'screen and (min-width: 1024px)' },
	},
	defaultCondition: 'mobile',
	properties: {
		display: ['none', 'flex', 'block', 'inline'],
		position: ['absolute', 'relative', 'fixed'],
		flexDirection: ['row', 'column'],
		justifyContent: ['stretch', 'flex-start', 'center', 'flex-end', 'space-around', 'space-between'],
		alignItems: ['stretch', 'flex-start', 'center', 'flex-end'],
		paddingTop: vars.space,
		paddingBottom: vars.space,
		paddingLeft: vars.space,
		paddingRight: vars.space,
		marginTop: vars.space,
		marginBottom: vars.space,
		marginLeft: vars.space,
		marginRight: vars.space,
		width: vars.containerWeights,
	},
	shorthands: {
		padding: ['paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight'],
		paddingX: ['paddingLeft', 'paddingRight'],
		paddingY: ['paddingTop', 'paddingBottom'],
		margin: ['marginTop', 'marginBottom', 'marginLeft', 'marginRight'],
		placeItems: ['justifyContent', 'alignItems'],
	},
})

const colorStyles = createAtomicStyles({
	conditions: {
		lightMode: { '@media': '(prefers-color-scheme: light)' },
		darkMode: { '@media': '(prefers-color-scheme: dark)' },
	},
	defaultCondition: 'lightMode',
	properties: {
		color: vars.colors,
		background: vars.colors,
	},
})

export const atoms = createAtomsFn(responsiveStyles, colorStyles)

export type Atoms = Parameters<typeof atoms>[0]
