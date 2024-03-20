export function getFireAuth(): Promise<
  typeof import('/home/user/git/web/angular-monorepo/node_modules/firebase/auth/dist/auth/index')
> {
  return import('firebase/auth');
}
export function getFireStore(): Promise<
  typeof import('/home/user/git/web/angular-monorepo/node_modules/firebase/firestore/dist/firestore/index')
> {
  return import('firebase/firestore');
}
