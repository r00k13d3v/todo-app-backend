import { injectable } from "inversify";
import { Item } from "../domain/Item";

@injectable()
export class CreateItem {
  
  public async execute(item: Item): Promise<Item> {
    return item;
  }
}
