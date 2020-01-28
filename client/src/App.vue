<template>
  <div id="app">
    <ul v-for="activity in activities">
      <li>{{activity.name}}</li>
      <li>{{activity.timeStamps}}</li>
    </ul>
    <scatter-graph :activities="activities" />
    <!-- <bar-graph /> -->
  </div>
</template>

<script>
import ChartsService from '../services/ChartsService';
import ScatterGraph from './components/ScatterGraph.vue';
import BarGraph from './components/BarGraph.vue';
import { GChart } from 'vue-google-charts'
import { eventBus } from './main.js'

export default {
	name: "app",
	data () {
    return {
      activities: []
    }
},
  components: {
    'scatter-graph': ScatterGraph,
    'bar-graph': BarGraph
  },
	mounted(){
    this.fetchData();
  },
  methods: {
    fetchData(){
      ChartsService.getCharts()
      .then(activities => this.activities = activities)
      .then(() => eventBus.$emit('got-charts', this.activities))
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
