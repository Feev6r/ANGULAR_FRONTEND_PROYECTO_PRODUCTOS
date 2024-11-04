import { Injectable } from '@angular/core';

//--------------------------------------------------------
//SERVICIO PARA CANDEACTIVATE EN DESUSO - QUEDA DE EJEMPLO.
//--------------------------------------------------------


@Injectable({
  providedIn: 'root'
})
export class GuardsServiceService {
  // canDeactivate(component: CanComponentDeactivate, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState: RouterStateSnapshot): MaybeAsync<GuardResult> {
  //   return component.canDeactivate();

  // }

  // canDeactivate(component: CanComponentDeactivate): boolean | Promise<boolean> {
  //   return component.canDeactivate();
  // }

}


// if (component.hasUnsavedChanges()) {
//   return window.confirm('You have unsaved changes. Do you really want to leave?');
// }
