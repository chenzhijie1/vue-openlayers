<template>
    <ul>
      <li class="p_item" v-for="(item,index) in items" :key="index">
				<router-link :to="item.url" class="p_title" > 
					<i class="iconfont" :class="item.icon"></i>{{item.title}}
				</router-link>
			</li>
    </ul>
</template>

<script>
export default {
  name: 'Demo',
  data () {
    return {
      title:'列表页',
      items:[
          {title:'Ol-WMS',url:'/OlMapWMS',icon:'icon-jia'},
          {title:'Ol-WFS',url:'/OlMapWFS',icon:'icon-Twitter'},
          {title:'StreetMap',url:'/OpenStreetMap',icon:'icon-yilianjie'}

      ]
    }
  },
  methods:{
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
		.active {
      color:#f60;
      background:#fff
		}
</style>
