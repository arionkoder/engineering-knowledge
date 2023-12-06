import { Component, Input } from '@angular/core';
import { imageSuffixOptions } from './image-suffix-options';
import { Resource } from '@dotnetknowledge/dot-net-knowledge/interfaces/knowledge-list';
import { MatCardModule } from '@angular/material/card';
@Component({
  selector: 'app-resource-card',
  templateUrl: './resource-card.component.html',
  styleUrls: ['./resource-card.component.scss'],
  standalone: true,
  imports: [MatCardModule]
})
export class ResourceCardComponent {
  @Input() public resource!: Partial<Resource>;

  public imageSuffix = this.generateImageSuffix();

  private generateImageSuffix(): string {
    const randomIndex = Math.floor(Math.random() * imageSuffixOptions.length);
    return imageSuffixOptions[randomIndex];
  }
}
