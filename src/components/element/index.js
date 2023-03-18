/* 全局按需引入 element-ui 组件 */
import {
  Row, Col,
  Carousel, CarouselItem,
  Avatar,Tag, Card, Divider, Timeline, TimelineItem
} from "element-ui";

import 'element-ui/lib/theme-chalk/index.css'

const components = [Row, Col, Carousel, CarouselItem, Avatar, Tag, Card, Divider, Timeline, TimelineItem];

export default {
  install(Vue) {
    components.forEach((comp) => {
      Vue.component(comp.name, comp);
    });
    return Vue;
  },
};