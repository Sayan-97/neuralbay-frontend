export const models = [
    {
        modelId: 'model-1',
        modelImg: 'https://cdn.sforum.vn/sforum/wp-content/uploads/2023/04/stable-diffusion-ai-4.jpg',
        modelName: 'Stable Diffusion v1-2',
        ratings: '4.5k',
        likes: '3.2k',
        shortDes: 'This AI Model Specializes in Stylizing an image to various art style as prompted by the user. This Model is super powerful and handy for your day to day high quality image needs.',

        modelPrice: {
            eth: '0.38',
            dollar: '167'
        },

        modelTags: ['Text to Image', 'Art & Design', 'StableDifusion', 'Image generator', 'Image generator', 'Art & Design'],

        modelOverview: 'Stable Diffusion is a latent text-to-image diffusion model capable of generating photo-realistic images given any text input. For more information about how Stable Diffusion functions, please have a look at Stable Diffusion blog. The Stable- Diffusion - v1 - 5 checkpoint was initialized with the weights of the Stable - Diffusion - v1 - 2 checkpoint and subsequently fine - tuned on 595k steps at resolution 512x512 on "laion-aesthetics v2 5+" and 10 % dropping of the text - conditioning to improve classifier - free guidance sampling.',
        developedBy: 'Robin Rombach, Patrick Esser',
        modelType: 'Diffusion-based text-to-image generation model',
        languages: ['English'],
        licence: 'The CreativeML OpenRAIL M license is an Open RAIL M license, adapted from the work that BigScience and the RAIL Initiative are jointly carrying in the area of responsible AI licensing. See also the article about the BLOOM Open RAIL license on which our license is based.',
        modelDesc: 'This is a model that can be used to generate and modify images based on text prompts. It is a Latent Diffusion Model that uses a fixed, pretrained text encoder (CLIP ViT-L/14) as suggested in the Imagen paper',
        moreInfo: 'openai',

        providerImg: 'https://www.edigitalagency.com.au/wp-content/uploads/chatgpt-logo-white-black-background-png-1.png',
        providerName: 'OPEN AI',
        providerVerified: true,
        providerLinks: [
            {
                img: 'https://www.freepnglogos.com/uploads/logo-website-png/logo-website-file-globe-icon-svg-wikimedia-commons-21.png',
                url: 'www.openai.com',
                link: '/'
            },
            {
                img: 'https://assets.stickpng.com/images/580b57fcd9996e24bc43c53e.png',
                url: 'openai',
                link: '/'
            },
            {
                img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png',
                url: 'openai',
                link: '/'
            },
        ],

        projectUrl: 'https://github.com/openai/stable-diffusion',
        organizationId: 'Openai',
        serviceId: 'Stable Diffusion',
        contributers: [
            {
                contributerImg: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg',
                contributerName: 'John'
            },
            {
                contributerImg: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
                contributerName: 'Anna'
            },
            {
                contributerImg: 'https://pbs.twimg.com/profile_images/1485050791488483328/UNJ05AV8_400x400.jpg',
                contributerName: 'David'
            },
        ],

        reviews: [
            {
                userImg: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
                userName: 'Kathryn Murphy',
                title: 'Great Ecosystem',
                reviewedOn: '20/10/2023',
                des: 'Lorem ipsum dolor sit amet consectetur. Elit arcu cursus elementum vitae a mi. Purus dictumst nunc mauris molestie suscipit fames. Donec fringilla hendrerit arcu mauris turpis consequat risus. Integer erat lacinia faucibus quam malesuada feugiat enim quis. Ut sed sed cursus nunc turpis ut tellus nisi aliquet. Pellentesque quam leo lacinia vitae sed dui enim vitae. Non adipiscing lorem et tempor feugiat est. Mus praesent id sit quis. Laoreet aliquam nunc a nec adipiscing fames eget vestibulum sit. Massa sed elementum justo id turpis sed eget. Nulla vitae amet lorem est tellus massa morbi gravida. Lectus dolor ullamcorper nisi convallis tellus pharetra leo eu. Nec lectus lectus convallis elit. Urna ut non nisl odio aliquam integer sit. Arcu lectus gravida ut amet pharetra enim enim pretium.'
            },
            {
                userImg: 'https://pbs.twimg.com/profile_images/1485050791488483328/UNJ05AV8_400x400.jpg',
                userName: 'Bessie Cooper',
                title: 'Great Ecosystem',
                reviewedOn: '20/10/2023',
                des: 'Lorem ipsum dolor sit amet consectetur. Elit arcu cursus elementum vitae a mi. Purus dictumst nunc mauris molestie suscipit fames.'
            },
            {
                userImg: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg',
                userName: 'Esther Howard',
                title: 'Great Ecosystem',
                reviewedOn: '20/10/2023',
                des: 'Lorem ipsum dolor sit amet consectetur. Elit arcu cursus elementum vitae a mi. Purus dictumst nunc mauris molestie suscipit fames. Donec fringilla hendrerit arcu mauris turpis consequat risus. Integer erat lacinia faucibus quam malesuada feugiat enim quis.'
            },
        ],

        category: 'Art',
    },

    {
        modelId: 'model-2',
        modelImg: 'https://miro.medium.com/v2/resize:fit:700/0*Z7kKXEqYCMIonBBU',
        modelName: 'Image Caption Generator',
        ratings: '2k',
        likes: '3k',
        shortDes: 'The Image Captioning AI model is an advanced deep learning model capable of generating captions for images. It takes an image as input and generates textual descriptions of the image.',

        modelPrice: {
            eth: '0.18',
            dollar: '107'
        },

        modelTags: ['Image Captioning', 'Computer Vision', 'Deep Learning', 'Natural Language Processing', 'AI Model'],

        modelOverview: 'The Image Captioning AI model combines computer vision and natural language processing techniques to generate captions for images. It uses a multimodal approach to understand the visual content of the image and then generates a coherent and contextually relevant caption.',
        developedBy: 'AI Company XYZ',
        modelType: 'Multimodal Image Captioning Model',
        languages: ['English'],
        licence: 'The CreativeML OpenRAIL M license is an Open RAIL M license, adapted from the work that BigScience and the RAIL Initiative are jointly carrying in the area of responsible AI licensing. See also the article about the BLOOM Open RAIL license on which our license is based.',
        modelDesc: 'The Image Captioning AI model leverages the power of computer vision and natural language processing to provide accurate and meaningful descriptions for images. It can be used in various applications such as image indexing, accessibility for visually impaired individuals, and more.',
        moreInfo: 'openai',

        providerImg: 'https://www.edigitalagency.com.au/wp-content/uploads/chatgpt-logo-white-black-background-png-1.png',
        providerName: 'OPEN AI',
        providerVerified: true,
        providerLinks: [
            {
                img: 'https://www.freepnglogos.com/uploads/logo-website-png/logo-website-file-globe-icon-svg-wikimedia-commons-21.png',
                url: 'www.openai.com',
                link: '/'
            },
            {
                img: 'https://assets.stickpng.com/images/580b57fcd9996e24bc43c53e.png',
                url: 'openai',
                link: '/'
            },
            {
                img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png',
                url: 'openai',
                link: '/'
            },
        ],

        projectUrl: 'https://github.com/openai/stable-diffusion',
        organizationId: 'Openai',
        serviceId: 'Stable Diffusion',
        contributers: [
            {
                contributerImg: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg',
                contributerName: 'John'
            },
            {
                contributerImg: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
                contributerName: 'Anna'
            },
            {
                contributerImg: 'https://pbs.twimg.com/profile_images/1485050791488483328/UNJ05AV8_400x400.jpg',
                contributerName: 'David'
            },
        ],

        reviews: [
            {
                userImg: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
                userName: 'Kathryn Murphy',
                title: 'Great Ecosystem',
                reviewedOn: '20/10/2023',
                des: 'Lorem ipsum dolor sit amet consectetur. Elit arcu cursus elementum vitae a mi. Purus dictumst nunc mauris molestie suscipit fames. Donec fringilla hendrerit arcu mauris turpis consequat risus. Integer erat lacinia faucibus quam malesuada feugiat enim quis. Ut sed sed cursus nunc turpis ut tellus nisi aliquet. Pellentesque quam leo lacinia vitae sed dui enim vitae. Non adipiscing lorem et tempor feugiat est. Mus praesent id sit quis. Laoreet aliquam nunc a nec adipiscing fames eget vestibulum sit. Massa sed elementum justo id turpis sed eget. Nulla vitae amet lorem est tellus massa morbi gravida. Lectus dolor ullamcorper nisi convallis tellus pharetra leo eu. Nec lectus lectus convallis elit. Urna ut non nisl odio aliquam integer sit. Arcu lectus gravida ut amet pharetra enim enim pretium.'
            },
            {
                userImg: 'https://pbs.twimg.com/profile_images/1485050791488483328/UNJ05AV8_400x400.jpg',
                userName: 'Bessie Cooper',
                title: 'Great Ecosystem',
                reviewedOn: '20/10/2023',
                des: 'Lorem ipsum dolor sit amet consectetur. Elit arcu cursus elementum vitae a mi. Purus dictumst nunc mauris molestie suscipit fames.'
            },
            {
                userImg: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg',
                userName: 'Esther Howard',
                title: 'Great Ecosystem',
                reviewedOn: '20/10/2023',
                des: 'Lorem ipsum dolor sit amet consectetur. Elit arcu cursus elementum vitae a mi. Purus dictumst nunc mauris molestie suscipit fames. Donec fringilla hendrerit arcu mauris turpis consequat risus. Integer erat lacinia faucibus quam malesuada feugiat enim quis.'
            },
        ],

        category: 'Art',
    },

    {
        modelId: 'model-3',
        modelImg: 'https://compote.slate.com/images/809a56ff-4b53-4165-99c4-96a8d8543e56.jpeg?crop=5104%2C3403%2Cx0%2Cy0',
        modelName: 'Chat GPT ChatBot',
        ratings: '4.2k',
        likes: '2.7k',
        shortDes: 'Chat GPT is a powerful text generation model capable of producing human-like text based on given prompts. It can be used for a wide range of applications, including chatbots and more.',

        modelPrice: {
            eth: '0.28',
            dollar: '127'
        },

        modelTags: ['Text Generation', 'Natural Language Processing', 'Chatbot', 'Creative Writing'],

        modelOverview: 'Chat GPT is based on the GPT (Generative Pre-trained Transformer) architecture and is fine-tuned on a large corpus of text data to generate coherent and contextually relevant responses to given input. It has been extensively trained on conversational data to excel in various text-based tasks.',
        developedBy: 'OpenAI',
        modelType: 'Text generation model',
        languages: ['English', 'Multiple Languages Support'],
        licence: 'The CreativeML OpenRAIL M license is an Open RAIL M license, adapted from the work that BigScience and the RAIL Initiative are jointly carrying in the area of responsible AI licensing. See also the article about the BLOOM Open RAIL license on which our license is based.',
        modelDesc: 'Chat GPT is a highly versatile text generation model capable of understanding context and producing text that aligns with the given input. It can be used for a wide range of applications, including generating conversational responses, creative writing, and much more.',
        moreInfo: 'openai',

        providerImg: 'https://www.edigitalagency.com.au/wp-content/uploads/chatgpt-logo-white-black-background-png-1.png',
        providerName: 'OPEN AI',
        providerVerified: true,
        providerLinks: [
            {
                img: 'https://www.freepnglogos.com/uploads/logo-website-png/logo-website-file-globe-icon-svg-wikimedia-commons-21.png',
                url: 'www.openai.com',
                link: '/'
            },
            {
                img: 'https://assets.stickpng.com/images/580b57fcd9996e24bc43c53e.png',
                url: 'openai',
                link: '/'
            },
            {
                img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png',
                url: 'openai',
                link: '/'
            },
        ],

        projectUrl: 'https://github.com/openai/stable-diffusion',
        organizationId: 'Openai',
        serviceId: 'Stable Diffusion',
        contributers: [
            {
                contributerImg: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg',
                contributerName: 'John'
            },
            {
                contributerImg: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
                contributerName: 'Anna'
            },
            {
                contributerImg: 'https://pbs.twimg.com/profile_images/1485050791488483328/UNJ05AV8_400x400.jpg',
                contributerName: 'David'
            },
        ],

        reviews: [
            {
                userImg: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
                userName: 'Kathryn Murphy',
                title: 'Great Ecosystem',
                reviewedOn: '20/10/2023',
                des: 'Lorem ipsum dolor sit amet consectetur. Elit arcu cursus elementum vitae a mi. Purus dictumst nunc mauris molestie suscipit fames. Donec fringilla hendrerit arcu mauris turpis consequat risus. Integer erat lacinia faucibus quam malesuada feugiat enim quis. Ut sed sed cursus nunc turpis ut tellus nisi aliquet. Pellentesque quam leo lacinia vitae sed dui enim vitae. Non adipiscing lorem et tempor feugiat est. Mus praesent id sit quis. Laoreet aliquam nunc a nec adipiscing fames eget vestibulum sit. Massa sed elementum justo id turpis sed eget. Nulla vitae amet lorem est tellus massa morbi gravida. Lectus dolor ullamcorper nisi convallis tellus pharetra leo eu. Nec lectus lectus convallis elit. Urna ut non nisl odio aliquam integer sit. Arcu lectus gravida ut amet pharetra enim enim pretium.'
            },
            {
                userImg: 'https://pbs.twimg.com/profile_images/1485050791488483328/UNJ05AV8_400x400.jpg',
                userName: 'Bessie Cooper',
                title: 'Great Ecosystem',
                reviewedOn: '20/10/2023',
                des: 'Lorem ipsum dolor sit amet consectetur. Elit arcu cursus elementum vitae a mi. Purus dictumst nunc mauris molestie suscipit fames.'
            },
            {
                userImg: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg',
                userName: 'Esther Howard',
                title: 'Great Ecosystem',
                reviewedOn: '20/10/2023',
                des: 'Lorem ipsum dolor sit amet consectetur. Elit arcu cursus elementum vitae a mi. Purus dictumst nunc mauris molestie suscipit fames. Donec fringilla hendrerit arcu mauris turpis consequat risus. Integer erat lacinia faucibus quam malesuada feugiat enim quis.'
            },
        ],

        category: 'Marketing',
    },

    {
        modelId: 'model-4',
        modelImg: 'https://community.nasscom.in/sites/default/files/styles/960_x_600/public/media/images/ai%20%281%29.png?itok=XRnnCXJT',
        modelName: 'Sentiment Analysis AI',
        ratings: '4.2k',
        likes: '2.7k',
        shortDes: 'This AI model is designed to analyze the sentiment of textual content. It can classify whether a given text expresses positive, negative, or neutral emotions to the user.',

        modelPrice: {
            eth: '0.28',
            dollar: '127'
        },

        modelTags: ['Sentiment Analysis', 'Natural Language Processing', 'Text Classification', 'Emotion Analysis'],

        modelOverview: 'The Sentiment Analysis AI model employs natural language processing techniques to classify the emotional sentiment of text. It can be utilized by businesses to understand customer opinions, assess public sentiment, and gauge responses to products and services.',
        developedBy: 'AI Company XYZ',
        modelType: 'Text Sentiment Analysis Model',
        languages: ['English', 'Multiple Languages Support'],
        licence: 'The CreativeML OpenRAIL M license is an Open RAIL M license, adapted from the work that BigScience and the RAIL Initiative are jointly carrying in the area of responsible AI licensing. See also the article about the BLOOM Open RAIL license on which our license is based.',
        modelDesc: 'The Sentiment Analysis AI model uses natural language processing to recognize the emotional tone of text. It provides valuable insights into the sentiment of users, which can be beneficial for making data-driven decisions and enhancing user experiences.',
        moreInfo: 'openai',

        providerImg: 'https://www.edigitalagency.com.au/wp-content/uploads/chatgpt-logo-white-black-background-png-1.png',
        providerName: 'OPEN AI',
        providerVerified: true,
        providerLinks: [
            {
                img: 'https://www.freepnglogos.com/uploads/logo-website-png/logo-website-file-globe-icon-svg-wikimedia-commons-21.png',
                url: 'www.openai.com',
                link: '/'
            },
            {
                img: 'https://assets.stickpng.com/images/580b57fcd9996e24bc43c53e.png',
                url: 'openai',
                link: '/'
            },
            {
                img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png',
                url: 'openai',
                link: '/'
            },
        ],

        projectUrl: 'https://github.com/openai/stable-diffusion',
        organizationId: 'Openai',
        serviceId: 'Stable Diffusion',
        contributers: [
            {
                contributerImg: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg',
                contributerName: 'John'
            },
            {
                contributerImg: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
                contributerName: 'Anna'
            },
            {
                contributerImg: 'https://pbs.twimg.com/profile_images/1485050791488483328/UNJ05AV8_400x400.jpg',
                contributerName: 'David'
            },
        ],

        reviews: [
            {
                userImg: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
                userName: 'Kathryn Murphy',
                title: 'Great Ecosystem',
                reviewedOn: '20/10/2023',
                des: 'Lorem ipsum dolor sit amet consectetur. Elit arcu cursus elementum vitae a mi. Purus dictumst nunc mauris molestie suscipit fames. Donec fringilla hendrerit arcu mauris turpis consequat risus. Integer erat lacinia faucibus quam malesuada feugiat enim quis. Ut sed sed cursus nunc turpis ut tellus nisi aliquet. Pellentesque quam leo lacinia vitae sed dui enim vitae. Non adipiscing lorem et tempor feugiat est. Mus praesent id sit quis. Laoreet aliquam nunc a nec adipiscing fames eget vestibulum sit. Massa sed elementum justo id turpis sed eget. Nulla vitae amet lorem est tellus massa morbi gravida. Lectus dolor ullamcorper nisi convallis tellus pharetra leo eu. Nec lectus lectus convallis elit. Urna ut non nisl odio aliquam integer sit. Arcu lectus gravida ut amet pharetra enim enim pretium.'
            },
            {
                userImg: 'https://pbs.twimg.com/profile_images/1485050791488483328/UNJ05AV8_400x400.jpg',
                userName: 'Bessie Cooper',
                title: 'Great Ecosystem',
                reviewedOn: '20/10/2023',
                des: 'Lorem ipsum dolor sit amet consectetur. Elit arcu cursus elementum vitae a mi. Purus dictumst nunc mauris molestie suscipit fames.'
            },
            {
                userImg: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg',
                userName: 'Esther Howard',
                title: 'Great Ecosystem',
                reviewedOn: '20/10/2023',
                des: 'Lorem ipsum dolor sit amet consectetur. Elit arcu cursus elementum vitae a mi. Purus dictumst nunc mauris molestie suscipit fames. Donec fringilla hendrerit arcu mauris turpis consequat risus. Integer erat lacinia faucibus quam malesuada feugiat enim quis.'
            },
        ],

        category: 'Machine Learning',
    },
]