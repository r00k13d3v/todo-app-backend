import { injectable } from "inversify";
import { Item } from "../domain/Item";

@injectable()
export class GetItem {

  public async execute(): Promise<Item> {
    return new Item();
  }
}
