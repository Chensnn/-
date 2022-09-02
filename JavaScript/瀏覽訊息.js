$(function() {
    $('#table').bootstrapTable({
      data: [
        {
          'name': '鄭琬玲',
          'image': 'https://robohash.org/68.186.255.198.png',
          'state': '售票',
          'content': '跟男友分手，忍痛售一張五百的票',
          'time': '2022/08/20',
        },
        {
          'name': '陳思穎',
          'image': 'https://robohash.org/18.146.255.198.png',
          'state': '售票',
          'content': '喜歡搖滾樂的看進來～',
          'time': '2022/08/20',
        },
        {
          'name': '陳莘元',
          'image': 'https://robohash.org/63.186.255.198.png',
          'state': '售票',
          'content': '與你分享的快樂勝過獨自擁有',
          'time': '2022/08/20',
        },
        {
          'name': '賴俊偉',
          'image': 'https://robohash.org/68.186.155.198.png',
          'state': '徵票',
          'content': '嘿Yo，這是頑童你知道的！',
          'time': '2022/08/20',
        },
        {
          'name': 'Mike',
          'image': 'https://robohash.org/68.186.255.198.png',
          'state': '售票',
          'content': '史上最強樂團，血肉果汁機，帶你殺翻現場',
          'time': '2022/08/20',
        },
        {
          'name': 'Tim',
          'image': 'https://robohash.org/18.146.255.198.png',
          'state': '售票',
          'content': '哎呀呀喔 愛的抱抱',
          'time': '2022/08/20',
        },
        {
          'name': 'Jorge',
          'image': 'https://robohash.org/63.186.255.198.png',
          'state': '售票',
          'content': '嘿Yo，這是頑童你知道的！',
          'time': '2022/08/20',
        },
        {
          'name': 'Luke',
          'image': 'https://robohash.org/68.186.155.198.png',
          'state': '售票',
          'content': '嘿Yo，這是頑童你知道的！',
          'time': '2022/08/20',
        },
        {
          'name': 'Mike',
          'image': 'https://robohash.org/68.186.255.198.png',
          'state': '售票',
          'content': '嘿Yo，這是頑童你知道的！',
          'time': '2022/08/20',
        },
        {
          'name': 'Tim',
          'image': 'https://robohash.org/18.146.255.198.png',
          'state': '售票',
          'content': '嘿Yo，這是頑童你知道的！',
          'time': '2022/08/20',
        },
        {
          'name': 'Jorge',
          'image': 'https://robohash.org/63.186.255.198.png',
          'state': '售票',
          'content': '嘿Yo，這是頑童你知道的！',
          'time': '2022/08/20',
        },
        {
          'name': 'Luke',
          'image': 'https://robohash.org/68.186.155.198.png',
          'state': '徵票',
          'content': '嘿Yo，這是頑童你知道的！',
          'time': '2022/08/20',
        },
        {
          'name': 'Mike',
          'image': 'https://robohash.org/68.186.255.198.png',
          'state': '售票',
          'content': '嘿Yo，這是頑童你知道的！',
          'time': '2022/08/20',
        },
        {
          'name': 'Tim',
          'image': 'https://robohash.org/18.146.255.198.png',
          'state': '徵票',
          'content': '嘿Yo，這是頑童你知道的！',
          'time': '2022/08/20',
        },
        {
          'name': 'Jorge',
          'image': 'https://robohash.org/63.186.255.198.png',
          'state': '售票',
          'content': '嘿Yo，這是頑童你知道的！',
          'time': '2022/08/20',
        },
        {
          'name': 'Luke',
          'image': 'https://robohash.org/68.186.155.198.png',
          'state': '徵票',
          'content': '嘿Yo，這是頑童你知道的！',
          'time': '2022/08/20',
        }
      ]
    })
  })

  function customViewFormatter (data) {
    var template = $('#profileTemplate').html()
    var view = ''
    $.each(data, function (i, row) {
      view += template.replace('%NAME%', row.name)
        .replace('%IMAGE%', row.image)
        .replace('%state%', row.state)
        .replace('%content%', row.content)
        .replace('%time%', row.time);
    })

    return `<div class="row mx-0">${view}</div>`
  }