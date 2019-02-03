import { Observable } from 'rxjs';

export interface AsyncObsPromiseBoolInterface {
	canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}
