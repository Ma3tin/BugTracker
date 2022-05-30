import {SeverityEnum} from "./severityEnumModel";

export class BugModel {
  description: string = "";
  severity: SeverityEnum = SeverityEnum.None;
  isFixed: boolean = false;
}
