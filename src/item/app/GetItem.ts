import { injectable } from "inversify";
import { Item } from "../domain/Item";

@injectable()
export class GetItem {
  constructor() {}

  public async execute(itemId: string): Promise<Item> {
    return new Item();
  }
}
