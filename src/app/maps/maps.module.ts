import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import * as mapboxgl from "mapbox-gl";
(mapboxgl as any).accessToken = "pk.eyJ1IjoiZWFhZTMwMDM3OCIsImEiOiJjbDZmbnpjanEwZmlzM2xrZTc1Zjg0aWNsIn0.aoPdcGHa2VBZVNgVYkqWrg";

import { MapsRoutingModule } from "./maps-routing.module";
import { FullScreenPageComponent } from "./pages/full-screen-page/full-screen-page.component";
import { MapsLayoutComponent } from "./layout/maps-layout/maps-layout.component";
import { MarkersPageComponent } from "./pages/markers-page/markers-page.component";
import { MiniMapComponent } from "./components/mini-map/mini-map.component";
import { PropertiesPageComponent } from "./pages/properties-page/properties-page.component";
import { ZoomRangePageComponent } from "./pages/zoom-range-page/zoom-range-page.component";

import { SideMenuComponent } from "../alone/components/side-menu/side-menu.component";

@NgModule({
  declarations: [
    FullScreenPageComponent,
    MapsLayoutComponent,
    MarkersPageComponent,
    MiniMapComponent,
    PropertiesPageComponent,
    ZoomRangePageComponent,
  ],

  imports: [
    CommonModule,
    MapsRoutingModule,
    SideMenuComponent,
  ]
})

export class MapsModule { }
