const dayjs = require('dayjs')
const customParseFormat = require('dayjs/plugin/customParseFormat')
dayjs.extend(customParseFormat)

function getBirthday(givenDate){
  let birthday = dayjs(givenDate, "DD/MM/YYYY");
  let nowDate = dayjs();
  let actualAge = nowDate.diff(birthday,"years");
  let nextBirthday = getBirthday();
  let dueBirthday = nextBirthday.diff(nowDate,"day") + 1;

   function getBirthday() {
    let dataAnalised = birthday
    let nextBirthday = "" 
    while (true) {
      if (dataAnalised.isBefore(nowDate)){
        dataAnalised = dataAnalised.year(dataAnalised.year()+1)
      } else {
        nextBirthday = dataAnalised;
        break
      }
    }
      return nextBirthday;
  }

  console.log("--x--x--")
  console.log("Sua data de nascimento é: " + birthday.format("DD/MM/YYYY"))
  console.log("Você tem: " + actualAge + " ano(s)")
  console.log("Seu próximo aniversário é: " + nextBirthday.format("DD/MM/YYYY"))
  console.log("Faltam " + dueBirthday + " dia(s) para seu aniversário.")
}

let usedDate = "03-06-1993"
getBirthday(usedDate)
usedDate = "22-07-1996"
getBirthday(usedDate)