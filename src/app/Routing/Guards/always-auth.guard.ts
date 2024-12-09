import { CanActivateFn } from '@angular/router';

export const alwaysAuthGuard: CanActivateFn = (route, state) => {
  return true;
};
