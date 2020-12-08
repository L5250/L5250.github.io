const route = [
  { path: '/', component: '@/pages/index' },
  { path: '/login', component: '@/pages/login' },
  {
    path: '/user', component: 'user',
    wrappers: [
      '@/wrappers/auth',
    ],
  },
]
export default route
