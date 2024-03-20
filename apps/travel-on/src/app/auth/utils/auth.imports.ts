export function getFireauth(): Promise<
  typeof import('/home/user/git/web/angular-monorepo/node_modules/firebase/auth/dist/auth/index')
> {
  return import('firebase/auth');
}
