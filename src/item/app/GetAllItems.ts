import { injectable } from "inversify";
import { Item } from "../domain/Item";

@injectable()
export class GetAllItems {
  constructor() {}

  public async execute(): Promise<Item[]> {
    return [];
  }
}
