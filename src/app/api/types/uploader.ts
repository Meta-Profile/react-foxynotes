import {Nullable} from "../types";

export interface UploaderSession {
  sessionId: number;
  fileId: Nullable<number>;
  userId: number;
  completed: "CREATED" | "WAITING" | "COMPLETED";
  timeStarted: string;
  timeCompleted: Nullable<string>;
}
