const style = {
  version: 8,
  sources: {
    gsitile: {
      type: "raster",
      tiles: ["https://cyberjapandata.gsi.go.jp/xyz/std/{z}/{x}/{y}.png"],
      tileSize: 256,
      attribution:
        "地図の出典：<a href='https://www.gsi.go.jp/' target='_blank'>地理院タイル</a>",
    },
    osmbuilding: {
      type: "vector",
      tiles: [
        "https://k96mz.github.io/20240423building3Dqiita/VTpractice/{z}/{x}/{y}.pbf",
      ],
      minzoom: 10,
      maxzoom: 17,
      attribution:
        "©<a href='https://www.openstreetmap.org/copyright' target='_blank'> OpenStreetMap:</a> contributors",
    },
  },
  layers: [
    {
      id: "gsitile",
      type: "raster",
      source: "gsitile",
      minzoom: 5,
      maxzoom: 20,
    },
    {
      id: "building",
      type: "fill-extrusion",
      source: "osmbuilding",
      "source-layer": "building",
      minzoom: 10,
      maxzoom: 17,
      paint: {
        "fill-extrusion-color": "#797979",
        "fill-extrusion-height": ["get", "measuredHeight"],
      },
    },
  ],
};

const map = new maplibregl.Map({
  container: "map",
  style: style, // 地図のスタイル
  center: [139.471321, 35.758044], // 中心座標
  zoom: 16, // ズームレベル
  bearing: -27, // 確度
  pitch: 54, // 傾き
  hash: true, //緯度経度表示
});

//UI
map.addControl(new maplibregl.NavigationControl(), "bottom-right"); // ナビゲーションボタン表示
map.addControl(new maplibregl.ScaleControl()); // スケールバー表示

//debug
map.showTileBoundaries = true;
map.showCollisionBoxes = false;
