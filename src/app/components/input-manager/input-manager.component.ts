import { AfterViewInit, Component, contentChild, contentChildren, ElementRef, viewChild, viewChildren } from '@angular/core';
import { ManagedInputDirective } from './managed-input.directive';

@Component({
  selector: 'app-input-manager',
  standalone: true,
  imports: [],
  templateUrl: './input-manager.component.html',
  styleUrl: './input-manager.component.scss'
})
export class InputManagerComponent implements AfterViewInit {

  readonly contentDirectiveInputs = contentChildren(ManagedInputDirective);
  ngAfterViewInit(): void {
    console.log(this.contentDirectiveInputs());
  }
  // add a proper content query (hint, use the ManagedInputDirective)


  clearAll() {
    this.contentDirectiveInputs().forEach(input => {
      input.inputElement.value = '';
    })
    /*     this.contentDirective */
    // use the content query to clear all inputs
  }

}
