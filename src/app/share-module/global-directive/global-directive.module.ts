import { NgModule } from '@angular/core';
import { DirWithPassDownValDirective } from '../../../directives/dirWithPassDownVals/dir-with-pass-down-val.directive';

@NgModule({
  declarations: [DirWithPassDownValDirective],
  exports: [DirWithPassDownValDirective]
})
export class GlobalDirectiveModule { }
