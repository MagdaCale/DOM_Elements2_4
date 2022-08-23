let farben = document.getElementById('farbeAuswahlen')
let btn = document.getElementById('button')
let farbName = document.getElementsByTagName('option')


btn.addEventListener('click', () =>{
    const colorNmb= farben.selectedIndex
    console.log(farben.selectedIndex)
    console.log(farbName[colorNmb].value)

    let farbe = farbName[colorNmb].value
    farbe = farbe.replace(' ','').toLowerCase()
    console.log(farbe)

    document.body.style.backgroundColor= farbe
})