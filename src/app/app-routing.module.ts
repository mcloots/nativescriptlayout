import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { AbsoluteLayoutComponent } from "./absolute-layout/absolute-layout.component";
import { DockLayoutComponent } from "./dock-layout/dock-layout.component";
import { FlexboxLayoutComponent } from "./flexbox-layout/flexbox-layout.component";
import { GridLayoutComponent } from "./grid-layout/grid-layout.component";
import { StackLayoutComponent } from "./stack-layout/stack-layout.component";
import { WrapLayoutComponent } from "./wrap-layout/wrap-layout.component";

const routes: Routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "home", component: HomeComponent },
    { path: "absolute", component: AbsoluteLayoutComponent },
    { path: "dock", component: DockLayoutComponent },
    { path: "flexbox", component: FlexboxLayoutComponent },
    { path: "grid", component: GridLayoutComponent },
    { path: "stack", component: StackLayoutComponent },
    { path: "wrap", component: WrapLayoutComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
