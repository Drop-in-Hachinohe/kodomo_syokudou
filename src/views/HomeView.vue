<script setup lang="ts">
import { createClient } from 'microcms-js-sdk';
import type { GalleriesResponse, GalleryResponse } from '@/types';
import Gallery from '@/models/gallery';
import { ref } from 'vue';

import GalleriesCarousel from '@/components/GalleriesCarousel.vue';
import GoogleForm from '@/components/GoogleForm.vue';

const client = createClient({
  serviceDomain: import.meta.env.VITE_MICRO_CMS_SERVICE_DOMAIN,
  apiKey: import.meta.env.VITE_MICRO_CMS_API_KEY,
});

const galleries = ref<Gallery[]>([])

// ギャラリー一覧 (id, title, thumbnail) を取得
client
  .get<GalleriesResponse>({
    endpoint: 'galleries',
    queries: {
      fields: 'id,title,thumbnail',
    },
  })
  .then((res: GalleriesResponse) => {
    galleries.value = res.contents.map((gallery: GalleryResponse) => Gallery.fromResponse(gallery))
  });
</script>

<template>
  <div class="kv">
    <div class="kv_main">
      <img src="/images/main_title.png" class="kv_title_img" />
      <a href="#open" class="kv_menu kv_menu_1">
        <img src="/images/menu_01.png" />
      </a>
      <a href="#information" class="kv_menu kv_menu_2">
        <img src="/images/menu_02.png" />
      </a>
      <a href="#price" class="kv_menu kv_menu_3">
        <img src="/images/menu_03.png" />
      </a>
      <a href="#reserve" class="kv_menu kv_menu_4">
        <img src="/images/menu_04.png" />
      </a>
    </div>
  </div>
  <main>
    <section id="about" class="pt-16 bg_wood_light">
      <div class="section">
        <div class="main_message p-8 pt-14 md:p-16 md:pt-28">
          <img src="/images/news_ribbon.png" class="main_message_ribbon" alt="お知らせ" />
          <p class="font-kei text-4xl mb-8 text-center">2023年10月9日 (月)</p>
          <p class="font-kei text-3xl mb-4 text-center">
            <span class="text-4xl">お休みいたします🙏</span>
          </p>
          <!-- <p class="font-kei text-4xl mb-4 text-center">100コ</p>
          <p class="font-kei text-3xl text-center">
            <span class="color-pink text-4xl">無料</span>配布します！
          </p> -->
          <p class="text-lg main_message_desc mt-8 pt-8">
            10月9日 (月) は前日の鮫フェスイベント参加の為、子ども食堂はお休みいたします。<br />
            次回10月16日 (月) にお越しください。
          </p>
          <!-- <p class="text-lg font-bold mt-4">特典</p>
          <p class="text-base">
            食堂内でご飲食の方にはお味噌と駄菓子類をご用意してお待ちしております。
            是非お越しください！
          </p> -->
        </div>
      </div>
      <div class="section">
        <div class="main_message p-8 pt-14 md:p-16 md:pt-28">
          <img src="/images/top_ribbon.png" class="main_message_ribbon" />
          <header class="font-kei text-3xl">
            さめ駅からすぐのカフェ Airにて、みんなが笑顔になる子ども食堂が始まります！
          </header>
          <p class="color-pink font-kei text-lg text-center mt-8">
            \元気いっぱいオープン！ /
          </p>
          <p class="color-pink font-kei text-4xl text-center mt-4">
            毎週月曜日 16:30~19:30
          </p>
          <p class="text-lg main_message_desc mt-8 pt-8">
            鮫のみなさんと子供たちの笑顔とおなかいっぱいのお手伝いをしたいと思っています。
            子供はもちろん、おとなのみなさんの居場所になれたらうれしいです。
          </p>
        </div>
      </div>

      <!-- ギャラリー -->
      <div class="section">
        <div class="main_message p-8 pt-14 md:p-16 md:pt-28">
          <img src="/images/galleries_ribbon.png" class="main_message_ribbon" />
          <GalleriesCarousel :galleries="galleries" />
        </div>
      </div>

      <img src="/images/onigiri_kei.png" class="section_kei down" />
    </section>
    <section id="open" class="section">
      <div class="text-center text-2xl">
        <h2 class="section_title">開催情報</h2>
      </div>
      <p class="color-brown font-kei text-3xl text-center mt-8">毎週月曜日 16:30~19:30</p>
      <p class="color-pink font-kei text-2xl text-center mt-2">オープン！</p>
      <div id="information" class="information pt-16">
        <div class="information_desc">
          <p class="color-green font-kei text-base">駅からすぐそばのランチが人気のお店</p>
          <p class="color-green font-kei text-3xl">カフェ air</p>
          <p class="text-lg font-bold mt-4">住所</p>
          <p class="text-base">青森県八戸市鮫町持越沢4-15</p>
          <p class="text-base"> (嶋田病院向かい)</p>
          <p class="text-lg font-bold mt-4">駐車場</p>
          <p class="text-base">
            <a
              href="https://goo.gl/maps/GqDXQPoWVHABCRQF9?coh=178572&entry=tt"
              target="_blank"
              rel="noopener noreferrer"
              class="color-blue hover:underline"
            >元青森銀行鮫派出所</a>
          </p>
          <p class="text-lg font-bold mt-4">連絡先</p>
          <p class="text-base">090-3962-4521</p>
        </div>
        <iframe class="information_map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2117.186302271447!2d141.5537772114633!3d40.53175109919847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f9b53ea8547a5f7%3A0xde5dacc1cce13f76!2z44CSMDMxLTA4NDEg6Z2S5qOu55yM5YWr5oi45biC6a6r55S65oyB6LaK5rKi77yU4oiS77yR77yV!5e0!3m2!1sja!2sjp!4v1682218817091!5m2!1sja!2sjp" width="600" height="450" style="border:0;" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <div id="price" class="price_wrapper pt-16">
        <div class="price p-12">
          <ul class="price_inner">
            <li class="price_item font-kei text-3xl p-2">小中学生 :	無料</li>
            <li class="price_item font-kei text-3xl p-2">高校生　 :	300円</li>
            <li class="price_item font-kei text-3xl p-2">大人　　 :	500円</li>
          </ul>
        </div>
      </div>
    </section>
    <section id="wish" class="bg_wood_light note">
      <img src="/images/onigiri_kei.png" class="section_kei up" />
      <div class="section">
        <div class="text-center text-2xl">
          <h2 class="section_title">子ども食堂からのお願い</h2>
        </div>
        <div class="note_list mt-16">
          <div class="note_item note_child children">
            <img src="/images/tape_01.png" class="note_item_deco up" />
            <header class="text-center text-xl">
              <span class="marker-pink font-bold">こどもたちへ</span>
            </header>
            <p class="text-lg  mt-6">
              かならず おうちの人につたえてからきてネ!<br>
              ランドセルはおいてからきてください。
            </p>
            <img src="/images/tape_01.png" class="note_item_deco down" />
          </div>
          <div class="note_item note_child guardian mt-16 sm:mt-0">
            <img src="/images/tape_02.png" class="note_item_deco up" />
            <header class="text-center text-xl">
              <span class="marker-green font-bold">保護者の方へ</span>
            </header>
            <p class="text-lg mt-6">
              子どもだけで来るお子さんは18時にお家に帰宅できるようにします。<br>
              18時すぎる場合はお迎えをお願いします。
            </p>
            <img src="/images/tape_02.png" class="note_item_deco down" />
          </div>
        </div>
        <div class="note_item all mt-16">
          <img src="/images/tape_03.png" class="note_item_deco up all" />
          <header class="text-center text-2xl">
            <span class="marker-blue font-bold">みなさんへ</span>
          </header>
          <p class="text-xl mt-6">
            <span class="marker-pink font-bold">たいちょうのわるい人はこんどきてください</span>
          </p>
          <p class="text-sm">
            （ねつ・せき・おなかがいたい など）
          </p>
          <p class="text-xl mt-6">
            <span class="marker-pink font-bold">たべもののアレルギーのある方</span>
          </p>
          <p class="text-base">
            食堂では特別な対応をしていません。<br>
            本人または保護者が気をつけてお食事おねがいします。
          </p>
          <p class="color-blue text-base mt-8 mb-8 font-bold">
            混雑時は係スタッフの指示に従ってください。<br />
            また、その際は子供が優先になります。大人の方はお待たせすることがございます。<br />
            ご理解のほど、よろしくお願いいたします。
          </p>
          <header class="text-center text-2xl">
            <span class="marker-blue font-bold">お車でご来店される方へ</span>
          </header>
          <p class="text-xl mt-6">
            <span class="marker-pink font-bold">路上駐車は行わないでください</span>
          </p>
          <p class="text-base">
            駐車場は元青森銀行鮫派出所の敷地が利用可能です。
          </p>
          <p class="text-xl mt-6">
            <span class="marker-pink font-bold">ご来店の際は必ず横断歩道を渡ってきてください。</span>
          </p>
          <img src="/images/tape_03.png" class="note_item_deco down all" />
        </div>
      </div>
    </section>
    <!-- 予約 -->
    <section id="reserve" class="section">
      <div class="text-center text-2xl">
        <h2 class="section_title">ご予約</h2>
      </div>
      <p class="text-lg font-bold mt-16 text-center">
        ご予約はお電話(090-3962-4521)<br>
        または下記の予約フォームからお願いいたします
      </p>
      <!-- Google Form 埋め込み -->
      <GoogleForm />
    </section>  
  </main>
</template>

<style lang="scss" scoped>
.kv {
  background-image: url('/images/bg_wood_dark.jpg');
   padding: 50px 20px 50px;
  @media (min-width: 640px) {
     padding: 50px 10% 50px;
  }
  padding: 50px 10% 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  &_main {
    position: relative;
    width: 100%;
    @media (min-width: 640px) {
       width: 60%;
    }
  }
  &_title_img {
    width:  100%;
    margin-bottom: 20px;
    @media (min-width: 640px) {
      margin-bottom: 0;
    }
  }
  &_menu {
    display: inline-block;
    width: 50%;
    @media (min-width: 640px) {
      width: 45%;
      position: absolute;
    }
    &:hover img {
      animation: gurun .3s;
      transform: scale(1.2);
    }
    &_1 {
      animation: 3s fuwafuwa2 infinite;
      @media (min-width: 640px) {
        top: 0;
        left: -40%;
      }
    }
    &_2 {
      animation: 3s fuwafuwa infinite;
      @media (min-width: 640px) {
        top: 0;
        right: -40%;
      }
    }
    &_3 {
      animation: 3s fuwafuwa infinite;
      @media (min-width: 640px) {
        bottom: 0;
        left: -40%;
      }
    }
    &_4 {
      animation: 3s fuwafuwa2 infinite;
      @media (min-width: 640px) {
        bottom: 0;
        right: -40%;
      }
    }
  }
}
@keyframes fuwafuwa {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}
@keyframes fuwafuwa2 {
  0% {
   transform: translateY(-2px);
  }
  20% {
    transform: translateY(0);
  }
  70% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(-2px);
  }
}

@keyframes gurun {
  0% {
      transform: rotate(0deg);
  }
  100% {
      transform: rotate(360deg) scale(1.2);
  }
}
.main {
  &_message {
    background-color: white;
    border-radius: 10px;
    position: relative;
    &_ribbon {
      width: 100%;
      left: 50%;
      transform: translate(-50%, 0);
      top: -30px;
      @media (min-width: 640px) {
        width: 60%;
        position: absolute;
        top: -60px;
      }
    }
    &_desc {
      border-top: solid 1px var(--primary-pink);
    }
  }
}
.information {
  display: block;
  @media (min-width: 640px) {
    display: flex;
  }
  &_desc {
    width: 100%;
    @media (min-width: 640px) {
       width: 50%;
    }
  }
  &_map {
    width: 100%;
    @media (min-width: 640px) {
       width: 50%;
    }
  }
}
.price {
  display: flex;
  justify-content: center;
  align-items: center;
  &_wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &_inner {
    display: inline-block;
  }
  &_item {
    color: white;
  }
  width: 500px;
  background: url('/images/bg_wood_dark.jpg') 600px;
}
.note {
  z-index: -2;
  &_list {
    @media (min-width: 640px) {
      display: flex;
      gap: 6%;
    }
  }
  &_child {
     width: 100%;
    @media (min-width: 640px) {
      width: 47%;
    }
  }
  &_item {
    background-color: white;
    padding: 45px 30px;
    position: relative;
    &::before {
      content: "";
      position: absolute;
      display: block;
      width: 100%;
      height: 100%;
      transform: rotate(5deg);
      transform: rotate(3deg) translate(-30px, -45px);
      z-index: -1;
    }
    &_deco {
      position: absolute;
      width: 30%;
      transform: rotate(-15deg);
      filter: drop-shadow(1px 1px 2px rgba(0, 0, 0, .2));
      &.all {
        width: 15%;
        &.up {
          left: -2%;
        }
        &.down {
          right: -2%;
        }
      }
      &.up {
        top: 0;
        left: -5%;
      }
      &.down {
        bottom: 0;
        right: -5%;
      }
    }
    &.children {
      &::before {
        background-color: var(--primary-pink);
      }
    }
    &.guardian {
       &::before {
        background-color: var(--primary-green);
      }
    }
    &.all {
      &::before {
        background-color: var(--primary-blue);
      }
    }
  }
}
</style>
