import { CanDeactivateFn } from '@angular/router';
import { SearchComponent } from '../search/search.component';

export const unSearchedTermGuard: CanDeactivateFn<SearchComponent> = (component, currentRoute, currentState, nextState) => {

  return component.canDeactivate() || window.confirm("Are you sure?");
};
