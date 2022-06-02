import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { AuthService } from "./auth.service";
import { Cart } from "./cart";
import { ConnectionService } from "./connection.service";
import { Order } from "./order.model";
import { OrderRepository } from "./order.repository";
import { ProductRepository } from "./product.repository";
import { RestDataSource } from "./rest.datasource";
import { StaticDataSource } from "./static.datasource";

@NgModule({
    providers: [ProductRepository,Cart,Order, OrderRepository, {provide:StaticDataSource, useClass: RestDataSource}, RestDataSource, AuthService, ConnectionService],
    imports: [HttpClientModule]
})
export class ModelModule{}