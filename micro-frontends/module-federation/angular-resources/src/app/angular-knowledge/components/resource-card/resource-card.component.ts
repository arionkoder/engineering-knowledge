import { Component, Input } from '@angular/core';
import { Resource } from '@angularknowledge/interfaces/knowledge-list';
import { imageSuffixOptions } from './image-suffix-options';

@Component({
  selector: 'app-resource-card',
  templateUrl: './resource-card.component.html',
  styleUrls: ['./resource-card.component.scss'],
})
export class ResourceCardComponent {
  @Input() public resource!: Partial<Resource>;

  public imageSuffix = this.generateImageSuffix();

  private generateImageSuffix(): string {
    const randomIndex = Math.floor(Math.random() * imageSuffixOptions.length);
    return imageSuffixOptions[randomIndex];
  }
}
