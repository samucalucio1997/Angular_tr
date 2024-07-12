import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]' // Seletor usado para aplicar a diretiva
})
export class DiretivaMouseOver {

  @Input('appHighlight') highlightColor: string = ''; // Cor de destaque recebida como input

  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor || 'yellow'); // Realiza o destaque no hover
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null); // Remove o destaque ao sair do hover
  }

  private highlight(color: string | null) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}