var start_t;
var fnt_t;
var gyoukai;
var diff;
var i = 0;
var data = [];



gyoukai = ["農業、林業","漁業","鉱業、採石業、砂利採取業","建設業","製造業","電気・ガス・熱供給・水道業",
"情報通信業","運輸業、郵便業","卸売業、小売業","金融業、保険業","不動産業、物品賃貸業","学術研究、専門・技術サービス業",
"宿泊業,飲食サービス業","生活関連サービス業、娯楽業","教育、学習支援業","医療、福祉","複合サービス業"];

function shuffle(){
  return Math.random() -0.5;
}

function btn_onclick() {
  if(i < gyoukai.length){
    if(i == 0){gyoukai = gyoukai.sort(shuffle);}
  start_t = new Date();
  document.getElementById("set").textContent = gyoukai[i];
  document.getElementById("instruct").textContent = "志望度を評定して下さい。";
  }
}

function btn_onclick_f() {
  if (i < gyoukai.length) {
  fin_t = new Date();
  diff = (fin_t.getTime() - start_t.getTime());
  i++;
  data.push(diff);
  document.getElementById("instruct").textContent = "タップされました。次へを押して下さい。";
  document.getElementById("nav").textContent = "次へ";
  }else {
    document.getElementById("instruct").textContent = "実験終了です。";
    document.getElementById("set").textContent = "ご協力ありがとうございました。";
    var maxd = data.indexOf(Math.max.apply(null,data));
    var mind = data.indexOf(Math.min.apply(null,data));
    var maxt = document.createTextNode(gyoukai[maxd] + "への反応が一番迷いましたね。")
    var mint = document.createTextNode(gyoukai[mind] + "への反応が一番早かったですね。")
    var res = document.createElement("div");
    res.appendChild(maxt);
    res.appendChild(mint);

    document.body.appendChild(res);

    for (var count = 0; count < data.length; count++) {

      var ele = document.createElement("div");
	    var str = document.createTextNode(gyoukai[count] + "への反応時間:" + data[count] + "ms");
      ele.appendChild(str);

	    document.body.appendChild(ele);
    }

  }
  return i;
}
