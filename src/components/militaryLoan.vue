<!-- <style src="@/assets/css/tcb_style.css"></style> -->
<template>


  <div class="body">
    <div class="title">
      <div>
        軍公教信用貸款
      </div>
      <div>
        <img :src="require(`@/assets/img/homeloan.png`)" alt="" width="70x" />
      </div>
    </div>
    <div>
      <div style="display:flex">
        <div class="vl"></div>
        <div class="subtitle" type="button" data-bs-toggle="collapse" data-bs-target="#military" aria-expanded="false"
          aria-controls="military" v-on:click="click">
          貸款對象
        </div>
      </div>
      <div class="collapse content" id="military">
        <!-- <div> -->
        軍公教員工、公營事業編制內員工及連續服務滿一年以上之約聘僱人員，且無信用不良記錄者。 <!-- </div> -->
      </div>
    </div>
    <div>
      <div style="display:flex">
        <div class="vl"></div>
        <div class="subtitle" type="button" data-bs-toggle="collapse" data-bs-target="#military2" aria-expanded="false"
          aria-controls="military2" v-on:click="click">
          貸款額度
        </div>
      </div>
      <div class="collapse content" id="military2">
        最高200萬元。<br>借款人每月應攤還本息之金額，不得超過平均月收入三分之一，且於全體金融機構之無擔保債務歸戶後之總餘額，除以月平均收入，不得超過22倍。
      </div>
    </div>

    <div>
      <div style="display:flex">
        <div class="vl"></div>
        <div class="subtitle" type="button" data-bs-toggle="collapse" data-bs-target="#military3" aria-expanded="false"
          aria-controls="military3" v-on:click="click">
          貸款利率
        </div>
      </div>
      <div class="collapse content" id="military3">
        2.045%~4.1%（依郵儲利率浮動計息）。
      </div>
    </div>

    <div>
      <div style="display:flex">
        <div class="vl"></div>
        <div class="subtitle" type="button" data-bs-toggle="collapse" data-bs-target="#military4" aria-expanded="false"
          aria-controls="military4" v-on:click="click">
          貸款期限
        </div>
      </div>
      <div class="collapse content" id="military4">
        最長7年。

      </div>
    </div>


    <div>
      <div style="display:flex">
        <div class="vl"></div>
        <div class="subtitle" type="button" data-bs-toggle="collapse" data-bs-target="#military5" aria-expanded="false"
          aria-controls="military5" v-on:click="click">
          保證
        </div>
      </div>
      <div class="collapse content" id="military5">
        貸款金額80萬元以下者免提供保證人；超逾80萬元者，須提供保證人一人。
      </div>

    </div>
    <div>
      <div style="display:flex">
        <div class="vl"></div>
        <div class="subtitle" type="button" data-bs-toggle="collapse" data-bs-target="#military6" aria-expanded="false"
          aria-controls="military6" v-on:click="click">
          常見問題
        </div>
      </div>
      <div class="collapse content" id="military6">
        <p>
          <button class="question" type="button" data-bs-toggle="collapse" data-bs-target="#military7"
            aria-expanded="false" aria-controls="military7" v-on:click="click">
            Q 向貴行申請貸款，應準備那些基本文件？
          </button>
        <ol class="collapse content" id="military7">

          <li>身份證正本及印章，以及第二身份證明文件，如駕照、健保卡。</li>
          <li>收入證明：借款人最近一年度綜合所得稅各類所得資料清單或所得扣繳憑單影本全部、薪資轉帳存摺等。</li>
          <li>在職證明或以「勞工(公、軍)保險被保險人投保資料(明細)」替代。</li>
          <li>
            若借款人於全體銀行授信金額(含本筆)達新台幣2,000萬元，須檢附最近年度綜合所得稅結算申報書影本或綜合所得稅結算申報試算稅額通知書影本加附繳稅取款委託書或申報繳款書或扣繳憑單影本，亦得以稅捐機關核發之綜合所得稅稅額證明書或各類所得歸戶清單代替。
          </li>

        </ol>
        </p>

        <p>
          <button class="question" type="button" data-bs-toggle="collapse" data-bs-target="#military8"
            aria-expanded="false" aria-controls="military8" v-on:click="click">
            Q 請問對保時需要攜帶那些資料？
          </button>
        <ol class="collapse content" id="military8">

          <li>請提供買賣契約影本、國民身分證與第二證件(例如健保卡、駕照執照、護照等)、戶籍謄本或戶口名簿(正本供本行查驗)、印章。</li>
          <li>財資力證明：借款人最近一年度綜合所得稅各類所得資料清單或所得扣繳憑單影本全部、薪資轉帳存摺、在職證明、土地及建物所有權狀影本等。</li>
          <li>最近一個月國稅局財產歸戶清單。</li>
          <li>
            若借款人於全體銀行授信金額(含本筆)達新台幣2,000萬元，須檢附最近年度綜合所得稅結算申報書影本或綜合所得稅結算申報試算稅額通知書影本加附繳稅取款委託書或申報繳款書或扣繳憑單影本，亦得以稅捐機關核發之綜合所得稅稅額證明書或各類所得歸戶清單代替。
          </li>

        </ol>
        </p>


        <p>
          <button class="question" type="button" data-bs-toggle="collapse" data-bs-target="#military9"
            aria-expanded="false" aria-controls="military9" v-on:click="click">
            Q 向貴行申請貸款需要提供保證人擔保嗎？
          </button>
        <ul class="collapse content" id="military9">
          借款人和保證人的身分證正本、第2證件(駕照或健保卡)及印章。
        </ul>
        </p>

        <p>
          <button class="question" type="button" data-bs-toggle="collapse" data-bs-target="#military10"
            aria-expanded="false" aria-controls="military10" v-on:click="click">
            Q 什麼是貸款指標利率？
          </button>
        <ul class="collapse content" id="military10">
          貸款指標利率是指向銀行貸款時貸款利率的指標，貸款利率是由機動的「指標利率」加上固定的「利率加碼」所構成，貸款每月應繳納的利息金額會隨著指標利率變動而有所調整。
        </ul>
        </p>
      </div>
    </div>

    <div class="two_button">
      <router-link to="/home/creditLoan">
        <button type="button" class="btn btn-outline-success">返回</button>
      </router-link>
      <button type="button" class="btn btn-outline-success" v-on:click="click" data-bs-toggle="modal"
        data-bs-target="#exampleModal">服務據點</button>

      <button type="button" class="btn btn-success" v-on:click="click" data-bs-toggle="modal"
        data-bs-target="#exampleModal2"> 立即申請</button>

    </div>
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">服務據點</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div>
              <div class="service_location">
                <ul>
                  分行名稱：國際金融業務分行
                  <li>電話：(02)21738888</li>
                  <li>地址：台北市松山區長安東路二段225號5樓</li>
                  <li>營業時間：週一~週五 09:00~15:30</li>
                </ul>
              </div>
              <div class="service_location">
                <ul>
                  分行名稱：營業部
                  <li>電話：(02)21738888</li>
                  <li>地址：台北市松山區長安東路二段225號</li>
                  <li>營業時間：週一~週五 09:00~15:30</li>
                </ul>
              </div>
              <div class="service_location">
                <ul>
                  分行名稱：台北分行
                  <li>電話：(02)27724277</li>
                  <li>地址：台北市松山區復興北路55號</li>
                  <li>營業時間：週一~週五 09:00~15:30</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

    <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">立即申請</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            恭喜你申請成功
          </div>

        </div>
      </div>
    </div>


  </div>







</template>

<script>
import axios from 'axios';

export default {

  methods: {
    click: function () {
      axios({
        method: 'post',
        url: "https://ts6-scsb.apps.openshift.jvsf.p2.openshiftapps.com/militaryCreditLoan/update",
        data: {
          email: sessionStorage.getItem('account'),
        }
      })
        .then((res) => {
          console.log(res.data);
          console.log("click home loan success");
        })
    },
  },
}
</script>



<style>
.vl {
  border-left: 6px solid green;
  height: 20px;
  padding-right: 5px;
}

.title {
  color: green;
  font-size: 32px;
  padding-top: 10px;
  padding-bottom: 10px;
  display: flex;
  justify-content: space-between;
}

.body {
  text-align: left;
  width: 80%;
  margin-left: 10%;
  margin-right: 10%;
}

.subtitle {
  font-size: 16px;
  font-weight: bold;
  padding-bottom: 5px;

}

.content {
  text-align: left;
  padding-bottom: 10px;
}

.question {
  text-align: left;
  padding-bottom: 10px;
}

.two_button {
  padding-top: 20px;
  width: 80%;
  margin-left: 10%;
  margin-right: 10%;
  display: flex;
  justify-content: space-around;
}

.service_location {
  border: solid 1px;
  margin-bottom: 20px;
  padding-top: 10px
}
</style>
