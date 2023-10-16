let nyitoEgyenlegStr, konyvelesreVaroTetelStr, gja24eviStr,gja24eviStrTarolo, nyitoEgyenlegNum, konyvelesreVaroTetelNum, gja24eviNum, osszEgyenlegStr, osszEgyenlegNum, adozoNeveStr, fizetesreKijelolveOsszStr, fizetesreKijelolveOsszNum, fizetendoOsszegOsszesenStr, fizetendoOsszegOsszesenNum, fizetesreKijelolveTomb;

let adozoNeve, nyitoEgyenleg, konyvelesreVaroTetel, gja24evi, beallitasokRogzitese, alaphelyzetbeAllitas, frissites, KartyaAdozoNeve, KartyaGjaOssz, KartyaGjaOsszElojelSzoveg, TetelGja24, OsszeitoFizetesreKijelolve, OsszeitoFizetesreKijelolveOsszeg, OsszeitoFizetesreKijelolveElojel, OsszeitoKorabbiTartTulf, OsszeitoKorabbiTartTulfOsszeg, OsszeitoKorabbiTartTulfElojel, OsszeitoKonyvelesFoly, OsszeitoKonyvelesFolyOsszeg, OsszeitoKonyvelesFolyElojel, reszletetValasztoBlokk, reszletetValasztoBlokkNyitva, reszletlehetosegSzoveg, reszletMegerositGomb, reszletMegseGomb, reszletMegerositve, reszletDarab, ugyTetelek, reszletValasztoLista, fizetekGomb, hatterFolyamatokLeirasa;

let elsoInditas = true;

function elemekMeghatarozasa() {

	adozoNeve = {};
	nyitoEgyenleg = {value: "10000"};
	konyvelesreVaroTetel = {value: "-5000"};
	gja24evi = {value: "30000"};
	
	beallitasokRogzitese = {};
	alaphelyzetbeAllitas = {};
	// frissites = qs("#frissites");
	
	KartyaAdozoNeve = qs("#gjaAdozoNev");
	KartyaGjaOssz = qs("#gjaE");
	KartyaGjaOsszElojelSzoveg = qs("#osszelojel");
	TetelGja24 = qs(".kivalaszthatoOsszeg");
	tetel = qs(".tetel");
	OsszeitoFizetesreKijelolve = qs(".osszesito p:nth-child(1)");
	OsszeitoFizetesreKijelolveOsszeg = qs(".osszesito p:nth-child(2) span");
	OsszeitoFizetesreKijelolveElojel = qs(".osszesito p:nth-child(3)");
	OsszeitoKorabbiTartTulf = qs(".osszesito p:nth-child(4)");
	OsszeitoKorabbiTartTulfOsszeg = qs(".osszesito p:nth-child(5) span");
	OsszeitoKorabbiTartTulfElojel = qs(".osszesito p:nth-child(6)");
	OsszeitoKonyvelesFoly = qs(".osszesito p:nth-child(7)");
	OsszeitoKonyvelesFolyOsszeg = qs(".osszesito p:nth-child(8) span");
	OsszeitoKonyvelesFolyElojel = qs(".osszesito p:nth-child(9)");
	
	reszletetValasztoBlokk = qs(".reszletlehetoseg");
	reszletetValasztoBlokkNyitva = false;
	reszletlehetosegSzoveg = qs("#reszletlehetosegSzoveg");
	
	reszletMegerositGomb = qs(".valaszlehetosegek p:nth-child(1)");
	reszletMegseGomb = qs(".valaszlehetosegek p:nth-child(2)");
	
	ugyTetelek = qs(".tetelekOssz");
	reszletValasztoLista = qs("#reszletdb");

	reszletMegerositve = false;

	fizetekGomb = qs(".fizetek");

	hatterFolyamatokLeirasa = {};
};

elemekMeghatarozasa();

function qs(sel) {
	return document.querySelector(sel);
}

function strSzamFormazasa(Str) {
	Str = Str.split("");
	Str.splice(-3,0," ");
	Str.splice(-7,0," ");
	Str = Str.join("").trim();
	return Str;
}

(()=>{
	beallRogzitGombInditas();
	if (gja24eviNum > 0) {
		qs(".fiztetel").style.display = "block"
		qs(".tetel").style.display = "block"
		qs(".osszesito").style.display = "block"
	};
	if ((nyitoEgyenlegNum > 0 || konyvelesreVaroTetelNum > 0) && gja24eviNum == 0) {
		qs(".osszesito").style.marginTop = "20px"
		qs(".osszesito").style.display = "block"
	}
})();


// frissites.addEventListener("click", beallRogzitGombInditas);

function reszletVegelegesitve() {
	if(reszletMegerositve) {
		tetel.removeChild(reszletetValasztoBlokk);
		tetel.removeChild(reszletlehetosegSzoveg);
	}
}

function beallRogzitGombInditas () {
	nyitoEgyenlegStr = "10000";
	nyitoEgyenlegNum = parseInt(nyitoEgyenlegStr)
	nyitoEgyenlegStr = strSzamFormazasa(nyitoEgyenlegStr);
	nyitoEgyenleg.value = nyitoEgyenlegStr;
 
	konyvelesreVaroTetelStr = "-5000";
	konyvelesreVaroTetelNum = parseInt(konyvelesreVaroTetelStr);
	konyvelesreVaroTetelStr = strSzamFormazasa(konyvelesreVaroTetelStr);
	konyvelesreVaroTetel.value = konyvelesreVaroTetelStr;
 
	gja24eviStr = "30000";
	gja24eviNum = parseInt(gja24eviStr);
	gja24eviStr = strSzamFormazasa(gja24eviStr);
	gja24eviStrTarolo ? "" : gja24eviStrTarolo = gja24eviStr;
	gja24evi.value = gja24eviStr;
	
	osszEgyenlegNum = nyitoEgyenlegNum + konyvelesreVaroTetelNum + gja24eviNum;
	osszEgyenlegStr = osszEgyenlegNum.toString();
	osszEgyenlegStr = strSzamFormazasa(osszEgyenlegStr);

	adozoNeveStr = "Nyári Napsugár";

	tartalomKirajzolasa();
	fizetesreKijelolveOsszegyujtes();
};

function tartalomKirajzolasa() {
	KartyaAdozoNeve.innerHTML = adozoNeveStr;
	KartyaGjaOssz.innerHTML = (parseInt(osszEgyenlegStr) < 0) ? "0" : osszEgyenlegStr;
	KartyaGjaOsszElojelSzoveg.innerHTML = osszEgyenlegNum > 0 ? "(tartozás)" : "";
	TetelGja24.innerHTML = gja24eviStrTarolo;
	OsszeitoFizetesreKijelolveElojel.innerHTML = fizetesreKijelolveOsszNum == 0 ? "" : fizetesreKijelolveOsszNum > 0 ? "(tartozás)" : "(túlfizetés)";
	OsszeitoKorabbiTartTulf.innerHTML = nyitoEgyenlegNum >= 0 ? "+ Egyenleg" : "- Egyenleg";
	OsszeitoKorabbiTartTulfOsszeg.innerHTML = nyitoEgyenlegStr;
	OsszeitoKorabbiTartTulfElojel.innerHTML = nyitoEgyenlegNum == 0 ? "" : nyitoEgyenlegNum > 0 ? "(tartozás)" : "(túlfizetés)";
	OsszeitoKonyvelesFolyOsszeg.innerHTML = konyvelesreVaroTetelStr;
	OsszeitoKonyvelesFolyElojel.innerHTML = konyvelesreVaroTetelNum == 0 ? "" : konyvelesreVaroTetelNum > 0 ? "(előírás)" : "(befizetés)";
};

function reszletetValasztoBlokkKi () {
	if (!reszletetValasztoBlokkNyitva) {
		reszletetValasztoBlokk.style.height = "185px";
		reszletetValasztoBlokkNyitva = true;
		reszletlehetosegSzoveg.style.opacity = "0";
		reszletlehetosegSzoveg.style.cursor = "auto";
		reszletlehetosegSzoveg.removeEventListener("click",
			reszletetValasztoBlokkKi);
		fizetekGomb.disabled = true;

	}
};

function reszletetValasztoBlokkMegse () {
	if (reszletetValasztoBlokkNyitva) {
		reszletetValasztoBlokk.style.height = "0px";
		reszletetValasztoBlokkNyitva = false;
		reszletlehetosegSzoveg.style.opacity = "1";
		reszletlehetosegSzoveg.style.cursor = "pointer";
		reszletlehetosegSzoveg.addEventListener("click",
		reszletetValasztoBlokkKi)
		fizetekGomb.disabled = false;
		reszletMegerositGomb.classList.remove("aktiv");

	};

	ugyTetelek.innerHTML =
	`<label for="egybe1">
	<div class="tetelek">
	<input type="checkbox" name="egybe1" id="egybe1" checked onchange="fizetesreKijelolveOsszegyujtes()">
	<p>2024. évi gépjárműadó</p>
	<p class="kivalaszthatoTetel"><span class="kivalaszthatoOsszeg">${gja24eviStrTarolo}</span> Ft</p>
	<p class="esedekesseg">Esedékesség: 2024. április 15.</p>
	</div>
	</label>`;

	fizetesreKijelolveOsszegyujtes();
	
	elemekMeghatarozasa();

	reszletValasztoLista.value = "1";
};

reszletMegseGomb.addEventListener("click", reszletetValasztoBlokkMegse);


reszletlehetosegSzoveg.addEventListener("click", reszletetValasztoBlokkKi);

function fizetesreKijelolveOsszegyujtes() {
	fizetesreKijelolveOsszNum = 0;
	fizetesreKijelolveTomb = document.querySelectorAll(".tetelekOssz input:checked");
	for (let i = 0; i < fizetesreKijelolveTomb.length; i++) {
		fizetesreKijelolveOsszNum += parseInt(fizetesreKijelolveTomb[i].parentElement.querySelector(".kivalaszthatoOsszeg").innerHTML.replaceAll(" ", ""));
	};
	fizetesreKijelolveOsszStr = fizetesreKijelolveOsszNum.toString();
	fizetesreKijelolveOsszStr = strSzamFormazasa(fizetesreKijelolveOsszStr);

	OsszeitoFizetesreKijelolveOsszeg.innerHTML = fizetesreKijelolveOsszStr;

	fizetendoOsszMegallapitasa();
}

function fizetendoOsszMegallapitasa() {
	fizetendoOsszegOsszesenNum = nyitoEgyenlegNum + konyvelesreVaroTetelNum + fizetesreKijelolveOsszNum;

	fizetendoOsszegOsszesenStr = fizetendoOsszegOsszesenNum.toString();
	fizetendoOsszegOsszesenStr = strSzamFormazasa(fizetendoOsszegOsszesenStr);

	if(fizetendoOsszegOsszesenNum > 0) {
		
		fizetekGomb.innerHTML = `Fizetek <span id="fizossz"></span> Ft-ot`;
		fizetekGomb.disabled = false;
		
		let fizetekGombOsszeg = qs("#fizossz");
		fizetekGombOsszeg.innerHTML = fizetendoOsszegOsszesenStr;
	} else {
		fizetekGomb.disabled = true;
		fizetekGomb.innerHTML = `Fizetek 0 Ft-ot`;
	}

	tartalomKirajzolasa();
}

reszletValasztoLista.addEventListener("change", reszletKivalasztasa);

function reszletKivalasztasa() {


	reszletDarab = parseInt(reszletValasztoLista.value);
	
	if(reszletDarab > 1){
		reszletMegerositGomb.classList.add("aktiv");
	}

	let reszletOsszegek = [];

	for (let j = 1; j < reszletDarab; j++) {
		reszletOsszegek.push(parseInt(gja24eviNum / reszletDarab));
	}
	reszletOsszegek.push(gja24eviNum - (parseInt(gja24eviNum / reszletDarab) * (reszletDarab - 1)));
	
	if (reszletOsszegek[reszletDarab - 1] - reszletOsszegek[reszletDarab - 2] == reszletDarab - 1) {
		for(let k = 0; k < reszletDarab - 1; k++) {
			reszletOsszegek[k] = reszletOsszegek[k] + 1;
		}
		reszletOsszegek[reszletDarab - 1] = reszletOsszegek[reszletDarab - 1] - (reszletDarab - 1);
	} else {
		reszletOsszegek.reverse();
	}

	reszletDarab == 5 ? ugyTetelek.innerHTML = `
	<label for="otbe1">
	<div class="tetelek">
		<input type="checkbox" name="otbe1" id="otbe1" checked onchange="beallRogzitGombInditas()">
		<p>1. részlet</p>
		<p class="kivalaszthatoTetel"><span class="kivalaszthatoOsszeg">${strSzamFormazasa(reszletOsszegek[0].toString())}</span> Ft</p>
		<p class="esedekesseg">Esedékesség: 2024. április 15.</p>
	</div>
	</label>
	<label for="otbe2">
	<div class="tetelek">
		<input type="checkbox" name="otbe2" id="otbe2" onchange="beallRogzitGombInditas()">
		<p>2. részlet</p>
		<p class="kivalaszthatoTetel"><span class="kivalaszthatoOsszeg">${strSzamFormazasa(reszletOsszegek[1].toString())}</span> Ft</p>
		<p class="esedekesseg">Esedékesség: 2024. május 15.</p>
	</div>
	</label>
	<label for="otbe3">
	<div class="tetelek">
		<input type="checkbox" name="otbe3" id="otbe3" onchange="beallRogzitGombInditas()">
		<p>3. részlet</p>
		<p class="kivalaszthatoTetel"><span class="kivalaszthatoOsszeg">${strSzamFormazasa(reszletOsszegek[2].toString())}</span> Ft</p>
		<p class="esedekesseg">Esedékesség: 2024. június 15.</p>
	</div>
	</label>
	<label for="otbe4">
	<div class="tetelek">
		<input type="checkbox" name="otbe4" id="otbe4" onchange="beallRogzitGombInditas()">
		<p>4. részlet</p>
		<p class="kivalaszthatoTetel"><span class="kivalaszthatoOsszeg">${strSzamFormazasa(reszletOsszegek[3].toString())}</span> Ft</p>
		<p class="esedekesseg">Esedékesség: 2024. július 15.</p>
	</div>
	</label>
	<label for="otbe5">
	<div class="tetelek">
		<input type="checkbox" name="otbe5" id="otbe5" onchange="beallRogzitGombInditas()">
		<p>5. részlet</p>
		<p class="kivalaszthatoTetel"><span class="kivalaszthatoOsszeg">${strSzamFormazasa(reszletOsszegek[4].toString())}</span> Ft</p>
		<p class="esedekesseg">Esedékesség: 2024. augusztus 15.</p>
	</div>
	</label>` : reszletDarab == 4 ? ugyTetelek.innerHTML = `
	<label for="negybe1">
	<div class="tetelek">
		<input type="checkbox" name="negybe1" id="negybe1" checked onchange="beallRogzitGombInditas()">
		<p>1. részlet</p>
		<p class="kivalaszthatoTetel"><span class="kivalaszthatoOsszeg">${strSzamFormazasa(reszletOsszegek[0].toString())}</span> Ft</p>
		<p class="esedekesseg">Esedékesség: 2024. április 15.</p>
	</div>
	</label>
	<label for="negybe2">
	<div class="tetelek">
		<input type="checkbox" name="negybe2" id="negybe2" onchange="beallRogzitGombInditas()">
		<p>2. részlet</p>
		<p class="kivalaszthatoTetel"><span class="kivalaszthatoOsszeg">${strSzamFormazasa(reszletOsszegek[1].toString())}</span> Ft</p>
		<p class="esedekesseg">Esedékesség: 2024. május 15.</p>
	</div>
	</label>
	<label for="negybe3">
	<div class="tetelek">
		<input type="checkbox" name="negybe3" id="negybe3" onchange="beallRogzitGombInditas()">
		<p>3. részlet</p>
		<p class="kivalaszthatoTetel"><span class="kivalaszthatoOsszeg">${strSzamFormazasa(reszletOsszegek[2].toString())}</span> Ft</p>
		<p class="esedekesseg">Esedékesség: 2024. június 15.</p>
	</div>
	</label>
	<label for="negybe4">
	<div class="tetelek">
		<input type="checkbox" name="negybe4" id="negybe4" onchange="beallRogzitGombInditas()">
		<p>4. részlet</p>
		<p class="kivalaszthatoTetel"><span class="kivalaszthatoOsszeg">${strSzamFormazasa(reszletOsszegek[3].toString())}</span> Ft</p>
		<p class="esedekesseg">Esedékesség: 2024. július 15.</p>
	</div>
	</label>` : reszletDarab == 3 ? ugyTetelek.innerHTML = `
	<label for="haromba1">
	<div class="tetelek">
		<input type="checkbox" name="haromba1" id="haromba1" checked onchange="beallRogzitGombInditas()">
		<p>1. részlet</p>
		<p class="kivalaszthatoTetel"><span class="kivalaszthatoOsszeg">${strSzamFormazasa(reszletOsszegek[0].toString())}</span> Ft</p>
		<p class="esedekesseg">Esedékesség: 2024. április 15.</p>
	</div>
	</label>
	<label for="haromba2">
	<div class="tetelek">
		<input type="checkbox" name="haromba2" id="haromba2" onchange="beallRogzitGombInditas()">
		<p>2. részlet</p>
		<p class="kivalaszthatoTetel"><span class="kivalaszthatoOsszeg">${strSzamFormazasa(reszletOsszegek[1].toString())}</span> Ft</p>
		<p class="esedekesseg">Esedékesség: 2024. május 15.</p>
	</div>
	</label>
	<label for="haromba3">
	<div class="tetelek">
		<input type="checkbox" name="haromba3" id="haromba3" onchange="beallRogzitGombInditas()">
		<p>3. részlet</p>
		<p class="kivalaszthatoTetel"><span class="kivalaszthatoOsszeg">${strSzamFormazasa(reszletOsszegek[2].toString())}</span> Ft</p>
		<p class="esedekesseg">Esedékesség: 2024. június 15.</p>
	</div>
	</label>` : reszletDarab == 2 ? ugyTetelek.innerHTML = `
	<label for="kettobe1">
	<div class="tetelek">
		<input type="checkbox" name="kettobe1" id="kettobe1" checked onchange="beallRogzitGombInditas()">
		<p>1. részlet</p>
		<p class="kivalaszthatoTetel"><span class="kivalaszthatoOsszeg">${strSzamFormazasa(reszletOsszegek[0].toString())}</span> Ft</p>
		<p class="esedekesseg">Esedékesség: 2024. április 15.</p>
	</div>
	</label>
	<label for="kettobe2">
	<div class="tetelek">
		<input type="checkbox" name="kettobe2" id="kettobe2" onchange="beallRogzitGombInditas()">
		<p>2. részlet</p>
		<p class="kivalaszthatoTetel"><span class="kivalaszthatoOsszeg">${strSzamFormazasa(reszletOsszegek[1].toString())}</span> Ft</p>
		<p class="esedekesseg">Esedékesség: 2024. május 15.</p>
	</div>
	</label>` : "";

	fizetesreKijelolveOsszegyujtes();
}

reszletMegerositGomb.addEventListener("click", reszletVeglegesitese);

function reszletVeglegesitese() {
	if(reszletValasztoLista.value == 1) {
		return;
	}
	reszletetValasztoBlokkNyitva = false;
	reszletMegerositve = true;
	reszletVegelegesitve();
}

fizetekGomb.addEventListener("click", fizetesInditasa);

function fizetesInditasa() {
	if (reszletetValasztoBlokkNyitva) {
		return;
	};

	let ideiglenesTarolo;
	fizetesreKijelolveTomb.forEach(el => {
		el.disabled = true;
		el.checked = false;
		el.parentElement.querySelector(".esedekesseg").innerHTML = "befizetve";
		el.parentElement.querySelector(".esedekesseg").classList.add("befizetve");
		el.parentElement.style.boxShadow = "none";
		gja24eviNum -= parseInt(el.parentElement.querySelector(".kivalaszthatoOsszeg").innerHTML.replaceAll(" ", ""));
		ideiglenesTarolo = gja24eviNum;
	});
	konyvelesreVaroTetelNum -= fizetendoOsszegOsszesenNum;
	konyvelesreVaroTetel.value = konyvelesreVaroTetelNum;
	setTimeout(() => {
		// konyvelesreVaroTetelNum += parseInt(el.parentElement.querySelector(".kivalaszthatoOsszeg").innerHTML.replaceAll(" ", ""));
		konyvelesreVaroTetel.value = 0;
		nyitoEgyenlegNum += konyvelesreVaroTetelNum
		// parseInt(el.parentElement.querySelector(".kivalaszthatoOsszeg").innerHTML.replaceAll(" ", ""));
		nyitoEgyenleg.value = nyitoEgyenlegNum;
		beallRogzitGombInditas();
	}, "1000");
	setTimeout(() => {
		gja24evi.value = ideiglenesTarolo;
		// konyvelesreVaroTetelNum += parseInt(el.parentElement.querySelector(".kivalaszthatoOsszeg").innerHTML.replaceAll(" ", ""));
		nyitoEgyenleg.value = 0;
		beallRogzitGombInditas();
		}, "20000");
	beallRogzitGombInditas();
	
	!reszletMegerositve ? reszletVeglegesitese() : "";
}


