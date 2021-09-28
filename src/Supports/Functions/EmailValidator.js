// EmaiL Validator
// Ex. ryan.ryan@gmail.com, masdefry20@gmail.com, masdefry@hosting.co.id

// 1. Index paling awal tidak moleh dimulai menggunakan angka ataupun special karakter
// 2. Terdapat string sebelum & sesudah @
// 3. Setelah @, ada string. Setelah string harus ada .
// 4. Setelah ., harus ada string lagi

function EmailValidator(email){
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'

    if(!alphabet.includes(email[0])){ // Apakah email index ke-0 ada di dalam var alphabet
        return false
    }

    for(let i=0; i < email.length; i++){ // Mengecek apakah inputan mengandung spasi
        if(email[i] === ' '){
            return false
        }
    }
    
    let emailSplit = email.split('@') 
    if(emailSplit.length !== 2 || emailSplit[1] === ''){ // Jika hasil split yg disimpan ke dalam array memiliki .length !== 2
        return false
    }

    let hostingEmail = emailSplit[1] // gmail.com
    let hostingEmailSplit = hostingEmail.split('.') // [gmail, com]
    if(hostingEmailSplit.length < 2 || hostingEmailSplit.length > 3 || hostingEmailSplit[1] === ''){ // Jika hasil split hosting disimpan ke dalam array memiliki .length !== 2
        return false
    }

    return true
}

export default EmailValidator