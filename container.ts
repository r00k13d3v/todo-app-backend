import { Container } from "inversify";
import TYPES from "./container.types";
import { CreateItem } from "./src/item/app/CreateItem";
import { GetAllItems } from "./src/item/app/GetAllItems";
import { Item } from "./src/item/domain/Item";
import { ItemsController } from "./src/item/infra/ItemsController";
import { Server } from "./src/server";

export const container = new Container();
container.bind<CreateItem>(TYPES.CreateItem).to(CreateItem);
container.bind<GetAllItems>(TYPES.GetAllItems).to(GetAllItems);
container.bind<Item>(TYPES.Item).to(Item);
container.bind<ItemsController>(TYPES.ItemsController).to(ItemsController);
container.bind<Server>(TYPES.Server).to(Server).inSingletonScope();
