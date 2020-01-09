<template>
  <div class="newslist">
    <ul>
        <li  v-for="(item, index) in newslist" :key="index">
            <a href="">
                <div class="new_img" >
                    <img :src="item.imgurl" alt="">
                </div>
                <div class="content">
                    <p class="title">{{item.title}}</p>
                    <div class="news-desc">
                        <p class="summary">{{item.summary}}</p>
                        <p>
                            <span class="praise">{{item.praise}}</span>
                        </p>
                        <p>
                            <span class="time">{{item.time}}</span>
                        </p>
                    </div>
                </div>
            </a>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'newslist',
  data () {
    return {
      newslist: [
          {
            title: '2020年1月2号',
            summary: '摘要内容',
            praise: '点赞数：222222',
            time: '发表时间：2020-01-02',
            imgurl: require('../../assets/img/list-icon1.png')
          },
          {
            title: '2020年1月2号',
            summary: '摘要内容',
            praise: '点赞数：222222',
            time: '发表时间：2020-01-02',
            imgurl: require('../../assets/img/list-icon2.png')
          },
          {
            title: '2020年1月2号',
            summary: '摘要内容',
            praise: '点赞数：222222',
            time: '发表时间：2020-01-02',
            imgurl: require('../../assets/img/list-icon3.png')
          },
          {
            title: '2020年1月2号',
            summary: '摘要内容',
            praise: '点赞数：222222',
            time: '发表时间：2020-01-02',
            imgurl: require('../../assets/img/list-icon4.png')
          },
          {
            title: '2020年1月2号',
            summary: '摘要内容',
            praise: '点赞数：222222',
            time: '发表时间：2020-01-02',
            imgurl: require('../../assets/img/list-icon5.png')
          }
      ]
    }
  }
}
</script>


<style lang='scss' scoped>
.newslist{
    width: 100%;
    ul{
        font-size: 0;
        li{
            width: 100%;
            a{
                display: inline-block;
                width: 100%;
                vertical-align: middle;
                .new_img{
                    display: inline-block;
                    vertical-align: middle;
                    width: 40%;
                    padding: 0 0.5rem 0.35rem 0;
                    img{
                        width: 100%;
                        height: 5rem;
                    }
                }
                .content{
                    display: inline-block;
                    vertical-align: middle;
                    width: 55%;
                    p{
                        font-size: .85rem;
                        line-height: 1.05rem;
                        span{
                            font-size: .85rem;
                        }
                    }
                }
            } 
        }
    }
}
</style>