<template>
  <v-app>
    <v-navigation-drawer app color="#181818" dark v-model="drawer">
      <v-row justify="center">
        <v-avatar size="100" class="mt-8 mb-3">
          <img src="./assets/avatar_01.png" alt="takuya" />
        </v-avatar>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="title text-center">Takuya Yagishita</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list nav>
          <v-list-item v-for="item in items" :key="item.title" link>
            <v-list-item-content v-scroll-to="`#${item.to}`">
              <v-list-item-title class="text-center">{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-row>
      <template v-slot:append>
        <v-row justify="center">
          <div class="mb-6">
            <v-btn icon color="white">
              <v-icon>fab fa-twitter-square</v-icon>
            </v-btn>
            <v-btn icon color="white" class="mx-1" href="https://github.com/TakuyaYagishita0202" target="_blank">
              <v-icon>fab fa-github-square</v-icon>
            </v-btn>
            <v-btn icon color="white" href="mailto:yagishita0202@gmail.com">
              <v-icon>fas fa-envelope-square</v-icon>
            </v-btn>
          </div>
        </v-row>
      </template>
    </v-navigation-drawer>
    <v-app-bar app color="transparent" flat dark hide-on-scroll>
      <v-app-bar-nav-icon color="#C4C4C4" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    </v-app-bar>

    <v-content v-resize="onResize">
      <div id="top" :style="{height: windowSize.height - 64 + 'px'}" style="position:relative" class="mx-4">
        <span class="name">TAKUYA</span>
        <span class="name float-right">YAGISHITA</span>
        <span 
          class="dob float-right"
          style="fontWeight:bold;position:absolute;bottom:0;right:0"
        >
          DOB 02/02/1996
        </span>
      </div>
      <div id="about" class="mx-4 mx-md-8 my-4">
        <h1>About me</h1>
        <v-row>
          <v-col class="d-flex justify-center align-center" cols="12" md="6">
            <v-avatar :size="isMobile ? '250px' : '350px'"  class="elevation-2">
              <img src="./assets/avatar_02.png" alt="takuya" />
            </v-avatar>
            <div>
            </div>
          </v-col>
          <v-col cols="12" md="6">
            <h2 class="mb-4">はじめに</h2>
            <p>
              初めまして。ポートフォリオサイトにお越しいただきまして誠にありがとうございます。
              現在、<span class="highlight">Web系エンジニア</span>(フロントエンドまたはバックエンド)への転職を目指し転職活動、及びプログラミングの学習を精力的に行っております。
              <br><br>
              これまで学習してきた技術は以下の通りです。
              <br><br>
              <ul>
                <li>HTML, CSS</li>
                <li>JavaScript</li>
                <li>jQuery</li>
                <li>Vue.js</li>
                <li>PHP</li>
                <li>Laravel</li>
                <li>Linux(LPIC101試験合格)</li>
              </ul>
              <br>
              ご興味があればご連絡いただけましたら幸いです。どうぞよろしくお願いいたします。
            </p>
          </v-col>
        </v-row>
      </div>
      <div id="history" class="mx-4 mx-md-8 my-4">
        <h1>History</h1>
        <v-timeline :dense="isMobile">
          <v-timeline-item color="#FB5D63">
            <template v-slot:opposite>
              <span>2014.03</span>
            </template>
            <v-card class="elevation-2" color="black" dark>
              <v-card-title class="title font-weight-bold">兵庫県立御影高等学校卒業</v-card-title>
              <v-card-text>
                高校時代はサッカー部に所属し、チームの仲間と切磋琢磨した毎日でした。また、部活と学業と並行してバンド活動(担当パートはドラム)を行っていました。楽器の習得には忍耐力が欠かせません。<span class="highlight">コツコツと愚直に物事に取り組む癖</span>をこの時に身に付けました。
              </v-card-text>
            </v-card>
          </v-timeline-item>
          <v-timeline-item color="#FB5D63">
            <template v-slot:opposite>
              <span>2014.04</span>
            </template>
            <v-card class="elevation-2" color="black" dark>
              <v-card-title class="title font-weight-bold">大阪市立大学 文学部 入学</v-card-title>
              <v-card-text>
                大学は大阪市立大学に進学し、学業、サークル活動、アルバイトと充実した日々を過ごしました。また、語学の習得にも力を入れ、2018年3月には<span class="highlight">TOEIC905点</span>を獲得しました。将来英語を使って仕事がしたいという思いは当時そこまでありませんでしたが、英語の情報に触れる機会が多くなった今となっては一生懸命勉強した甲斐があったと感じています。
              </v-card-text>
            </v-card>
          </v-timeline-item>
          <v-timeline-item color="#FB5D63">
            <template v-slot:opposite>
              <span>2018.04</span>
            </template>
            <v-card class="elevation-2" color="black" dark>
              <v-card-title class="title font-weight-bold">EC(ネット通販)企業に就職</v-card-title>
              <v-card-text>
                大学卒業後はネット通販を運営する企業に就職しました。ITやマーケティング、サプライチェーンなどビジネスに関わる幅広い知識を得ることができる点に魅力を感じ入社を決意しました。入社後は楽天市場にて腕時計を販売する店舗のディレクターとして<span class="highlight">過去最高月商</span>を記録、さらに<span class="highlight">楽天市場出店5万店舗の上位100店舗</span>(上位0.2%)にランクインさせることができました。<span class="highlight">業務改善</span>にも積極的に取り組み、<span class="highlight">Google Apps Scriptを独学して業務の自動化、効率化ツールを複数開発</span>しました。一部は以下のWorksに掲載しておりますのでご興味がありましたら是非ご覧ください。
              </v-card-text>
            </v-card>
          </v-timeline-item>
          <v-timeline-item color="#FB5D63">
            <template v-slot:opposite>
              <span>2020.03</span>
            </template>
            <v-card class="elevation-2" color="black" dark>
              <v-card-title class="title font-weight-bold">学習・転職活動に専念するため退職</v-card-title>
              <v-card-text>
                Google Apps Scriptでの開発を通して業務改善を行い、上司・部下に感謝された経験に非常にやりがいを感じ、<span class="highlight">もっとより多くの人の役に立つアプリケーションやサービスを開発してみたい</span>という思いが強くなりました。人間関係も非常に良い職場で葛藤はありましたが、自らの夢を叶える為に転職することを決意しました。現在はWeb系エンジニアとしての転職を目指し、活動をする傍ら、毎日欠かさず独学で学習に取り組んでいます。最近はインフラの知識が不足していることを痛感し、Linuxの学習を進めています(LPIC101試験に合格)。
              </v-card-text>
            </v-card>
          </v-timeline-item>
        </v-timeline>
      </div>
      <div id="skills" class="mx-4 mx-md-8 my-4">
        <h1>Skills</h1>
        <v-row>
          <v-col>
            <div class="mx-auto">
            <h3 class="mb-4">Programming</h3>
            <Rating skill="HTML5 / CSS3" :value="4"/>
            <Rating skill="Markdown" :value="3"/>
            <Rating skill="JavaScript" :value="4"/>
            <Rating skill="Google Apps Script" :value="5"/>
            <Rating skill="jQuery" :value="2"/>
            <Rating skill="Vue.js" :value="4"/>
            <Rating skill="PHP" :value="3"/>
            <Rating skill="Laravel" :value="3"/>
            <Rating skill="Bootstrap4" :value="2"/>
            <Rating skill="Vuetify" :value="4"/>
            </div>
          </v-col>
          <v-col>
            <h3 class="mb-4">Design</h3>
              <Rating skill="Photoshop" :value="5"/>
              <Rating skill="Figma" :value="3"/>
            <h3 class="mt-4 mb-4">Spreadsheet</h3>
              <Rating skill="Excel" :value="5"/>
              <Rating skill="Google Spread Sheet" :value="4"/>
          </v-col>
        </v-row>
      </div>
      <div id="works" class="mx-4 mx-md-8 my-4">
        <h1>Works</h1>
        <v-row class="my-12">
          <v-col cols="12" md="6" style="backgroundColor:#FB5D63;" class="d-flex justify-center align-center">
            <v-hover>
              <template v-slot="{ hover }">
                <v-img
                  src="./assets/quitter.png"
                  :max-width="isMobile ? '280px' : '400px'"
                  class="transition-swing link my-6 my-md-12"
                  :class="`elevation-${hover ? 24 : 2}`"
                  @click="linkTo('https://quitter-app-beta.herokuapp.com/login')"
                >
                </v-img>
              </template>
            </v-hover>
          </v-col>
          <v-col cols="12" md="6" class="mt-4 mt-md-0">
            <h2 class="display-2 font-weight-bold mb-4 ml-md-n12">
              Quitter
              <v-btn
                icon
                href="https://github.com/TakuyaYagishita0202/laravel_timetracker"
                color="#FB5D63"
                target="_blank"
              >
                <v-icon>fab fa-github-square</v-icon>
              </v-btn>  
            </h2>
            <p>
              QuitterはVue.jsとLaravelで構築されたシンプルなタイムトラッキングアプリケーションです。
              プログラミングやデザイン、語学や資格取得に向けた学習など、
              ユーザーの日々の自己投資時間を見える化することでモチベーションの維持に繋げ、
              習慣化のサポートができればという思いで開発しました。
              <br><br>
              制作期間：約1ヶ月(2020/4/24~5/25)
              <br><br>
              使用した主な技術：Vue.js / Vuetify / Laravel
            </p>
          </v-col>
        </v-row>
        <v-divider></v-divider>
        <v-row class="my-12">
          <v-col cols="12" md="6" style="backgroundColor:#28C4CB;" class="d-flex justify-center align-center">
            <v-hover>
              <template v-slot="{ hover }">
                <v-img
                  src="./assets/canda.png"
                  :max-width="isMobile ? '280px' : '400px'"
                  class="transition-swing my-6 my-md-12"
                  :class="`elevation-${hover ? 24 : 2}`"
                >
                </v-img>
              </template>
            </v-hover>
          </v-col>
          <v-col cols="12" md="6" class="mt-4 mt-md-0">
            <h2 class="display-2 font-weight-bold mb-4 ml-md-n12">Canda</h2>
            <p>
              CandaはGoogle Apps Scriptで構築されたリマインダーです。リマインドする相手、日時、内容を入力することで、決められた時間にチャットワークを経由してメッセージ及びタスクを送信することができます。特定の時間帯に実行すべきタスクの抜け漏れ防止を補助するツールとして前職時代に業務時間外で開発しました。現在では社内のお役立ちツールの一つとして実際に活用されています。
              <br><br>
              制作期間：約1週間
              <br><br>
              使用した主な技術：<br>
              HTML5 / CSS3 / Google Apps Script / Chatwork API
            </p>
          </v-col>
        </v-row>
        <v-divider></v-divider>
        <v-row class="my-12">
          <v-col cols="12" md="6" style="backgroundColor:#FF6E02;" class="d-flex justify-center align-center">
            <v-hover>
              <template v-slot="{ hover }">
                <v-img
                  src="./assets/item.png"
                  :max-width="isMobile ? '280px' : '400px'"
                  class="transition-swing link my-6 my-md-12"
                  :class="`elevation-${hover ? 24 : 2}`"
                >
                </v-img>
              </template>
            </v-hover>
          </v-col>
          <v-col cols="12" md="6" class="mt-4 mt-md-0">
            <h2 class="display-1 font-weight-bold mb-4 ml-md-n12">商品情報自動取得くん</h2>
            <p>
              以前勤務していたネット通販の企業では、出品する商品情報の収集及び入力作業に非常に多くの時間を割いているという重大な課題がありました。そこで開発したのがこちらのツールです。楽天商品検索APIを活用して商品情報の収集及び入力作業を自動化し、結果的に年間約240時間の業務改善に成功しました。
              <br><br>
              制作期間：約2週間
              <br><br>
              使用した主な技術：<br>
              Google Apps Script / 楽天商品検索API
            </p>
          </v-col>
        </v-row>
        <v-divider></v-divider>
        <v-row class="my-12">
          <v-col cols="12" md="6" style="backgroundColor:#1DCD00;" class="d-flex justify-center align-center">
            <v-hover>
              <template v-slot="{ hover }">
                <v-img
                  src="./assets/goover.png"
                  :max-width="isMobile ? '100px' : '150px'"
                  class="transition-swing link my-3 my-md-6"
                  :class="`elevation-${hover ? 24 : 2}`"
                >
                </v-img>
              </template>
            </v-hover>
          </v-col>
          <v-col cols="12" md="6" class="mt-4 mt-md-0">
            <h2 class="display-2 font-weight-bold mb-4 ml-md-n12">GOOVER</h2>
            <p>
              GOOVERはGoogle Apps ScriptとLINE Messaging APIを用いて開発した教育系チャットボットです。語学の習得や資格試験に向けた暗記を補助するツールとして趣味で開発しました。覚えたい事柄に関する質問と、それに対する答えを入力すれば10分後、1日後、1週間後、1ヶ月後に質問のみを返し、答えは特定のIDを入力することで確認できる仕組みになっています。
              <br><br>
              制作期間：約1週間
              <br><br>
              使用した主な技術：<br>
              Google Apps Script / LINE Messaging API
            </p>
          </v-col>
        </v-row>
      </div>
      <div id="contact" class="mx-4 mx-md-8 my-4">
        <h1>Contact</h1>
        <v-row>
          <v-col cols="12" md="6">
            <h2 class="mb-4">終わりに</h2>
            <p>
              最後までご覧いただきまして誠にありがとうございました。
              柳下拓也は現在、積極転職活動中です。
              もし少しでもご興味をお持ちいただけましたら以下の連絡先またはフォームよりご連絡いただけましたら幸いでございます。
              皆様からのご連絡を心よりお待ち申し上げております。どうぞよろしくお願いいたします。
            </p>
            <v-list-item two-line>
              <v-list-item-icon>
                <v-icon class="mr-2">fas fa-phone</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>Phone</v-list-item-title>
                <v-list-item-subtitle>090-6320-4699</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-list-item two-line>
              <v-list-item-icon>
                <v-icon class="mr-2">fas fa-envelope</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>Email</v-list-item-title>
                <v-list-item-subtitle>yagishita0202@gmail.com</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-list-item two-line>
              <v-list-item-icon>
                <v-icon class="mr-2">fab fa-twitter</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>Twitter</v-list-item-title>
                <v-list-item-subtitle>@takuya_0202</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-col>
          <v-col cols="12" md="6">
            <v-form ref="form" v-model="form.valid">
              <v-text-field
                v-model="form.name"
                label="お名前"
                :rules="rules.required"
              ></v-text-field>
              <v-text-field
                v-model="form.email"
                label="メールアドレス"
                :rules="rules.email"
              ></v-text-field>
              <v-text-field
                v-model="form.subject"
                label="件名"
                :rules="rules.required"
              ></v-text-field>
              <v-textarea
                v-model="form.message"
                label="メッセージ"
                rows="4"
                :rules="rules.required"
              ></v-textarea>
              <v-btn
                color="primary"
                :disabled="!form.valid"
                @click="submit"
              >
                送信
              </v-btn>
            </v-form>
          </v-col>
        </v-row>
      </div>

      <!-- snackbar -->
      <v-snackbar
        v-model="snackbar.submit"
        bottom
        right
        color="success"
      >
        送信しました。
        <v-btn
          text
          @click="snackbar.submit = false"
        >
          閉じる
        </v-btn>
      </v-snackbar>
      <v-snackbar
        v-model="snackbar.error"
        bottom
        right
        color="error"
      >
        送信に失敗しました。時間を置いて再度お試しください。
        <v-btn
          text
          @click="snackbar.error = false"
        >
          閉じる
        </v-btn>
      </v-snackbar>
    </v-content>
  </v-app>
</template>

<script>
import Rating from "./components/Rating";
import axios from "axios";

export default {
  name: "App",

  components: {
    Rating,
  },
  created(){
    if(window.innerWidth <= 600){
      this.drawer = false
    }
  },
  data: () => ({
    drawer:true,
    windowSize: {
      width: window.innerWidth,
      height: window.innerHeight
    },
    rules:{
      required:[v => !!v || '必ず入力してください',],
      email:[
        v => !!v || '必ず入力してください',
        v => /.+@.+\..+/.test(v) || '正しいメールアドレスを入力してください',
      ]
    },
    snackbar:{
      submit:false,
      error:false
    },
    form:{
      valid:true,
      name:"",
      email:"",
      message:"",
      subject:""
    },
    items: [
      { title: "About Me", to:"about", icon: "mdi-view-dashboard" },
      { title: "History", to:"history", icon: "mdi-image" },
      { title: "Skills", to:"skills", icon: "mdi-help-box" },
      { title: "Works", to:"works", icon: "mdi-help-box" },
      { title: "Contact", to:"contact", icon: "mdi-help-box" }
    ]
  }),

  methods:{
    onResize() {
      this.windowSize = {
        width: window.innerWidth,
        height: window.innerHeight
      };
    },
    linkTo(url){
      window.open(url, '_blank')
    },
    submit(){
      if (confirm("この内容で送信しますか？")) {
        const submitParams = new FormData();
        // お名前のname属性値
        submitParams.append("entry.737728292", this.form.name);
        // メールアドレスのname属性値
        submitParams.append("entry.426685796", this.form.email);
        // お問い合わせ内容のname属性値
        submitParams.append("entry.188667845", this.form.message);
        // 件名のname属性値
        submitParams.append("entry.713930743", this.form.subject);

        // CORSエラー対策
        const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";
        // Googleフォームのaction属性値
        const GOOGLE_FORM_ACTION = "https://docs.google.com/forms/u/0/d/e/1FAIpQLSfYTz-GGY8EbYEYtIW6HJ1D5bggUjltbzWHfawcWd7rl5YYtQ/formResponse";

        // Ajax POST通信
        axios.post(CORS_PROXY + GOOGLE_FORM_ACTION, submitParams)
          .then(() => {
            // フォーム初期化
            this.$refs.form.reset()
            // 送信完了のスナックバー表示
            this.snackbar.submit = true;
          })
          .catch(() => {
            this.snackbar.error = true;
          });
      }
    }
  },

  computed:{
    isMobile(){
      if(this.windowSize.width <= 600){
        return true
      }
      return false
    },
  }
};
</script>
<style scoped>
.v-content {
  background-color: #f5f5f5;
}
#top{
  word-wrap: break-word;
}
#top > .name{
  line-height: 100%;
  font-weight: bold;
  font-size: calc(5.5rem + ((1vw - 6px) * 8.2822));
}
#top > .dob{
  font-size: calc(2rem + ((1vw - 6px) * 1.8405));
}
.highlight{
  font-weight: bold;
  color:#FB5D63;
}
h1{
  font-size: 64px;
  font-weight: bold;
  color:#FB5D63;
}
p{
  color: #444444 !important;
}
.link:hover{
  cursor: pointer;
}

@media screen and (max-width:600px) { 
  #top{
    padding-top: 72px;
  }
  #top > .name{
    float: left !important
  }
}
</style>