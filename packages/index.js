import vue2GNpmPackageDemo from './vue2-g-npm-package-demo'

const components = [
    vue2GNpmPackageDemo
]

const install = function(Vue) {
    components.forEach(component => {
        Vue.component(component.name, component);
    });
}

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export default {
    install,
    vue2GNpmPackageDemo
}
