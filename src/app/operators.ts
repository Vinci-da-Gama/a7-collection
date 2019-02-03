// rxjs
// import 'rxjs/add/observable/throw';
import { throwError,
	NEVER, EMPTY,
	of, concat, merge,
	Notification } from 'rxjs';
// do becomes tap
import {
	tap, mergeMap,
	map, catchError,
	finalize, delay,
	debounceTime,
	concatMap
} from 'rxjs/operators';
// import 'rxjs/add/operator/toPromise';

// ngrx -- it is for ngrx, but not for just rxjs.
// import '@ngrx/core/add/operator/select';
