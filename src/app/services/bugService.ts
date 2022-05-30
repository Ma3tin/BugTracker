import {BugModel} from "../models/bugModel";
import {SeverityEnum} from "../models/severityEnumModel";

export class BugService {
  private _listOfBugs: BugModel[] = [];
  private _listOfInactiveBugs: BugModel[] = [];

  isValid(bugModel: BugModel): boolean {
    return ((bugModel.description != "") &&
      (bugModel.severity == SeverityEnum.Minor || bugModel.severity == SeverityEnum.Major || bugModel.severity == SeverityEnum.Critical));
  }
  public addToList(bug: BugModel) {
    this._listOfBugs.push(bug);
  }
  public toggleFixed(bug: BugModel) {
    if (bug.isFixed) {
      this._listOfBugs.push(bug)
      this._listOfInactiveBugs.splice(this._listOfInactiveBugs.indexOf(bug), 1)
    } else {
      this._listOfInactiveBugs.push(bug)
      this._listOfBugs.splice(this._listOfBugs.indexOf(bug), 1)
    }
    bug.isFixed = !bug.isFixed;
  }


  get listOfBugs(): BugModel[] {
    return this._listOfBugs;
  }

  get listOfInactiveBugs(): BugModel[] {
    return this._listOfInactiveBugs;
  }
}
