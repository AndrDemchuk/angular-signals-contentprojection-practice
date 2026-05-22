import { AfterViewInit, Component, contentChildren } from '@angular/core';
import { ManagedInputDirective } from './managed-input.directive';

@Component({
  selector: 'app-input-manager',
  standalone: true,
  imports: [],
  templateUrl: './input-manager.component.html',
  styleUrl: './input-manager.component.scss'
})
export class InputManagerComponent implements AfterViewInit {

  readonly inputDirectives = contentChildren(ManagedInputDirective);
  ngAfterViewInit(): void {
    console.log(this.inputDirectives());
  }
  // add a proper content query (hint, use the ManagedInputDirective)


  clearAll() {
    this.inputDirectives().forEach(directive => {
      directive.inputElement.value = '';
    })
    /*     this.contentDirective */
    // use the content query to clear all inputs
  }

}
