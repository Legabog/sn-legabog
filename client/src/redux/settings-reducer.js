
let initialState = {
  countries: [
      {title: "Argentina", urlFlag:"https://newsapi.org/images/flags/ar.svg", id: "ar"},
      {title: "Australia", urlFlag:"https://newsapi.org/images/flags/au.svg", id: "au"},
      {title: "Austria", urlFlag:"https://newsapi.org/images/flags/at.svg", id: "at"},
      {title: "Belgium", urlFlag:"https://newsapi.org/images/flags/be.svg", id: "be"},
      {title: "Brazil", urlFlag:"https://newsapi.org/images/flags/br.svg", id: "br"},
      {title: "Bulgaria", urlFlag:"https://newsapi.org/images/flags/bg.svg", id: "bg"},
      {title: "Canada", urlFlag:"https://newsapi.org/images/flags/ca.svg", id: "ca"},
      {title: "China", urlFlag:"https://newsapi.org/images/flags/cn.svg", id: "cn"},
      {title: "Colombia", urlFlag:"https://newsapi.org/images/flags/co.svg", id: "co"},
      {title: "Cuba", urlFlag:"https://newsapi.org/images/flags/cu.svg", id: "cu"},
      {title: "Czech Republic", urlFlag:"https://newsapi.org/images/flags/cz.svg", id: "cz"},
      {title: "Egypt", urlFlag:"https://newsapi.org/images/flags/eg.svg", id: "eg"},
      {title: "France", urlFlag:"https://newsapi.org/images/flags/fr.svg", id: "fr"},
      {title: "Germany", urlFlag:"https://newsapi.org/images/flags/de.svg", id: "de"},
      {title: "Greece", urlFlag:"https://newsapi.org/images/flags/gr.svg", id: "gr"},
      {title: "Hong Kong", urlFlag:"https://newsapi.org/images/flags/hk.svg", id: "hk"},
      {title: "Hungary", urlFlag:"https://newsapi.org/images/flags/hu.svg", id: "hu"},
      {title: "India", urlFlag:"https://newsapi.org/images/flags/in.svg", id: "in"},
      {title: "Indonesia", urlFlag:"https://newsapi.org/images/flags/id.svg", id: "id"},
      {title: "Ireland", urlFlag:"https://newsapi.org/images/flags/ie.svg", id: "ie"},
      {title: "Israel", urlFlag:"https://newsapi.org/images/flags/il.svg", id: "il"},
      {title: "Italy", urlFlag:"https://newsapi.org/images/flags/it.svg", id: "it"},
      {title: "Japan", urlFlag:"https://newsapi.org/images/flags/jp.svg", id: "jp"},
      {title: "Latvia", urlFlag:"https://newsapi.org/images/flags/lv.svg", id: "lv"},
      {title: "Lithuania", urlFlag:"https://newsapi.org/images/flags/lt.svg", id: "lt"},
      {title: "Malaysia", urlFlag:"https://newsapi.org/images/flags/my.svg", id: "my"},
      {title: "Mexico", urlFlag:"https://newsapi.org/images/flags/mx.svg", id: "mx"},
      {title: "Morocco", urlFlag:"https://newsapi.org/images/flags/ma.svg", id: "ma"},
      {title: "Netherlands", urlFlag:"https://newsapi.org/images/flags/nl.svg", id: "nl"},
      {title: "New Zealand", urlFlag:"https://newsapi.org/images/flags/nz.svg", id: "nz"},
      {title: "Nigeria", urlFlag:"https://newsapi.org/images/flags/ng.svg", id: "ng"},
      {title: "Norway", urlFlag:"https://newsapi.org/images/flags/no.svg", id: "no"},
      {title: "Philippines", urlFlag:"https://newsapi.org/images/flags/ph.svg", id: "ph"},
      {title: "Poland", urlFlag:"https://newsapi.org/images/flags/pl.svg", id: "pl"},
      {title: "Portugal", urlFlag:"https://newsapi.org/images/flags/pt.svg", id: "pt"},
      {title: "Romania", urlFlag:"https://newsapi.org/images/flags/ro.svg", id: "ro"},
      {title: "Russia", urlFlag:"https://newsapi.org/images/flags/ru.svg", id: "ru"},
      {title: "Saudi Arabia", urlFlag:"https://newsapi.org/images/flags/sa.svg", id: "sa"},
      {title: "Serbia", urlFlag:"https://newsapi.org/images/flags/rs.svg", id: "rs"},
      {title: "Singapore", urlFlag:"https://newsapi.org/images/flags/sg.svg", id: "sg"},
      {title: "Slovakia", urlFlag:"https://newsapi.org/images/flags/sk.svg", id: "sk"},
      {title: "Slovenia", urlFlag:"https://newsapi.org/images/flags/si.svg", id: "sl"},
      {title: "South Africa", urlFlag:"https://newsapi.org/images/flags/za.svg", id: "za"},
      {title: "South Korea", urlFlag:"https://newsapi.org/images/flags/kr.svg", id: "kr"},
      {title: "Sweden", urlFlag:"https://newsapi.org/images/flags/se.svg", id: "se"},
      {title: "Switzerland", urlFlag:"https://newsapi.org/images/flags/ch.svg", id: "ch"},
      {title: "Taiwan", urlFlag:"https://newsapi.org/images/flags/tw.svg", id: "tw"},
      {title: "Thailand", urlFlag:"https://newsapi.org/images/flags/th.svg", id: "th"},
      {title: "Turkey", urlFlag:"https://newsapi.org/images/flags/tr.svg", id: "tr"},
      {title: "UAE", urlFlag:"https://newsapi.org/images/flags/ae.svg", id: "ae"},
      {title: "Ukraine", urlFlag:"https://newsapi.org/images/flags/ua.svg", id: "ua"},
      {title: "United Kingdom", urlFlag:"https://newsapi.org/images/flags/gb.svg", id: "gb"},
      {title: "United States", urlFlag:"https://newsapi.org/images/flags/us.svg", id: "us"},
      {title: "Venuzuela", urlFlag:"https://newsapi.org/images/flags/ve.svg", id: "ve"},
    ],
    categories: ["business", "entertainment", "health", "science", "sports", "technology"]
};

const settingsReducer = (state = initialState, action) => {
  switch (action.type) {

    default:
      return state;
  }
};



export default settingsReducer;