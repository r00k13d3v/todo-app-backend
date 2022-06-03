import { Request, Response } from "express";
import { inject, injectable } from "inversify";
import TYPES from "../../../container.types";
import { CreateItem } from "../app/CreateItem";
import { GetAllItems } from "../app/GetAllItems";

@injectable()
export class ItemsController {
  private readonly createItem: CreateItem;
  private readonly getAllItem: GetAllItems;

  constructor(
    @inject(TYPES.CreateItem) createItem: CreateItem,
    @inject(TYPES.GetAllItems) getAllItem: GetAllItems
  ) {
    this.createItem = createItem;
    this.getAllItem = getAllItem;
  }

  public async create(request: Request, response: Response) {
    const item = await this.createItem.execute(request.body);
    response.json(item);
  }

  public async getAll(request: Request, response: Response) {
    const item = await this.getAllItem.execute();
    response.json(item);
  }
}
