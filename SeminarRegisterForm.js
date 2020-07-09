<script type = text/javascript>
  let theTitle;
  let theRoll = [];
  let str;
  let theCity;
  let theFee;

  function titleText(){
    let len=0;
    let kor = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
    let text = document.getElementById("title").value;
    for(let i=0; i<text.length; i++){
      if(kor.test(text[i])){
        len += 2;
      }
      else{
        len += 1;
      }
      if(len > 200){
        alert("글자수 초과!");
        return 0;
      }
    }
    document.getElementById("titleTextNum").innerHTML = "( " + len +" / 200 )";
  }

  //세미나 주제 입력 확인
  function checkTitle(){
    let chk_title = document.getElementById("title").value;
    if(document.getElementById("title").value.length > 0){
      theTitle = chk_title;
      return true;
    }
    else{
      alert("세미나 주제를 입력하세요.");
      return false;
    }
  }

  //참가비 유형 선택 확인
  function checkFee(){
    let chk_fee = document.getElementsByName("fee");
    for(let i=0; i<chk_fee.length; i++){
      if(chk_fee[i].checked==true){
        if(i==0){
          theFee = '유료';
        }
        else{
          theFee = '무료';
        }
        return true;
      }
      if(i==chk_fee.length-1 && chk_fee[i].checked==false){
        alert("참가비 유형을 선택하세요.");
        return false;
      }
    }
  }

  //지역 선택 확인
  function checkCity(){
    let chk_country = document.getElementById("sel").value;
    if(chk_country == 0){
      alert("지역을 선택하세요.");
      return false;
    } else if(chk_country == 1){
      theCity='서울';
    } else if(chk_country == 2){
      theCity='경기';
    } else if(chk_country == 3){
      theCity='인천';
    } else if(chk_country == 4){
      theCity='대전';
    } else if(chk_country == 5){
      theCity='강원';
    } else if(chk_country == 6){
      theCity='충남';
    } else if(chk_country == 7){
      theCity='충북';
    } else if(chk_country == 8){
      theCity='경남';
    } else if(chk_country == 9){
      theCity='경북';
    } else if(chk_country == 10){
      theCity='전남';
    } else{
      theCity='전북';
    }
    return true;
  }

  //직책 선택 확인
  function checkRoll(){
    let i;
    theRoll=[];
    let chk_roll = document.getElementsByName("roll");
    for(i=0; i<chk_roll.length; i++){
      if(chk_roll[i].checked==true){
        if(i==0){
          theRoll.push('개발자');
          continue;
        }
        if(i==1){
          theRoll.push('팀장');
          continue;
        }
        if(i==2){
          theRoll.push('과장');
          continue;
        }
        if(i==3){
          theRoll.push('부장');
        }
      }
    }
    if(theRoll.length > 0){
      str = theRoll.join(', ');
      return true;
    }
    else{
      alert("직책을 선택하세요.");
      return false;
    }
  }

  function tblAdd(){
    let topBody = document.getElementById("tbl");
    let row = topBody.insertRow(topBody.rows.length);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    let cell5 = row.insertCell(4);
    let cell6 = row.insertCell(5);
    cell1.innerHTML = theTitle;
    cell2.innerHTML = str;
    cell3.innerHTML = theCity;
    cell4.innerHTML = theFee;
    cell5.innerHTML = '항목1';
    cell6.innerHTML = '항목2';
  }
  //총 검사 및 테이블 추가
  function checkAll(){
    if(checkTitle() && checkFee() && checkCity() && checkRoll()){
      tblAdd();
      alert("입력 완료");
    }
  }

  //<td><a class="ico-down" href="#"></a></td>
//  <td><a class="ico-trash" href="#"></a></td>



</script>
