<template>
<div>
  <h1>This is baidu map</h1>
  <baidu-map class="map" center="寿县">
    <bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-navigation>
    <bm-geolocation anchor="BMAP_ANCHOR_BOTTOM_RIGHT" locationIcon="***" :showAddressBar="true" :autoLocation="true"></bm-geolocation>
  </baidu-map>

  
</div>
</template>

<style lang="scss" scoped>
.map {
  width: 100%;
  height: 700px;
}
</style>