import { Note } from "./note";

export type Folder = {
  id: string;
  title: string;
  createdAt: string;
  notes: Note[]
}