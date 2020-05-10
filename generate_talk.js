// define selector function to randomly return an item in an array
function randomSelector(array) {
  const index = Math.floor(Math.random() * array.length)
  return array[index]
}

function generateTalk(selection) {
  const task = {
    engineer: ['加個按鈕', '加新功能', '切個版', '改一點 code'],
    designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
    entrepreneur: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢']
  }
  const phrase = ['很簡單', '很容易', '很快', '很正常']
  let trashTalk = ''

  switch (selection.listener) {
    case 'engineer':
      trashTalk = `
      身為一個工程師，${randomSelector(task.engineer)}，${randomSelector(phrase)}吧!
      `
      return trashTalk

    case 'designer':
      trashTalk = `
      身為一個設計師，${randomSelector(task.designer)}，${randomSelector(phrase)}吧!
      `
      return trashTalk

    case 'entrepreneur':
      trashTalk = `
      身為一個創業家，${randomSelector(task.entrepreneur)}，${randomSelector(phrase)}吧!
      `
      return trashTalk

    case undefined:
      trashTalk = '請選擇一個職業'
      return trashTalk
  }

}

// export generatePassword function for other files to use
module.exports = generateTalk

