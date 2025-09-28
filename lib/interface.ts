export interface ChatMessage {
  id: string;
  sender: respType;
  text: string;
  timestamp?: Date;
}

export enum respType {
  BOT = "bot",
  USER = "user",
}

export enum Status {
  LOADING = "loading",
  DATA = "data",
  IDLE = "idle",
}
