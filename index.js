// Bài 1:

function diemUuTienKhuVuc(khuVuc) {
  switch (khuVuc) {
    case "A":
      return 2;
    case "B":
      return 1;
    case "C":
      return 0.5;
  }
}
function diemUuTienDoiTuong(doiTuong) {
  switch (doiTuong) {
    case "1":
      return 2.5;
    case "2":
      return 1.5;
    case "3":
      return 1;
  }
}

document.getElementById("btnbai1").onclick = function () {
  var khuVuc = document.getElementById("khuvuc").value;
  var doiTuong = document.getElementById("doituong").value;
  var diemChuan = document.getElementById("diemchuan").value * 1;
  var diemKhuVuc = diemUuTienKhuVuc(khuVuc);
  var diemDoiTuong = diemUuTienDoiTuong(doiTuong);
  var diemMonThu1 = document.getElementById("diemmonthu1").value * 1;
  var diemMonThu2 = document.getElementById("diemmonthu2").value * 1;
  var diemMonThu3 = document.getElementById("diemmonthu3").value * 1;
  var tongDiem = 0;
  tongDiem =
    diemMonThu1 + diemMonThu2 + diemMonThu3 + diemKhuVuc + diemDoiTuong;
  console.log(tongDiem);
  if (tongDiem >= diemChuan) {
    document.getElementById(
      "ketqua1"
    ).innerHTML = `Bạn đã đậu.Tổng điểm ${tongDiem}`;
  } else {
    document.getElementById(
      "ketqua1"
    ).innerHTML = `Bạn đã rớt.Tổng điểm ${tongDiem} `;
  }
};

// BÀI TẬP 2

function giaTien50KwDau(soKw) {
  if (soKw > 0 || soKw <= 50) {
    return 500;
  }
}
function giaTien50KwKe(soKw) {
  if (soKw > 50 || soKw <= 100) {
    return 650;
  }
}
function giaTien100Ke(soKw) {
  if (soKw > 100 || soKw <= 200) {
    return 850;
  }
}
function giaTien150Ke(soKw) {
  if (soKw > 200 || soKw <= 350) {
    return 1100;
  }
}
function giaTienConLai(soKw) {
  if (soKw > 350) {
    return 1300;
  }
}

document.getElementById("btnbai2").onclick = function () {
  var hoVaTen = document.getElementById("hoten").value;
  var soKw = document.getElementById("sokw").value * 1;
  var tinhTien = 0;
  var giaTien50Kwdau = giaTien50KwDau(soKw);
  var giaTien50Kwke = giaTien50KwKe(soKw);
  var giaTien100Kwke = giaTien100Ke(soKw);
  var giaTien150Kwke = giaTien150Ke(soKw);
  var giaTienConlai = giaTienConLai(soKw);
  //   tính tiền:
  if (soKw <= 50) {
    tinhTien = soKw * giaTien50Kwdau;
  } else if (soKw <= 100) {
    tinhTien = 50 * giaTien50Kwdau + (soKw - 50) * giaTien50Kwke;
  } else if (soKw <= 200) {
    tinhTien =
      50 * giaTien50Kwdau + 50 * giaTien50Kwke + (soKw - 100) * giaTien100Kwke;
  } else if (soKw <= 350) {
    tinhTien =
      50 * giaTien50Kwdau +
      50 * giaTien50Kwke +
      100 * giaTien100Kwke +
      (soKw - 200) * giaTien150Kwke;
  } else {
    tinhTien =
      50 * giaTien50Kwdau +
      50 * giaTien50Kwke +
      100 * giaTien100Kwke +
      150 * giaTien150Kwke +
      (soKw - 350) * giaTienConlai;
  }
  document.getElementById(
    "ketqua2"
  ).innerHTML = `Họ tên:${hoVaTen}-Tiền Điện:${tinhTien.toLocaleString()}VNĐ`;
};

// BÀI 3
function thuNhapThueDen60(thuNhap) {
  if (thuNhap > 0 || thuNhap <= 60e6) {
    return 0.05;
  }
}

function thuNhapThueDen120(thuNhap) {
  if (thuNhap > 60e6 || thuNhap <= 120e6) {
    return 0.1;
  }
}
function thuNhapThueDen210(thuNhap) {
  if (thuNhap > 120e6 || thuNhap <= 210e6) {
    return 0.15;
  }
}
function thuNhapThueDen384(thuNhap) {
  if (thuNhap > 210e6 || thuNhap <= 384e6) {
    return 0.2;
  }
}
function thuNhapThueDen624(thuNhap) {
  if (thuNhap > 384e6 || thuNhap <= 624e6) {
    return 0.25;
  }
}
function thuNhapThueDen960(thuNhap) {
  if (thuNhap > 624e6 || thuNhap <= 960e6) {
    return 0.3;
  }
}
function thuNhapThueTren960(thuNhap) {
  if (thuNhap > 960e6) {
    return 0.35;
  }
}

document.getElementById("tinhtienthue").onclick = function () {
  var hoTen3 = document.getElementById("hoten3").value;
  var tongThuNhap = document.getElementById("tongthunhap").value * 1;
  var soNguoiPhuThuoc = document.getElementById("songuoi").value * 1;
  var thuNhapChiuThue = 0;
  thuNhapChiuThue = tongThuNhap - 4e6 - soNguoiPhuThuoc * 1.6e6;
  var thuNhapThueden60 = thuNhapThueDen60(thuNhapChiuThue);
  var thuNhapThueden120 = thuNhapThueDen120(thuNhapChiuThue);
  var thuNhapThueden210 = thuNhapThueDen210(thuNhapChiuThue);
  var thuNhapThueden384 = thuNhapThueDen384(thuNhapChiuThue);
  var thuNhapThueden624 = thuNhapThueDen624(thuNhapChiuThue);
  var thuNhapThueden960 = thuNhapThueDen960(thuNhapChiuThue);
  var thuNhapThuetren960 = thuNhapThueTren960(thuNhapChiuThue);

  // TÍNH THUẾ
  var tienThue = 0;
  if (thuNhapChiuThue <= 60e6) {
    tienThue = thuNhapChiuThue * thuNhapThueden60;
  } else if (thuNhapChiuThue <= 120e6) {
    tienThue =
      60e6 * thuNhapThueden60 + (thuNhapChiuThue - 60e6) * thuNhapThueden120;
  } else if (thuNhapChiuThue <= 210e6) {
    tienThue =
      60e6 * thuNhapThueden60 +
      60e6 * thuNhapThueden120 +
      (thuNhapChiuThue - 120e6) * thuNhapThueden210;
  } else if (thuNhapChiuThue <= 384e6) {
    tienThue =
      60e6 * thuNhapThueden60 +
      60e6 * thuNhapThueden120 +
      90e6 * thuNhapThueden210 +
      (thuNhapChiuThue - 210e6) * thuNhapThueden384;
  } else if (thuNhapChiuThue <= 624e6) {
    tienThue =
      60e6 * thuNhapThueden60 +
      60e6 * thuNhapThueden120 +
      90 +
      6 * thuNhapThueden210 +
      174e6 * thuNhapThueden384 +
      (thuNhapChiuThue - 384e6) * thuNhapThueden624;
  } else if (thuNhapChiuThue <= 960e6) {
    tienThue =
      60e6 * thuNhapThueden60 +
      60e6 * thuNhapThueden120 +
      90e6 * thuNhapThueden210 +
      174e6 * thuNhapThueden384 +
      240e6 * thuNhapThueden624 +
      (thuNhapChiuThue - 624e6) * thuNhapThueden960;
  } else {
    tienThue =
      60e6 * thuNhapThueden60 +
      60e6 * thuNhapThueden120 +
      90e6 * thuNhapThueden210 +
      174e6 * thuNhapThueden384 +
      240e6 * thuNhapThueden624 +
      336e6 * thuNhapThueden960 +
      (thuNhapChiuThue - 960e6) * thuNhapThuetren960;
  }
  console.log(tienThue);

  var ketQua3 = "";
  ketQua3 = `Họ Tên:${hoTen3}-Tiền Thuế thu nhập cá nhân:${tienThue.toLocaleString()}VNĐ`;
  document.getElementById("ketqua3").innerHTML = ketQua3;
};
