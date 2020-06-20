const kerucut = {
  hasilPerhitunganSistem: null,
  hasilPerhitunganUser: null,
  satuPerTiga: 0.33,
  phi: 3.14,
  r: null,
  tinggi: null,
}

const kubus = {
  hasilPerhitunganSistem: null,
  hasilPerhitunganUser: null,
  sisi: null,
};

const tabung = {
  hasilPerhitunganSistem: null,
  hasilPerhitunganUser: null,
  phi: 3.14,
  r: null,
  tinggi: null,
};

generateNilaiRandom("kerucut");
generateNilaiRandom("kubus");
generateNilaiRandom("tabung");
tamplikanSoalJawabanKeLayar("kerucut");
tamplikanSoalJawabanKeLayar("kubus");
tamplikanSoalJawabanKeLayar("tabung");


function generateNilaiRandom(jenisBangunRuang) {
  if (jenisBangunRuang === "kerucut") {
    kerucut.r = Math.floor(Math.random() * 10);
    kerucut.tinggi = Math.floor(Math.random() * 10);

    kerucut.hasilPerhitunganSistem = toFixed(kerucut.satuPerTiga * (kerucut.phi * (kerucut.r ^ 2)) * kerucut.tinggi, 2) + " cm";
  }

  if (jenisBangunRuang === "kubus") {
    kubus.sisi = Math.floor(Math.random() * 10);

    kubus.hasilPerhitunganSistem = toFixed(kubus.sisi * kubus.sisi * kubus.sisi, 2) + " cm";
  }

  if (jenisBangunRuang === "tabung") {
    tabung.r = Math.floor(Math.random() * 10);
    tabung.tinggi = Math.floor(Math.random() * 10);

    tabung.hasilPerhitunganSistem = toFixed((tabung.phi * (tabung.r ^ 2)) * tabung.tinggi, 2) + " cm";
  }
}

function tamplikanSoalJawabanKeLayar(jenisBangunRuang) {
  if (jenisBangunRuang === "kerucut") {
    document.getElementById("rKerucut").innerHTML = kerucut.r + " cm";
    document.getElementById("tKerucut").innerHTML = kerucut.tinggi + " cm";

    arrJawabanKerucut = [];
    arrJawabanKerucut.push(toFixed(kerucut.hasilPerhitunganSistem, 2));
    arrJawabanKerucut.push(randomJawaban());
    arrJawabanKerucut.push(randomJawaban());

    arrJawabanKerucut.sort(() => Math.random() - 0.5); // *github randomize array

    document.getElementById("jawabanAKerucut").nextElementSibling.innerHTML = arrJawabanKerucut[0] + " cm";
    document.getElementById("jawabanBKerucut").nextElementSibling.innerHTML = arrJawabanKerucut[1] + " cm";
    document.getElementById("jawabanCKerucut").nextElementSibling.innerHTML = arrJawabanKerucut[2] + " cm";
  }

  if (jenisBangunRuang === "kubus") {
    document.getElementById("sisiKubus").innerHTML = kubus.sisi + " cm";

    arrJawabanKubus = [];
    arrJawabanKubus.push(toFixed(kubus.hasilPerhitunganSistem), 2);
    arrJawabanKubus.push(randomKubus());
    arrJawabanKubus.push(randomKubus());

    arrJawabanKubus.sort(() => Math.random() - 0.5); // *github randomize array

    document.getElementById("jawabanAKubus").nextElementSibling.innerHTML = arrJawabanKubus[0] + " cm";
    document.getElementById("jawabanBKubus").nextElementSibling.innerHTML = arrJawabanKubus[1] + " cm";
    document.getElementById("jawabanCKubus").nextElementSibling.innerHTML = arrJawabanKubus[2] + " cm";
  }

  if (jenisBangunRuang === "tabung") {
    document.getElementById("rTabung").innerHTML = kerucut.r + " cm";
    document.getElementById("tTabung").innerHTML = kerucut.tinggi + " cm";

    arrJawabanTabung = [];
    arrJawabanTabung.push(toFixed(tabung.hasilPerhitunganSistem, 2));
    arrJawabanTabung.push(randomJawaban());
    arrJawabanTabung.push(randomJawaban());

    arrJawabanTabung.sort(() => Math.random() - 0.5); // *github randomize array

    document.getElementById("jawabanATabung").nextElementSibling.innerHTML = arrJawabanTabung[0] + " cm";
    document.getElementById("jawabanBTabung").nextElementSibling.innerHTML = arrJawabanTabung[1] + " cm";
    document.getElementById("jawabanCTabung").nextElementSibling.innerHTML = arrJawabanTabung[2] + " cm";
  }
}

function jawabSoalKerucut() {
  document.getElementById("jawabanAKerucut").nextElementSibling.innerHTML;
  document.getElementById("jawabanBKerucut").nextElementSibling.innerHTML;
  document.getElementById("jawabanCKerucut").nextElementSibling.innerHTML;
}

function pilihJawabanKerucut(jawaban) {
  kerucut.hasilPerhitunganUser = document.getElementById(jawaban).nextElementSibling.innerHTML;
}

function pilihJawabanKubus(jawaban) {
  kubus.hasilPerhitunganUser = document.getElementById(jawaban).nextElementSibling.innerHTML;
}

function pilihJawabanTabung(jawaban) {
  tabung.hasilPerhitunganUser = document.getElementById(jawaban).nextElementSibling.innerHTML;
}

function randomJawaban() { // *github
  precision = 100; // 2 decimals
  return Math.floor(Math.random() * (10 * precision - 1 * precision) + 1 * precision) / (1 * precision);
}

function toFixed(num, fixed) { // *github
  var re = new RegExp('^-?\\d+(?:\.\\d{0,' + (fixed || -1) + '})?');
  return num.toString().match(re)[0];
}

function randomKubus() {
  let randomKubus = Math.floor(Math.random() * 100) + 1;
  return randomKubus;
};

function clearSelectedRadio(nameRadio) { // *github
  var ele = document.getElementsByName(nameRadio);
  for (var i = 0; i < ele.length; i++)
    ele[i].checked = false;
}

function klikJawab(jenisBangunRuang) {
  if (jenisBangunRuang == "kerucut") {
    if (kerucut.hasilPerhitunganUser == null) {
      document.getElementById('hasilJawabanKerucut').innerHTML = "Jawaban belum dipilih.";
    } else if (kerucut.hasilPerhitunganSistem == kerucut.hasilPerhitunganUser) {
      document.getElementById('hasilJawabanKerucut').innerHTML = "Selamat jawaban kamu <span>tepat</span>.";
    } else {
      document.getElementById('hasilJawabanKerucut').innerHTML = "Maaf jawaban kamu <span>belum tepat</span>.";
    }
  }
  if (jenisBangunRuang == "kubus") {
    if (kubus.hasilPerhitunganUser == null) {
      document.getElementById('hasilJawabanKubus').innerHTML = "Jawaban belum dipilih.";
    } else if (kubus.hasilPerhitunganSistem == kubus.hasilPerhitunganUser) {
      document.getElementById('hasilJawabanKubus').innerHTML = "Selamat jawaban kamu <span>tepat</span>.";
    } else {
      document.getElementById('hasilJawabanKubus').innerHTML = "Maaf jawaban kamu <span>belum tepat</span>.";
    }
  }
  if (jenisBangunRuang == "tabung") {
    if (tabung.hasilPerhitunganUser == null) {
      document.getElementById('hasilJawabanTabung').innerHTML = "Jawaban belum dipilih.";
    } else if (tabung.hasilPerhitunganSistem == tabung.hasilPerhitunganUser) {
      document.getElementById('hasilJawabanTabung').innerHTML = "Selamat jawaban kamu <span>tepat</span>.";
    } else {
      document.getElementById('hasilJawabanTabung').innerHTML = "Maaf jawaban kamu <span>belum tepat</span>.";
    }
  }
}