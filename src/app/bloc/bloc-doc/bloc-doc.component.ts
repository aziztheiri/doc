import { Component } from '@angular/core';

@Component({
  selector: 'app-bloc-doc',
  templateUrl: './bloc-doc.component.html',
  styleUrls: ['./bloc-doc.component.css']
})
export class BlocDocComponent {
jsonExample = `
{
  "idB": 1,
  "nomB": "Bloc A",
  "capaciteB": 30,
  "chambres": [
    { "numero": 101, "capacite": 2 },
    { "numero": 102, "capacite": 3 }
  ]
}
`;
}
