import { inject, injectable } from "inversify";
import TYPES from "../container.types";
import { Item } from "./item/domain/Item";
import { ItemsController } from "./item/infra/ItemsController";
import express, { Application } from "express";
import { Logger } from "./common/looger";

@injectable()
export class Server {
  private api : Application = express();
  private PORT = 3000 as number;

  constructor(
    @inject(TYPES.Item) private item: Item,
    @inject(TYPES.ItemsController) private itemController: ItemsController,
  ) {}

  public start(): void {
    this.api.use(express.json());
    this.api.use(express.urlencoded({ extended: true }));
    this.api.use(Logger.http);

    this.api.get("/items/:id", (req, res) => {
      this.itemController.create(req, res);
    }); 

    this.api.get("/items", (req, res) => {
      this.itemController.getAll(req, res);
    });

    this.api.listen(this.PORT, () => {
      Logger.info("Server started on port 3000");
    });
  }
}
