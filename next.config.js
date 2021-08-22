/** @type {import('next').NextConfig} */

const { withEffectoReactAliases } = require('effector-next/tools')

const enhance = withEffectoReactAliases()
module.exports = enhance({
	reactStrictMode: true,
})
