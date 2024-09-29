const burger = document.querySelector('.burger')
const menu = document.querySelector('.menu')

burger.onclick = () => {
    menu.classList.toggle('open')
}


const modalBtn = document.querySelector('#modalBtn')
const modal = document.querySelector('.modal')
const closeBtn = document.querySelector('#closeBtn')

modalBtn.onclick = () => {
    modal.classList.add('open-modal')
}

closeBtn.onclick = () => {
    modal.classList.remove('open-modal')
}

modal.onclick = (e) => {
    // modal.classList.remove('open-modal')
    console.log(e.target);
    
    if(e.target.closest('.modal__box')) {
        modal.classList.remove('open-model')
    }
}

live_auctions = [
    {
        img: './img/Rectangle11.png',
        p: '01:27:46 left',
        h3: '3D Soft Curves',
        p2: 'Current Bid',
        img2: './avatar/Ellipse3.svg',
        p3: 'Esther Howard',
        b: '0.85 ETH'
    },

    {
        img: './img/Rectangle12.png',
        p: '01:27:46 left',
        h3: 'The mystery of the black',
        p2: 'Current Bid',
        img2: './avatar/Ellipse4.svg',
        p3: 'Jenny Wilson',
        b: '0.24 ETH'
    },

    {
        img: './img/Rectangle13.png',
        p: '02:02:13 left',
        h3: 'Pink Cloud 🌥',
        p2: 'Current Bid',
        img2: './avatar/Ellipse5.svg',
        p3: 'Floyd Miles',
        b: '0.3 ETH'
    },

    {
        img: './img/Rectangle14.png',
        p: '02:14:02 left',
        h3: '3D Ethereum',
        p2: 'Current Bid',
        img2: './avatar/AVA4.svg',
        p3: 'Jane Cooper',
        b: '0.12 ETH'
    }
]


const wrapper = document.querySelector('.live__wrapper')

live_auctions.forEach(card => {
    wrapper.innerHTML += `
        <div class="card">
            <div class="live__img">
                <img class="live__cardImg" src="${card.img}" alt="">
                <p>${card.p}</p>
            </div>

            <div class="live__title">
                <h3>${card.h3}</h3>
                <p class="p2">${card.p2}</p>

                <div class="live__box">
                    <div class="live__ava">
                        <img src=${card.img2} alt="">
                        <p>${card.p3}</p>
                    </div>

                    <b>${card.b}</b>
                </div>
            </div>

            
        </div>
    `
})

featured = [
    {
        img: './NFT/card1.png',
        h3: '3D Soft Curves',
        p2: 'Current Bid',
        img2: './avatar/Ellipse3.svg',
        p3: 'Esther Howard',
        b: '0.85 ETH'
    },

    {
        img: './NFT/card2.png',
        h3: '3D Soft Curves',
        p2: 'Current Bid',
        img2: './avatar/Ellipse3.svg',
        p3: 'Esther Howard',
        b: '0.85 ETH'
    },

    {
        img: './NFT/card3.png',
        h3: '3D Soft Curves',
        p2: 'Current Bid',
        img2: './avatar/Ellipse3.svg',
        p3: 'Esther Howard',
        b: '0.85 ETH'
    },

    {
        img: './NFT/card4.png',
        h3: '3D Soft Curves',
        p2: 'Current Bid',
        img2: './avatar/Ellipse3.svg',
        p3: 'Esther Howard',
        b: '0.85 ETH'
    },

    {
        img: './NFT/card5.png',
        h3: '3D Soft Curves',
        p2: 'Current Bid',
        img2: './avatar/Ellipse3.svg',
        p3: 'Esther Howard',
        b: '0.85 ETH'
    },

    {
        img: './NFT/card6.png',
        h3: '3D Soft Curves',
        p2: 'Current Bid',
        img2: './avatar/Ellipse3.svg',
        p3: 'Esther Howard',
        b: '0.85 ETH'
    },

    {
        img: './NFT/card7.png',
        h3: '3D Soft Curves',
        p2: 'Current Bid',
        img2: './avatar/Ellipse3.svg',
        p3: 'Esther Howard',
        b: '0.85 ETH'
    },

    {
        img: './NFT/card8.png',
        h3: '3D Soft Curves',
        p2: 'Current Bid',
        img2: './avatar/Ellipse3.svg',
        p3: 'Esther Howard',
        b: '0.85 ETH'
    },

    {
        img: './NFT/card9.png',
        h3: '3D Soft Curves',
        p2: 'Current Bid',
        img2: './avatar/Ellipse3.svg',
        p3: 'Esther Howard',
        b: '0.85 ETH'
    },

    {
        img: './NFT/card10.png',
        h3: '3D Soft Curves',
        p2: 'Current Bid',
        img2: './avatar/Ellipse3.svg',
        p3: 'Esther Howard',
        b: '0.85 ETH'
    },

    {
        img: './NFT/card11.png',
        h3: '3D Soft Curves',
        p2: 'Current Bid',
        img2: './avatar/Ellipse3.svg',
        p3: 'Esther Howard',
        b: '0.85 ETH'
    },
    
    {
        img: './img/Rectangle11.png',
        h3: '3D Soft Curves',
        p2: 'Current Bid',
        img2: './avatar/Ellipse3.svg',
        p3: 'Esther Howard',
        b: '0.85 ETH'
    }
]

const wrapper2 = document.querySelector('.featured__wrapper')

featured.forEach(card => {
    wrapper2.innerHTML += `
        <div class="card">
            <div class="live__img">
                <img class="live__cardImg" src="${card.img}" alt="">
            </div>

            <div class="live__title">
                <h3>${card.h3}</h3>
                <p class="p2">${card.p2}</p>

                <div class="live__box">
                    <div class="live__ava">
                        <img src=${card.img2} alt="">
                        <p>${card.p3}</p>
                    </div>

                    <b>${card.b}</b>
                </div>
            </div>

            
        </div>
    `
})


topCreators = [
    {
        img: './top/i1.png',
        img2: './avatar/AVA4.svg',
        h4: 'Tung Tran',
        img3: './icon/Vector.svg',
        p: 'Bad Artist, NFT Enthusiast, Metaverse Innovator Supporting #bitcoin since 2012.',
        h5: '3K Followers',
    },

    {
        img: './top/i2.png',
        img2: './avatar/AVA4.svg',
        h4: 'Tung Tran',
        img3: './icon/Vector.svg',
        p: 'Bad Artist, NFT Enthusiast, Metaverse Innovator Supporting #bitcoin since 2012.',
        h5: '3K Followers',
    },

    {
        img: './top/i3.png',
        img2: './avatar/AVA4.svg',
        h4: 'Tung Tran',
        img3: './icon/Vector.svg',
        p: 'Bad Artist, NFT Enthusiast, Metaverse Innovator Supporting #bitcoin since 2012.',
        h5: '3K Followers',
    },

    {
        img: './top/i4.png',
        img2: './avatar/AVA4.svg',
        h4: 'Tung Tran',
        img3: './icon/Vector.svg',
        p: 'Bad Artist, NFT Enthusiast, Metaverse Innovator Supporting #bitcoin since 2012.',
        h5: '3K Followers',
    },

    {
        img: './top/i1.png',
        img2: './avatar/AVA4.svg',
        h4: 'Tung Tran',
        img3: './icon/Vector.svg',
        p: 'Bad Artist, NFT Enthusiast, Metaverse Innovator Supporting #bitcoin since 2012.',
        h5: '3K Followers',
    },

    {
        img: './top/i2.png',
        img2: './avatar/AVA4.svg',
        h4: 'Tung Tran',
        img3: './icon/Vector.svg',
        p: 'Bad Artist, NFT Enthusiast, Metaverse Innovator Supporting #bitcoin since 2012.',
        h5: '3K Followers',
    },

    {
        img: './top/i3.png',
        img2: './avatar/AVA4.svg',
        h4: 'Tung Tran',
        img3: './icon/Vector.svg',
        p: 'Bad Artist, NFT Enthusiast, Metaverse Innovator Supporting #bitcoin since 2012.',
        h5: '3K Followers',
    },

    {
        img: './top/i4.png',
        img2: './avatar/AVA4.svg',
        h4: 'Tung Tran',
        img3: './icon/Vector.svg',
        p: 'Bad Artist, NFT Enthusiast, Metaverse Innovator Supporting #bitcoin since 2012.',
        h5: '3K Followers',
    },
]

const wrapper3 = document.querySelector('.topCreators__wrapper')

topCreators.forEach(card => {
    wrapper3.innerHTML += `
        <div class="topCreators__card">
            <img src="${card.img}" alt="">

            <div class="topCreators__card2">
                <div class="topCreators__title">
                    <img class="topCreators__img" src="${card.img2}" alt="">

                    <div class="topCreators__title2">
                
                        <div class="topCreators__title3">
                            <h4>${card.h4}</h4>
                            <img src="${card.img3}" alt="">    
                        </div>

                        <p>${card.p}</p>
                    </div>
                </div>


                <div class="topCreaters__end">
                    <h4>${card.h5}</h4>
                    <button>Follow</button>
                </div>
            </div>

            
        </div>
    `
})

document.getElementById('telegramForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const token = '7602838164:AAHVksccv2bxQVnqbbIx8SsTM6MLWHs74hM';  // Замените на ваш токен
    const chat_id = '-4552747358';  // Замените на ваш chat_id
    const url = `https://api.telegram.org/bot${token}/sendMessage`;

    // Формируем сообщение
    const message = `Name: ${name}\nPhone: ${phone}`;

    const data = {
      chat_id: chat_id,
      text: message
    };

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
      if (data.ok) {
        alert("Message sent!");
      } else {
        alert("Error sending message.");
      }
    })
    .catch(error => {
      console.error('Error:', error);
      alert("Error sending message.");
    });
  });