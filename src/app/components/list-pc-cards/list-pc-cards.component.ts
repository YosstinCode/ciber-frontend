import { Component } from '@angular/core';

@Component({
  selector: 'app-list-pc-cards',
  templateUrl: './list-pc-cards.component.html',
  styleUrls: ['./list-pc-cards.component.scss']
})
export class ListPcCardsComponent {

  pcs = [{
    name: "PC-1",
    ip: "192.168.0.1",
    port: "22",
    statusOn: true,
  },
  {
    name: "PC-2",
    ip: "192.168.0.1",
    port: "22",
    statusOn: true,
  },
  {
    name: "PC-3",
    ip: "192.168.0.1",
    port: "22",
    statusOn: false,
  },
  {
    name: "PC-4",
    ip: "192.168.0.1",
    port: "22",
    statusOn: true,
  },
  {
    name: "PC-5",
    ip: "192.168.0.1",
    port: "22",
    statusOn: true,
  },
  {
    name: "PC-6",
    ip: "192.168.0.1",
    port: "22",
    statusOn: true,
  },
  {
    name: "PC-7",
    ip: "192.168.0.1",
    port: "22",
    statusOn: false,
  },
  {
    name: "PC-8",
    ip: "192.168.0.1",
    port: "22",
    statusOn: true,
  }
]


}
