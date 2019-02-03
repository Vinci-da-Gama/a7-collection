import { Observable } from 'rxjs/Observable';

export interface AsyncObsPromiseBoolInterface {
	canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}
