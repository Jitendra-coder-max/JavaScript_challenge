// Highlight all of the words over 8 characters long in
//  the paragraph text (with a yellow background for example)
// */

// console.log("World")

// let para = document.querySelector('p')

// para.innerHTML = para.innerHTML.split(' ').map(word => word.length > 8 ? `<span style="background-color : yellow"> ${word}</span>` : word)
// .join(' ')


// Add a link back to the source of the text after the paragraph tag.

//    const link =  document.createElement('a');
//    link.href = 'https://www.uitrgpv.ac.in/'

//    link.innerText = 'Text college'

//    document.body.appendChild(link)

// let para = document.querySelector('p')
             
//  para.innerHTML = para.innerHTML.split('.').join('</p></p>'+ '</p>');


// let para = document.querySelector('p')
         
//      let wordCount = para.innerHTML.split(' ').length

//       let WordElem=   document.createElement('div')

//       WordElem.innerHTML = `${wordCount} words`;
//    document.body.appendChild(WordElem)
// document.body.insertBefore(para,WordElem)

// Replace all question marks (?) with thinking faces
//  (🤔) and exclamation marks (!) with astonished faces (😲)

Array.from(document.querySelectorAll('p'))
.forEach(p =>  {

    p.innerHTML = p.innerHTML.replace(/\?/g, '🤔').replace(/\!/g, '😲')

})




