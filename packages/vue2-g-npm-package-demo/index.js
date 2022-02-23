import vue2GNpmPackageDemo from './src/vue2-g-npm-package-demo'

vue2GNpmPackageDemo.install = function(Vue) {
    Vue.component(vue2GNpmPackageDemo.name, vue2GNpmPackageDemo)
}

export default vue2GNpmPackageDemo
