<template>
  <div id="home">
    <mt-swipe :auto="4000" class="img-border">
      <mt-swipe-item v-for="(item, index) in imgs" :key="index">
          <img :src="item.imgurl" class="imgstyle">
      </mt-swipe-item>
    </mt-swipe>
    <div class="list">
        <ul>
            <li v-for="(grid, index) in grids" :key="grid.id">
               <router-link :to="grid.router">
                   <img :src="grid.src" alt="">
               </router-link>
               <p>{{grid.title}}</p>
            </li>
        </ul>
    </div>
    <div class="recommend">
        <div class="title">今日推荐</div>
        <div class="content">
            <div class="item">
                <img src="https://github.surmon.me/vue-awesome-swiper/static/images/surmon-1.jpg" alt="" />
                <div class="item-text">
                    <span>运动超人</span>
                    <span>还剩2天</span>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
var grids=[
    {
        id:1, 
        title:"新闻资讯",
        src: require('../../assets/img/selIcon1.png'),
        router: {
            name: 'news.list'
        }
    },
    {
        id:2, 
        title:"图文分享",
        src: require('../../assets/img/selIcon2.png'),
        router: {
            name: 'news.list'
        }
    },
    {
        id:3, 
        title:"商品展示",
        src: require('../../assets/img/selIcon3.png'),
        router: {
            name: 'news.list'
        }
    },
    {
        id:4, 
        title:"消息资讯",
        src: require('../../assets/img/selIcon4.png'),
         router: {
            name: 'news.list'
        }
    },
    {
        id:5, 
        title:"留言反馈",
        src: require('../../assets/img/selIcon5.png'),
        router: {
            name: 'news.list'
        }
    },
    {
        id:6, 
        title:"联系我们",
        src: require('../../assets/img/selIcon6.png'),
        router: {
            name: 'news.list'
        }
    }
]
export default {
  name: "Home",
  data() {
    return {
      imgs: [
          {
              imgurl: require('../../assets/img/newsImg5.png')
          },
           {
              imgurl: require('../../assets/img/newsImg6.png')
          },
           {
              imgurl: require('../../assets/img/newsImg7.png')
          }
      ],
      grids: grids,
    };
  },
  mounted() {
      this.getIndexData();
  },
  methods: {
      getIndexData(){
          axios.get('/api/appData').then(function(response){
              console.log(response)
          }).catch(function(error){
              console.log(error)
          } )
      }
  }
};
</script>

<style lang="scss"  scoped>

.img-border{
    width: 100%;
    height: 12rem;
    .imgstyle{
        width: 100%;
        height:12rem;
    }
}
.list{
    width: 100%;
    ul{
        display: flex;
        flex-wrap: wrap;
        li{
            width: 33%;
            height: 6rem;
            text-align: center;
            font-size: .5rem;
            list-style-type: none;
            a{
                display: inline-block;
                width: 100%;
                height: 2.5rem;
                margin-top: 1.85rem;
            }
            img{
                width: 2.25rem;
                height: 2.25rem;
            }
        }
    }
}
.recommend{
    .title{
        text-align: center;
        font-size: 0.6rem;
        padding: 0.26rem;
        background: #fff;
        margin: 0.13rem 0;
    }
    .content{
        .item{
            background: #fff;
            margin-bottom: 1.3rem;
            img{
                width: 100%;
                height: 12rem;
                display: block;
            }
            .item-text{
                box-sizing: border-box;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                padding: 0.13rem 0.85rem;
                font-size: 0.5rem;
            }
        }
    }
}
</style>