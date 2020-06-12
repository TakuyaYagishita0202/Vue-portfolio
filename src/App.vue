<template>
  <v-app>
    <v-navigation-drawer app v-model="drawer" :floating="true">
      <v-row justify="center">
        <v-avatar size="100" class="mt-8 mb-3">
          <img src="./assets/test.jpg" alt="takuya" />
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
              <v-icon>icon-wantedly</v-icon>
            </v-btn>
            <v-btn
              icon
              color="white"
              class="mx-1"
              href="https://github.com/TakuyaYagishita0202"
              target="_blank"
            >
              <v-icon>fab fa-github</v-icon>
            </v-btn>
            <v-btn icon color="white" href="mailto:yagishita0202@gmail.com">
              <v-icon small>fas fa-envelope</v-icon>
            </v-btn>
          </div>
        </v-row>
      </template>
    </v-navigation-drawer>
    <v-app-bar app color="transparent" flat dark>
      <v-app-bar-nav-icon color="#C4C4C4" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    </v-app-bar>

    <v-content v-resize="onResize">
      <div
        id="top"
        :style="{height: windowSize.height - 64 + 'px'}"
        style="position:relative"
        class="mx-4"
      >
        <span class="name">TAKUYA</span>
        <span class="name float-right">YAGISHITA</span>
        <span
          class="dob float-right"
          style="fontWeight:bold;position:absolute;bottom:0;right:0"
        >DOB 02/02/1996</span>
      </div>
      <div id="about" class="mx-4 mx-md-8 my-4">
        <h1>About me</h1>
        <v-row>
          <v-col class="d-flex justify-center" cols="12" md="6">
            <div>
              <v-img src="./assets/test.jpg" max-width="100vw" class="grey darken-4"></v-img>
            </div>
          </v-col>
          <v-col cols="12" md="6">
            <h2 class="mb-4">はじめに</h2>
            <p>
              初めまして。ポートフォリオサイトにお越しいただきまして誠にありがとうございます。
              <span class="highlight">Web系エンジニア</span>(フロントエンドまたはバックエンド)への転職を目指し、2020年3月よりプログラミングの学習を精力的に行っております。
              <br />この3ヶ月で学習した技術は以下の通りです。
              <br />
              <v-chip
                v-for="(skill, index) in learned"
                :key="index"
                class="ma-1"
                :color="skill.color"
                label
              >
                <v-avatar left>
                  <v-icon>{{skill.icon}}</v-icon>
                </v-avatar>
                {{skill.name}}
              </v-chip>
            </p>
            <h2 class="mb-4">なぜエンジニアを目指すのか？</h2>
            <p>
              前職ではマーケティング職ながらプログラミング(主にGoogle Apps Script)を独学して、業務の
              <span class="highlight">効率化</span>や
              <span class="highlight">自動化</span>を行いました。その過程で、これまで数時間かかっていた仕事を瞬時に終わらせることができるプログラミングという営みに
              <span
                class="highlight"
              >計り知れない可能性</span>を感じると共に、徐々に
              <span class="highlight">もっと多くの人の役に立つサービスを自らの手で作ってみたい</span>と考えるようになりました。そうして、エンジニアとしてのキャリアを歩むことを決心しました。
            </p>
            <h2 class="mb-4">将来の夢は？</h2>
            <p>
              夢は
              <span class="highlight">多くの人の課題を解決するサービスを開発すること</span>です。学習を始めたばかりでまだまだ技術力もないペーペーですが、どんどん新しいことにチャレンジをして技術的な領域を広げ、行く行くは上流工程からサービスの開発・設計に携わることのできる人材へと成長していきたいです。
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
            <div>
              <h2 class="title font-weight-bold mb-2">兵庫県立御影高等学校卒業</h2>
              <div>
                高校時代はサッカー部に所属し、チームの仲間と切磋琢磨した毎日でした。また、部活と学業と並行してバンド活動(担当パートはドラム)を行っていました。楽器の習得には基礎的な動作を無限に繰り返す忍耐力が欠かせません。
                <span
                  class="highlight"
                >コツコツと愚直に物事に取り組む癖</span>をこの時に身に付けました。
              </div>
            </div>
          </v-timeline-item>
          <v-timeline-item color="#FB5D63">
            <template v-slot:opposite>
              <span>2014.04</span>
            </template>
            <div>
              <h2 class="title font-weight-bold mb-2">大阪市立大学 文学部 入学</h2>
              <div>
                大学は大阪市立大学に進学し、学業、サークル活動、アルバイトと充実した日々を過ごしました。また、語学の習得にも力を入れ、2018年3月には
                <span
                  class="highlight"
                >TOEIC905点</span>を獲得しました。将来英語を使って仕事がしたいという思いは当時そこまでありませんでしたが、
                英語の情報に触れる機会が多くなった今となっては一生懸命勉強した甲斐があったと感じています。
              </div>
            </div>
          </v-timeline-item>
          <v-timeline-item color="#FB5D63">
            <template v-slot:opposite>
              <span>2018.04</span>
            </template>
            <div>
              <h2 class="title font-weight-bold mb-2">EC(ネット通販)企業に就職</h2>
              <div>
                大学卒業後はネット通販を運営する企業に就職しました。ITやマーケティング、サプライチェーンなどビジネスに関わる幅広い知識を得ることができる点に魅力を感じ入社を決意しました。入社後は楽天市場にて腕時計を販売する店舗のディレクターとして様々な施策を実行し、担当店舗の
                <span
                  class="highlight"
                >過去最高月商</span>を記録。さらに
                <span class="highlight">楽天市場出店5万店舗の上位100店舗</span>(上位0.2%)にランクインすることができました。
                <span class="highlight">業務改善</span>にも積極的に取り組み、
                <span class="highlight">Google Apps Scriptを独学して業務の自動化、効率化ツールを複数開発</span>しました。一部は
                <span class="blue--text link" v-scroll-to="'#works'">Works</span>に掲載しておりますのでご興味がありましたら是非ご覧ください。
              </div>
            </div>
          </v-timeline-item>
          <v-timeline-item color="#FB5D63">
            <template v-slot:opposite>
              <span>2020.03</span>
            </template>
            <div>
              <h2 class="title font-weight-bold mb-2">学習・転職活動に専念するため退職</h2>
              <div>
                Google Apps Scriptでの開発を通して業務改善を行い、上司・部下に感謝された経験に非常にやりがいを感じ、
                <span
                  class="highlight"
                >もっとより多くの人の役に立つアプリケーションやサービスを開発してみたい</span>という思いが強くなりました。人間関係も非常に良い職場で葛藤はありましたが、自らの夢を叶える為に転職することを決意しました。現在はWeb系エンジニアとしての転職を目指し、活動をする傍ら、毎日欠かさず独学で学習に取り組んでいます。最近はインフラの知識が不足していることを痛感し、Linuxの学習を進めています。
              </div>
            </div>
          </v-timeline-item>
        </v-timeline>
      </div>
      <div id="skills" class="mx-4 mx-md-8 my-4">
        <h1>Skills</h1>
        <v-row>
          <v-spacer></v-spacer>
          <v-col cols="12" md="5">
            <div class="mx-auto">
              <h3 class="mb-4">Programming</h3>
              <Rating
                v-for="(skill, index) in skills.programming"
                :skill="skill.name"
                :value="skill.value"
                :key="`programming-${index}`"
              />
            </div>
          </v-col>
          <v-spacer></v-spacer>
          <v-col cols="12" md="5">
            <h3 class="mb-4">Design</h3>
            <Rating
              v-for="(skill, index) in skills.design"
              :skill="skill.name"
              :value="skill.value"
              :key="`design-${index}`"
            />
            <h3 class="mt-4 mb-4">Spreadsheet</h3>
            <Rating
              v-for="(skill, index) in skills.spreadSheet"
              :skill="skill.name"
              :value="skill.value"
              :key="`spreadSheet-${index}`"
            />
          </v-col>
          <v-spacer></v-spacer>
        </v-row>
      </div>
      <div id="works" class="mx-4 mx-md-8 my-4">
        <h1>Works</h1>

        <!-- Quitter -->
        <v-row class="my-12">
          <v-col
            cols="12"
            md="6"
            style="backgroundColor:#FB5D63;"
            class="d-flex justify-center align-center"
          >
            <v-hover>
              <template v-slot="{ hover }">
                <v-img
                  src="./assets/quitter.png"
                  :max-width="isMobile ? '280px' : '400px'"
                  class="transition-swing link my-6 my-md-12"
                  :class="`elevation-${hover ? 24 : 2}`"
                  @click.stop="dialog.quitter = true"
                ></v-img>
              </template>
            </v-hover>
            <v-dialog v-model="dialog.quitter" :max-width="isMobile ? '100%' : '1000'">
              <v-card class="d-flex justify-center">
                <video controls width="100%">
                  <source src="./assets/video/quitter.mp4" />
                </video>
              </v-card>
            </v-dialog>
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
                <v-icon>fab fa-github</v-icon>
              </v-btn>
            </h2>
            <p>
              QuitterはVue.jsとLaravelで構築されたシンプルなタイムトラッキングアプリケーションです。
              プログラミングやデザイン、語学や資格取得に向けた学習など、
              ユーザーの日々の自己投資時間を見える化することでモチベーションの維持に繋げ、
              習慣化のサポートができればという思いで開発しました。
              詳細につきましてはgithubのREADMEに記載しております。是非ご覧ください。
              <br />
              <br />制作期間：約1ヶ月(2020/4/24~5/25)
              <br />
              <br />使用した主な技術：Vue.js / Vuetify / Laravel
            </p>
            <v-btn
              text
              color="#FB5D63"
              href="https://quitter-app-beta.herokuapp.com/login"
              target="_blank"
            >
              Open Website
              <v-icon right>mdi-chevron-right</v-icon>
            </v-btn>
          </v-col>
        </v-row>
        <v-divider></v-divider>

        <!-- Canda -->
        <v-row class="my-12">
          <v-col
            cols="12"
            md="6"
            style="backgroundColor:#28C4CB;"
            class="d-flex justify-center align-center"
          >
            <v-hover>
              <template v-slot="{ hover }">
                <v-img
                  src="./assets/canda.png"
                  :max-width="isMobile ? '280px' : '400px'"
                  class="transition-swing link my-6 my-md-12"
                  :class="`elevation-${hover ? 24 : 2}`"
                  @click.stop="dialog.canda = true"
                ></v-img>
              </template>
            </v-hover>
            <v-dialog v-model="dialog.canda" :max-width="isMobile ? '100%' : '1000'">
              <v-card class="d-flex justify-center">
                <img width="100%" src="./assets/canda.png" alt="canda" />
              </v-card>
            </v-dialog>
          </v-col>
          <v-col cols="12" md="6" class="mt-4 mt-md-0">
            <h2 class="display-2 font-weight-bold mb-4 ml-md-n12">Canda</h2>
            <p>
              CandaはGoogle Apps Scriptで構築されたリマインダーです。リマインドする相手、日時、内容を入力することで、決められた時間にチャットワークを経由してメッセージ及びタスクを送信することができます。特定の時間帯に実行すべきタスクの抜け漏れ防止を補助するツールとして前職時代に業務時間外で開発しました。社内のお役立ちツールの一つとして現在も活用されています。
              <br />
              <br />制作期間：約1週間
              <br />
              <br />使用した主な技術：
              <br />HTML5 / CSS3 / Google Apps Script / Chatwork API
            </p>
          </v-col>
        </v-row>
        <v-divider></v-divider>

        <!-- 商品情報自動取得くん -->
        <v-row class="my-12">
          <v-col
            cols="12"
            md="6"
            style="backgroundColor:#FF6E02;"
            class="d-flex justify-center align-center"
          >
            <v-hover>
              <template v-slot="{ hover }">
                <v-img
                  src="./assets/item.png"
                  :max-width="isMobile ? '280px' : '400px'"
                  class="transition-swing link my-6 my-md-12"
                  :class="`elevation-${hover ? 24 : 2}`"
                  @click.stop="dialog.rakuten = true"
                ></v-img>
              </template>
            </v-hover>
            <v-dialog v-model="dialog.rakuten" :max-width="isMobile ? '100%' : '1000'">
              <v-card class="d-flex justify-center">
                <video controls width="100%">
                  <source src="./assets/video/rakuten.mp4" />
                </video>
              </v-card>
            </v-dialog>
          </v-col>
          <v-col cols="12" md="6" class="mt-4 mt-md-0">
            <h2 class="display-1 font-weight-bold mb-4 ml-md-n12">商品情報自動取得くん</h2>
            <p>
              以前勤務していたネット通販の企業では、出品する商品情報の収集及び入力作業に非常に多くの時間を割いているという重大な課題がありました。そこで開発したのがこちらのツールです。楽天商品検索APIを活用して商品情報の収集及び入力作業を自動化し、結果的に年間約240時間の業務改善に成功しました。
              <br />
              <br />制作期間：約2週間
              <br />
              <br />使用した主な技術：
              <br />Google Apps Script / 楽天商品検索API
            </p>
          </v-col>
        </v-row>
        <v-divider></v-divider>

        <!-- GOOVER -->
        <v-row class="my-12">
          <v-col
            cols="12"
            md="6"
            style="backgroundColor:#1DCD00;"
            class="d-flex justify-center align-center"
          >
            <v-hover>
              <template v-slot="{ hover }">
                <v-img
                  src="./assets/goover.png"
                  :max-width="isMobile ? '100px' : '150px'"
                  class="transition-swing link my-3 my-md-6"
                  :class="`elevation-${hover ? 24 : 2}`"
                  @click.stop="dialog.goover = true"
                ></v-img>
              </template>
            </v-hover>
            <v-dialog v-model="dialog.goover" :max-width="isMobile ? '100%' : '400'">
              <v-card class="d-flex justify-center">
                <video controls width="100%">
                  <!-- <video controls :width="isMobile ? '100%' : '50%'"> -->
                  <source src="./assets/video/goover.mp4" />
                </video>
              </v-card>
            </v-dialog>
          </v-col>
          <v-col cols="12" md="6" class="mt-4 mt-md-0">
            <h2 class="display-2 font-weight-bold mb-4 ml-md-n12">GOOVER</h2>
            <p>
              GOOVERはGoogle Apps ScriptとLINE Messaging APIを用いて開発した教育系チャットボットです。語学の習得や資格試験に向けた暗記を補助するツールとして趣味で開発しました。覚えたい事柄に関する質問と、それに対する答えを入力すれば10分後、1日後、1週間後、1ヶ月後に質問のみを返し、答えは特定のIDを入力することで確認できる仕組みになっています。
              <br />
              <br />制作期間：約1週間
              <br />
              <br />使用した主な技術：
              <br />Google Apps Script / LINE Messaging API
            </p>
          </v-col>
        </v-row>
      </div>

      <!-- snackbar -->
      <v-snackbar v-model="snackbar.submit" bottom right color="success">
        送信しました。
        <v-btn text @click="snackbar.submit = false">閉じる</v-btn>
      </v-snackbar>
      <v-snackbar v-model="snackbar.error" bottom right color="error">
        送信に失敗しました。時間を置いて再度お試しください。エラーメッセージ：{{ errorMessage }}
        <v-btn text @click="snackbar.error = false">閉じる</v-btn>
      </v-snackbar>

      <!-- Contact -->
      <v-menu
        v-model="menu"
        transition="slide-x-transition"
        :close-on-content-click="false"
        :nudge-width="300"
        :nudge-right="20"
        offset-x
        left
      >
        <template v-slot:activator="{ on, attrs }">
          <!-- float action button -->
          <v-fab-transition>
            <v-btn
              v-show="scrollY > 50"
              fixed
              dark
              fab
              right
              bottom
              large
              color="#FB5D63"
              v-on="on"
              v-bind="attrs"
            >
              <v-icon>fas fa-question-circle</v-icon>
            </v-btn>
          </v-fab-transition>
        </template>

        <v-card :loading="loading">
          <v-card-title>
            <span class="headline font-weight-bold">Contact</span>
          </v-card-title>
          <v-card-subtitle class="pb-0">
            こちらのサイトに関するお問い合わせ、制作者へのご連絡
            <br v-if="!isMobile" />につきましてはWantedly、またはフォームをご利用ください。
          </v-card-subtitle>
          <v-card-text class="py-0">
            <v-list two-line>
              <v-list-item>
                <v-list-item-avatar>
                  <v-icon>icon-wantedly</v-icon>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title>Wantedly</v-list-item-title>
                  <v-list-item-subtitle>ユーザーID：12345678</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card-text>
          <v-card-text class="pt-0">
            <v-form ref="form" v-model="form.valid">
              <v-text-field v-model="form.name" label="お名前" :rules="rules.required"></v-text-field>
              <v-text-field v-model="form.email" label="メールアドレス" :rules="rules.email"></v-text-field>
              <v-text-field v-model="form.subject" label="件名" :rules="rules.required"></v-text-field>
              <v-textarea v-model="form.message" label="お問い合わせ内容" rows="4" :rules="rules.required"></v-textarea>
            </v-form>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-btn text @click="menu = false">閉じる</v-btn>
            <v-spacer></v-spacer>
            <v-btn icon class="my-0" @click="$refs.form.reset()">
              <v-icon>mdi-refresh</v-icon>
            </v-btn>
            <v-btn text color="primary" :disabled="!form.valid" @click="submit">送信</v-btn>
          </v-card-actions>
        </v-card>
      </v-menu>
    </v-content>
  </v-app>
</template>

<script>
import Rating from "./components/Rating";
import axios from "axios";
import "@/assets/icomoon/style.css";

export default {
  name: "App",

  components: {
    Rating
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  created() {
    if (window.innerWidth <= 600) {
      this.drawer = false;
    }
  },
  data: () => ({
    dialog: { quitter: false, canda: false, rakuten: false, goover: false },
    errorMessage: "",
    loading: false,
    menu: false,
    scrollY: 0,
    drawer: true,
    windowSize: {
      width: window.innerWidth,
      height: window.innerHeight
    },
    rules: {
      required: [v => !!v || "必ず入力してください"],
      email: [
        v => !!v || "必ず入力してください",
        v => /.+@.+\..+/.test(v) || "正しいメールアドレスを入力してください"
      ]
    },
    snackbar: {
      submit: false,
      error: false
    },
    form: {
      valid: true,
      name: "",
      email: "",
      message: "",
      subject: ""
    },
    items: [
      { title: "About Me", to: "about", icon: "mdi-view-dashboard" },
      { title: "History", to: "history", icon: "mdi-image" },
      { title: "Skills", to: "skills", icon: "mdi-help-box" },
      { title: "Works", to: "works", icon: "mdi-help-box" }
    ],
    learned: [
      { name: "HTML5", icon: "fab fa-html5", color: "#F16624" },
      { name: "CSS3", icon: "fab fa-css3-alt", color: "#3C9CD7" },
      { name: "Bootstrap4", icon: "mdi-bootstrap", color: "#6C43A0" },
      { name: "JavaScript", icon: "fab fa-js", color: "#F6D43C" },
      { name: "Google Apps Script", icon: "fab fa-google", color: "#4081ED" },
      { name: "jQuery", icon: "mdi-jquery", color: "#0768AC" },
      { name: "Vue.js", icon: "fab fa-vuejs", color: "#41B882" },
      { name: "Vuetify", icon: "mdi-vuetify", color: "#1868C0" },
      { name: "PHP", icon: "fab fa-php", color: "#777BB3" },
      { name: "Laravel", icon: "mdi-laravel", color: "#FF3528" },
      { name: "Linux", icon: "fab fa-linux", color: "#363636" }
    ],
    skills: {
      programming: [
        { name: "HTML5 / CSS3", value: 4 },
        { name: "Markdown", value: 3 },
        { name: "JavaScript", value: 4 },
        { name: "Google Apps Script", value: 5 },
        { name: "jQuery", value: 2 },
        { name: "Vue.js", value: 4 },
        { name: "PHP", value: 3 },
        { name: "Laravel", value: 3 },
        { name: "Bootstrap4", value: 2 },
        { name: "Vuetify", value: 4 }
      ],
      design: [
        { name: "Photoshop", value: 5 },
        { name: "Figma", value: 3 }
      ],
      spreadSheet: [
        { name: "Excel", value: 5 },
        { name: "Google Spread Sheet", value: 4 }
      ]
    }
  }),

  methods: {
    onResize() {
      this.windowSize = {
        width: window.innerWidth,
        height: window.innerHeight
      };
    },
    handleScroll() {
      this.scrollY = window.scrollY;
    },
    submit() {
      this.loading = true;
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
        const GOOGLE_FORM_ACTION =
          "https://docs.google.com/forms/u/0/d/e/1FAIpQLSfYTz-GGY8EbYEYtIW6HJ1D5bggUjltbzWHfawcWd7rl5YYtQ/formResponse";

        // Ajax POST通信
        axios
          .post(CORS_PROXY + GOOGLE_FORM_ACTION, submitParams)
          .then(() => {
            // フォーム初期化
            this.$refs.form.reset();
            // 送信完了のスナックバー表示
            this.snackbar.submit = true;
            this.loading = false;
            this.menu = false;
          })
          .catch(e => {
            this.errorMessage = e;
            this.snackbar.error = true;
            this.loading = false;
          });
      } else {
        this.loading = false;
      }
    }
  },

  computed: {
    isMobile() {
      if (this.windowSize.width <= 600) {
        return true;
      }
      return false;
    }
  }
};
</script>
<style>
/* light theme */
/* .v-content {
  background-color: #f5f5f5;
} */
/* p {
  color: #444444 !important;
} */

#top {
  word-wrap: break-word;
}
#top > .name {
  line-height: 100%;
  font-weight: bold;
  font-size: calc(5.5rem + ((1vw - 6px) * 8.2822));
}
#top > .dob {
  font-size: calc(2rem + ((1vw - 6px) * 1.8405));
}
.highlight {
  font-weight: bold;
  color: #fb5d63;
}
h1 {
  font-size: 64px;
  font-weight: bold;
  color: #fb5d63;
}
.link:hover {
  cursor: pointer;
}

@media screen and (max-width: 600px) {
  #top {
    padding-top: 72px;
  }
  #top > .name {
    float: left !important;
  }
}
</style>