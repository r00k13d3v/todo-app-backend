import "reflect-metadata";
import { container } from "./container";
import TYPES from "./container.types";
import { Server } from "./src/server";

container.get<Server>(TYPES.Server).start();
