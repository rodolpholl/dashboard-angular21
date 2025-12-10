import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule, FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-parameters',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './parameters.html',
})
export class Parameters {
  companyName = signal('');
  logo = signal('');
  institutionalWebsite = signal('');
  
  socialNetworks = signal<{ name: string; url: string }[]>([{ name: '', url: '' }]);

  constructor() {}

  addSocialNetwork() {
    this.socialNetworks.update(networks => [...networks, { name: '', url: '' }]);
  }

  removeSocialNetwork(index: number) {
    this.socialNetworks.update(networks => networks.filter((_, i) => i !== index));
  }

  updateSocialNetwork(index: number, field: 'name' | 'url', value: string) {
    this.socialNetworks.update(networks => {
      const updated = [...networks];
      updated[index] = { ...updated[index], [field]: value };
      return updated;
    });
  }
  
  save() {
      // Implement save logic here, for now just logging the values
      console.log({
          companyName: this.companyName(),
          logo: this.logo(),
          institutionalWebsite: this.institutionalWebsite(),
          socialNetworks: this.socialNetworks()
      })
  }
}
