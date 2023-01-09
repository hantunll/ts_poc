<!-- <style src="@/assets/css/tcb_style.css"></style> -->
<template>

  <div class="body">
    <div class="title">
      <div>
        以房養老-幸福滿袋貸款
      </div>
      <div>
        <img :src="require(`@/assets/img/homeloan.png`)" alt="" width="70x" />
      </div>
    </div>
    <div>
      <div style="display:flex">
        <div class="vl"></div>
        <div class="subtitle" type="button" data-bs-toggle="collapse" data-bs-target="#oldCollapse1"
          aria-expanded="false" aria-controls="oldCollapse1" v-on:click="click">
          貸款對象
        </div>
      </div>
      <div class="collapse content" id="oldCollapse1">
        <!-- <div> -->
        年滿60歲票債信正常且具完全行為能力之本國自然人。
        <!-- </div> -->
      </div>
    </div>
    <div>
      <div style="display:flex">
        <div class="vl"></div>
        <div class="subtitle" type="button" data-bs-toggle="collapse" data-bs-target="#oldCollapse2"
          aria-expanded="false" aria-controls="oldCollapse2" v-on:click="click">
          貸款額度
        </div>
      </div>
      <div class="collapse content" id="oldCollapse2">
        依本行授信擔保品鑑估規定辦理，首次最高可貸七成。

      </div>
    </div>

    <div>
      <div style="display:flex">
        <div class="vl"></div>
        <div class="subtitle" type="button" data-bs-toggle="collapse" data-bs-target="#oldCollapse3"
          aria-expanded="false" aria-controls="oldCollapse3" v-on:click="click">
          貸款利率
        </div>
      </div>
      <div class="collapse content" id="oldCollapse3">
        <ol>
          <li>分段式：前2年1.961%起，第3年起2.261%起（依本行現行指標利率浮動計息）。惟貸款期間須10年以上方得適用分段式計息。</li>
          <li>一段式：2.231%起（依本行現行指標利率浮動計息）。</li>
        </ol>


      </div>
    </div>

    <div>
      <div style="display:flex">
        <div class="vl"></div>
        <div class="subtitle" type="button" data-bs-toggle="collapse" data-bs-target="#oldCollapse4"
          aria-expanded="false" aria-controls="oldCollapse4" v-on:click="click">
          貸款期限
        </div>
      </div>
      <div class="collapse content" id="oldCollapse4">
        最長35年。

      </div>
    </div>

    <div>
      <div style="display:flex">
        <div class="vl"></div>
        <div class="subtitle" type="button" data-bs-toggle="collapse" data-bs-target="#oldCollapse11"
          aria-expanded="false" aria-controls="oldCollapse11" v-on:click="click">
          撥款方式
        </div>
      </div>
      <div class="collapse content" id="oldCollapse11">
        採平均法按月定額撥付。

      </div>
    </div>

    <div>
      <div style="display:flex">
        <div class="vl"></div>
        <div class="subtitle" type="button" data-bs-toggle="collapse" data-bs-target="#oldCollapse5"
          aria-expanded="false" aria-controls="oldCollapse5" v-on:click="click">
          擔保品
        </div>
      </div>
      <div class="collapse content" id="oldCollapse5">
        提供借款本人單獨所有之完整建物及其基地。

      </div>

    </div>
    <div>
      <div style="display:flex">
        <div class="vl"></div>
        <div class="subtitle" type="button" data-bs-toggle="collapse" data-bs-target="#oldCollapse6"
          aria-expanded="false" aria-controls="oldCollapse6" v-on:click="click">
          常見問題
        </div>
      </div>
      <div class="collapse content" id="oldCollapse6">
        <p>
          <button class="question" type="button" data-bs-toggle="collapse" data-bs-target="#oldCollapse7"
            aria-expanded="false" aria-controls="oldCollapse7" v-on:click="click">
            Q 向貴行申請貸款，應準備那些基本文件？
          </button>
        <ol class="collapse content" id="oldCollapse7">

          <li>請提供國民身分證國民身分證與第二證件(例如健保卡、駕照執照、護照等)、戶籍謄本或戶口名簿(正本供本行查驗)、印章及土地及建物所有權狀影本等。</li>
          <li>若提供之房地於金融機構尚有借款，請提供財資力證明：借款人最近一年度綜合所得稅各類所得資料清單或所得扣繳憑單影本、薪資轉帳存摺、租約等。</li>
          <li>
            若借款人於全體銀行授信金額(含本筆)達新台幣2,000萬元，須檢附最近年度綜合所得稅結算申報書影本或綜合所得稅結算申報試算稅額通知書影本加附繳稅取款委託書或申報繳款書或扣繳憑單影本，亦得以稅捐機關核發之綜合所得稅稅額證明書或各類所得歸戶清單代替。
          </li>

        </ol>
        </p>

        <p>
          <button class="question" type="button" data-bs-toggle="collapse" data-bs-target="#oldCollapse8"
            aria-expanded="false" aria-controls="oldCollapse8" v-on:click="click">
            Q 請問對保時需要攜帶那些資料？
          </button>
        <ul class="collapse content" id="oldCollapse8">

          借款人和保證人的身分證正本、第2證件(駕照或健保卡)及印章。
        </ul>
        </p>


        <p>
          <button class="question" type="button" data-bs-toggle="collapse" data-bs-target="#oldCollapse9"
            aria-expanded="false" aria-controls="oldCollapse9" v-on:click="click">
            Q 向貴行申請貸款需要提供保證人擔保嗎？
          </button>
        <ul class="collapse content" id="oldCollapse9">

          本行會依據借款人個人信用狀況、財資力狀況及還款能力為依據個案審核後，再據以判斷是否需徵取保證人。

        </ul>
        </p>

        <p>
          <button class="question" type="button" data-bs-toggle="collapse" data-bs-target="#oldCollapse10"
            aria-expanded="false" aria-controls="oldCollapse10" v-on:click="click">
            Q 什麼是貸款指標利率？
          </button>
        <ul class="collapse content" id="oldCollapse10">

          貸款指標利率是指向銀行貸款時貸款利率的指標，貸款利率是由機動的「指標利率」加上固定的「利率加碼」所構成，貸款每月應繳納的利息金額會隨著指標利率變動而有所調整。
        </ul>
        </p>
      </div>
    </div>

    <div class="two_button">
      <router-link to="/home/houseLoan">
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
        url: "https://ts6-scsb.apps.openshift.jvsf.p2.openshiftapps.com/happinessHomeLoan/update",
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
