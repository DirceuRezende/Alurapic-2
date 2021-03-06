import Home from './components/home/Home.vue';
const Cadastro = () => System.import('./components/cadastro/Cadastro.vue').then(m=> m.default);

export const routes = [
  { path: '', component: Home, name: 'home', titulo: 'Home', menu: true },
  { path: '/cadastro', name: 'cadastro', component: Cadastro, titulo: 'Cadastro', menu: true },
  { path: '/cadastro/:id', name: 'alterar', component: Cadastro, titulo: 'Cadastro', menu: false },
  { path: '*', component: Home, menu: false }
];
