import {Component} from '@angular/core';
import {BugService} from "./services/bugService";
import {BugModel} from "./models/bugModel";
import {SeverityEnum} from "./models/severityEnumModel";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  bugService: BugService = new BugService();
  isValid: boolean = false;
  newBug: BugModel = new BugModel();
  severityMinor: SeverityEnum = SeverityEnum.Minor;
  severityMajor: SeverityEnum = SeverityEnum.Major;
  severityCritical: SeverityEnum = SeverityEnum.Critical;

  public validate() {
    this.isValid = this.bugService.isValid(this.newBug);
    if (this.isValid) this.bugService.addToList(this.newBug);
    this.newBug = new BugModel()
  }

  public toggle(bug: BugModel) {
    this.bugService.toggleFixed(bug)
  }

}
