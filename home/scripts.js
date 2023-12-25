/** @format */

var rides = []; // 乗り合い情報を保持する配列

// 場所のタイプが変更されたときのイベントリスナー
document.getElementById("locationType").addEventListener("change", function () {
  var locationType = document.getElementById("locationType").value;
  if (locationType === "town") {
    // 場所のタイプが「town」の場合、町内オプションを表示
    document.getElementById("inTownOptions").style.display = "block";
  } else {
    // それ以外の場合、町内オプションを非表示にし、カスタム目的地のプレースホルダーを設定
    document.getElementById("inTownOptions").style.display = "none";
    document.getElementById("customDestination").placeholder = "具体的な目的地";
  }
});

// 町内カテゴリが変更されたときのイベントリスナー
document
  .getElementById("inTownCategories")
  .addEventListener("change", function () {
    var category = document.getElementById("inTownCategories").value;
    var inTownSelection = document.getElementById("inTownSelection");
    var otherInTown = document.getElementById("otherInTown");

    // 以前の選択肢をクリアする
    inTownSelection.innerHTML = "";
    otherInTown.style.display = "none";
    document.getElementById("customDestination").style.display = "none";
    inTownSelection.style.display = "none";

    // カテゴリに応じて、対応する選択肢を動的に生成
    if (category === "hospital") {
      // 病院の選択肢を追加
      var hospitals = [
        "---",
        "神山病院",
        "中谷病院",
        "佐々木外科内科",
        "山田歯科病院",
        "COCO歯科",
      ];
      hospitals.forEach(function (hospital, index) {
        var option = document.createElement("option");
        option.value = hospital;
        option.textContent = hospital;
        // 「---」オプションには特別なIDを付与
        if (index === 0) {
          option.id = "default-option";
        }
        inTownSelection.appendChild(option);
      });

      // ドロップダウンがフォーカスされたときに「---」オプションを隠す
      inTownSelection.addEventListener("focus", function () {
        var defaultOption = document.getElementById("default-option");
        if (defaultOption) {
          defaultOption.style.display = "none";
        }
      });

      // ドロップダウンからフォーカスが外れたときに「---」オプションを再表示する
      inTownSelection.addEventListener("blur", function () {
        var defaultOption = document.getElementById("default-option");
        if (defaultOption) {
          defaultOption.style.display = "block";
        }
      });

      inTownSelection.style.display = "block";
    } else if (category === "pharmacy") {
      // 薬局の選択肢を追加
      var pharmacies = [
        "---",
        "エンゼル調剤薬局",
        "大草ドラッグ",
        "大黒屋",
        "橋本薬品",
      ];
      pharmacies.forEach(function (pharmacy, index) {
        var option = document.createElement("option");
        option.value = pharmacy;
        option.textContent = pharmacy;
        // 「---」オプションには特別なIDを付与
        if (index === 0) {
          option.id = "default-option-pharmacy";
        }
        inTownSelection.appendChild(option);
      });

      // ドロップダウンがフォーカスされたときに「---」オプションを隠す
      inTownSelection.addEventListener("focus", function () {
        var defaultOption = document.getElementById("default-option-pharmacy");
        if (defaultOption) {
          defaultOption.style.display = "none";
        }
      });

      // ドロップダウンからフォーカスが外れたときに「---」オプションを再表示する
      inTownSelection.addEventListener("blur", function () {
        var defaultOption = document.getElementById("default-option-pharmacy");
        if (defaultOption) {
          defaultOption.style.display = "block";
        }
      });

      inTownSelection.style.display = "block";
    } else if (category === "care_center") {
      // 介護センターの選択肢を追加
      var careCenters = [
        "---",
        "神山すだち園 特別養護老人ホーム",
        "寿泉園 養護老人ホーム",
        "かじかの郷 介護老人保健施設",
        "あいの郷 グループホーム",
        "地域包括支援センター",
        "高齢者生産活動センター",
      ];
      careCenters.forEach(function (careCenter, index) {
        var option = document.createElement("option");
        option.value = careCenter;
        option.textContent = careCenter;
        // 「---」オプションには特別なIDを付与
        if (index === 0) {
          option.id = "default-option-care-center";
        }
        inTownSelection.appendChild(option);
      });

      // ドロップダウンがフォーカスされたときに「---」オプションを隠す
      inTownSelection.addEventListener("focus", function () {
        var defaultOption = document.getElementById(
          "default-option-care-center"
        );
        if (defaultOption) {
          defaultOption.style.display = "none";
        }
      });

      // ドロップダウンからフォーカスが外れたときに「---」オプションを再表示する
      inTownSelection.addEventListener("blur", function () {
        var defaultOption = document.getElementById(
          "default-option-care-center"
        );
        if (defaultOption) {
          defaultOption.style.display = "block";
        }
      });

      inTownSelection.style.display = "block";
    } else if (category === "post_office") {
      // 郵便局の選択肢を追加
      var post_offices = [
        "---",
        "神山郵便局",
        "寄井郵便局",
        "今井郵便局",
        "川又郵便局",
        "鬼籠野郵便局",
        "阿野郵便局",
        "広野郵便局",
      ];
      post_offices.forEach(function (post_office, index) {
        var option = document.createElement("option");
        option.value = post_office;
        option.textContent = post_office;
        // 「---」オプションには特別なIDを付与
        if (index === 0) {
          option.id = "default-option-post-office";
        }
        inTownSelection.appendChild(option);
      });

      // ドロップダウンがフォーカスされたときに「---」オプションを隠す
      inTownSelection.addEventListener("focus", function () {
        var defaultOption = document.getElementById(
          "default-option-post-office"
        );
        if (defaultOption) {
          defaultOption.style.display = "none";
        }
      });

      // ドロップダウンからフォーカスが外れたときに「---」オプションを再表示する
      inTownSelection.addEventListener("blur", function () {
        var defaultOption = document.getElementById(
          "default-option-post-office"
        );
        if (defaultOption) {
          defaultOption.style.display = "block";
        }
      });

      inTownSelection.style.display = "block";
    } else if (category === "other") {
      // その他のカテゴリが選択された場合、カスタム目的地入力フィールドを表示
      document.getElementById("customDestination").style.display = "block";
    }

    // その他の場合、選択リストを非表示にする
    else {
      inTownSelection.style.display = "none";
    }
  });

// 検索ボタンクリック時のイベントリスナー
document.getElementById("searchBtn").addEventListener("click", function () {
  // 入力値を取得
  var departureArea = document.getElementById("departureArea").value;
  var customDeparture = document.getElementById("customDeparture").value;
  var destination = document.getElementById("customDestination").value;
  var departureTimeInput = document.getElementById("departureTime").value;
  var riders = document.getElementById("riders").value;

  // 必須項目のチェック
  if (
    departureArea.trim() === "" ||
    customDeparture.trim() === "" ||
    destination.trim() === "" ||
    departureTimeInput.trim() === ""
  ) {
    alert("全ての項目を入力してください。");
    return;
  }

  // 出発時間の処理（タイムゾーンのオフセットを修正）
  var departureTime = new Date(departureTimeInput);
  departureTime.setMinutes(
    departureTime.getMinutes() - departureTime.getTimezoneOffset()
  );
  var timeRange = 30; // 時間範囲を30分に設定

  // 乗り合い情報の検索
  var matchedRide = rides.find(function (ride) {
    var rideDepartureTime = new Date(ride.departureTime);
    var timeDifference = Math.abs(rideDepartureTime - departureTime) / 60000; // 分単位で差分を計算
    return ride.destination === destination && timeDifference <= timeRange;
  });

  // マッチする乗り合いがある場合の処理
  if (matchedRide) {
    alert(
      `マッチする乗り合いが見つかりました：出発地: ${matchedRide.departureArea}, 目的地: ${matchedRide.destination}, 出発時間: ${matchedRide.departureTime}, 乗車希望者: ${matchedRide.riders}`
    );
  } else {
    // マッチする乗り合いがない場合、新たな乗り合い情報を追加
    var newRide = {
      departureArea,
      customDeparture,
      destination,
      departureTime: departureTime.toISOString(),
      riders,
    };
    rides.push(newRide);

    // 乗り合い情報をリストに表示
    var listItem = document.createElement("li");
    listItem.textContent = `出発地区: ${departureArea}, 出発地: ${customDeparture}, 目的地: ${destination}, 出発時間: ${departureTime.toLocaleString()}, 乗車希望者: ${riders}人`;
    rideList.appendChild(listItem);
    alert("マッチする乗り合いが見つかりませんでした。新たに募集を開始します。");
  }

  // フォームをクリアする
  document.getElementById("departureArea").value = "";
  document.getElementById("customDeparture").value = "";
  document.getElementById("customDestination").value = "";
  document.getElementById("departureTime").value = "";
});
