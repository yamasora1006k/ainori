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

document.getElementById("searchBtn").addEventListener("click", function () {
  var departure = document.getElementById("departure").value;
  var destination = document.getElementById("destination").value;
  var departureTimeInput = document.getElementById("departureTime").value;
  var riders = document.getElementById("riders").value;

  if (
    departure.trim() === "" ||
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
      `マッチする乗り合いが見つかりました：出発地: ${matchedRide.departure}, 目的地: ${matchedRide.destination}, 出発時間: ${matchedRide.departureTime}, 乗車希望者: ${matchedRide.riders}`
    );
  } else {
    var newRide = {
      departure,
      destination,
      departureTime: departureTime.toISOString(),
      riders,
    };
    rides.push(newRide);
    var listItem = document.createElement("li");
    listItem.textContent = `出発地: ${departure}, 目的地: ${destination}, 出発時間: ${departureTime.toLocaleString()}, 乗車希望者: ${riders}人`;
    rideList.appendChild(listItem);
    alert("マッチする乗り合いが見つかりませんでした。新たに募集を開始します。");
  }

  // フォームをクリアする
  document.getElementById("departure").value = "";
  document.getElementById("destination").value = "";
  document.getElementById("departureTime").value = "";
});

//test
