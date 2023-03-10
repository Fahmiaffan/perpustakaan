import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '../views/index.vue'
import Siswa from '../components/siswa/index.vue'
import Buku from '../components/buku/index.vue'
import TambahSiswa from '../components/siswa/tambah.vue';
Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Index',
        component: index
    },
    {
        path: '/siswa',
        name: 'Siswa',
        component: Siswa
    },
    {
        path: '/buku',
        name: 'Buku',
        component: Buku
    }, 
    {
        path: '/siswa/tambah',
        name: 'TambahSiswa',
        component: TambahSiswa
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})


export default router
