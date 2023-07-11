function validationForm() {
  let validationCod = document.forms["register"]["cod"].value;
  let validationTitle = document.forms["register"]["title"].value;
  let validationRelease = document.forms["register"]["release"].value;
  let validationAuthor = document.forms["register"]["author"].value;
  let validationGen = document.forms["register"]["gen"].value;

  if (validationCod == "") {
    alert("O código deve ser preenchido.");
    return false;
  }
  if (validationTitle == "") {
    alert("O título deve ser preenchido.");
    return false;
  }
  if (validationRelease == "") {
    alert("A data de lançamento deve ser preenchido.");
    return false;
  }

  if (validationAuthor == "") {
    alert("O autor(a) deve ser preenchido.");
    return false;
  }

  if (validationGen == "") {
    alert("O gênero deve ser preenchido");
    return false;
  }
}

function insert() {
  let cod = document.forms["register"]["cod"].value;
  let title = document.forms["register"]["title"].value;
  let release = document.forms["register"]["release"].value;
  let author = document.forms["register"]["author"].value;
  let gen = document.forms["register"]["gen"].value;

  let insert = window.document.getElementById("insertRow");

  insert.innerHTML = `
  <th scope='row'>${cod}</th>
  <td>${title}</td>
  <td>${release}</td>
  <td>${author}</td>
  <td>${gen}</td>
  `;
}
