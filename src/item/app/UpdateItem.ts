import { injectable } from "inversify";
import { Item } from "../domain/Item";

@injectable()
export class CreateItem {
  constructor() {}

  public async execute(item: Item): Promise<Item> {
    return item;
  }
}
