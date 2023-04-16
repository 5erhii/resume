// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

// ================================================================

var header = {
  name: {
    firstname: "Ivan",
    lastname: "Ivanov",
  },
  position: "Junior Fullstack JS Developer",
  salary: "600$ в місяць",
  address: "Ukraine, Kyiv",
}

var footer = {
  sotial: {
    email: {
      text: "ivan@mail.com",
      href: "mailto:ivan@mail.com",
    },
    phone: {
      text: "+380670000123",
      href: "tel:+380670000123",
    },
    linkedin: {
      text: "LinkedIn",
      href: "https://www.linkedin.com/in/dmytro-test",
    },
  },
}

// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index', {})
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/summary', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('summary', {
    // ↙ сюди вводимо JSON дані
    page: {
      title: "Resume || Summary",
    },

    header,
    main: {
      summary: {
        title: "Summary",
        text: `Open-minded for new technologies, with 1 years of experience in development. Whenever I start to 
        work on a new project I learn the domain and try to understand the idea of the project. Good team 
        player, every colleague is a friend to me.`,
      },
      experience: {
        title: "Other experience",
        text: `Pet project for parsing sport betting data from different platforms ( odds ) and sport statistics (
          tournament position, goals etc), analyzing by simple mathematics models and preparing probability 
        for such events like: money line - first win / draw / second win, totals etc.`,
      },
    },

    footer,
  })
})


// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/skills', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('skills', {
    // ↙ сюди вводимо JSON дані
    page: {
      title: "Resume || Skills",
    },
    header,
    main: {
      skills: [
        {
          name: "HTML",
          point: 1,
          isTop: true,
        },
        {
          name: "Handlebars",
          point: 2,
          isTop: true,
        },
        {
          name: "VS Code & NPM",
          point: 3,
          isTop: false,
        },
        {
          name: "GIT & erminal",
          point: 4,
        },
        {
          name: "React.js",
          point: 0,
        },
        {
          name: "PHP",
          point: null,
        },
      ],
      hobbies: [
        { name: "Cars", isMain: false },
        { name: "Bikes", isMain: true },
        { name: "Science", isMain: false },
      ],
    },
    footer,
  })
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/education', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('education', {
    // ↙ сюди вводимо JSON дані
    page: {
      title: "Resume || Education",
    },
    header,
    main: {
      educations: [
        { name: "IT-BRAINS", isEnd: true },
        { name: "Cornell University", isEnd: false },
        { name: "New York University", isEnd: true },
        { name: "Carnegie Mellon University", isEnd: false },
      ],

      certificates: [
        { name: "IT philosophy 2023", id: 1001 },
        { name: "Guru Coder", id: 1010 },
        { name: "Clear Code Course", id: 101 },
      ],
    },
    footer,
  })
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/work', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('work', {
    // ↙ сюди вводимо JSON дані

    layout: "big",

    page: {
      title: "Resume || Work",
    },
    header,
    main: {
      works: [
        {
          position: "Junior Fullstack Developer",
          company: {
            name: "IT Brains",
            url: "https://www.it-brains.com.ua",
          },
          duration: {
            from: "01.02.2023",
            to: null,
          },
          projectAmount: 3,

          projects: [
            {
              name: "Recume",
              url: "https://recume.com.ua",
              about: "Creating recume project",
              stacksAmount: 3,
              stacks: [
                { name: "React.js" },
                { name: "HTML / CSS" },
                { name: "Node.js" },
              ],
              awardsAmount: 2,
              awards: [
                { name: "This is Award number 1" },
                { name: "This is Award number 2" },
              ],
            },
          ],
        },
        {
          position: "Junior Developer",
          company: {
            name: "IT Heads",
            url: null,
          },
          duration: {
            from: "01.01.2022",
            to: "01.02.2023",
          },
          projectAmount: 3,
          projects: [
            {
              name: "Project",
              url: "https://project.com.ua",
              about: "Creating simple project",
              stacks: [
                { name: "React.js" },
                { name: "HTML / CSS" },
                { name: "Node.js" },
              ],
              stacksAmount: 3,
              awardsAmount: 2,
              awards: [
                { name: "This is Award number 1" },
                { name: "This is Award number 2" },
              ],
            },
          ],
        },
      ],
    },
    footer,
  })
})

// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/shopnews', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('shopnews', {
    layout: 'shop',
    navigation: {
      links: [
        {
          text: 'Home',
          href: 'https://github.com/',
        },
        {
          text: 'Contacts',
          href: 'https://www.google.com/',
        },
        {
          text: 'Help',
          href: 'https://www.youtube.com/',
        },
      ],
    },

    breadcrumb: [
      { name: 'Home', url: 'https://github.com/' },
      { name: 'News', url: 'https://www.google.com/' },
      { name: 'Today', url: 'https://github.com/' },
      { name: 'About cats', url: null },
    ],

    newsData: {
      photo: 'https://picsum.photos/400/200',

      head: {
        heading: 'About cats',
        description:
          "Cats are adorable and beloved pets that have been domesticated for thousands of years. They are known for their independent and playful nature, as well as their agility and hunting skills. With their soft fur, purring, and cuddling, cats make great companions and can bring joy and relaxation to their owners. From domestic short-hairs to exotic breeds, cats come in many shapes, sizes, and colors, each with their own unique personalities. Whether they are napping in a sunny spot or chasing a toy, cats always bring a smile to their owner's faces.",
      },

      body: [
        {
          title: 'Cats have a keen sense of hearing',
          text: 'With their highly sensitive ears, cats can detect sounds that are too faint for humans to hear, including the ultrasonic calls of rodents and other small prey.',
        },
        {
          title: 'Cats are natural hunters',
          text: 'Thanks to their sharp claws, quick reflexes, and stealthy movements, cats are excellent hunters. They can catch mice, rats, birds, and other prey with ease.',
        },
        {
          title: 'Cats are independent creatures',
          text: "Cats are known for their independent nature, and unlike dogs, they don't require constant attention and affection from their owners. They are perfectly content to entertain themselves with toys and explore their surroundings on their own.",
        },
        {
          title: 'Cats have a unique way of communicating',
          text: 'From meows and purrs to chirps and trills, cats use a variety of sounds to communicate with their owners and other cats. They also use body language, such as tail movements and ear positions, to convey their moods and intentions.',
        },
        {
          title: 'Cats are good for your health',
          text: 'Studies have shown that owning a cat can have numerous health benefits, including lower stress levels, reduced risk of heart disease and stroke, and improved mental health. Plus, cats make great companions and can provide a source of comfort and emotional support.',
        },
      ],
    },

    newsOtherBlock: {
      title: 'See other news',
      cards: [
        {
          title: 'NASA Launches New Mars Rover',
          description:
            "NASA's Perseverance rover successfully launches on a mission to explore Mars, with the goal of collecting samples of the planet's surface and searching for signs of ancient microbial life.",
          isTop: false,
          idNew: true,
        },
        {
          title:
            'GameStop Shares Soar as Reddit Traders Rally',
          description:
            'Shares of GameStop surge as amateur traders on the social media platform Reddit rally to drive up the price, in what some are calling a battle between Wall Street and Main Street.',
          isTop: false,
          idNew: false,
        },
        {
          title:
            'New Study Shows Link Between Exercise and Longevity',
          description:
            'A new study published in the Journal of the American Medical Association suggests that regular exercise can help people live longer, with participants who exercised regularly having a lower risk of premature death.',
          isTop: false,
          idNew: false,
        },
        {
          title: 'Amazon Expands Grocery Delivery Service',
          description:
            'Amazon announces an expansion of its grocery delivery service, with plans to offer free delivery to Prime members on orders over $35 and to expand its selection of fresh and organic produce.',
          isTop: false,
          idNew: true,
        },
      ],
    },

    service: {
      title: 'Our Services',
      description:
        'We offer a variety of services to meet your needs, including web design, content creation, and social media management.',
      buttons: [
        {
          text: 'Show More',
          link: 'https://www.youtube.com/',
        },
      ],
    },

    footer: [
      [
        {
          text: 'Home',
          link: 'https://www.youtube.com/',
        },
        {
          text: 'Trending',
          link: 'https://www.youtube.com/feed/trending',
        },
        {
          text: 'Subscriptions',
          link: 'https://www.youtube.com/feed/subscriptions',
        },
        {
          text: 'Library',
          link: 'https://www.youtube.com/feed/library',
        },
      ],
      [
        {
          text: 'History',
          link: 'https://www.youtube.com/feed/history',
        },
        {
          text: 'Your Videos',
          link: 'https://www.youtube.com/feed/my_videos',
        },
        {
          text: 'Live',
          link: 'https://www.youtube.com/live',
        },
        {
          text: 'Settings',
          link: 'https://www.youtube.com/account',
        },
      ],
      [
        {
          text: 'Watch Later',
          link: 'https://www.youtube.com/playlist?list=WL',
        },
        {
          text: 'Liked Videos',
          link: 'https://www.youtube.com/playlist?list=LL',
        },
        {
          text: 'Music',
          link: 'https://www.youtube.com/music',
        },
        {
          text: 'Gaming',
          link: 'https://www.youtube.com/gaming',
        },
      ],
      [
        {
          text: 'Sports',
          link: 'https://www.youtube.com/channel/UCo_q6aOlvPH7M-j_XGWVgXg',
        },
        {
          text: 'News',
          link: 'https://www.youtube.com/news',
        },
        {
          text: 'Fashion & Beauty',
          link: 'https://www.youtube.com/channel/UC1x8rV_f-2yPpzlN0JWZXIQ',
        },
        {
          text: 'Learning',
          link: 'https://www.youtube.com/learning',
        },
      ],
      [
        {
          text: 'Report History',
          link: 'https://www.youtube.com/feed/history/report_history',
        },
        {
          text: 'Help',
          link: 'https://support.google.com/youtube/?hl=en',
        },
        {
          text: 'Send Feedback',
          link: 'https://support.google.com/youtube/answer/4347644?hl=en',
        },
        {
          text: 'About',
          link: 'https://www.youtube.com/about/',
        },
      ],
    ],
  })
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

// Підключаємо роутер до бек-енду
module.exports = router
// Підключаємо роутер до бек-енду
module.exports = router
