<!-- <style src="@/assets/css/tcb_style.css"></style> -->
<template>

  <div class="body">
    <div class="title">
      <div>
        簡易小額信用貸款
      </div>
      <div>
        <img :src="require(`@/assets/img/homeloan.png`)" alt="" width="70x" />
      </div>
    </div>
    <div>
      <div style="display:flex">
        <div class="vl"></div>
        <div class="subtitle" type="button" data-bs-toggle="collapse" data-bs-target="#smallCollapse1"
          aria-expanded="false" aria-controls="smallCollapse1" v-on:click="click">
          貸款對象
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
              class="bi bi-caret-down-fill" viewBox="0 0 16 16">
              <path
                d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
            </svg>
        </div>
      </div>
      <div class="collapse content" id="smallCollapse1">
        <!-- <div> -->
        在國內設有戶籍且具有完全行為能力之中華民國國民，有正當職業及固定收入，並具還款能力，且無信用不良紀錄者。
        <!-- </div> -->
      </div>
    </div>
    <div>
      <div style="display:flex">
        <div class="vl"></div>
        <div class="subtitle" type="button" data-bs-toggle="collapse" data-bs-target="#smallCollapse2"
          aria-expanded="false" aria-controls="smallCollapse2" v-on:click="click">
          貸款額度
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
              class="bi bi-caret-down-fill" viewBox="0 0 16 16">
              <path
                d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
            </svg>
        </div>
      </div>
      <div class="collapse content" id="smallCollapse2">
        最高可貸50萬元。

      </div>
    </div>

    <div>
      <div style="display:flex">
        <div class="vl"></div>
        <div class="subtitle" type="button" data-bs-toggle="collapse" data-bs-target="#smallCollapse3"
          aria-expanded="false" aria-controls="smallCollapse3" v-on:click="click">
          貸款利率
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
              class="bi bi-caret-down-fill" viewBox="0 0 16 16">
              <path
                d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
            </svg>
        </div>
      </div>
      <div class="collapse content" id="smallCollapse3">
        5.851%~7.851%（依本行現行指標利率浮動計息）。

      </div>
    </div>

    <div>
      <div style="display:flex">
        <div class="vl"></div>
        <div class="subtitle" type="button" data-bs-toggle="collapse" data-bs-target="#smallCollapse4"
          aria-expanded="false" aria-controls="smallCollapse4" v-on:click="click">
          貸款期限
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
              class="bi bi-caret-down-fill" viewBox="0 0 16 16">
              <path
                d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
            </svg>
        </div>
      </div>
      <div class="collapse content" id="smallCollapse4">
        最長五年。

      </div>
    </div>



    <div>
      <div style="display:flex">
        <div class="vl"></div>
        <div class="subtitle" type="button" data-bs-toggle="collapse" data-bs-target="#smallCollapse5"
          aria-expanded="false" aria-controls="smallCollapse5" v-on:click="click">
          擔保品及保證方式
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
              class="bi bi-caret-down-fill" viewBox="0 0 16 16">
              <path
                d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
            </svg>
        </div>
      </div>
      <div class="collapse content" id="smallCollapse5">
        免提供擔保品及免徵保證人。

      </div>

    </div>
    <div>
      <div style="display:flex">
        <div class="vl"></div>
        <div class="subtitle" type="button" data-bs-toggle="collapse" data-bs-target="#smallCollapse6"
          aria-expanded="false" aria-controls="smallCollapse6" v-on:click="click">
          常見問題
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
              class="bi bi-caret-down-fill" viewBox="0 0 16 16">
              <path
                d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
            </svg>
        </div>
      </div>
      <div class="collapse content" id="smallCollapse6">
        <p>
          <button class="question" type="button" data-bs-toggle="collapse" data-bs-target="#smallCollapse7"
            aria-expanded="false" aria-controls="smallCollapse7" v-on:click="click">
            Q 向貴行申請貸款，應準備那些基本文件？
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
              class="bi bi-caret-down-fill" viewBox="0 0 16 16">
              <path
                d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
            </svg>
          </button>
        <ol class="collapse content" id="smallCollapse7">

          <li>身份證正本及印章，以及第二身份證明文件，如駕照、健保卡。</li>
          <li>收入證明：借款人最近一年度綜合所得稅各類所得資料清單或所得扣繳憑單影本全部、薪資轉帳存摺等。</li>
          <li>在職證明或以「勞工保險被保險人投保資料(明細)」替代。</li>
          <li>
            若借款人於全體銀行授信金額(含本筆)達新台幣2,000萬元，須檢附最近年度綜合所得稅結算申報書影本或綜合所得稅結算申報試算稅額通知書影本加附繳稅取款委託書或申報繳款書或扣繳憑單影本，亦得以稅捐機關核發之綜合所得稅稅額證明書或各類所得歸戶清單代替。
          </li>

        </ol>
        </p>

        <p>
          <button class="question" type="button" data-bs-toggle="collapse" data-bs-target="#smallCollapse8"
            aria-expanded="false" aria-controls="smallCollapse8" v-on:click="click">
            Q 請問對保時需要攜帶那些資料？
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
              class="bi bi-caret-down-fill" viewBox="0 0 16 16">
              <path
                d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
            </svg>
          </button>
        <ul class="collapse content" id="smallCollapse8">

          借款人和保證人的身分證正本、第2證件(駕照或健保卡)及印章。
        </ul>
        </p>


        <p>
          <button class="question" type="button" data-bs-toggle="collapse" data-bs-target="#smallCollapse9"
            aria-expanded="false" aria-controls="smallCollapse9" v-on:click="click">
            Q 向貴行申請貸款需要提供保證人擔保嗎？
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
              class="bi bi-caret-down-fill" viewBox="0 0 16 16">
              <path
                d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
            </svg>
          </button>
        <ul class="collapse content" id="smallCollapse9">

          本行會依據借款人個人信用狀況、財資力狀況及還款能力為依據個案審核後，再據以判斷是否需徵取保證人。

        </ul>
        </p>

        <p>
          <button class="question" type="button" data-bs-toggle="collapse" data-bs-target="#smallCollapse10"
            aria-expanded="false" aria-controls="smallCollapse10" v-on:click="click">
            Q 什麼是貸款指標利率？
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
              class="bi bi-caret-down-fill" viewBox="0 0 16 16">
              <path
                d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
            </svg>
          </button>
        <ul class="collapse content" id="smallCollapse10">

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
        url: "https://ts6-scsb.apps.openshift.jvsf.p2.openshiftapps.com/microCreditLoan/update",
        data: {
          email: sessionStorage.getItem('account'),
        }
      })
        .then((res) => {
          console.log(res.data);
          console.log("click home loan success");
        })
        .catch(error => {
          console.log(error.response);
        });
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
  font-weight: bsmall;
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
