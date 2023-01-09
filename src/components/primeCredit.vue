<!-- <style src="@/assets/css/tcb_style.css"></style> -->
<template>

  <div class="body">
    <div class="title">
      <div>
        優職優利信用貸款
      </div>
      <div>
        <img :src="require(`@/assets/img/homeloan.png`)" alt="" width="70x" />
      </div>
    </div>
    <div>
      <div style="display:flex">
        <div class="vl"></div>
        <div class="subtitle" type="button" data-bs-toggle="collapse" data-bs-target="#primeCollapse1"
          aria-expanded="false" aria-controls="primeCollapse1" v-on:click="click">
          貸款對象
        </div>
      </div>
      <div class="collapse content" id="primeCollapse1">
        <!-- <div> -->

        <ol>
          <li>專業人士</li>
          本國國民且現執業之會計師、建築師、律師、醫師、藥師、精算師、不動產估價師及土木、結構、電機等工程技師。

          <li>優質企業員工</li>
          符合下列對象之本國正式職員（不含約聘雇人員）且服務滿半年或年收入達新臺幣40萬元以上者：
          <ol type="a">
            <li>上市、上櫃、興櫃公司。</li>
            <li>由本行調查研究部所編製之最近一年度「公開發行公司（含上市、櫃及興櫃）名錄」前一千大之企業（排除TCRI信用評等為D等者）。</li>
            <li>醫學中心、區域醫院、地區醫院。</li>
            <li>由政府捐助之財團法人。</li>
            <li>私立學校。</li>
            <li>金控公司、民營銀行、票券公司。</li>
            <li>農田水利會及農、漁會。</li>
          </ol>
          <li>與本行授信業務往來企業戶所屬員工</li>
          授信履約正常之企業戶所屬本國正式職員（不含約聘雇人員）且服務滿一年或年收入達新臺幣50萬元以上者，該企業戶存放款往來情形另需符合特定條件。
          <li>民營企業員工</li>
          借款人於同一民營企業服務滿二年且年收入達新台幣六十萬元(含)以上正式職員。
          <li>貸款對象需無信用不良記錄者。</li>

        </ol>
        <!-- </div> -->
      </div>
    </div>
    <div>
      <div style="display:flex">
        <div class="vl"></div>
        <div class="subtitle" type="button" data-bs-toggle="collapse" data-bs-target="#primeCollapse2"
          aria-expanded="false" aria-controls="primeCollapse2" v-on:click="click">
          貸款額度
        </div>
      </div>
      <div class="collapse content" id="primeCollapse2">
        <ol>
          <li>徵有保證人者：每戶最高貸款額度為新臺幣200萬元。</li>
          <li>未徵保證人者：每戶最高貸款額度為新臺幣50萬元。</li>
          <li>專業人士另有優惠。</li>
        </ol>

      </div>
    </div>

    <div>
      <div style="display:flex">
        <div class="vl"></div>
        <div class="subtitle" type="button" data-bs-toggle="collapse" data-bs-target="#primeCollapse3"
          aria-expanded="false" aria-controls="primeCollapse3" v-on:click="click">
          貸款利率
        </div>
      </div>
      <div class="collapse content" id="primeCollapse3">
        1.851%~5.381%（依本行現行指標利率浮動計息）。

      </div>
    </div>

    <div>
      <div style="display:flex">
        <div class="vl"></div>
        <div class="subtitle" type="button" data-bs-toggle="collapse" data-bs-target="#primeCollapse4"
          aria-expanded="false" aria-controls="primeCollapse4" v-on:click="click">
          貸款期限
        </div>
      </div>
      <div class="collapse content" id="primeCollapse4">
        ​最長七年。

      </div>
    </div>



    <div>
      <div style="display:flex">
        <div class="vl"></div>
        <div class="subtitle" type="button" data-bs-toggle="collapse" data-bs-target="#primeCollapse5"
          aria-expanded="false" aria-controls="primeCollapse5" v-on:click="click">
          保證
        </div>
      </div>
      <div class="collapse content" id="primeCollapse5">
        ​貸款金額超逾新臺幣50萬元者，應至少徵取保證人一人以上。

      </div>

    </div>
    <div>
      <div style="display:flex">
        <div class="vl"></div>
        <div class="subtitle" type="button" data-bs-toggle="collapse" data-bs-target="#primeCollapse6"
          aria-expanded="false" aria-controls="primeCollapse6" v-on:click="click">
          常見問題
        </div>
      </div>
      <div class="collapse content" id="primeCollapse6">
        <p>
          <button class="question" type="button" data-bs-toggle="collapse" data-bs-target="#primeCollapse7"
            aria-expanded="false" aria-controls="primeCollapse7" v-on:click="click">
            Q 向貴行申請貸款，應準備那些基本文件？
          </button>
        <ol class="collapse content" id="primeCollapse7">

          <li>身份證正本及印章，以及第二身份證明文件，如駕照、健保卡。</li>
          <li>收入證明：借款人最近一年度綜合所得稅各類所得資料清單或所得扣繳憑單影本全部、薪資轉帳存摺等。</li>
          <li>在職證明或以「勞工保險被保險人投保資料(明細)」替代。</li>
          <li>
            若借款人於全體銀行授信金額(含本筆)達新台幣2,000萬元，須檢附最近年度綜合所得稅結算申報書影本或綜合所得稅結算申報試算稅額通知書影本加附繳稅取款委託書或申報繳款書或扣繳憑單影本，亦得以稅捐機關核發之綜合所得稅稅額證明書或各類所得歸戶清單代替。
          </li>

        </ol>
        </p>

        <p>
          <button class="question" type="button" data-bs-toggle="collapse" data-bs-target="#primeCollapse8"
            aria-expanded="false" aria-controls="primeCollapse8" v-on:click="click">
            Q 請問對保時需要攜帶那些資料？
          </button>
        <ul class="collapse content" id="primeCollapse8">

          借款人和保證人的身分證正本、第2證件(駕照或健保卡)及印章。
        </ul>
        </p>


        <p>
          <button class="question" type="button" data-bs-toggle="collapse" data-bs-target="#primeCollapse9"
            aria-expanded="false" aria-controls="primeCollapse9" v-on:click="click">
            Q 向貴行申請貸款需要提供保證人擔保嗎？
          </button>
        <ul class="collapse content" id="primeCollapse9">

          本行會依據借款人個人信用狀況、財資力狀況及還款能力為依據個案審核後，再據以判斷是否需徵取保證人。

        </ul>
        </p>

        <p>
          <button class="question" type="button" data-bs-toggle="collapse" data-bs-target="#primeCollapse10"
            aria-expanded="false" aria-controls="primeCollapse10" v-on:click="click">
            Q 什麼是貸款指標利率？
          </button>
        <ul class="collapse content" id="primeCollapse10">

          貸款指標利率是指向銀行貸款時貸款利率的指標，貸款利率是由機動的「指標利率」加上固定的「利率加碼」所構成，貸款每月應繳納的利息金額會隨著指標利率變動而有所調整。
        </ul>
        </p>
      </div>
    </div>

    <div class="two_button">
      <router-link to="/home/creditLoan">
          <button type="button" class="btn btn-outline-success">返回</button>
      </router-link>
      <button type="button" class="btn btn-outline-success">服務據點</button>

      <button type="button" class="btn btn-success" v-on:click="click"> 立即申請</button>

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
        url: "https://ts6-scsb.apps.openshift.jvsf.p2.openshiftapps.com/primeRateCreditLoan/update",
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
  font-weight: bprime;
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
</style>
