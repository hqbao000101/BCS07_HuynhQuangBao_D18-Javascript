// todo: integer array handlers
var intArr = [];
function add() {
  // todo: take user data
  var newInt = +document.getElementById("intNumbers").value;

  // todo: check validation
  if (document.getElementById("intNumbers").value == "") {
    alert("Mời nhập số nguyên để thêm vào mảng!");
  } else if (!Number.isInteger(newInt)) {
    alert("Giá trị bạn vừa nhập không hợp lệ!");
    document.getElementById("intNumbers").value = "";
  } else {
    intArr.push(newInt);
    document.getElementById("intNumbers").value = "";
    document.getElementById("arr_intNumbers").value = intArr;
  }
}

function del() {
  if (document.getElementById("arr_intNumbers").value != "") {
    intArr.pop();
    document.getElementById("arr_intNumbers").value = intArr;
  }
}

// todo: float array handlers
var floatArr = [];
function addFloat() {
  // todo: take user data
  var newFloat = +document.getElementById("floatNumbers").value;

  // todo: check validation
  if (document.getElementById("floatNumbers").value == "") {
    alert("Mời nhập số để thêm vào mảng!");
  } else {
    floatArr.push(newFloat);
    document.getElementById("floatNumbers").value = "";
    document.getElementById("arr_floatNumbers").value = floatArr;
  }
}

function delFloat() {
  if (document.getElementById("arr_floatNumbers").value != "") {
    floatArr.pop();
    document.getElementById("arr_floatNumbers").value = floatArr;
  }
}

// ! ex1: Tổng các số dương trong mảng
/*
 * input: mảng số nguyên do người dùng thêm vào
 * các bước xử lý:
 *   1. khởi tạo biến sumPositive chứa tổng các số dương trong mảng
 *   2. kiểm tra mảng có giá trị hay không:
 *     - rỗng -> thông báo mảng rỗng
 *     - có phần tử -> tính toán, xử lý mảng
 *   3. chạy vòng lặp với biến i tăng dần từ 0 đến <= độ dài mảng - 1
 *   4. trong vòng lặp, dùng câu điều kiện nếu phẩn tử mảng có index i > 0 thì biến sumPositive += mảng[i]
 *   5. gọi đến thẻ ex1-result .innerHTML = sumPositive
 * output: tổng các số dương trong mảng rồi in ra màn hình
 */
function ex1() {
  var sumPositive = 0;
  if (intArr.length == 0) {
    document.getElementById("ex1-result").innerHTML = "Mảng rỗng!";
  } else {
    for (var i = 0; i <= intArr.length - 1; i++) {
      if (intArr[i] > 0) {
        sumPositive += intArr[i];
      }
    }
    document.getElementById("ex1-result").innerHTML = sumPositive;
  }
}

// ! ex2: Đếm có bao nhiêu số dương trong mảng
/*
 * input: mảng số nguyên do người dùng thêm vào
 * các bước xử lý:
 *   1. khởi tạo biến count = 0 để lưu số các số dương
 *   2. kiểm tra mảng có giá trị hay không:
 *     - rỗng -> thông báo mảng rỗng
 *     - có phần tử -> tính toán, xử lý mảng
 *   3. chạy vòng lặp với biến i tăng dần từ 0 đến <= độ dài mảng - 1
 *   4. trong vòng lặp, dùng câu điều kiện nếu phẩn tử mảng có index i > 0 thì biến count++
 *   5. gọi đến thẻ ex2-result .innerHTML = count
 * output: số các số dương có trong mảng rồi in ra màn hình
 */

function ex2() {
  var countPositive = 0;
  if (intArr.length == 0) {
    document.getElementById("ex2-result").innerHTML = "Mảng rỗng!";
  } else {
    for (var i = 0; i <= intArr.length - 1; i++) {
      if (intArr[i] > 0) {
        countPositive++;
      }
    }
    document.getElementById("ex2-result").innerHTML = countPositive;
  }
}

// ! ex3: Tìm số nhỏ nhất trong mảng
/*
 * input: mảng số nguyên do người dùng thêm vào
 * các bước xử lý:
 *   1. kiểm tra mảng có giá trị hay không:
 *     - rỗng -> thông báo mảng rỗng
 *     - có phần tử -> tính toán, xử lý mảng
 *  2. khởi tạo biến min = intArr[0] chứa giá trị đầu tiên trong mảng
 *   2. chạy vòng lặp với biến i tăng dần từ 0 đến <= độ dài mảng - 1
 *   3. trong vòng lặp, dùng câu điều kiện nếu phẩn tử mảng có index i < min thì cập nhật biến min = phần tử mảng có index i
 *   4. gọi đến thẻ ex3-result .innerHTML = min
 * output: số nhỏ nhất trong mảng rồi in ra màn hình
 */

function ex3() {
  if (intArr.length == 0) {
    document.getElementById("ex3-result").innerHTML = "Mảng rỗng!";
  } else {
    var min = intArr[0];
    for (var i = 0; i <= intArr.length - 1; i++) {
      if (intArr[i] < min) {
        min = intArr[i];
      }
    }
    document.getElementById("ex3-result").innerHTML = min;
  }
}

// ! ex4: tìm số dương nhỏ nhất trong mảng
/*
 * input: mảng số nguyên do người dùng thêm vào
 * các bước xử lý:
 *   1. khởi tạo một function phụ để tìm số dương có trong mảng:
 *      - có -> số dương gần nhất
 *      - không -> "không thấy số dương"
 *   2. trong function chính, kiểm tra mảng có giá trị hay không:
 *      - rỗng -> thông báo mảng rỗng
 *      - có phần tử -> tính toán, xử lý mảng
 *   3. khởi tạo biến minPositive = function ở bước 1 để chứa biến mà hàm trả về:
 *      - không phải số -> in ra màn hình không tìm thấy số dương trong mảng
 *      - có số trả về -> chạy vòng lặp với biến i tăng dần từ 0 đến < độ dài mảng
 *   4. trong vòng lặp, nếu mảng[i] < minPositive && mảng[i] > 0 thì cập nhật biến minPositive = mảng[i]
 *   5. gọi đến thẻ ex4-result .innerHTML = minPositive
 * output:
 */

function findPositive() {
  for (var i = 0; i < intArr.length; i++) {
    if (intArr[i] > 0) {
      return intArr[i];
    }
  }
  return "Không tìm thấy số dương trong mảng!";
}

function ex4() {
  if (intArr.length == 0) {
    document.getElementById("ex4-result").innerHTML = "Mảng rỗng!";
  } else {
    var minPositive = findPositive();
    if (isNaN(minPositive)) {
      document.getElementById("ex4-result").innerHTML =
        "Không tìm thấy số dương trong mảng!";
    } else {
      for (var i = 0; i < intArr.length; i++) {
        if (intArr[i] < minPositive && intArr[i] > 0) {
          minPositive = intArr[i];
        }
      }
      document.getElementById("ex4-result").innerHTML = minPositive;
    }
  }
}

// ! ex5: Tìm số chẵn cuối cùng trong mảng. Nếu mảng không có giá trị chẵn thì trả về -1
/*
 * input: mảng số nguyên do người dùng thêm vào
 * các bước xử lý:
 *    1. kiểm tra mảng có phần tử hay không:
 *      - có -> tính toán, xử lý mảng
 *      - không -> thông báo ra màn hình mảng rỗng
 *    2. khởi tạo biến lastEven = -1
 *    3. chạy vòng lặp với biến i tăng dần từ 0 đến < mảng.length
 *    4. trong vòng lặp, nếu mảng[i] % 2 == 0 thì cập nhật biến lastEven = mảng[i]
 *    5. gọi đến thẻ ex5-result .innerHTML = lastEven
 * output: số chẵn cuối cùng trong mảng rồi in ra màn hình
 */

function ex5() {
  if (intArr.length == 0) {
    document.getElementById("ex5-result").innerHTML = "Mảng rỗng!";
  } else {
    var lastEven = -1;
    for (var i = 0; i < intArr.length; i++) {
      if (intArr[i] % 2 == 0) {
        lastEven = intArr[i];
      }
    }
    document.getElementById("ex5-result").innerHTML = lastEven;
  }
}

// ! ex6: Đổi chỗ 2 giá trị trong mảng theo vị trí (cho nhập vào 2 vị trí muốn đổi chỗ giá trị)
/*
 * input: mảng số nguyên do người dùng thêm vào
 *        2 vị trí muốn đổi giá trị trong mảng
 * các bước xử lý:
 *   1. lấy 2 vị trí mà người dùng đã nhập và ép kiểu number
 *   2. kiểm tra xem mảng có phần tử hay không
 *      - không -> thông báo mảng rỗng
 *      - có -> kiểm tra điều kiện tiếp theo
 *   3. kiểm tra người dùng có để trống 2 ô input vị trí hay không
 *      - có -> thông báo chưa nhập đủ 2 vị trí
 *      - không -> kiểm tra điều kiện tiếp theo
 *   4. kiểm tra 2 vị trí người dùng nhập có trùng nhau không
 *      - có -> thông báo vị trí nhập bị trùng
 *      - không -> kiểm tra điều kiện kế
 *   5. kiểm tra xem giá trị vị trí người dùng nhập có hợp lệ -> giá trị vị trí >= 0 và < độ dài mảng
 *      - không -> thông báo giá trị vị trí để đổi không hợp lệ
 *      - có -> bắt đầu thực hiện đổi giá trị
 *   6. tạo biến mảng tạm mới temp_arr = []
 *   7. chạy vòng lặp với biến i tăng dần từ 0 đến < độ dài mảng chính
 *   8.trong vòng lặp, lần lượt push các giá trị trong mảng chính vào mảng tạm -> temp_arr.push(intArr[i])
 *   9. tạo 2 biến để chứa 2 giá trị tại 2 vị trí người dùng nhập của mảng chính
 *   10. dùng hàm splice() để đổi chỗ lần lượt từng giá trị
 *   11. gọi đến thẻ ex6-result .innerHTMl = temp_arr
 * output: mảng mới với 2 giá trị đã đổi chỗ tại 2 vị trí mà người dùng đã nhập
 */

function ex6() {
  // todo: take user data
  var position1 = document.getElementById("pos1").value * 1;
  var position2 = document.getElementById("pos2").value * 1;

  if (intArr.length == 0) {
    document.getElementById("ex6-result").innerHTML = "Mảng rỗng!";
  } else if (
    document.getElementById("pos1").value == "" ||
    document.getElementById("pos2").value == ""
  ) {
    document.getElementById("ex6-result").innerHTML =
      "Chưa nhập đủ 2 vị trí để đổi vị trí!";
  } else if (position1 == position2) {
    document.getElementById("ex6-result").innerHTML =
      "Vị trí nhập giống nhau mà đổi cái gì trời @@~";
  } else if (
    position1 < 0 ||
    position2 < 0 ||
    position1 >= intArr.length ||
    position2 >= intArr.length
  ) {
    document.getElementById("ex6-result").innerHTML =
      "Giá trị vị trí để đổi không hợp lệ!";
  } else {
    var temp_arr = [];
    for (var i = 0; i < intArr.length; i++) {
      temp_arr.push(intArr[i]);
    }

    var value1 = intArr[position1];
    var value2 = intArr[position2];

    temp_arr.splice(position1, 1, value2);
    temp_arr.splice(position2, 1, value1);

    document.getElementById("ex6-result").innerHTML = temp_arr;
  }
}

// ! ex7: Sắp xếp mảng theo thứ tự tăng dần
/*
 * input: mảng số nguyên do người dùng thêm vào
 * các bước xử lý:
 *   1. tạo hàm phụ xử lý tìm số nhỏ nhất trong 1 mảng và lấy giá trị đó ra khỏi mảng. Hàm sẽ cần truyền 1 biến mảng vào và sẽ trả về giá trị nhỏ nhất trong mảng đó
 *   2. trong hàm chính, kiểm tra mảng có phần tử hay không
 *      - không -> thông báo mảng rỗng
 *      - có -> xử lý, sắp xếp mảng
 *   3. khởi tạo 2 mảng rỗng temp_arr và sort_arr
 *      - temp_arr: sẽ chứa các phần tử có trong mảng chính intArr để khi xử lý không làm ảnh hưởng đến mảng gốc
 *      - sort_arr: sẽ chứa kết quả mảng sau khi được sắp xếp
 *   4. chạy vòng lặp từ 0 đến intArr.length - 1 để thêm lần lượt các phần tử trong mảng intArr vào temp_arr
 *   5. tạo biến initialLength để chứa độ dài ban đầu của mảng temp_arr
 *   6. chạy vòng lặp khác từ 0 đến < initialLength
 *   7. trong vòng lặp, tạo biến mới min để chứa giá trị trả về của hàm phụ ở bước 1 -> var min = hamPhu(temp_arr). Sau đó thêm lần lượt giá trị min trả về ở mỗi vòng lặp vào mảng sort_arr
 *   8. gọi đến thẻ ex7-result .innerHTML = sort_arr để in ra màn hình
 * output: mảng đã được sắp xếp theo thứ tự tăng dần
 !!! Tuy nhiên có thể dùng mảng.sort(function(a, b){return a - b}) để sắp xếp mảng trong javascript. Sau đó có thể dùng hàm reverse() để sắp xếp ngược lại theo thứ tự giảm dần
 */

function findMinAndSpliceOut(temp_arr) {
  var min = temp_arr[0];
  var minIndex = 0;
  temp_arr.forEach(function (item, index) {
    if (item < min) {
      min = item;
      minIndex = index;
    }
  });
  temp_arr.splice(minIndex, 1);
  return min;
}

function ex7() {
  if (intArr.length == 0) {
    document.getElementById("ex7-result").innerHTML = "Mảng rỗng!";
  } else {
    var temp_arr = [];
    var sort_arr = [];
    for (var i = 0; i < intArr.length; i++) {
      temp_arr.push(intArr[i]);
    }

    var initialLength = temp_arr.length;
    for (var j = 0; j < initialLength; j++) {
      var min = findMinAndSpliceOut(temp_arr);
      sort_arr.push(min);
    }
    document.getElementById("ex7-result").innerHTML = sort_arr;
  }
}

// ! ex8: Tìm số nguyên tố đầu tiên trong mảng. Nếu không có thì trả về -1
/*
 * input: mảng số nguyên do người dùng thêm vào
 * các bước xử lý:
 *   1. kiểm tra mảng có phần tử hay không
 *      - không -> thông báo mảng rỗng
 *      - có -> bắt đầu tìm kiếm số nguyên tố trong mảng
 *   2. tạo biến firstPrime = -1 để khi không tìm thấy số nguyên tố sẽ trả về -1
 *   3. chạy vòng lặp lớn từ 0 đến độ dài mảng - 1
 *   4. trong vòng lặp nếu phần tử i >= 2 thì tạo biến count = 0 để đếm số lần chia hết
 *   5. chạy vòng lặp con biến j từ 1 đến giá trị phần tử i, nếu phần tử i chia hết cho j thì count++. Kết thúc vòng lặp con, xét nếu count == 2 thì phần tử i đó chính là số nguyên tố -> gọi return phần tử i đó để chỉ lấy số nguyên tố đầu tiên
 *   6. kết thúc vòng lặp lớn mà vẫn chưa return thì gọi đến thẻ ex8-result .innerHTML = firstPrime
 * output: số nguyên tố đầu tiên trong mảng, nếu không có thì in ra -1
 */

function ex8() {
  if (intArr.length == 0) {
    document.getElementById("ex8-result").innerHTML = "Mảng rỗng!";
  } else {
    var firstPrime = -1;
    for (var i = 0; i < intArr.length; i++) {
      if (intArr[i] >= 2) {
        var count = 0;
        for (var j = 1; j <= intArr[i]; j++) {
          if (intArr[i] % j == 0) {
            count++;
          }
        }
        if (count == 2) {
          firstPrime = intArr[i];
          document.getElementById("ex8-result").innerHTML = firstPrime;
          return firstPrime;
        }
      }
    }
    document.getElementById("ex8-result").innerHTML = firstPrime;
  }
}

// ! ex9: Nhập thêm một mảng số thực tìm xem trong mảng có bao nhiêu số nguyên
/*
 * input: mảng số thực do người dùng nhập vào
 * các bước xử lý:
 *   1. kiểm tra mảng có phần tử hay không
 *      - không -> thông báo mảng rỗng
 *      - có -> bắt đầu đếm số số nguyên trong mảng
 *   2. tạo biến countPrime = 0 chứa số số nguyên trong mảng
 *   3. chạy vòng lặp từ 0 đến độ dài mảng số thực - 1
 *   4. trong vòng lặp, dùng Number.isInteger(phần tử i) để kiểm tra 1 phần tử có phải là số nguyên hay không. Nếu đúng thì biến countPrime++
 *   5. gọi đến thẻ ex9-result .innerHTML = countPrime
 * output: số số nguyên có trong mảng số thực trên
 */

function ex9() {
  if (floatArr.length == 0) {
    document.getElementById("ex9-result").innerHTML = "Mảng rỗng!";
  } else {
    var countPrime = 0;
    for (var i = 0; i < floatArr.length; i++) {
      if (Number.isInteger(floatArr[i])) {
        countPrime++;
      }
    }
    document.getElementById("ex9-result").innerHTML = countPrime;
  }
}

// ! ex10: So sánh số lượng số dương và số lượng số âm xem số nào nhiều hơn
/*
 * input: mảng số nguyên do người dùng thêm vào
 * các bước xử lý:
 *   1. kiểm tra mảng có phần tử hay không
 *      - không -> thông báo mảng rỗng
 *      - có -> bắt đầu so sánh số số dương và âm trong mảng
 *   2. tạo 2 biến countPositive và countNegative để chứa số lượng số dương và âm tương ứng
 *   3. chạy vòng lặp từ 0 đến độ dài mảng - 1
 *   4. trong vòng lặp, nếu phần tử i > 0 thì countPositive++, ngược lại thì countNegative++
 *   5. so sánh 2 biến count trên để in ra kết quả tương ứng
 * output: kết quả so sánh số lượng số dương và số âm có trong mảng
 */

function ex10() {
  if (intArr.length == 0) {
    document.getElementById("ex10-result").innerHTML = "Mảng rỗng!";
  } else {
    var countPositive = 0;
    var countNegative = 0;
    for (var i = 0; i < intArr.length; i++) {
      if (intArr[i] > 0) {
        countPositive++;
      } else if (intArr[i] < 0) {
        countNegative++;
      }
    }
    if (countPositive > countNegative) {
      document.getElementById("ex10-result").innerHTML = "Số dương > Số âm";
    } else if (countPositive < countNegative) {
      document.getElementById("ex10-result").innerHTML = "Số dương < Số âm";
    } else {
      document.getElementById("ex10-result").innerHTML = "Số dương = Số âm";
    }
  }
}
