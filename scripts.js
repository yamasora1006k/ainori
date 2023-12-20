/** @format */

var rides = []; // 乗り合い情報を保持する配列

document.addEventListener("DOMContentLoaded", function () {
  var loggedInUser = localStorage.getItem("loggedInUser");
  if (loggedInUser) {
    document.getElementById("loginSection").style.display = "none";
    document.getElementById("app").style.display = "block";
  }
});

document.getElementById("loginBtn").addEventListener("click", function () {
  var username = document.getElementById("username").value;
  if (username.trim() !== "") {
    localStorage.setItem("loggedInUser", username);
    document.getElementById("loginSection").style.display = "none";
    document.getElementById("app").style.display = "block";
  } else {
    alert("ユーザー名を入力してください。");
  }
});

document.getElementById("locationType").addEventListener("change", function () {
  var locationType = document.getElementById("locationType").value;
  if (locationType === "town") {
    document.getElementById("inTownOptions").style.display = "block";
  } else {
    document.getElementById("inTownOptions").style.display = "none";
  }
});

document
  .getElementById("inTownCategories")
  .addEventListener("change", function () {
    var category = document.getElementById("inTownCategories").value;
    var inTownSelection = document.getElementById("inTownSelection");
    var otherInTown = document.getElementById("otherInTown");

    // 以前の選択肢をクリアする
    inTownSelection.innerHTML = "";
    otherInTown.style.display = "none";

    if (category === "hospital") {
      var hospitals = [
        "神山病院",
        "中谷病院",
        "佐々木外科内科",
        "山田歯科病院",
        "COCO歯科",
      ];
      hospitals.forEach(function (hospital) {
        var option = document.createElement("option");
        option.value = hospital;
        option.textContent = hospital;
        inTownSelection.appendChild(option);
      });
      inTownSelection.style.display = "block";
    } else if (category === "pharmacy") {
      // 薬局の選択肢を追加
      var pharmacies = [
        "エンゼル調剤薬局",
        "大草ドラッグ",
        "大黒屋",
        "橋本薬品",
      ];
      pharmacies.forEach(function (pharmacy) {
        var option = document.createElement("option");
        option.value = pharmacy;
        option.textContent = pharmacy;
        inTownSelection.appendChild(option);
      });
      inTownSelection.style.display = "block";
    } else if (category === "other") {
      otherInTown.style.display = "block";
    } else {
      inTownSelection.style.display = "none";
    }
  });

document.getElementById("searchBtn").addEventListener("click", function () {
  var departureArea = document.getElementById("departureArea").value;
  var customDeparture = document.getElementById("customDeparture").value;
  var destination = document.getElementById("destination").value;
  var departureTimeInput = document.getElementById("departureTime").value;
  var riders = document.getElementById("riders").value;

  if (
    departureArea.trim() === "" ||
    customDeparture.trim() === "" ||
    destination.trim() === "" ||
    departureTimeInput.trim() === ""
  ) {
    alert("全ての項目を入力してください。");
    return;
  }

  var departureTime = new Date(departureTimeInput);
  departureTime.setMinutes(
    departureTime.getMinutes() - departureTime.getTimezoneOffset()
  ); // タイムゾーンのオフセットを修正
  var timeRange = 30; // 時間範囲を30分に設定
  var rideList = document.getElementById("rideList");

  var matchedRide = rides.find(function (ride) {
    var rideDepartureTime = new Date(ride.departureTime);
    var timeDifference = Math.abs(rideDepartureTime - departureTime) / 60000; // 分単位で差分を計算
    return ride.destination === destination && timeDifference <= timeRange;
  });

  if (matchedRide) {
    alert(
      `マッチする乗り合いが見つかりました：出発地: ${matchedRide.departureArea}, 目的地: ${matchedRide.destination}, 出発時間: ${matchedRide.departureTime}, 乗車希望者: ${matchedRide.riders}`
    );
  } else {
    var newRide = {
      departureArea,
      customDeparture,
      destination,
      departureTime: departureTime.toISOString(),
      riders,
    };
    rides.push(newRide);
    var listItem = document.createElement("li");
    listItem.textContent = `出発地区: ${departureArea}, 出発地: ${customDeparture}, 目的地: ${destination}, 出発時間: ${departureTime.toLocaleString()}, 乗車希望者: ${riders}人`;
    rideList.appendChild(listItem);
    alert("マッチする乗り合いが見つかりませんでした。新たに募集を開始します。");
  }

  // フォームをクリアする
  document.getElementById("departureArea").value = "";
  document.getElementById("customDeparture").value = "";
  document.getElementById("destination").value = "";
  document.getElementById("departureTime").value = "";
});
