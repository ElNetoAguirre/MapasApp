import { Component, ElementRef, ViewChild } from "@angular/core";
import { LngLat, Map, Marker } from "mapbox-gl";

interface MarkerAndColor {
  color:      string;
  colorText:  string;
  marker:     Marker;
}

interface PlainMarker {
  color:      string;
  colorText:  string;
  lngLat:     number[];
}

@Component({
  selector: "markers-page",
  templateUrl: "./markers-page.component.html",
  styleUrls: ["./markers-page.component.css"]
})

export class MarkersPageComponent {
  @ViewChild("map")
  public divMap?: ElementRef;

  public markers: MarkerAndColor[] = [];
  public map?: Map;
  public currentLngLat: LngLat = new LngLat(-77.045, 38.892);

  ngAfterViewInit(): void {
    if(!this.divMap) throw "El elemento HTML no fue encontrado.";

    this.map = new Map({
      container: this.divMap.nativeElement, // container ID
      style: "mapbox://styles/mapbox/streets-v12", // style URL
      center: this.currentLngLat, // starting position [lng, lat]
      zoom: 13, // starting zoom
    });

    this.readFromLocalStorage();
  }

  createMarker() {
    if(!this.map) return;

    // Genera un color aleatorio para el marcador
    const color = "#xxxxxx".replace(/x/g, y=>(Math.random()*16|0).toString(16));
    const lngLat = this.map.getCenter();
    this.addMarker(lngLat, color);
  }

  addMarker(lngLat:LngLat, color:string) {
    if(!this.map) return;

    // Funcion para calcular el color del texto del marcador
    const contrastColor = (c:string)=>["#000000","#ffffff"][~~([.299,.587,.114].reduce((r,v,i)=>parseInt(c.substr(i*2+1,2),16)*v+r,0)<128)];

    // Definir el color del texto basado en el color del marcador
    const colorText = contrastColor(color);

    const marker = new Marker({
      color: color,
      draggable: true,
    })
      .setLngLat(lngLat)
      .addTo(this.map);

    this.markers.push({color, colorText, marker});
    this.saveToLocalStorage();

    // Guardar las coordenadas del marcador despues de moverlo
    marker.on("dragend", () => this.saveToLocalStorage());
  }

  deleteMarker(index:number) {
    this.markers[index].marker.remove();
    this.markers.splice(index, 1);
  }

  flyTo(marker:Marker) {
    this.map?.flyTo({
      zoom: 14,
      center: marker.getLngLat(),
    })
  }

  saveToLocalStorage() {
    const plainMarkers:PlainMarker[] = this.markers.map(({color, colorText, marker}) => {
      return {
        color,
        colorText,
        lngLat: marker.getLngLat().toArray()
      }
    });
    localStorage.setItem("plainMarkers", JSON.stringify(plainMarkers));
  }

  readFromLocalStorage() {
    const plainMarkersString = localStorage.getItem("plainMarkers") ?? "[]";
    const plainMarkers:PlainMarker[] = JSON.parse(plainMarkersString);

    plainMarkers.forEach(({color, colorText, lngLat}) => {
      const [lng, lat] = lngLat;
      const coords = new LngLat(lng, lat);
      this.addMarker(coords, color)
    })
  }
}
