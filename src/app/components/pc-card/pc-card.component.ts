import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pc-card',
  templateUrl: './pc-card.component.html',
  styleUrls: ['./pc-card.component.scss']
})
export class PcCardComponent {
  @Input() pc!: any;
  isClickedTerminal:boolean = false
  command:string = ""

  onClickTerminal(){
    this.isClickedTerminal = !this.isClickedTerminal
  }

  onExecuteCommand(){
    alert("Executing command: " + this.command)
  }

  onSettings(settings:any){
    alert(JSON.stringify(settings.value))
  }

}
